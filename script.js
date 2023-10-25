const buttonStarttWork = document.querySelector(".btnWork");
const buttonStartBreak = document.querySelector(".btnBreak");


const showTimeWork = document.querySelector(".timerWork");
const showTimeBreak = document.querySelector(".timerBreak");

buttonStarttWork.addEventListener("click", ()=>{
    beginTimerWork();
} );



//timer for Work
const timerWork= 25;
let amountTimeWork = timerWork * 60;

function beginTimerWork(){
    //if (flagBreak){
    //    return;
    //}
    //flagWork = true;

    function count(){
        let minutes = Math.floor(amountTimeWork / 60);
        let seconds = amountTimeWork % 60;
        amountTimeWork -- ;
        showTimeWork.textContent = `${minutes} : ${seconds}`;


        if(amountTimeWork < 0){
            clearInterval(timerId);
            amountTimeWork = timerWork * 60;
            beginTimerBreak();
           // flagWork = false;
        }

        if(seconds < 10){
            seconds = "0" + seconds;
        }
        }
    let timerId = setInterval(count, 1000);
}


//timer for break

const timerBreak= 5;
let amountTimeBreak = timerBreak * 60;

function beginTimerBreak(){
    //if (flagWork){
    //    return;
    //}

    //flagBreak = true;

    function count(){
        let minutes = Math.floor(amountTimeBreak / 60);
        let seconds = amountTimeBreak % 60;
        amountTimeBreak -- ;
        showTimeBreak.textContent = `${minutes} : ${seconds}`;


        if(amountTimeBreak < 0){
            clearInterval(timerId);
            amountTimeBreak = timerBreak * 60;
            beginTimerWork();
            //flagBreak = false;
        }


        if(seconds < 10){
            seconds = "0" + seconds;
        }
        }
    let timerId = setInterval(count, 1000);
}

//reset

const buttonReload = document.querySelector(".buttonReload");
buttonReload.addEventListener("click", () =>{
    location.reload();
} )