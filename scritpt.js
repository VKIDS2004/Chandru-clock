let HN = document.getElementById("hour")
let MN = document.getElementById("min")
let SN = document.getElementById("sec")

function time(){

    let d= new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    console.log(h,":",m,":",s)
    HN.style.transform = `rotate(${(h*30)+(m/2)}deg)`;
    MN.style.transform = `rotate(${m*6}deg)`;
    SN.style.transform = `rotate(${s*6}deg)`;
}

setInterval(time,1000);
