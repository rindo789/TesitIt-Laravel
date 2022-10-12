<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupAssigned extends Model
{
    use HasFactory;
    protected $fillable = [
        "student_id",
        "group_id",
        "created_at",
        "updated_at"
    ];
}
