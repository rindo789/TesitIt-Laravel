<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Auth\User as AuthUser;

class UserController extends Controller
{
    //Show Register Form
    public function create(){
        return view("users.register");
    }

    //Store/Register New User
    public function store(Request $request){
        $formFields = $request->validate([
            "name" => ["required", "min:3"],
            "password" => ["required", "confirmed", "min:6"],
            "email" => ["required", "email", Rule::unique('users','email')]
        ]);

        $formFields["password"] = bcrypt($formFields["password"]);
        $user = User::create($formFields);

    //Create a Type of User Depending on What User Chose
        if ($request["types"]=="1"){
            Student::create(["user_id" => $user->id]);
        } else if ($request["types"]=="2"){
            Teacher::create(["user_id" => $user->id]);
        } else if ($request["types"]=="3"){
            Admin::create(["user_id" => $user->id]);
        }

        return redirect("/");
    } 

    //Show Login Form
    public function login(){
        return view("users.login");
    }

    //Login User
    public function authenticate(Request $request){
        
        $formFields = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);

        if(auth()->attempt($formFields)) {
            $request->session()->regenerate();
            //Redirect the user to the Correct Route After Login
            
            $user = User::find(auth()->user()->id);
            
            if ($user->student){
                return redirect('/student');
            }
            else if ($user->teacher){
                return redirect('/teacher');
            }
            else if ($user->admin){
                return redirect('/admin');
            } else {
                return redirect("/");
            }
        }

        return back()->withErrors(['email' => 'Invalid Credentials'])->onlyInput('email');
    }
// Logout User
public function logout(Request $request) {
    auth()->logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/');
}
}
