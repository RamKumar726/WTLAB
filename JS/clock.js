var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];
let hr=document.getElementsByClassName('hour-hand');
let min=document.getElementsByClassName('minute-hand');
let se=document.getElementsByClassName('second-hand');
for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
    hEl.style.transform = "rotate("+hDeg+"deg)";
        mEl.style.transform = "rotate("+mDeg+"deg)";
        sEl.style.transform = "rotate("+sDeg+"deg)";
}
setInterval("clock()", 100);
const Theme=document.getElementById('Theme');
console.log(Theme.textContent);
Theme.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    if(Theme.className==='dark'){
        Theme.textContent='Light';
        Theme.className='light'
    }
    else{
        Theme.textContent='Dark';
        Theme.className='dark'
    }
    
})

