<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Test it!</title>
        <link rel="stylesheet" href={{URL::asset('css/app.css');}}>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    </head>
    <body>
        <form  method="POST" action="/users">
            @csrf
            <label for="name">Full Name</label>
            <input name="name" type="text" value='{{old('name')}}'>
            @error('name')
                <p>{{$message}}</p>
            @enderror
            <label for="password">Password</label>
            <input name="password" type="password">
            @error('password')
                <p>{{$message}}</p>
            @enderror
            <label for="password_confirmation">Confirm Password</label>
            <input name="password_confirmation" type="password">
            @error('password_confirmation')
                <p>{{$message}}</p>
            @enderror
            <label for="email">E-mail</label>
            <input name="email" type="email" value="{{old('email')}}">
            @error('email')
                <p>{{$message}}</p>
            @enderror
            <label for="types">User Type</label>
            <select name="types">
                <option value="1">Student</option>
                <option value="2">Teacher</option>
                <option value="3">Admin</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        
    </body>
</html>
