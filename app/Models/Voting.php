<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voting extends Model
{
    use HasFactory;

    protected $table = 'voting';

    protected $fillable = [
        'title',
        'description',
        'end_date',
        'id_filekey'
    ];

    public function getFile()
    {
        return $this->hasMany(File::class, 'id_filekey', 'id_filekey');
    }

    public function getDetail()
    {
        return $this->hasMany(UserVoting::class, 'id_voting');
    }
}
