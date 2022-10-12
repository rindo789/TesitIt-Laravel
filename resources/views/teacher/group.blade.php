@push('scripts')
    <script src={{URL::asset('js/groupEdit.js')}}></script>
@endpush
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <link rel="stylesheet" href={{URL::asset('css/app.css');}}>
    <title>Document</title>
</head>
<body>
    <x-sidebar>

    </x-sidebar>
    <h1>this is group {{$group->name}}</h1>
    @if (session()->has('confirm'))
        <p id="confirm">{{session('confirm')}}</p>
    @endif
    <form action="/groups/{{$group->id}}/save" method="POST">    
        @csrf   
         {{-- If there was a previous request and validation failed, generate the failed rows --}}
        @if (old('student'))
            @foreach (old('student') as $student)
                <div class="student_card">
                    <input type="text" name="student[]" value="{{$student}}" placeholder="Zadajte meno študenta">
                    {{-- If there were previous students cards, show name of the students, dont show names if new fields were added --}}
                    @if ($group->students->count() > $loop->index)
                        <p style="display: inline">{{$group->students[$loop->index]->user->name}}</p>
                    @endif
                    <button type="button">🗑</button>
                    @error('student.'.$loop->index)
                        <p style="display: inline; color:red">{{$message}}</p>
                    @enderror
                </div>
            @endforeach
        @else 
            @if ($group->students->count() == 0)
                <p>You have no students in this group</p>
            @else
                @foreach ($group->students as $student)
                    <div class="student_card">
                        <input type="text" name="student[]" value="{{$student->id}}" placeholder="Zadajte meno študenta">
                        <p style="display: inline">{{$student->user->name}}</p>
                        <button type="button">🗑</button>
                    </div>
                @endforeach
            @endif
        @endif        
        <button type="submit" id="sub_button">Odosli</button>
    </form>
    <button type="button" id="add_student">Add Student +</button>
    <form action="/groups/{{$group->id}}/delete" method="POST">
        @csrf
        <button type="submit" style="color: red">Delete Group</button>
    </form>
    @stack('scripts')
</body>
</html>