let days = document.querySelector(".days");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

// function countdown(){
//     let d = new Date();
//     let gethours = d.getHours();
//     console.log(gethours);
//     let getdays = d.getDay();
//     console.log(getdays);
//     let getmin = d.getMinutes()
//     console.log(getmin)
//     let getsec = d.getSeconds()
//     console.log(getsec)

//     // console.log(days.innerText)
//     days.innerHTML = `${getdays}day`
//     hour.innerHTML = `${gethours}hr`
//     min.innerHTML = `${getmin}min`
//     sec.innerHTML = `${getsec}sec`
// }
// window.onload=countdown


function countdown(){
    var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
    console.log(countDownDate);
    var currentDate = new Date().getTime()
    console.log(currentDate)
    var distance = countDownDate-currentDate
    console.log(distance)
    var remdays = Math.floor(distance / (1000 * 60 * 60 * 24));
    var remhours = Math.floor((distance / (1000 * 60 * 60 * 24))*60);
    console.log(remhours)
    // var remhours= Math.floor((distance / (1000 * 60 * 60)) % 24);

    var remmin = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var remsec = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = `${remdays}day`
    hour.innerHTML = `${remhours}hr`
    min.innerHTML = `${remmin}min`
    sec.innerHTML = `${remsec}sec`
    // console.log(hours)
}
// countdown()
setInterval(countdown,1000)