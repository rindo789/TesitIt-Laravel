<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestGroupAssigned extends Model
{
    use HasFactory;

    protected $fillable = [
        "group_id",
        "test_id",
        "created_at",
        "updated_at"
    ];
}
