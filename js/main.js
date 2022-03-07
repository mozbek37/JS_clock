let clock = document.querySelector(".clock");
let myName1 = document.querySelector(".text1");

let myName = prompt("Adınız Nedir?");

    if (myName.length === 0){
        myName1.innerHTML = `Merhaba, Dünyalı! Hoş geldin!`;
    }
    else{
        myName1.innerHTML = `Merhaba, ${myName}! Hoş geldin!`;
    };
    

const weekday = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar",];

function showTime() 
{
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let day = weekday[date.getDay()]

    hour = hour<10 ? "0"+hour :hour
    minute = minute<10 ? "0"+minute :minute
    second = second<10 ? "0"+second :second

    let clock = hour + ":" + minute + ":" + second + " " + day

    document.getElementById("myClock").innerText = clock
    var time = setTimeout(function ()
    {
        showTime();
    },1000);
}
showTime();
