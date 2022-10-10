const timePage = document.querySelector('#time')

const reloader = true;
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if(reloader){
    if(seconds > 10){
        timePage.innerHTML = `${hours}:${minutes}:${seconds}`;
    }else{
        timePage.innerHTML = `${hours}:${minutes}:0${seconds}`;
    }
setTimeout(function(){
    location.reload();
 }, 1000);
};