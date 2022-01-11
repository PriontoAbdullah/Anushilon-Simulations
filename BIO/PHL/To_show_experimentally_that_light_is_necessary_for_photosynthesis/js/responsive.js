// Responsive Design Positioning For Toggled Screen
//16/12/2016
//@author-RESPONSIVE

function checkWidth() {
  // console.log("CheckWidth Called");
  var width = $('#sidebar-wrapper').width();
  var parentWidth = $('#sidebar-wrapper').offsetParent().width();
  var percent = (100 * width) / parentWidth;
  // console.log(percent);
  var winWidth = $(window).width();
  if (percent == '0' || winWidth < 768) {
    $('#imgCont1').css({
      position: 'absolute',
      top: '82%',
      left: '12%',
      width: '88%',
    });
    $('#imgCont2').css({
      position: 'absolute',
      top: '23%',
      left: '10%',
      width: '16%',
    });
    $('#imgCont3').css({
      position: 'absolute',
      top: '5%',
      left: '50%',
      width: '20%',
    });
    $('#powerAndLight').css({ position: 'absolute', top: '55%', width: '20%' });
    $('#bubblesBeaker').css({
      position: 'absolute',
      top: '51.5%',
      left: '10%',
      width: '12%',
      height: '15%',
    });
    $('#powerSourceImg').css({ width: '25%' });
    $('#beakerImg').css({ width: '75% !important' });
  } else {
    $('#imgCont1').css({
      position: 'absolute',
      top: '82%',
      left: '12%',
      width: '88%',
    });
    $('#imgCont2').css({
      position: 'absolute',
      top: '23%',
      left: '7%',
      width: '21%',
    });
    $('#powerAndLight').css({ position: 'absolute', top: '62%', width: '20%' });
    $('#lightrays').css({
      position: 'absolute',
      top: '-85%',
      left: '-297%',
      width: '300%',
    });
    $('#bubblesBeaker').css({
      position: 'absolute',
      top: '52%',
      left: '7%',
      width: '15%',
      height: '15%',
    });

    $('#powerSourceImg').css({ width: '25%' });
    $('#beakerImg').css({ width: '75% !important' });
  }
}
