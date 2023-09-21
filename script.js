const form = document.querySelector('form');

const pass = document.getElementById('pwd');
const passError = pass.nextElementSibling;

const passCheck = document.getElementById('pwd_check');
const passCheckError = passCheck.nextElementSibling;

const email = document.getElementById('email');
const emailError = email.nextElementSibling;
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const firstName = document.getElementById('first_name');
const firstNameError = firstName.nextElementSibling;
const lastName = document.getElementById('last_name');
const lastNameError = lastName.nextElementSibling;
const onlyLettersRegex = /^[a-zA-Z]+$/;

const number = document.getElementById('number');
const numberError = number.nextElementSibling;
const onlyNumberRegex = /^[0-9]+$/;

pass.addEventListener('input', PasswordCheck);
passCheck.addEventListener('input',PasswordCheckCheck);
email.addEventListener('input',EmailCheck);    
number.addEventListener('input',NumberCheck);      
firstName.addEventListener('input',FirstNameCheck);
lastName.addEventListener('input',LastNameCheck);


form.addEventListener('submit',(event) =>{
        event.preventDefault();
    FirstNameCheck();
    if (firstName.value.length == ''){
        firstName.className = "invalid";
        firstNameError.textContent = "*Required";
    }
    LastNameCheck();
    if (lastName.value.length == ''){
        lastName.className = "invalid";
        lastNameError.textContent = "*Required";
    }
    EmailCheck();
    if (email.value.length == ''){
        email.className = "invalid";
        emailError.textContent = "*Required";
    }
    NumberCheck();
    if (number.value.length == ''){
        number.className = "invalid";
        numberError.textContent = "*Required";
    }
    PasswordCheck();
    if(pass.value.length == ''){
        pass.className = "invalid";
        passError.textContent = "*Required";
    }
    PasswordCheckCheck();
    if(passCheck.value.length == ''){
        passCheck.className = "invalid";
        passCheckError.textContent = "*Required";
    }
    
})


function resetForm(){
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    number.value = '';
    pass.value = '';
    passCheck.value = '';

    firstName.className = '';
    lastName.className = '';
    email.className = '';
    number.className = '';
    pass.className = '';
    passCheck.className = '';

    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    numberError.textContent = '';
    passError.textContent = '';
    passCheckError.textContent = '';
}
/* ALL CHECKS */
/* FirstName Check */
function FirstNameCheck(){
    if (firstName.value.length == ''){
        firstName.className = "";
        firstNameError.textContent = "";
    }else if (onlyLettersRegex.test(firstName.value) === false){
        firstName.className = 'invalid';
        firstNameError.textContent = '*Should contain letters only.';
        firstNameError.className = 'error';
    }else{
        firstName.className = 'valid';
        firstNameError.textContent = '';
        firstNameError.className = 'error';
    }
}
/* LastName Check */
function LastNameCheck(){
    if (lastName.value.length == ''){
        lastName.className = "";
        lastNameError.textContent = "";
    }else if (onlyLettersRegex.test(lastName.value) === false){
        lastName.className = 'invalid';
        lastNameError.textContent = '*Should contain letters only.';
        firstNameError.className = 'error';
    }else{
        lastName.className = 'valid';
        lastNameError.textContent = '';
        lastNameError.className = 'error';
    }
}
/* Email Check */
function EmailCheck(){
    if (email.value.length == ''){
        email.className = "";
        emailError.textContent = "";
    }else if (emailRegExp.test(email.value) === false){
        email.className = 'invalid';
        emailError.textContent = '*Should contain email adress.';
        emailError.className = 'error';
    }else{
        email.className = 'valid';
        emailError.textContent = '';
        emailError.className = 'errorValid';
    }
}
/* PhoneNumber Check */
function NumberCheck(){
    if (number.value.length == ''){
        number.className = "";
        numberError.textContent = "";
    }else if (onlyNumberRegex.test(number.value) === false){
        number.className = 'invalid';
        numberError.textContent = '*Should contain numbers only.';
        numberError.className = 'error';
    }else if (number.value.length != 9){
        number.className = 'invalid';
        numberError.textContent = '*Should contain 9 numbers.';
        numberError.className = 'error';
    }else{
        number.className = 'valid';
        numberError.textContent = '';
        numberError.className = 'error';
    }
}
/* Password Check */
function PasswordCheck(){
    if(pass.value.length == ''){
        pass.className = "";
        passError.textContent = "";
    }else if(pass.value.length < 8 || pass.value.length > 20){
        pass.className = "invalid";
        passError.textContent = "*Password should contain 8-20 characters";
    }else{
        pass.className = 'valid';
        passError.textContent = '';
        passError.className = 'error';
    }
}
/* PasswordCheck Check */
function PasswordCheckCheck(){
    if(passCheck.value.length == ''){
        passCheck.className = "";
        passCheckError.textContent = "";
    }else if(pass.value != passCheck.value){
        passCheck.className = "invalid";
        passCheckError.textContent = "*Passwords are not the same!";
        passCheckError.className = 'error';
    }else{
        passCheck.className = 'valid';
        passCheckError.textContent = '*Passwords are the same.';
        passCheckError.className = 'errorValid';
    }
    
}