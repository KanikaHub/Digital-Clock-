
// const hourEl = document.getElementById("hour");
// const minutesEl = document.getElementById("minutes");

// const secondEl = document.getElementById("second");
// const ampmEl = document.getElementById("ampm");

// function updateclock(){
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let ampm ="AM";

//     if (h >= 12) {
//          h = h - 12
//          // ampmE1.innerText = 'PM'
        
//  }
//  else{
//    // ampmE1.innerText='AM'
//  }

//     h=h<10 ?"0"+h:h;
//     m=m<10 ?"0"+m:m;
//     s=s<10 ?"0"+s:s;


//  hourEl.innerText = h;
//  minutesEl.innerText = m;
//  secondEl.innerText = s;
//  ampmEl, (innerText = ampm);


// }

// setInterval(()=>{
//    updateclock()
 
//   }, 1000)

// updateclock()



const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h >= 12) {
        h -= 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
}

setInterval(() => {
    updateClock();
}, 1000);

updateClock();

