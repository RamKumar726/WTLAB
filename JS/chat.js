
function display(){
    let msg=document.getElementById('text-message').value;
    
    if(msg!=''){
        const messages=document.querySelector('.messages');
        const message=document.createElement('div');
        message.classList.add('message');
        message.textContent=msg;
        messages.appendChild(message);
        document.getElementById('text-message').value="";
    }
    else{
        
    }
}
let bn=document.getElementById('send');
console.log(bn);
bn.addEventListener('click',display);
