$(document).ready(function(){
  // Isotope
  let $projectBtns = $("#project .button-group button");
  
  $projectBtns.click(function(e){
    $("#project .button-group button").removeClass("active");
    e.target.classList.add("active");
    let dataFilter = $(e.target).attr("data-filter");
    $("#project #project-cards").isotope({
      filter: dataFilter
    });
    return false;
  });

  $("#project .button-group #project-btn-all").trigger("click");

  // Magnific Popup 
  $('#project #project-cards .project-popup').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      560: {
        items: 2
      }
    }
  });
});