

// const box = document.querySelector('.box');

// const h1 = document.createElement('h1');
// h1.innerText = 'I love js';
// h1.style.color = 'red';
// h1.style.backgroundColor = 'green';
// h1.style.textAlign = 'center';


// box.appendChild(h1);



// console.log(h1);


// sign_up form



const sign_up = document.querySelector('#signup');

const msg    = document.querySelector('.msg');

const mess    = document.querySelector('.mess');

const mess2    = document.querySelector('.mess2');

 const username = document.querySelector('#username');

 const email =  document.querySelector('#email');

 const password =  document.querySelector('#password');








sign_up.addEventListener('click', function (e) {
    e.preventDefault();

    let gender  = document.querySelector('input[type ="radio"]:checked')
    let skill  = document.querySelectorAll('input[type ="checkbox"]:checked')
     
    let pattern = /^[a-z_]{4,12}$/;
 
     let pattren2 = /^[a-z0-9\._]*@[a-z0-9-]*\.[a-z]{2,9}$/;

     for (let i = 0; i < skill.length; i++) {
    //    console.log(skill[i].value);
     }
    //  console.log(gender.value);
     
     if ( username.value == '' || email.value == '' ||  password.value == '' ) {
         msg.innerHTML = `<p class = 'alert alert-warning'>All fields are required !</p>`
     }else if (pattern.test(username.value) == false ) {
         mess.innerHTML = `<p class = 'alert alert-warning'>Plz set a username !</p>`
     }else if (pattren2.test(email.value) == false ) {
         mess2.innerHTML = `<p class = 'alert alert-danger'>Plz set a email !</p>`
     }
 
     username.style.border = (username.value == '') ? '1px solid red' : '1px solid black';
 
     email.style.border = ( email.value == '') ? '1px solid red' : '1px solid black';
 
     password.style.border = (password .value == '') ? '1px solid red' : '1px solid black';
 
     username.value = '';
     email.value = '';
     password.value = '';
     
    


  

   


     setTimeout(function(){
        msg.innerHTML = '';
        mess.innerHTML = '';
        mess2.innerHTML = '';
        gender.disabled = true;
        username.style.border = '1px solid black'
        email.style.border = '1px solid black'
        password.style.border = '1px solid black'

       
        
     },2000);
     
    
});

// Digital Clock

const clock = document.querySelector('.colck');
const hours = document.querySelector('.hours');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');
const day = document.querySelector('.day');
const date2 = document.querySelector('.date2');
const dayname = [ 'Sun' , 'Mon' , 'Tus' , 'Wed' , 'Thus' , 'Fri' , 'Sat'];


setInterval(function() {


    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDay();

    
    day.innerHTML =  `${ dayname[d] }`
    hours.innerHTML =  zero2(h) > 12 ? h - 12 : zero2(h); 
    min.innerHTML =  `:${zero(m)}`
    sec.innerHTML = `:${zero(s)}`
    ampm.innerHTML = `${ h < 12 ? 'am' : 'pm'}`
    date2.innerHTML = `${zero(date.getDate())}-${zero(date.getMonth() + 1)}-${zero(date.getUTCFullYear())} `
    
   
        
}, 1000);



// Timer.....


const go = document.querySelector('#go');
const stop = document.querySelector('#stop');
const out_put = document.querySelector('#output');
const clear = document.querySelector('#clear');


let love ;


go.addEventListener( 'click',function(){
    out_put.innerHTML = 'Commming soon.............';

    love = setTimeout(function(){
      out_put.innerHTML = ' I Love Js';
    }, 5000);
});
let love2;

stop.addEventListener( 'click', function(){

    clearTimeout(love);
    out_put.innerHTML = ' Come Again.............';
   love2 = setTimeout( function(){
      
        out_put.innerHTML = ' I Love Bangladash';
       
        
    
       
    }, 5000);
    
  
});


clear.addEventListener( 'click',function(){

   setTimeout(function(){
    clearTimeout(love);
    clearTimeout(love2);
    out_put.innerHTML = '';
   },3000);
    
})

// Counter.......

const start = document.querySelector('#start');
const stop2 = document.querySelector('#stop2');
const h1   = document.querySelector('#out');

let counter_value = 0;
let counter;
start.addEventListener( 'click',function(){
   

   counter = setInterval(() => {
        h1.innerHTML = counter_value;
        counter_value++
    }, 100);

  
})


stop2.addEventListener( 'click',function(){
   

   clearInterval(counter);

  setTimeout(() => {
    h1.innerHTML = 0;
  },3000);
  
});



// counter with loader

const start2 = document.querySelector('#start2');
const stop3 = document.querySelector('#stop3');
const out_put2  = document.querySelector('#output2');
const count = document.querySelector('#counter');
const loder = document.querySelector('.loder');



let counter_value2 ;
let counter2;
start2.addEventListener( 'click', function(){
    counter_value2 = count.value;

  counter2 =  setInterval(() => {
        out_put2.innerHTML = counter_value2;
       let width = progressBar(count.value, counter_value2)
        
        loder.style.width = `${width}%`;


        if (width > 60 && width <= 100 ) {
            loder.style.backgroundColor = 'blue';
        }else if (width > 30 && width <= 60) {
            loder.style.backgroundColor = 'green';
        }else if(width <= 30 ){
            loder.style.backgroundColor = 'red';
        }
        
        if (counter_value2 == 0 ) {
            clearInterval(counter2);
            count.value = '';
        }
        
        counter_value2--
        
        
    }, 1000);

   
   
});






stop3.addEventListener( 'click',function(){
   

    clearInterval(counter2);
 
   setTimeout(() => {
    out_put2.innerHTML = 0;
    count.value = '';
    loder.style.backgroundColor = 'orange';
    loder.style.width = `${100}%`
   },3000);
   
 });
 

//  Todo app



const todo = document.querySelector('#do');
const add = document.querySelector('#add');
const list = document.querySelector('#list');


add.addEventListener( 'click', function(){
    
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = todo.value;
    list.appendChild(li);

    todo.value = '';
});


// Result Cheak




const cheak_button = document.querySelector('#resultcheak') ;

const name  = document.querySelector('#name');

const roll = document.querySelector('#roll');

const subject = document.querySelector('#subject');

const markes = document.querySelector('#markes');

const result = document.querySelector('#result');



cheak_button .addEventListener('click',() => {
    
     let resu = reCheak(markes.value);

    if ( name.value == '' || roll.value == '' || subject.value == '' || markes.value == '' ) {
        result.innerHTML = `<p class = 'alert alert-danger'>All fields are required !</p>`
    }else{
     
    
    result.innerHTML = `<p class = 'alert alert-${resu.status}'>${resu.re} </p>`
    

   }

   name.value = '';
   roll.value = '';
   subject.value = '';
   markes.value = '';

        
}) ;
