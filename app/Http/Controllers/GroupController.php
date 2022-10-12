<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\GroupAssigned;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class GroupController extends Controller
{
    public function save(Request $request, Group $group){
        $validation = $request->validate([
            'student.*'=> ['required','distinct','numeric', 'exists:App\Models\Student,id'],
        ],[
            'numeric' => 'Input must be a number',
            'required' => 'Field must not be empty',
            'distinct' => 'The is a duplicate input',
            'exists' => 'This student doesnt exist'
        ]);
        $deleted = GroupAssigned::where('group_id', '=',$group->id)->delete();
        foreach ($validation["student"] as $index => $value) {
            GroupAssigned::create([
                'created_at' => now(),
                'updated_at' => now(),
                'student_id' => $value,
                'group_id' => $group->id
            ]);
        }
        return redirect("groups/".$group->id)->with("confirm", "The group have been saved");
    }

    public function delete(Request $request, Group $group)
    {
        GroupAssigned::where('group_id', '=',$group->id)->delete();
        Group::where('id', '=',$group->id)->delete();
        return redirect("groups");
    }
}
