<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;

class UserType
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @param string $type
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $type)
    {
        //Redirect the User To Login After Attemting to go to Another User Type URL
        $user = User::find(auth()->user()->id);
            if ($user->student && $type == "student"){
                return $next($request);
            }
            else if ($user->teacher && $type == "teacher"){
                return $next($request);
            }
            else if ($user->admin && $type == "admin"){
                return $next($request);
            }
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect("/");
    }
}
