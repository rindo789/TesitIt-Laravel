<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'teacher_id'
    ];

    public function teacher(){
        return $this->belongsTo('App\Models\Teacher', 'teacher_id');
    }
    public function schedules(){
        return $this->hasMany('App\Models\Schedule', 'id');
    }
    public function groups(){
        return $this->belongsToMany(Group::class, 'test_group_assigneds');
    }

}
