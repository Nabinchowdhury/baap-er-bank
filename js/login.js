document.getElementById("login-btn").addEventListener('click', function () {

    const email = document.getElementById("user-email").value;
    console.log(email);
    const password = document.getElementById("user-password").value;
    console.log(password);

    if (email === "sontan@baap.com" && password === "secret") {
        window.location.href = "bank.html";
    }
    else {
        alert("Typed wrong Email or Password");
    }
});