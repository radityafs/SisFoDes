<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keuangan extends Model
{
    use HasFactory;

    protected $table = 'keuangan';

    protected $fillable = [
        "title",
        "amount",
        "category",
        "id_filekey"
    ];

    public function getFile()
    {
        return $this->hasMany(File::class, 'id_filekey', 'id_filekey');
    }
}
