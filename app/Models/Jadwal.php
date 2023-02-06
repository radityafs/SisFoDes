<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;

    protected $table = 'jadwal';

    protected $fillable = [
        'title',
        'description',
        'schedule',
        'category',
        'type',
        'is_all_user',
        'id_filekey'
    ];

    public function getDetail()
    {
        return $this->hasMany(UserJadwal::class, 'id_jadwal');
    }

    public function getFile()
    {
        return $this->hasMany(File::class, 'id_filekey', 'id_filekey');
    }
}
