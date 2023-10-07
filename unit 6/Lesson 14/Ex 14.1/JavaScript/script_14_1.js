$(document).ready(function(){
    $('button').click(function(){
        var inputval = $('#input').val();
        if (inputval === ''){
            $('.error').css('display','block')
        }
        else{
            $('ul').append('<li>' + inputval + '<i class="fa-regular fa-x"></i> </li>');
        }
    });

    $('ul').click(function(e){
        var target = $(e.target);
        if (target.is('li')){
            var clicked = target.data('clicked') || false;
            target.data('clicked', !clicked);
            target.toggleClass('done', !clicked);
            if (!clicked){
                target.prepend('<i class="fa-solid fa-check"></i>');
            }
            else{
                target.find('.fa-check').remove();
            }
        }
    });

    $('ul').on('click', '.fa-x' ,function(){
        $(this).parent('li').fadeOut(200);
    });
});
