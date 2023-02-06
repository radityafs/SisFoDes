<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function registerPage()
    {
        return inertia("Auth/Register");
    }

    public function loginPage()
    {
        return inertia("Auth/Login");
    }


    public function handleRegister(Request $request)
    {
        $request->validate([
            "name" => "required|string|min:3|max:128",
            "email" => "required|email|unique:users,email",
            "phone" => "required|string|min:10|max:13",
            "password" => "required|min:6"
        ]);

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "password" => Hash::make($request->password),
        ]);

        Auth::login($user);

        return redirect('/dashboard');
    }

    public function handleLogin(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        $credentials = $request->only("email", "password");

        if (Auth::attempt($credentials)) {
            return redirect('/dashboard');
        }

        return redirect()->back()->withErrors([
            "message" => "Email atau password salah"
        ]);
    }
}
