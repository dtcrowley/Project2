// Initialize Firebase
var config = {
    apiKey: "AIzaSyDJ8sRVZ5WBZ6RK8tT__eZ81ZMJfsilONM",
    authDomain: "pokemon-cf1a6.firebaseapp.com",
    databaseURL: "https://pokemon-cf1a6.firebaseio.com",
    projectId: "pokemon-cf1a6",
    storageBucket: "pokemon-cf1a6.appspot.com",
    messagingSenderId: "645564358111"
};
firebase.initializeApp(config);

var userDatabase = firebase.database();

var userEmail = $('#userEmail'); 
console.log(userEmail);
var userPassword = $('#userPassword');
var btnLogIn = $('#btnLogIn');
var btnSignUp = $('#btnSignUp');
var btnLogOut = $('#btnLogOut');


// sign up
btnSignUp.on('click', function (event) {
    event.preventDefault();
    // Get email and pass  check for real email
    var email = userEmail.val();
    var password = userPassword.val();
    var auth = firebase.auth();

    // sign up
    auth.createUserWithEmailAndPassword(email, password).catch(function (err) {
        console.log(err.message)
    })
});

// Log In Event
btnLogIn.on('click', function (event) {
    event.preventDefault();
    // Get email and pass
    var email = userEmail.val();
    var password = userPassword.val();
    var auth = firebase.auth();

    // sign in
    auth.signInWithEmailAndPassword(email, password).catch(function (err) {
        console.log(err.message)
    })

});

btnLogOut.on('click', function (event) {
    event.preventDefault();
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
})



firebase.auth().onAuthStateChanged(function (firebaseUser) {
    if (firebaseUser) {
        console.log(firebaseUser);
    }
    else {
        console.log('not logged in');
    }
});


$('.pokemon').on('click', function() {
    event.preventDefault();
    

    $('#pokeModal').modal('toggle');


})





