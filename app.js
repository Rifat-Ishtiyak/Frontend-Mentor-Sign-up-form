document.getElementById('submit-btn').addEventListener('click', function(){
    if (document.getElementById('first-name').value=='') {
        document.getElementById('warning-name').style.display='block';
        document.getElementById('name-error').innerText='First Name cannot be empty';
        document.getElementById('first-name').style.border='2px solid red ';
    }
    if(document.getElementById('second-name').value==''){
        document.getElementById('warning-last-name').style.display='block';
        document.getElementById('second-error').innerText='Last Name cannot be empty';
        document.getElementById('second-name').style.border='2px solid red';
    }
    if(document.getElementById('email-field').value==''){
        document.getElementById('warning-email').style.display='block';
        document.getElementById('email-error').innerText='Email cannot be empty'
        document.getElementById('email-field').style.border='2px solid red';
    }
    if((!document.getElementById('email-field').value.includes('@') || !document.getElementById('email-field').value.includes('.')) && !document.getElementById('email-field').value==''){
        document.getElementById('email-error').innerText='Looks like this is not an email'
    }

    if(document.getElementById('pass-field').value==''){
        document.getElementById('warning-pass').style.display='block';
        document.getElementById('pass-error').innerText='Password cannot be empty'
        document.getElementById('pass-field').style.border='2px solid red';
    }
})