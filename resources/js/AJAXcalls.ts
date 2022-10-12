var test_id = <HTMLInputElement>document.querySelector('#test_num')


function schedule() {
    var formData = new FormData();
    var x = <HTMLInputElement>document.getElementById("start_date")
    formData.append('start_date', x.value)
    x = <HTMLInputElement>document.getElementById("start_time")
    formData.append('start_time', x.value)
    x = <HTMLInputElement>document.getElementById("end_date")
    formData.append('end_date', x.value)
    x = <HTMLInputElement>document.getElementById("end_time")
    formData.append('end_time', x.value)
    
    fetch(`/test/${test_id.value}/schedule`,{
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
        },
        body: formData,
    }).then(
        (response) => {            
            if (response.status == 200) {
                var statusFlash = <HTMLParagraphElement>document.getElementById("status-message")
                statusFlash.style.color = "green";
                statusFlash.innerText = "Test has been succesfully scheduled"

                setTimeout(function(){
                    statusFlash.innerHTML = "";
                }, 4000)
            } else {
                var statusFlash = <HTMLParagraphElement>document.getElementById("status-message")
                statusFlash.style.color = "red";
                statusFlash.innerText = "There was an error in test scheduling!"

                setTimeout(function(){
                    statusFlash.innerHTML = "";
                }, 4000)
            }
        }
    )    
}

var button = document.getElementById('schedule_button')
button?.addEventListener("click", function(){
    schedule();
});

var groupClicks = <NodeListOf<HTMLInputElement>>document.querySelectorAll('#settingGroup input[type="checkbox"]')
var groupButton = <HTMLButtonElement>document.getElementById('group_button')

groupButton.addEventListener('click', function(){
    var idTray = []
    for (const box of groupClicks) {
        if (box.checked == true){
            idTray.push(box.value)
        }
    }
    var jsonification = JSON.stringify(idTray)
    
    fetch(`/test/${test_id.value}/groups`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
        },
        body: jsonification,
    }).then(
        (response) => {            
            if (response.status == 200) {
                var statusFlash = <HTMLParagraphElement>document.getElementById("status-message-group")
                statusFlash.style.color = "green";
                statusFlash.innerText = "Success!"

                setTimeout(function(){
                    statusFlash.innerHTML = "";
                }, 4000)
            } else {
                var statusFlash = <HTMLParagraphElement>document.getElementById("status-message-group")
                statusFlash.style.color = "red";
                statusFlash.innerText = "Failed!"

                setTimeout(function(){
                    statusFlash.innerHTML = "";
                }, 4000)
            }
        }
    )
})

