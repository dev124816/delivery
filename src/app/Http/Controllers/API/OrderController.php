<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use App\Models\Order;
use App\Models\Address;
use App\Models\OrderProducts;
use App\Http\Resources\OrderResource;


class OrderController extends Controller {
    public function index() {
        $orders = Order::with(['user', 'address', 'products'])->where('user_id', auth()->user()->id)->get();

        return response()->json(OrderResource::collection($orders));
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:30',
            'last_name' => 'required|string|max:30',
            'address' => 'required|string',
            'zip_code' => 'required|string|max:20',
            'city' => 'required|string|max:50',
            'cart' => 'required|array'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $address = Address::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'address' => $request->address,
            'zip_code' => $request->zip_code,
            'city' => $request->city
        ]);

        $order = Order::create([
            'user_id' => auth()->user()->id,
            'address_id' => $address->id
        ]);

        foreach ($request->cart as $item) {
            OrderProducts::create([
                'order_id' => $order->id,
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity']
            ]);
        }

        return response()->json(new OrderResource($order));
    } 

    public function destroy($id) {
        if (auth()->user()->role != 'admin') {
            return response()->json('Unauthorized', 401);
        }

        $order = Order::findOrFail($id);

        $order->delete();

        return response()->json('Order deleted successfully');
    }
}
