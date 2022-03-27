function getApiTokenOrRedirectToLogin()
{
  const token = sessionStorage.getItem('token');
  if (token)
  {   
    return 'Bearer ' + token
  }

  // window.location.href = '/login';
}

async function get(url, params)
{
  const host = 'http://applepark.by:8000';
  return await fetch(host + url + '?' + new URLSearchParams(params), {
    headers: {
      Authorization: getApiTokenOrRedirectToLogin()
    }
  })
  .then(data => data.json())
}
