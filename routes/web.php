<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\User\User as UserController;
use App\Models\User;
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
    return view('welcome');
});


Route::get("/register", [AuthController::class, "registerPage"]);
Route::get("/login", [AuthController::class, "loginPage"]);
Route::post("/register", [AuthController::class, "handleRegister"]);
Route::post("/login", [AuthController::class, "handleLogin"]);

Route::get('/dashboard', function () {
    return inertia('Dashboard/Index');
});

Route::get('/data-pengguna', function () {
    $userByStatus = User::get()->groupBy('isActive');

    return inertia('Dashboard/DataPengguna', [
        'userByStatus' => $userByStatus
    ]);
});

Route::get('/atur-jadwal', function () {
    return inertia('Dashboard/AturJadwal');
});


Route::get("/users", [UserController::class, "getData"])->middleware("auth");
Route::put("/user/{id}", [UserController::class, "putUserStatus"])->middleware("auth");
Route::get("/user/{id}", [UserController::class, "getUserDetail"])->middleware("auth");
