$(document).foundation();

$(document).ready(function() {

  // ----------------------------------------------------------------------------> HELPER METHOD TO SET THE HEIGHT AND WIDTH OF ROADMAP
  // This will be fired once at the beginning and on every window resize event
  var setRoadmapWidth = function() {

    var roadMapWidth = 0;
    $('.roadmap-inner .timeline-up-down:not(.inner)').each(function() {
      roadMapWidth += $(this).outerWidth(true);
    });
    $('.roadmap-inner').width(roadMapWidth/2);

    $('.roadmap-wrapper').height($('.roadmap-inner').outerHeight(true));

  };
  // Fire at the beginning
  setRoadmapWidth();

  // ----------------------------------------------------------------------------> LOAD TIMELINE DARK LINE BG
  $('.dark-line').addClass('full');

  // ----------------------------------------------------------------------------> MOVING ROADMAP'S TIMELINE
  // ---------------------------------------> Add right arrow as default
  $('.roadmap-arrow.right').addClass('visible');

  // ---------------------------------------> On right arrow click
  $('.roadmap-arrow.right').click(function() {

    // Display left arrow if not visible
    displayArrow('left');

    // Move the inner roadmap to the right
    moveRoadmapInner('right');

  });

  // ---------------------------------------> On left arrow click
  $('.roadmap-arrow.left').click(function() {

    // Display right arrow if not visible
    displayArrow('right');

    // Move the inner roadmap to the left
    moveRoadmapInner('left');

  });

  // ---------------------------------------> On window resize, reset the position
  $(window).resize(function() {
    $('.roadmap-inner').css({'left':'0'});
    $('.roadmap-arrow').removeClass('visible');
    $('.roadmap-arrow.right').addClass('visible');
    // Reset the width
    setRoadmapWidth();
  });

  // ---------------------------------------> Helper method to display arrow if not visible
  var displayArrow = function(arrowSide) {

    var arr = $('.roadmap-arrow.' + arrowSide);
    if(!arr.hasClass('visible')) {
      arr.addClass('visible');
    }

  }

  // ---------------------------------------> Helper method to move roadmap inner div to right or left
  var moveRoadmapInner = function(side) {

    // Calculate the px that the roadmap-inner should be moved by
        // The width of the whole wrapper, in this case it's basically window's width
    var wrapperWidth = parseInt($('.roadmap-wrapper').outerWidth(true)),
        // How much is the .roadmap-inner div moved to the left
        // We need a positive value thus using .abs()
        leftSide = Math.abs(parseInt($('.roadmap-inner').css('left'))),
        // The .roadmap-inner's outerWidth - .roadmap-inner is basically 
        // wider than the page and we're moving with it to left or right so we
        // must know it's width with its margins as well
        innerWidth = $('.roadmap-inner').outerWidth(true),
        // The rest of the .roadmap-inner that is to be scrolled to the right
        innerRest = innerWidth - (wrapperWidth + leftSide),
        moveBy = 0;

    if(side === "left") {
      // If we want to scroll to the left side, we are basically moving the 
      // .roadmap-inner to the right so we first have to check if the
      // left side is smaller than wrapperWidth and if it is, we want to move 
      // .roadmap-inner just by the leftSide value, otherwise we can move it
      // by wrapperWidth value
      moveBy = wrapperWidth > leftSide ? leftSide : wrapperWidth;
    } else {
      // Here we have exact opposite, if we want to scroll to the right side,
      // we are basically moving the .roadmap-inner to the left side. First we
      // have to check if there's enough .roadmap-inner to be scrolled by
      // checking if it's smaller than wrapperWidth. If it's smaller, we just
      // want to move it by the innerRest value. If it's bigger, we can move
      // it by the wrapperWidth
      moveBy = wrapperWidth > innerRest ? innerRest : wrapperWidth;
    }

    // If moveBy is smaller than wrapperWidth, we don't want to move on
    // after this move so we hide the arrow accordingly
    if(moveBy < wrapperWidth) {
      $('.roadmap-arrow.' + side).removeClass('visible');
    }

    // If we're moving back, we add to the left property
    if(side === "left") {
      $('.roadmap-inner').css({'left': '+=' + moveBy});

    // Otherwise we move right so we subtract from left property
    } else {
      $('.roadmap-inner').css({'left': '-=' + moveBy});
    }

  }


});
