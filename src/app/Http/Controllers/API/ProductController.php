<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use App\Models\Product;
use App\Http\Resources\ProductResource;


class ProductController extends Controller {
    public function index() {
        $products = Product::with('category')->get();
 
        return response()->json(ProductResource::collection($products));
    }

    public function show($id) {
        $product = Product::with('category')->findOrFail($id);
         
        return response()->json(new ProductResource($product));
    }
}
