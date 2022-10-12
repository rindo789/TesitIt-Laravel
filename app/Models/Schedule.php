<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    public function tests(){
        return $this->belongsToMany('App\Models\Test','test_id');
    }

    protected $fillable = [
        "test_id",
        "start",
        "stop",
        "type",
        "created_at",
        "updated_at"
    ];
}
