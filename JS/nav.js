let div=document.createElement('div')
document.body.append(div);
div.style.backgroundColor='green';
div.style.width='200px';
div.style.height='100px';
let list=document.createElement('ol');
let l1=document.createElement('li');
l1.innerHTML='hi';
list.append(l1);
let l2=document.createElement('li');
l2.innerHTML='hello';
list.append(l2);
document.body.append(list);
list.before('before');

