<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use function Symfony\Component\String\b;

class StudentController extends Controller
{
    public function index(){
        return view('student.home');
    }
}
