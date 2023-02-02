<?php

use App\Http\Controllers\AuthController;
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
    return inertia('Welcome');
});


Route::get("/register", [AuthController::class, "registerPage"]);
Route::get("/login", [AuthController::class, "loginPage"]);
Route::post("/register", [AuthController::class, "handleRegister"]);
Route::post("/login", [AuthController::class, "handleLogin"]);

Route::get('/dashboard', function () {
    return inertia('Dashboard/Index');
});

Route::get('/data-pengguna', function () {
    return inertia('Dashboard/DataPengguna');
});
