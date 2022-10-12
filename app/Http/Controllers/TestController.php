<?php

namespace App\Http\Controllers;

use App\Models\Test;
use App\Models\Schedule;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Models\TestGroupAssigned;

use function PHPUnit\Framework\isEmpty;

class TestController extends Controller
{
    //Save currently edited test
    public function save(Request $request, Test $test){

        $test->name = $request->title;
        $test->save();

        $tests = json_decode(file_get_contents(public_path("tests.json")),true );
        $tests["tests"][$test->id] = null;
        $tests["tests"][$test->id]["title"] = $request->title;
        foreach ($request->request as $key => $value) {
            if (preg_match("/question\d/", (string) $key)){
                $tests["tests"][$test->id]["structure"][$key] = $value;
            }
        }
        file_put_contents(public_path('tests.json'), json_encode($tests));

        return back();
    }

    //Schedule this test
    public function schedule(Request $request, Test $test){
        try {
            Schedule::create([
                'test_id' => $test->id,
                'start_time' =>  $request->input("start_time").':00',
                'end_time' => $request->input('end_time').':00',
                'start_date' => $request->input('start_date'),
                'end_date' => $request->input('end_date'),
                'type' => 'normal',
                'created_at' => now(),
                'updated_at' => now()
            ]);
        } catch (\Throwable $th) {
            return response();
        }
        return response("ITS OK!",200);
    }

    //Assign groups to a test
     public function groups(Request $request, Test $test){
        $inDBArr = TestGroupAssigned::select('group_id')->where('test_id', '=', $test->id )->get()->toArray();
        $compareArr = $request->all();
        $inDBArr = Arr::flatten($inDBArr);
        $inDBArr = implode(" ", $inDBArr);
        $inDBArr = explode(" ",$inDBArr);

        $arrDiffDelete = null;
        $arrDiffInsert = null;

        //Check the diffences between the Group ID arrays to determine which Groups to insert and which to delete
        if (!empty($inDBArr)){
            $arrDiffDelete = array_diff($inDBArr, $compareArr);
            $arrDiffInsert = array_diff($compareArr, $inDBArr);
        } else {
            $arrDiffInsert = $compareArr;
        }

        if (!empty($arrDiffDelete)){
            TestGroupAssigned::whereIn('group_id', $arrDiffDelete)->delete();
        }

        foreach ($arrDiffInsert as $groupID) {
            try {
                TestGroupAssigned::create([
                    'group_id' => $groupID,
                    'test_id' => $test->id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            } catch (\Throwable $th) {
                return response("There was an error assigning groups", 455);
            }
        }
        return response("ITS OK!", 200);
    }
}
