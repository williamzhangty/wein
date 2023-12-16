'use strict'

saveUserInfo('mitt@mitt.ca', 'happymitt');
function saveUserInfo(userName, userPsw){
    localStorage.setItem('userInfo', userName.toLowerCase().trim() + '*' + userPsw);
}

function readUserInfo(){
    return localStorage.getItem('userInfo');
}

function validateUser(userName, userPsw){
    let userInfo = readUserInfo();
    let inputUserInfo = userName.toLowerCase().trim() + '*' + userPsw;
    console.log(userInfo,inputUserInfo);
    return userInfo === inputUserInfo;

}

const inputUserName = document.querySelector('#inputUserName');
inputUserName.value ='';
const inputPsw = document.querySelector('#inputPsw'); 
inputPsw.value = '';
const chkShowpsw = document.querySelector('#chkShowpsw');
chkShowpsw.checked = false;
const pWrongInfo = document.querySelector('.pWrongInfo');


document.getElementById('formLogin').addEventListener('submit', function(event) {
    if(!validateUser(inputUserName.value, inputPsw.value))
        {
            pWrongInfo.innerHTML = 'Incorrect username or password.';
            console.log('111')
            event.preventDefault();
        } 
});

chkShowpsw.addEventListener('change', ()=>{
    if(chkShowpsw.checked){
        inputPsw.type = 'text';
    } else {
        inputPsw.type = 'password';
    }

})
