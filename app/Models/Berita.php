<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;

    protected $table = 'berita';

    protected $fillable = [
        'title',
        'description',
        'category',
        'id_filekey'
    ];

    public function getFile()
    {
        return $this->hasMany(File::class, 'id_filekey', 'id_filekey');
    }
}
