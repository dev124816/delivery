<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Auth;
use Validator;
use App\Models\Category;
use App\Http\Resources\CategoryResource;


class CategoryController extends Controller {
    public function index() {
        $categories = Category::all();

        return response()->json(CategoryResource::collection($categories));
    }

    public function show($id) {
        $category = Category::findOrFail($id);
         
        return response()->json(new CategoryResource($category));
    }
}
