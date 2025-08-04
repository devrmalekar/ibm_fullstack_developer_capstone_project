const logout = async (e) => {
//Include the code for logout here.
};

let checkSession = ()=>{
  let curr_user = sessionStorage.getItem("username");

  if (curr_user && curr_user !== "") {
    document.getElementById("loginlogout").innerHTML = 
    '<span class="homepage_links">' + curr_user +'</span>' +
    '<a class="homepage_links" onclick="logout()" href="/">Logout</a>'
  } else {
    document.getElementById("loginlogout").innerHTML = 
    '<a class="homepage_links" href="/login">Login</a>'+
    '<a class="homepage_links"  href="/register">Register</a>'
  }
 }