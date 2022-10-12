<?php

namespace App\Http\Controllers;

use App\Models\answer;
use App\Models\Group;
use App\Models\Schedule;
use App\Models\Test;
use App\Models\Teacher;
use Illuminate\Http\Request;
use PhpParser\JsonDecoder;
use Symfony\Component\Routing\Loader\PhpFileLoader;

class TeacherController extends Controller
{
    //Show All Tests
    protected function index(){
        $all_tests = auth()->user()->teacher->tests;
        return view("teacher.home")->with("tests",$all_tests);
    }
    //show all groups
    protected function index_groups(){
        $all_groups = auth()->user()->teacher->groups;
        return view("teacher.groups")->with("groups",$all_groups);
    }
    //show group
    protected function group(Group $group){
        return view("teacher.group")->with("group",$group);
    }
    //show all started/finished test results
    protected function index_answers(){
        $all_asnwers = Schedule::select('id')->where('start', '<', now());
        return view("teacher.asnwers")->with("answers",$all_asnwers);
    }
    //create a test with empty structure
    protected function create(Request $request){
        $formFields = $request->validate([
            'name' => ['required']
        ]);
        $formFields['teacher_id'] = auth()->user()->teacher->id;
        $test = Test::create($formFields);

        $tests = json_decode(file_get_contents(public_path('tests.json')), true);
        $tests['tests'][$test->id] = ["title" => $test->name];
        file_put_contents(public_path('tests.json'), json_encode($tests));

        return redirect('/test/'.$test->id.'/edit');
    }
    //show a test editor
    protected function edit(Test $test){
        $structure = json_decode(file_get_contents(public_path('tests.json')), true);
        return view('teacher.edit', [
            'test' => $test,
            'structure' => $structure['tests'][$test->id]
        ]);
    }
}
