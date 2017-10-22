$(document).ready(function() {
    $('#formData').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/send',
            data: getFormData($('#formData')),
            dataType: 'application/json'
        });
        $('.alert-success').removeClass('hidden');
        $('#formData')[0].reset();
        $(window).scrollTop(0);
    });

    $('.chart').easyPieChart({
        scaleColor: false,
        trackColor: false,
        barColor: '#30a5ff'
    });
});

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}