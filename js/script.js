$(document).ready(function () {
    
    function updateImage(dayContentId) {
        $(".img-campAgenda img").attr('src', 'images/' + dayContentId + '.webp');
    }

    $(".day-content").click(function () {
        $(".agenda-table .day-content").removeClass("active-img");
        $(this).addClass("active-img");
        var dayContent = $(this).attr("id");
        updateImage(dayContent);
    });

    $('.btnag').click(function () {
        var index = $(this).index(); 
        $(".agenda-nav button").removeClass("active");
        $(this).addClass("active");
        $('.agenda-ul').eq(index).show().siblings('.agenda-ul').hide();

        var $activeDayContent = $('.agenda-ul').eq(index).find('.day-content.active-img');
        if ($activeDayContent.length === 0) {
            $activeDayContent = $('.agenda-ul').eq(index).find('.day-content').first();
            $activeDayContent.addClass('active-img');
        }
        var activeDayContentId = $activeDayContent.attr('id');
        updateImage(activeDayContentId);
    });

});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 12,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });
});


// const btnag = document.querySelectorAll(".btnag");
// const agendaUl=document.querySelectorAll('.agenda-ul');
// btnag.forEach((element, i)=>{
//     element.addEventListener('click', ()=>{
//         agendaUl[i].style.display='block';
//         for(var j=0;j<agendaUl.length;j++){
//             if(j!=i){
//                 agendaUl[j].style.display='none';
//             }
//         }
//     })
// }
// )
