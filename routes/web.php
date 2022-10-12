<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use App\Models\Teacher;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Login Form
Route::get('/', [UserController::class, "login"])->name('login');
//Register Form
Route::get('/register', [UserController::class, 'create']);
// Log User Out
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth');
//Login User
Route::post('/users/authenticate', [UserController::class, 'authenticate']);

//Home for Teacher
Route::get('/teacher', [TeacherController::class, 'index'])->middleware(['auth','type:teacher']);

//Groups Table
Route::get('/groups', [TeacherController::class, 'index_groups'])->middleware(['auth','type:teacher']);
//Specific group
Route::get('/groups/{group}', [TeacherController::class, 'group'])->middleware(['auth','type:teacher']);
//Save Group
Route::post('/groups/{group}/save', [GroupController::class, 'save'])->middleware(['auth','type:teacher']);
//Delete Group
Route::post('/groups/{group}/delete', [GroupController::class, 'delete'])->middleware(['auth','type:teacher']);
//AJAX for group selection
Route::post('/test/{test}/groups',[TestController::class, 'groups'])->middleware(['auth','type:teacher']);

//Answer Table
Route::get('/answers', [TeacherController::class, 'index_answers'])->middleware(['auth','type:teacher']);

//Schedules

//AJAX for schedule test
Route::post('/test/{test}/schedule',[TestController::class, 'schedule'])->middleware(['auth','type:teacher']);

//Create a New Test
Route::post('test/create', [TeacherController::class, 'create'])->middleware(['auth','type:teacher']);
//Edit Test
Route::get('/test/{test}/edit', [TeacherController::class, 'edit'])->middleware(['auth','type:teacher','test']);
//Save Test
Route::post('/test/{test}/edit/save', [TestController::class, 'save'])->middleware(['auth','type:teacher']);

//Store Register User
Route::post('/users', [UserController::class, 'store']);
//Home For Admin
Route::get('/admin', [AdminController::class, 'index'])->middleware(['auth','type:admin']);
//Home For Student
Route::get('/student', [StudentController::class, 'index'])->middleware(['auth','type:student']);