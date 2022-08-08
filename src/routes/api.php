<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\OrderController;


Route::post('/signup', [UserController::class, 'signup']);

Route::post('/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->post('/logout', [UserController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/profile', [UserController::class, 'profile']);

Route::middleware('auth:sanctum')->put('/update_phone', [UserController::class, 'update_phone']);

Route::middleware('auth:sanctum')->put('/update_password', [UserController::class, 'update_password']);

Route::middleware('auth:sanctum')->resource('categories', CategoryController::class);

Route::middleware('auth:sanctum')->resource('products', ProductController::class);

Route::middleware('auth:sanctum')->resource('orders', OrderController::class);
