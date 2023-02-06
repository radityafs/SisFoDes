<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User as ModelsUser;
use Illuminate\Http\Request;

class User extends Controller
{
    public function index()
    {
    }

    public function getData(Request $request)
    {
        $search = $request->query('query');
        $users = ModelsUser::query();

        $users->where('role', 0);

        if ($search) {
            $users->orWhere('name', 'like', "%$search%");
            $users->orWhere('email', 'like', "%$search%");
            $users->orWhere('phone', 'like', "%$search%");
        }

        return $users->latest()->paginate(10);
    }

    public function putUserStatus($id)
    {
        $user = ModelsUser::find($id);
        $user->isActive = $user->isActive == 1 ? 0 : 1;
        $user->save();
    }

    public function getUserDetail($id)
    {
        return ModelsUser::find($id);
    }
}
