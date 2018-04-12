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




