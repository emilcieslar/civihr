$(document).foundation();

$(document).ready(function() {

  // ----------------------------------------------------------------------------> SET THE WIDTH OF ROADMAP
  var roadMapWidth = 0;
  $('.roadmap-inner .timeline-up-down').each(function() {
    roadMapWidth += $(this).outerWidth(true);
  });
  $('.roadmap-inner').width(roadMapWidth/2);

  // ----------------------------------------------------------------------------> SET HEIGHT OF ROADMAP WRAPPER
  $('.roadmap-wrapper').height($('.roadmap-inner').outerHeight(true));

  // ----------------------------------------------------------------------------> LOAD TIMELINE DARK LINE BG
  $('.dark-line').addClass('full');

  // ----------------------------------------------------------------------------> MOVING ROADMAP'S TIMELINE
  $('.roadmap-arrow.right').click(function() {

    // Display left arrow if not visible
    var leftArr = $('.roadmap-arrow.left');
    if(!leftArr.is(":visible")) {

      // Calculate how much should be left arrow moved
      leftArrW = -leftArr.width() / 2;
      // Fade In the left arrow
      leftArr.fadeIn();

      // Animate the movement
      leftArr.animate({
        left: leftArrW + "px"
      },1000);

    }

    // Calculate the size that the roadmap-inner should be moved
    var roadmapWrapperWidth = $('.roadmap-wrapper').outerWidth(true)
    var moveBy = roadmapWrapperWidth < $('.roadmap-inner').width() - roadmapWrapperWidth ? roadmapWrapperWidth : $('.roadmap-inner').width() - roadmapWrapperWidth;

    $('.roadmap-inner').animate({
      left: "-=" + $('.roadmap-wrapper').outerWidth(true)
    },1000);
  });


});
