var attempt = 0;
    function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Shanaeve" && password == "12345") {
        window.location.href = "homepage.html";
        return true;
    } else {
        attempt++;
        if (attempt >=6) {
            alert("Cannot login. Try again later.");
            document.getElementById("loginBtn").disabled = true;
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            return false;
        
        } else {
            alert("Invalid username or password. Attempt " + attempt + " of 6.");
            return false;
        }
    }
}