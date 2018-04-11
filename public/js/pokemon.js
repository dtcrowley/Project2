
// var userEmail = $('#userEmail'); 
// console.log(userEmail);
// var userPassword = $('#userPassword');
// var btnLogIn = $('#btnLogIn');
// var btnSignUp = $('#btnSignUp');
// var btnLogOut = $('#btnLogOut');


// // sign up
// btnSignUp.on('click', function (event) {
//     event.preventDefault();
//     // Get email and pass  check for real email
//     var email = userEmail.val();
//     var password = userPassword.val();
   

//     // sign up
//     auth.createUserWithEmailAndPassword(email, password).catch(function (err) {
//         console.log(err.message)
//     })
// });

// // Log In Event
// btnLogIn.on('click', function (event) {
//     event.preventDefault();
//     // Get email and pass
//     var email = userEmail.val();
//     var password = userPassword.val();
 

//     // sign in
//     auth.signInWithEmailAndPassword(email, password).catch(function (err) {
//         console.log(err.message)
//     })
// });

// btnLogOut.on('click', function (event) {
//     event.preventDefault();
  
// })

$('.pokemon').on('click', function() {
    event.preventDefault();
    
    $('#pokeModal').modal('toggle');

})





