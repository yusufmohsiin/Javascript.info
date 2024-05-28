let userName = prompt("What is your username ?", '');

if (userName == "Admin") {
    let password = prompt("What is your password ?", "")

    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === '' || password === null) {
        alert("Canceled")
    } else {
        alert("Wrong Password!")
    }    
}

if (userName === '' || userName === null) {
    alert("Canceled")
} else {
    alert("I don't know you!")
}