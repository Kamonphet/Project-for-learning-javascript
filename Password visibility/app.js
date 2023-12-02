// Password visibility
const eye = document.querySelector('#eye')
const passwordField = document.querySelector('#password');

eye.addEventListener('click',()=>{
    if(eye.classList.contains('fa-eye')){
        eye.classList.replace('fa-eye','fa-eye-slash')
        // passwordField.setAttribute('type','text')
        passwordField.type='text'
    }else{
        eye.classList.replace('fa-eye-slash','fa-eye')
        // passwordField.setAttribute('type','password')
        passwordField.type='password'
    }
})