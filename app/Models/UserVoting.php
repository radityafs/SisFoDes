<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserVoting extends Model
{
    use HasFactory;

    protected $table = 'user_voting';

    protected $fillable = [
        'id_user',
        'id_voting',
        'id_approve',
        'description',
    ];


    public function getVoting()
    {
        return $this->belongsTo(Voting::class, 'id_voting');
    }

    public function getUser()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
