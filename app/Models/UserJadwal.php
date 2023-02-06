<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserJadwal extends Model
{
    use HasFactory;


    protected $table = 'user_jadwal';

    protected $fillable = [
        'id_user',
        'id_jadwal',
    ];

    public function getJadwal()
    {
        return $this->belongsTo(Jadwal::class, 'id_jadwal');
    }

    public function getUser()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
