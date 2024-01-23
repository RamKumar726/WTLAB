const user=document.querySelectorAll('.user-selection');
const images=document.querySelectorAll('#selected-images');
const UserInputSelected=document.getElementById('user-input-selected');
const CpuInputSelected=document.getElementById("cpu-input-selected");
const Desc=document.getElementById('desc');
console.log(Desc.innerHTML)
const cpu=['../IMAGES/r-removebg-preview.png','../IMAGES/s-removebg-preview.png','../IMAGES/p-removebg-preview.png'];
console.log(cpu)
function ChangeName(){
    UserInputSelected.classList.add('shake-lr');
    CpuInputSelected.classList.add('shake-lr');
    if(Desc.innerHTML=="Lets's Play"){
        Desc.innerHTML='Wait...'
    }
    else{
        Desc.innerHTML=="Lets's Play" 

    }
}
function Back(){
    UserInputSelected.src='../IMAGES/r-removebg-preview.png';
    CpuInputSelected.src='../IMAGES/r-removebg-preview.png';
    Desc.innerHTML="Let's Play";
    Desc.style.color='blueviolet'
}
function Animi(){
    setTimeout(function() {
        Desc.classList.add('scale-up-center');
        setTimeout(function() {
            Desc.classList.remove('scale-up-center');
            Desc.classList.add('scale-down-top ')
        }, 1000);
    }, 0);
}
function Image1(){
    UserInputSelected.src=images[0].src;
    let x = Math.floor((Math.random() * 100) + 0)%3;
    console.log(x,Desc.innerHTML)
    CpuInputSelected.src=cpu[x];
    UserInputSelected.classList.remove('shake-lr');
    CpuInputSelected.classList.remove('shake-lr');
    if(x==0){
        Desc.innerHTML='DRAW';
        Desc.style.color='blueviolet;';
        Animi();
    }
    else if(x==1){
        Desc.innerHTML='YOU WIN';
        Desc.style.color='green';
        Animi();
        
        
    }
    else{
        Desc.innerHTML='YOU LOSS';
        Desc.style.color='red';
        Animi();
    }
    setTimeout(Back,2000);
}
function Image2(){
    UserInputSelected.src=images[1].src;
    let x = Math.floor((Math.random() * 100) + 0)%3;
    console.log(x,Desc.innerHTML)
    CpuInputSelected.src=cpu[x];
    UserInputSelected.classList.remove('shake-lr');
    CpuInputSelected.classList.remove('shake-lr');
    if(x==1){
        Desc.innerHTML='DRAW';
        Desc.style.color='blueviolet';
        Animi();

    }
    else if(x==2){
        Desc.innerHTML='YOU WIN';
        Desc.style.color='green';
        Animi();

    }
    else{
        Desc.innerHTML='YOU LOSS';
        Desc.style.color='red';
        Animi();

    }
    setTimeout(Back,2000);

}
function Image3(){
    UserInputSelected.src=images[2].src;
    let x = Math.floor((Math.random() * 100) + 0)%3;
    CpuInputSelected.src=cpu[x];
    UserInputSelected.classList.remove('shake-lr');
    CpuInputSelected.classList.remove('shake-lr');
    if(x==2){
        Desc.innerHTML='DRAW';
        Desc.style.color='blueviolet;';
        Animi();

    }
    else if(x==0){
        Desc.innerHTML='YOU WIN';
        Desc.style.color='green';
        Animi();


    }
    else{
        Desc.innerHTML='YOU LOSS';
        Desc.style.color='red';
        Animi();

    }
    setTimeout(Back,2000);

}
function Toggle1(){
    setTimeout(ChangeName,0);
    setTimeout(Image1,2000);
}
function Toggle2(){
    setTimeout(ChangeName,0);
    setTimeout(Image2,2000);
}function Toggle3(){
    setTimeout(ChangeName,0);
    setTimeout(Image3,2000);
}
images[0].addEventListener('click' ,()=>{
    Toggle1();
});
images[1].addEventListener('click' ,()=>{
    Toggle2();

});
images[2].addEventListener('click' ,()=>{
    Toggle3();
});

