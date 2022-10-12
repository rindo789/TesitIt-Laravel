<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id"
    ];

    public function user(){
        return $this->belongsTo('App\Models\User','user_id');
    }
    public function tests(){
        return $this->hasMany('App\Models\Test','teacher_id');
    }
    public function groups(){
        return $this->hasMany('App\Models\Group','teacher_id');
    }
}
