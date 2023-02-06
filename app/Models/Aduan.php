<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aduan extends Model
{
    use HasFactory;

    protected $table = 'aduan';

    protected $fillable = [
        'id_user',
        'description',
        'category',
        'id_filekey'
    ];

    public function getFile()
    {
        return $this->hasMany(File::class, 'id_filekey', 'id_filekey');
    }

    public function getUser()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
