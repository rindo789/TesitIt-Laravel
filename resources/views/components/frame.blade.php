<div>
    <p>Its me {{$test["title"]}}</p>

    {{-- @php
        print_r($test["structure"]);
    @endphp --}}

    @foreach ($test["structure"] as $key => $question)
        <fieldset name="fieldset{{$loop->iteration}}">
           <input type="text" name="{{$key}}[]" value={{$question[0]}}> 
           <button type="button">pridaj možnosť</button>
           <button type="button">Vymaz otázku</button>
        
            @foreach ($question["options"] as $number => $option)
            {{-- <p>{{$option}}</p> --}}
                <input type={{$question['type']}} name={{$key}} value={{$option}}>
                
            @endforeach

        </fieldset>
    @endforeach
</div>