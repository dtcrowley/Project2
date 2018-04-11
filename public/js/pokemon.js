// Initialize Firebase
var config = {
    apiKey: "AIzaSyAlny4lMf5WEg_jYCZME2HHP1gbkzuP0KQ",
    authDomain: "pokedex-user-auth.firebaseapp.com",
    databaseURL: "https://pokedex-user-auth.firebaseio.com",
    projectId: "pokedex-user-auth",
    storageBucket: "pokedex-user-auth.appspot.com",
    messagingSenderId: "38189101021"
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

// $('.pokemon').on('click', function(event) {
// if($(this)) {
//     var passedName = $(this).attr('data-id');
//     console.log(passedName);
//     }
// });


$('#pokeModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var base = location.origin;
    
    $('.pokemon').on('click', function (event) {
        if ($(this)) {
            var passedName = $(this).attr('data-id');
            console.log(passedName);
        }
       
        var res = button.data($.ajax({
            url: base + '/api/' + passedName, success: function (result) {
                console.log(result[0]);
                $(".modal-body").text(result[0].pokeName);
                $(".modal-body").append('\nAttack: ' + result[0].Attack + '\nDefense: ' + result[0].Defense +
                '\nHP: ' + result[0].HP + '\nSpeed: ' + result[0].Speed + '\nSpecial Attack: ' + 
                result[0].Special_atk + '\nSpecial Defense: ' + result[0].Special_def)
                $('.pokeI').attr('src', '../public' + result[0].images[0].img)
                //  var modal = $(this)
                //  console.log(modal);
                // modal.find('.modal-body').text(result[0].Attack);
            }
        }))
    });
});

$(document).ready(function () {

    $('.pokemon').on('click', function (event) {
        event.preventDefault();

        $('#pokeModal').modal('toggle');
    });

})





