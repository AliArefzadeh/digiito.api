<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use const http\Client\Curl\AUTH_ANY;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::prefix('v1')->group(function () {
    Route::get('products/{product:id}',[ProductController::class,'show']);
    Route::get('products',[ProductController::class,'index']);
    Route::post('products',[ProductController::class,'store']);
    Route::post('products/{productItem}',[ProductController::class,'update']);

    Route::post('login', [AuthController::class,'Login']);
});

Route::prefix('v1/auth')->middleware('auth:sanctum')->group(function () {
    Route::get('me',[AuthController::class,'me']);
    Route::post('logout', [AuthController::class, 'logout']);
});







Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
