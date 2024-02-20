<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\HomeController;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/products', [HomeController::class,'index']);
Route::get('/register', [AuthController::class,'index']);

Route::post('/register', [AuthController::class, 'store'])->name('newregister');



Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
