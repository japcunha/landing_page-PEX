$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
  const sections = $("section");
  const navItems = $(".nav-item");
  
  navItems.on("click", function (e) {
    e.preventDefault();
    const target = $($(this).find("a").attr("href"));
    $("html, body").animate({
      scrollTop: target.offset().top - $("header").outerHeight() + 1
    }, 800);
  });
  

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0,0,0,0.1)");
    }

    sections.each(function (index) {
      const section = $(this);
      const top = $(this).offset().top - 121;
      const bottom = top + $(this).outerHeight();

      if (scrollPosition >= top && scrollPosition <= bottom) {
        activeSectionIndex = index;
        return false;
      }
    });

    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });
  
  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });
});
