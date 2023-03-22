let solid,list,about,bbou,main,buttona,buttonb,home,pproject;
main = document.querySelector('.main-content');
bbou = document.querySelector(".about-me");
about = document.querySelector(".abb");
list = document.querySelector("#nlist");
solid = document.querySelector('#solid');
buttona = document.querySelector(".buttona");
buttonb = document.querySelector(".buttonb");
home = document.querySelector('.home');
pproject = document.querySelector('.pproject');

solid.addEventListener('click',()=>{list.classList.toggle("block");
});
buttona.addEventListener('click',()=>{
     window.location.href="mailto:peterninyo4@gmail.com"
});
buttonb.addEventListener('click',()=>{
     window.location.href="https://linktr.ee/gloriouspete"
});
home.addEventListener('click',()=>{
     window.location.href="index.html"
});
pproject.addEventListener('click',()=>{
     window.location.href="#section1"
});
about.addEventListener('click',()=>{
bbou.style.display='block';

 main.style.display ='none';
})
