<?php

namespace App\Http\Middleware;

use App\Models\Test;
use Closure;
use Illuminate\Http\Request;

class TestOwn
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->test->teacher_id == auth()->user()->teacher->id){
            return $next($request);
        } else return redirect('teacher');
    }
}
