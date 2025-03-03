
    // For Date
    const mount = ["Jan","Feb", "Mar","Apr","May","Jun", "Jul","Aug","Sep", "Oct","Nov", "Dec"];
    const days = ["Sun","Mon","Tues","Wed","Thus","Fri","Sat"];
    let date = new Date();
    document.getElementById("date").innerHTML = `${date.getDay()} ${mount[date.getMonth()]} ${date.getFullYear()}`;
    document.getElementById("day").innerHTML = `${days[date.getDay()]}`;



    // Task Number
    let taskNumber = 6;
    document.getElementById("task_number").innerHTML = taskNumber;
    let btns = document.getElementsByClassName("completed");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            this.disabled = true;
            this.style.opacity = "20%";
            taskNumber--;
            document.getElementById("task_number").innerHTML = taskNumber;
        });
    }

    
    // Clear history button
    let clearbutton = document.getElementById("clearhistory");
    if (clearbutton) {
        clearbutton.addEventListener("click", function() {
            taskNumber = 0;
            document.getElementById("task_number").innerHTML = taskNumber;
            for (let i = 0; i < btns.length; i++) {
                btns[i].disabled = false;
                btns[i].style.opacity = "100%";
            }
        });
    }
    
    
    
let color = document.getElementById("bg_change");
color.addEventListener("click",function(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
})