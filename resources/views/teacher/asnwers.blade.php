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
        <x-sidebar>

        </x-sidebar>
        <table>
            <thead>
                <th colspan="2">Name</th>
            </thead>
            <tbody>
                @foreach ($answers as $answer)
                <tr>
                    <td>
                        {{$answer->name}}
                    </td>
                    <td><a href="/test/{{$answer->id}}/edit">Show</a></td>
                </tr>
                @endforeach
            </tbody>
        </table>
        
    </body>
</html>
