$(document).ready(function () {
    // $(".agenda-nav a").click(function () {
    //     $(".agenda-table").children().first().addClass("active-img");
    //     $(".agenda-nav a").removeClass("active");
    //     $(this).addClass("active");
    //     $(".agenda-table").hide();
    //     var sectionId = $(this).attr("href");
    //     $(sectionId).show();
    // });
    $(".day-content").click(function () {
        $(".agenda-table .day-content").removeClass("active-img");
        $(this).addClass("active-img");
        var dayContent = $(this).attr("id");
        console.log(dayContent)
        $(".img-campAgenda img").attr('src', 'images/' + dayContent + '.webp');
    });
    $('.btnag').click(function () {
        var index = $('.btnag').index(this);
        $(".agenda-nav button").removeClass("active");
        $(this).addClass("active");
        $('.agenda-ul').eq(index).show().siblings('.agenda-ul').hide();
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
