// Code for modal popups on a specific pokemon being clicked //////////////////////////////////////
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
                $(".modal-title").html(result[0].pokeName);
                $(".modal-body").html('<br> \nAttack: ' + result[0].Attack + '<br> \nDefense: ' + result[0].Defense +
                    '<br> \nHP: ' + result[0].HP + '<br> \nSpeed: ' + result[0].Speed + '<br> \nSpecial Attack: ' +
                    result[0].Special_atk + '<br> \nSpecial Defense: ' + result[0].Special_def)
                $('.pokeI').attr('src', '.' + result[0].images[0].img)
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
//////////////////////////////////////////////////////////////////////////////////





