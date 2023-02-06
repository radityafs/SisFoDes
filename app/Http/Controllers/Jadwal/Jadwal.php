<?php

namespace App\Http\Controllers\Jadwal;

use App\Http\Controllers\Controller;
use App\Models\Jadwal as ModelsJadwal;
use Illuminate\Http\Request;

class Jadwal extends Controller
{

    public function index(Request $request)
    {
        $data = ModelsJadwal::query();

        if ($request->has('query')) {
            $data->where('title', 'like', "%$request->query%");
            $data->orWhere('category', 'like', "%$request->query%");
        }

        return $data->latest()->paginate(10);
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'schedule' => 'required|datetime',
            'category' => 'required',
            'type' => 'required|in:onetime,weekly,monthly,yearly',
            'is_all_user' => 'required|boolean',
            'id_filekey' => 'required',
        ]);

        $jadwal = ModelsJadwal::create([
            'title' => $request->title,
            'description' => $request->description,
            'schedule' => $request->schedule,
            'category' => $request->category,
            'type' => $request->type,
            'is_all_user' => $request->is_all_user,
            'id_filekey' => $request->id_filekey,
        ]);


        if ($jadwal) {
            return response()->json([
                'success' => true,
                'message' => 'Jadwal Berhasil Ditambahkan',
                'data' => $jadwal
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Jadwal Gagal Ditambahkan',
                'data' => ''
            ], 400);
        }
    }
}
