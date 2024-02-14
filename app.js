var but = document.querySelector('#no');
var lov = document.querySelector('#love')
const myImage = document.querySelector('#img');
const titulo2 = document.querySelector('.final');


but.addEventListener('mousemove', function(){
    var newTop = Math.random()*92;
    var newLeft = Math.random()*92;
    newLeft += "%";
    newTop += "%";
    but.style.top = newTop;
    but.style.left = newLeft;
});

lov.addEventListener('click', function(){
    console.log("sss")
    lov.style.display = 'none';
    myImage.src = 'osos.gif';
    but.style.display = 'none'
    titulo2.style.display = 'block'
    console.log(myImage)
})


