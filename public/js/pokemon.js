// Code for modal popups on a specific pokemon being clicked //////////////////////////////////////
$('#pokeModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var base = location.origin;
    var passedName = button.attr('data-id');
    ($.ajax({
        url: base + '/api/' + passedName, success: function (result) {
            console.log(result[0]);
            $(".modal-title").html(result[0].pokeName);
            $(".modal-body").html('<br> \nAttack: ' + result[0].Attack + '<br> \nDefense: ' + result[0].Defense +
                '<br> \nHP: ' + result[0].HP + '<br> \nSpeed: ' + result[0].Speed + '<br> \nSpecial Attack: ' +
                result[0].Special_atk + '<br> \nSpecial Defense: ' + result[0].Special_def)
            $('.pokeI').attr('src', '.' + result[0].images[0].img)
        }
    }))
});

//////////////////////////////////////////////////////////////////////////////////

//search by name//////////////////////////////////////////////////////////////////
$('#nameSearch').on('click', function(event) {
    event.preventDefault();

var base = location.origin;
console.log(base);
var name = $('#inputName').val();
console.log(name);
 $.ajax({
    url: base + '/pokemon/' + name, success: function (result) {
        
        $('body').html(result);
    }
});
});
/////////////////////////////////////////////////////////////////////////////////////

//search by type/////////////////////////////////////////////////////////////////////
$('#typeSearch').on('click', function(event) {
    event.preventDefault();

var base = location.origin;
console.log(base);
var type = $('#inputType').val();
console.log(type);
console.log(base + '/type/' + type);
 $.ajax({
    url: base + '/type/' + type, success: function (result) {
        
        $('body').html(result);
    }
});
});
////////////////////////////////////////////////////////////////////////////////////////


