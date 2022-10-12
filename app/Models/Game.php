<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    public function tests(){
        return $this->belongsTo('App\Models\Test','test_id');
    }
    public function schedule(){
        return $this->belongsTo('App\Models\Schedule','schedule_id');
    }
    public function students(){
        return $this->belongsTo('App\Models\Student','student_id');
    }
}
