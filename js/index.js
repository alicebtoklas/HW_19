$("returnTop").on("click", function() {
    scrollToAnchor('demo');
  });
  
  function scrollToAnchor(selector){
    const destination = $("a[name='"+ selector +"']");
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  