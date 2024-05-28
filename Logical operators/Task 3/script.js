let userName = prompt("What is your username ?", '');

if (userName == "Admin") {
    var password = prompt("What is your password ?", "")
}

if (password == "TheMaster") {
    alert("Welcome!")
} else {
    password = prompt("Wrong password, please try again")
}