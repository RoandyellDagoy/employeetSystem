<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeContoller;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/show',[EmployeeContoller::class, 'index']);
Route::post('/am',[EmployeeContoller::class, 'store']);
Route::delete('/remove/{id}',[EmployeeContoller::class, 'delete']);