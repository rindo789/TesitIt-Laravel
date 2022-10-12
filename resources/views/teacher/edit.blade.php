@push('scripts')
    <script src={{URL::asset('js/test.js')}}></script>
    <script src={{URL::asset('js/AJAXcalls.js')}}></script>
@endpush
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>Test it!</title>
        <link rel="stylesheet" href={{URL::asset('css/editTestPage.css')}}>
        {{-- <link rel="stylesheet" href={{URL::asset('css/app.css')}}> --}}

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    </head>
    <body>
        <a href="/teacher">Home</a>
        <input type="hidden" id="test_num" value="{{$test->id}}"><br>
        {{-- buttons for test creation --}}
        <button id="ChooseOne" type="button">Vyber jedno</button>
        <button id="ChooseMulti" type="button">Vyber niekoľko</button>
        <button id="ChooseText" type="button">Napis odpoveď</button>
        {{-- setting button --}}
        <button id="settingButton" type="button">⚙</button>
        
        {{-- form --}}
        <form action="/test/{{$test->id}}/edit/save" method="post" id="testForm">
        @csrf
            <label for="title">Title</label>
            <input type="" name="title" value="{{$test->name}}">
            {{-- {{dd($structure['structure'])}} --}}

            @foreach ($structure['structure'] as $question)
            <fieldset id="field{{$loop->iteration}}">
                <input type="text" name="question{{$loop->iteration}}[]" value="{{$question[0]}}">
                <button type="button" class="contruct">Add option</button>
                <button type="button" class="delete">Delete Question</button>
                @foreach ($question["options"] as $option)
                    <div>
                        @if ($question['type'] == "one")
                            <input type="radio" name="question{{$loop->parent->iteration}}[selected][]" value="{{$loop->iteration}}"
                            @foreach ($question["selected"] as $number)
                                @if ($number == $loop->parent->iteration)
                                    checked
                                    @break
                                @endif
                            @endforeach
                            >
                        @elseif ($question['type'] == "text")
                            <input type="text" name="question{{$loop->parent->iteration}}[options][{{$loop->iteration}}]" value="{{$option}}">
                        @elseif ($question['type'] == "multi")
                            <input type="checkbox" name="question{{$loop->parent->iteration}}[selected][]" value="{{$loop->iteration}}"
                            @foreach ($question["selected"] as $number)
                                @if ($number == $loop->parent->iteration)
                                    checked
                                    @break
                                @endif
                            @endforeach
                            >
                            @endif
                            @if ($question['type'] != "text")
                            <input type="text" name="question{{$loop->parent->iteration}}[options][{{$loop->iteration}}]"value="{{$option}}">
                            @endif
                            <button type="button" class="delete_option">X</button>
                    </div>
                @endforeach
                <input type="hidden" value="{{$question['type']}}" name="question{{$loop->iteration}}[type]">
                
            </fieldset>
            @endforeach

            <button type="submit">Save</button>
            {{-- <x-frame :testId="$test->id"/> --}}
        </form>
        {{-- setting window --}}
        <div id="setting">
            <div id="settingSide">
                <p>Group Settings</p>
                <p>Schedule Settings</p>
            </div>

            <div id="settingGroup" class="settingBody">
                <span>Zoznam skupin</span> 
                <button type="button" id="group_button">Save group</button>
                <div id="overflow_group_select_container">
                    @foreach (auth()->user()->teacher->groups as $group)
                    <div class="group-select-item-container">
                        <input type="checkbox" name="groupCheck" value="{{$group->id}}"
                        @if ($group->tests()->firstWhere('group_id', $group->id))
                            @php
                                echo('checked');
                            @endphp
                        @endif                    
                        >
                        <p><a href="/groups/{{$group->id}}">{{$group->name}}</a> </p>
                    </div>
                    @endforeach
                </div>
                <p id="status-message-group"></p>
                
            </div>

            <div id="settingSchedule" class="settingBody">
                <p>zaciatok</p>
                <input type="date" id="start_date">
                <input type="time" id="start_time">
                <p>koniec</p>
                <input type="date" id="end_date">
                <input type="time" id="end_time">

                <button type="button" id="schedule_button">Click</button>
                <p id="status-message"></p>
            </div>
            <div id="settingClose">
                <button type="button">X</button>
            </div>
        </div>
        @stack('scripts')
    </body>
    
</html>
