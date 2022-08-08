<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;
use Validator;
use App\Models\User;

class UserController extends Controller {
    public function signup(Request $request) { 
        $validator = Validator::make($request->all(), [
            'phone' => 'required|string|max:15|unique:users',
            'password' => 'required|confirmed|string|min:8|max:16'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user = User::create([
            'phone' => $request->phone,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User created successfully',
            'token' => $token,
        ]);
    }

    public function login(Request $request) {
        $user = User::where('phone', $request->phone)->firstOrFail();

        if (!Auth::attempt($request->only('phone', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Authenticated', 
            'token' => $token
        ]);
    }

    public function logout() {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Disconnected']);
    }

    public function profile(Request $request) {
        return response()->json(auth()->user());
    }
  
    public function update_phone(Request $request) { 
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|min:8|max:16',
            'new_phone' => 'required|string|max:15|unique:users'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        if (!(Hash::check($request->password, auth()->user()->password))) {
            return response()->json('Unauthorized', 401);
        }

        auth()->user()->phone = $request->new_phone;

        auth()->user()->save();

        return response()->json([
            'message' => 'User phone updated successfully',
            'new_phone' => $request->new_phone
        ]);
    }

    public function update_password(Request $request) { 
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|min:8|max:16',
            'new_password' => 'required|string|min:8|max:16',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        if (!(Hash::check($request->password, auth()->user()->password))) {
            return response()->json('Unauthorized', 401);
        }

        auth()->user()->password = Hash::make($request->new_password);

        auth()->user()->save();

        auth()->user()->tokens()->delete();

        $new_token = auth()->user()->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User password updated successfully',
            'new_token' => $new_token
        ]);
    }
}
