<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
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
})->name('home.index');

Route::get('/products', [HomeController::class,'index']);

Route::get('/registerform', [AuthController::class,'index'])->name('register');

Route::get('/login', [AuthController::class,'login'])->name('login');
Route::post('/login',[AuthController::class,'auth'])->name('Auth');


Route::post('/register', [AuthController::class, 'store'])->name('newregister');

Route::post('/logout',[AuthController::class,'logout'])->name('logout');         

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/checkout', [PaymentController::class,'index'])->name('checkout');
Route::post('/session', [PaymentController::class,'checkout']);
Route::get('/success', [PaymentController::class,'success'])->name('success'); 


Route::get('/view/products', function () {
    return view('products');
})->name('products.index');
