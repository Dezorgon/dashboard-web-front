async function onLoginBtn()
{
    const host = 'http://applepark.by:8000';
    const form = document.getElementById('login-form');
    const formData = new FormData(form);
    
    let response = await fetch(host + '/api/token',
        {
            method: "post",
            body: formData,
        });
    

    if (response.ok)
    {
        response = await response.json();
        sessionStorage.token = response['access_token'];
        window.location.href = '/';
    }
    
}

let btn = document.getElementById('login-btn');
// btn.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//       btn.click();
//     }
// });
btn.addEventListener("click", onLoginBtn);