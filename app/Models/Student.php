<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    
    protected $fillable = [
        "user_id"
    ];

    public function user(){
        return $this->belongsTo('App\Models\User','user_id');
    }
    public function answers(){
        return $this->hasMany('App\Models\answer','id');
    }
    public function games(){
        return $this->hasMany('App\Models\Game','id');
    }
    public function groups(){
        return $this->belongsToMany(Group::class, 'group_assigneds');
    }
}
