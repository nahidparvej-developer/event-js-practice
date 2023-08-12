
//   button one
function one(){
    document.body.style.backgroundColor='red';

    
}

const oneButton= document.getElementById('click-1');
oneButton.onclick=function(){
    oneButton.addEventListener('click',one)
    console.log('click me click-1')
}
// const oneHead=document.getElementById('head').style.color='white'

// button two

function two(){
    document.body.style.backgroundColor='black'
}

const twoButton= document.getElementById('click-2');
twoButton.onclick=function(){
    twoButton.addEventListener('click',two)
    console.log('click me click-2')
}

//   button three

function third(){
    document.body.style.backgroundColor='yellow'
}
const thirdButton=document.getElementById('third');
thirdButton.onclick=function(){
 thirdButton.addEventListener('click',third)
     console.log('click me click-3')
    //  const threeHead=document.getElementById('head').style.color='black'
}

//   button four 
function four(){
    document.body.style.backgroundColor='blue'
}

const fourButton= document.getElementById('click-4');
fourButton.onclick=function(){
    fourButton.addEventListener('click',four)
    console.log('click me click-4')
}

//  button five 
function five(){
    document.body.style.backgroundColor='tomato'
}

const fiveButton= document.getElementById('click-5');
fiveButton.onclick=function(){
    fiveButton.addEventListener('click',five)
    console.log('click me click-5')
}


const buttons=document.querySelectorAll('button')

for( const button of buttons ){
button.style.border='2px solid black';
button.style.border='none'
button.style.borderRadius='10px'
button.style.padding=' 15px'
button.style.backgroundColor='purple'
button.style.color='white'
button.style.marginRight='15px'
}


