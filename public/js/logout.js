const logout = async () => {
    const response = await fetch('/api/doctor/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  window.onload = 
  document.querySelector('#logout').addEventListener('click', logout);
  