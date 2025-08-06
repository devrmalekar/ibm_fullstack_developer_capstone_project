let logout = async (e) => {
  //e.preventDefault();
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
};

let checkSession = ()=>{
  let curr_user = sessionStorage.getItem("username");

  if (curr_user && curr_user !== "") {
    document.getElementById("loginlogout").innerHTML = 
    '<span class="homepage_links">' + curr_user +'</span>' +
    '<a class="homepage_links" onclick="logout()" href="/djangoapp/logout">Logout</a>'
  } else {
    document.getElementById("loginlogout").innerHTML = 
    '<a class="homepage_links" href="/login">Login</a>'+
    '<a class="homepage_links"  href="/register">Register</a>'
  }
 }

