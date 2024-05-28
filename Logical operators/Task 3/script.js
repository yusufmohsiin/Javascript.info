// Method (1)

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



// Method (2)

let user = prompt("Who's there?", '');

if (user === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (user === '' || user === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}