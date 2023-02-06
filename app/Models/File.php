<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $table = 'file';

    protected $fillable = [
        'id_filekey',
        'name',
    ];

    public function getVoting()
    {
        return $this->belongsToMany(Voting::class, 'id_filekey', 'id_filekey');
    }

    public function getBerita()
    {
        return $this->belongsToMany(Berita::class, 'id_filekey', 'id_filekey');
    }

    public function getKeuangan()
    {
        return $this->belongsToMany(Keuangan::class, 'id_filekey', 'id_filekey');
    }

    public function getUser()
    {
        return $this->belongsToMany(User::class, 'id_filekey', 'id_filekey');
    }

    public function getAduan()
    {
        return $this->belongsToMany(Aduan::class, 'id_filekey', 'id_filekey');
    }
}
