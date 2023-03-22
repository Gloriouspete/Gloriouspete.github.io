let plus,mainBox,buttona,inputp,undmsg;
undmsg = document.querySelector('.undermsg');
inputp = document.querySelector('.inputp');
buttona = document.querySelector('.buttona');
plus = document.querySelector(".plus");
mainBox = document.querySelector('.main-box');
plus.addEventListener('click',()=>{
mainBox.style.display = mainBox.style.display
=== 'flex' ? 'none' : 'flex';
undmsg.style.display ="none";
});
buttona.addEventListener('click',()=>{
    inputp.style.display='flex';
    plus.style.display="none";
    mainBox.style.display = mainBox.style.display
=== 'flex' ? 'none' : 'flex';
});