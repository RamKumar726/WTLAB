const btn=document.getElementById('btn');
const tbody=document.querySelector('#tbody');
function change(){
    document.body.classList.toggle("dark");
    if(document.body.className=='dark'){
        btn.style.background='white';
        btn.style.color='black';
        btn.textContent='Light';
    }
    else{
        btn.style.background='black';
        btn.style.color='white';
        btn.textContent='Dark';
    }

}
btn.addEventListener('click',change);

const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
const btn3=document.getElementById('btn3');
const btn4=document.getElementById('btn4');
function ChangeColor(col){
    tbody.style.background=col;
}
btn1.addEventListener('click',() => ChangeColor('rgb(115, 191, 113)'));
btn2.addEventListener('click',() => ChangeColor('rgb(102, 134, 180)'));
btn3.addEventListener('click',() => ChangeColor('rgb(214, 171, 79)'));
btn4.addEventListener('click',() => ChangeColor('#CCC'));
//shoes buttons
const red=document.getElementById('red');
const grey=document.getElementById('grey');
const black=document.getElementById('black');
const blue=document.getElementById('blue');
const imgShoe=document.getElementById('imgSrc');
const prod_desc=document.getElementById('pd');
const para_color=document.getElementById('product-desc');
function RedShoe(){
    imgShoe.src="../IMAGES/redshoe.png";
    prod_desc.style.background='rgba(217, 87, 87, 0.804)';
    para_color.style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    imgShoe.classList.add('animi');
    setTimeout(() => {
        imgShoe.classList.remove("animi");
      }, 2000); 
}
function BlackShoe(){
    imgShoe.src="../IMAGES/blackshoe.png";
    prod_desc.style.background='rgba(35, 41, 53, 0.804)';
    para_color.style.color='white';
    para_color.style.fontFamily='cursive';
    imgShoe.classList.add('animi')
    setTimeout(() => {
        imgShoe.classList.remove("animi");
      }, 2000); 

}
function BlueShoe(){
    imgShoe.src="../IMAGES/blueshoe.png";
    prod_desc.style.background='rgba(100, 135, 217, 0.804)';
    para_color.style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    imgShoe.classList.add('animi')
    setTimeout(() => {
        imgShoe.classList.remove("animi");
      }, 2000); 
}
function GreyShoe(){
    imgShoe.src="../IMAGES/greyShoe.png"
    prod_desc.style.background='rgba(174, 157, 157, 0.804)';
    para_color.style.color='black';
    para_color.style.fontFamily='monospace';
    imgShoe.classList.add('animi');
    setTimeout(() => {
        imgShoe.classList.remove("animi");
      }, 2000); 
}
red.addEventListener('click',RedShoe);
blue.addEventListener('click',BlueShoe);
black.addEventListener('click',BlackShoe);
grey.addEventListener('click',GreyShoe);