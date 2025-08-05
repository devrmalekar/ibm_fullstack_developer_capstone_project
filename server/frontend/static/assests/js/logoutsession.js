// Build logout URL and Make GET request to logout endpoint
  let logout_url = window.location.origin+"/djangoapp/logout";
  const res = await fetch(logout_url, {
    method: "GET",
  });

  const json = await res.json();
  if (json) {
    // Clear session storage and reload page
    let username = sessionStorage.getItem('username');
    sessionStorage.removeItem('username');
    window.location.href = window.location.origin;
    window.location.reload();
     // Notify user of logout
    alert("Logging out "+username+"...") 
  }
  else {
    alert("The user could not be logged out.")
  }