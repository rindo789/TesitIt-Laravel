var settingButton = <HTMLButtonElement> document.getElementById("settingButton")
settingButton.addEventListener("click", function(){
    var settingTab = <HTMLDivElement>document.getElementById("setting");
    settingTab.style.display = "flex"; 
})

var close_button = <HTMLButtonElement>document.querySelector("#settingClose button");
close_button.addEventListener("click", function(){
    var settingTab = <HTMLDivElement>document.getElementById("setting");
    settingTab.style.display = "none"; 
})

var settingSide = <HTMLDivElement>document.getElementById("settingSide");
var settingGroup = <HTMLDivElement>document.getElementById("settingGroup");
var settingSchedule = <HTMLDivElement>document.getElementById("settingSchedule");
var children = settingSide?.children;
children[0].addEventListener("click", function(){
    settingGroup.style.display = "block";
    settingSchedule.style.display = "none";
})
children[1].addEventListener("click", function(){
    settingGroup.style.display = "none";
    settingSchedule.style.display = "block";
})

var test_num = <HTMLInputElement>document.getElementById("test_num");
var json = fetch("../../tests.json")
    .then(response => {return response.json()})
    .then(json => {
        //console.log(json["tests"][test_num.value]);
        //start(json["tests"][test_num.value]);
        start_two();
    });

var form = document.getElementById("testForm");

var questionCount = 0;

var chooseOne = document.getElementById("ChooseOne")
chooseOne?.addEventListener("click", function() {
    new_question("one");
})
var chooseMulti = document.getElementById("ChooseMulti")
chooseMulti?.addEventListener("click", function() {
    new_question("multi");
})
var chooseText = document.getElementById("ChooseText")
chooseText?.addEventListener("click", function() {
    new_question("text");
})

function new_question(type: string){

    questionCount++;
    var field = document.createElement("fieldset");
    var title = document.createElement("input");
    var addOption = document.createElement("button");
    var deleteQ = document.createElement("button");
    var optionCountPlaceholder = document.createElement("input")
    var questionCountPlaceholder = document.createElement("input")
    var typeQ = document.createElement("input")
    
    var numQ  = questionCount;

    typeQ.type = "hidden"
    typeQ.value = type;
    typeQ.name = `question${numQ}[type]`;

    field.id = "field"+questionCount;
    title.name = "question"+questionCount+"[]";

    optionCountPlaceholder.type = "hidden"
    title.type = "text"
    addOption.type = "button"
    deleteQ.type = "button"

    deleteQ.innerText = "Delete Question";
    addOption.innerText = "Add option";

    var x = 0;
    optionCountPlaceholder.value = x.toString();
    
    deleteQ.addEventListener("click", function(){        
        deleteQ.parentElement?.remove();
    })

    addOption.addEventListener("click", function(){
        var container = document.createElement("div");
        var input = document.createElement("input");
        var option = document.createElement("input");
        var deleteO = document.createElement("button");
        
        optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value)+1).toString();

        if (type == "one"){
            input.type = "radio";
        }else if (type == "multi"){
            input.type = "checkbox";
        } else {
            input.type = "text";
        }

        option.type == "text";
        deleteO.type = "button"

        input.name = `question${numQ}[selected][]`;
        input.value = optionCountPlaceholder.value;

        option.name = `question${numQ}[options][${optionCountPlaceholder.value}]`;

        deleteO.innerText = "X";
        deleteO.addEventListener("click", function(){
            deleteO.parentElement?.remove();
        })

        var placehere = addOption.parentElement;
        if (type != "text") container?.insertAdjacentElement("beforeend",input)
        container?.insertAdjacentElement("beforeend",option)
        container?.insertAdjacentElement("beforeend",deleteO)
        placehere?.insertAdjacentElement("beforeend", container)
    })
    
    form?.insertAdjacentElement("beforeend", field);
    field.insertAdjacentElement("beforeend", title)
    field.insertAdjacentElement("beforeend", addOption)
    field.insertAdjacentElement("beforeend", deleteQ)
    field.insertAdjacentElement("beforeend", optionCountPlaceholder)
    field.insertAdjacentElement("beforeend", typeQ)

}

function start_two() {
    var addOption_array = document.getElementsByClassName("construct")
    var deleteQ_array = document.getElementsByClassName("delete")
    var deleteO_array = document.getElementsByClassName("delete_option");
    

    for (const option of deleteO_array) {
        option.addEventListener("click", function(){
            var myParent = option.parentElement
            myParent?.remove();
        })
    }
    for (const question of deleteQ_array) {
        question.addEventListener("click", function(){
            var myParent = question.parentElement
            myParent?.remove();
        })
    }
    for (const option of addOption_array) {
        var type = document.getElementsByName()
        option.addEventListener("click", function(){
            var myParent = option.parentElement
            myParent?.remove();
        })
    }

    addOption.addEventListener("click", function(){
        var container = document.createElement("div");
        var input = document.createElement("input");
        var option = document.createElement("input");
        var deleteO = document.createElement("button");
        
        optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value)+1).toString();

        if (type == "one"){
            input.type = "radio";
        }else if (type == "multi"){
            input.type = "checkbox";
        } else {
            input.type = "text";
        }

        option.type == "text";
        deleteO.type = "button"

        input.name = `question${numQ}[selected][]`;
        input.value = optionCountPlaceholder.value;

        option.name = `question${numQ}[options][${optionCountPlaceholder.value}]`;

        deleteO.innerText = "X";
        deleteO.addEventListener("click", function(){
            var myParent = deleteO.parentElement;
            myParent?.remove();
        })

        var placehere = addOption.parentElement;
        if (type != "text") container?.insertAdjacentElement("beforeend",input)
        container?.insertAdjacentElement("beforeend",option)
        container?.insertAdjacentElement("beforeend",deleteO)
        placehere?.insertAdjacentElement("beforeend", container)
    })
}

function start(json: any) {
    for (const key in json["structure"]) {
        
        questionCount++;
    var field = document.createElement("fieldset");
    var title = document.createElement("input");
    var addOption = document.createElement("button");
    var deleteQ = document.createElement("button");
    var optionCountPlaceholder = document.createElement("input")
    var typeQ = document.createElement("input")
    
    var numQ  = questionCount;

    var type = json["structure"][key]["type"]

    typeQ.type = "hidden"
    typeQ.value = type;
    typeQ.name = `question${numQ}[type]`;

    field.id = "field"+questionCount;
    title.name = "question"+questionCount+"[]";

    optionCountPlaceholder.type = "hidden"
    title.type = "text"
    addOption.type = "button"
    deleteQ.type = "button"

    title.value = json["structure"][key][0];

    deleteQ.innerText = "Delete Question";
    addOption.innerText = "Add option";

    var x = 0;
    optionCountPlaceholder.value = x.toString();
    
    deleteQ.addEventListener("click", function(){        
        deleteQ.parentElement?.remove();
    })

    addOption.addEventListener("click", function(){
        var container = document.createElement("div");
        var input = document.createElement("input");
        var option = document.createElement("input");
        var deleteO = document.createElement("button");
        
        optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value)+1).toString();

        if (type == "one"){
            input.type = "radio";
        }else if (type == "multi"){
            input.type = "checkbox";
        } else {
            input.type = "text";
        }

        option.type == "text";
        deleteO.type = "button"

        input.name = `question${numQ}[selected][]"`;
        input.value = optionCountPlaceholder.value;

        option.name = `question${numQ}[options][${optionCountPlaceholder.value}]`;

        deleteO.innerText = "X";
        deleteO.addEventListener("click", function(){
            deleteO.parentElement?.remove();
        })

        var placehere = addOption.parentElement;
        if (type != "text") container?.insertAdjacentElement("beforeend",input)
        container?.insertAdjacentElement("beforeend",option)
        container?.insertAdjacentElement("beforeend",deleteO)
        placehere?.insertAdjacentElement("beforeend", container)
    })

    
    form?.insertAdjacentElement("beforeend", field);
    field.insertAdjacentElement("beforeend", title)
    field.insertAdjacentElement("beforeend", addOption)
    field.insertAdjacentElement("beforeend", deleteQ)
    field.insertAdjacentElement("beforeend", optionCountPlaceholder)
    field.insertAdjacentElement("beforeend", typeQ)
    
    for (const [name, item] of Object.entries(json["structure"][key]["options"])) {
        var container = document.createElement("div");
        var input = document.createElement("input");
        var option = document.createElement("input");
        var deleteO = document.createElement("button");
        
        optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value)+1).toString();
    
        if (type == "one"){
            input.type = "radio";
        }else if (type == "multi"){
            input.type = "checkbox";
        } else {
            input.type = "text";
        }
    
        option.type == "text";
        deleteO.type = "button"
    
        input.name = `question${numQ}[selected][]`;
        input.value = name;
    
        try {
            for (const [index, selected] of Object.entries(json["structure"][key]["selected"])) {
                
                if (selected == name) {
                    input.checked = true;
                    break;
                }
            }
            
        } catch (error) {
            
        }
    
        option.name = `question${numQ}[options][${optionCountPlaceholder.value}]`;
        option.value = <string> item;
    
        deleteO.innerText = "X";
        deleteO.addEventListener("click", function(){
            deleteO.parentElement?.remove();
        })
    
        var placehere = addOption.parentElement;
        if (type != "text") container?.insertAdjacentElement("beforeend",input)
        container?.insertAdjacentElement("beforeend",option)
        container?.insertAdjacentElement("beforeend",deleteO)
        placehere?.insertAdjacentElement("beforeend", container)
    }
}
}