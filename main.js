let btn1= document.getElementById('btn1');


window.onscroll=function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn1.style.display = "block";
    } else {
        btn1.style.display = "none";}}


btn1.addEventListener('click' , function(){
    window.scrollTo({
        top:0,
        behavior : 'smooth'
    })
})