<?php

namespace App\Models;

use App\Models\GroupAssigned;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Group extends Model
{
    use HasFactory;

    public function teacher(){
        return $this->belongsTo('App\Models\Teacher','teacher_id');
    }

    public function students(){
        return $this->belongsToMany(Student::class, 'group_assigneds');
    }

    public function tests(){
        return $this->belongsToMany(Test::class, 'test_group_assigneds');
    }
}
