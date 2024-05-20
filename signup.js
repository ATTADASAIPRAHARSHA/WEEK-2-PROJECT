const userlabel = document.getElementById('userlabel');
const input = document.getElementById('username');

input.addEventListener('input', () => {
    if (input.value) {
        userlabel.style.top = '-25px';
    } else {
        userlabel.style.top = '25%';
    }
});
const passlabel = document.getElementById('passlabel');
const pass = document.getElementById('password');

pass.addEventListener('input', () => {
    if (pass.value) {
        passlabel.style.top = '-25px';
    } else {
        passlabel.style.top = '25%';
    }
});

//email
const emaillabel = document.getElementById('emaillabel');
const email = document.getElementById('email');

email.addEventListener('input', () => {
    if (email.value) {
        emaillabel.style.top = '-25px';
    } else {
        emaillabel.style.top = '25%';
    }
});
const copasslabel = document.getElementById('copasslabel');
const copass = document.getElementById('copass');

copass.addEventListener('input', () => {
    if (copass.value) {
        copasslabel.style.top = '-25px';
    } else {
        copasslabel.style.top = '25%';
    }
});

//firstname
// const firstlabel = document.getElementById('firstlabel');
// const first = document.getElementById('firstname');

// first.addEventListener('input', () => {
//     if (first.value) {
//         firstlabel.style.top = '-25px';
//     } else {
//         firstlabel.style.top = '25%';
//     }
// });

// //lastname
// const lastlabel = document.getElementById('lastlabel');
// const last = document.getElementById('lastname');

// last.addEventListener('input', () => {
//     if (last.value) {
//         lastlabel.style.top = '-25px';
//     } else {
//         lastlabel.style.top = '25%';
//     }
// });

const usertick = document.getElementById('usertick')

const usetick = document.getElementById('usetick')
input.addEventListener('input', () => {
    if (input.value.length >= 8 && input.value.length<=14) {
        usertick.style.display = 'block';
        usetick.style.display = 'none';
    } else {
        usertick.style.display = 'none';
        usetick.style.display = 'block';
    }
});
// usertick.style.display='inline'


// code for verified symbol 
const passtick = document.getElementById('passwordtick')
const passmark = document.getElementById('passwordmark')
copass.addEventListener('input', () => {
    if (copass.value.length >= 8 && copass.value.length<=14) {
        passtick.style.display = 'block';
        passmark.style.display = 'none';
    } else {
        passtick.style.display = 'none';
        passmark.style.display = 'block';
    }
});
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// localStorage.setItem('users','uservalues')
const check =document.getElementById('checkbox')
document.querySelector('.form').addEventListener('submit',(event)=>{
    const object ={
        username : input.value,
        Password : pass.value,
        email : email.value,
    }
    let array = JSON.parse(localStorage.getItem('user')) || [];
    array = [...array,object]
    localStorage.setItem('user',JSON.stringify(array))
    
    if(copass.value !== pass.value || input.value.length<8 || pass.value.length<8 || copass.value.length<8 || !check.checked || input.value.length>14 || pass.value.length>14 || copass.value.length>14 || !regex.test(email.value))
        {
            event.preventDefault();
            alert("Invalid Form")
        }
    else{
        alert("User Created");
        event()
    }
})
const eye = document.getElementById('eye')
const eyecross = document.getElementById('eyecross')
eye.addEventListener('click', () => {
    if (copass.type === 'password') {
        copass.type = 'text';
        eyecross.style.display='block'
        eye.style.display='none'
    } 
});
eyecross.addEventListener('click', () => {
        copass.type = 'password';
        eyecross.style.display='none'
        eye.style.display='block'
     
});
const coeye = document.getElementById('coeye')
const coeyecross = document.getElementById('coeyecross')
coeye.addEventListener('click', () => {
    if (pass.type === 'password') {
        pass.type = 'text';
        coeyecross.style.display='block'
        coeye.style.display='none'
    } 
});
coeyecross.addEventListener('click', () => {
    pass.type = 'password';
    coeyecross.style.display='none'
        coeye.style.display='block'
     
});

