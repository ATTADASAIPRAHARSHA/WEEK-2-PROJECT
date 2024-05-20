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


document.getElementById('loginsubmit').addEventListener('submit', (event) => {
    const array = JSON.parse(localStorage.getItem('user'));
    // console.log('array');
    const user ={
        username : input.value,
        password : pass.value
    }
    let userexist = array.some((item)=>{
        return item.username===user.username &&  item.Password===user.password;
    })
    if(userexist && array)
        {
            console.log('good')
            // event();
            // window.location.href="index.html"
        }
        else {
            alert('Credentials Not valid');
            event.preventDefault();
        }

});
const eye = document.getElementById('eye')
const eyecross = document.getElementById('eyecross')
eye.addEventListener('click', () => {
    if (pass.type === 'password') {
        pass.type = 'text';
        eyecross.style.display='block'
        eye.style.display='none'
    } 
});
eyecross.addEventListener('click', () => {
    pass.type = 'password';
        eyecross.style.display='none'
        eye.style.display='block'
     
});
