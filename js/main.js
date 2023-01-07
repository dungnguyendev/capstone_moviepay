
// slide banner
$('.your-class').slick({
    centerMode: true,
    centerPadding: '70px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1980,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 3980,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1
            }
        }
    ]
});
$('.movie-class').slick({
    centerMode: true,
    centerPadding: '70px',
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1
            }
        }
    ]
});
