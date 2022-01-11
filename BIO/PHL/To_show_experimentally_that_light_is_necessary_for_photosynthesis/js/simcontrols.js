////variable declaration

var power = 0;
var Int2;
var color = 0;
var dist = 0;
var degree = 0;
var count = 0;
var calc = 0;
var calc1 = 0;
var sec = 0;
var min = 0;
var min0 = 0;
var sec0 = 0;
var powerArray = [];
var distanceArray = [];
var colorArray = [];
var tooltipMsg = [];
var msgs = [];
var bubbleLabel;
var minLabel;
var secLabel;
var imgarray = [
  ['lightwhite.png', 'lightred.png', 'lightgreen.png', 'lightblue.png'],
  ['darkwhite.png', 'darkred.png', 'darkgreen.png', 'darkblue.png'],
];
//ready function
$(document).ready(function () {
  /*$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	 $('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	 $('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	 $(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	 */
  document.getElementById('expName').innerHTML = gt.gettext(
    'সালোকসংশ্লেষণে আলোর গুরুত্ব'
  );
  document.getElementById('clockBody').style.visibility = 'visible';
  document.getElementById('needle').style.visibility = 'visible';
  var j = 0;
  tooltipMsg = [
    gt.gettext('বীকার'),
    gt.gettext('টেস্ট টিউব'),
    gt.gettext('ফানেল'),
    gt.gettext('এলোডিয়া উদ্ভিদ'),
    gt.gettext('বেকিং সোডা দ্রবণ'),
    gt.gettext('শক্তির উৎস'),
    gt.gettext('স্কেল'),
  ];
  colorArray = [
    gt.gettext('সাদা'),
    gt.gettext('লাল'),
    gt.gettext('সবুজ'),
    gt.gettext('নীল'),
  ];
  $('#powerLabel').html(gt.gettext('পাওয়ার উত্স নির্বাচন করুন:'));
  $('#ditanceLabel').html(gt.gettext('পাওয়ার উত্সের দূরত্ব নির্বাচন করুন:'));
  $('#colorLabel').html(gt.gettext('ফিল্টারের রঙ নির্বাচন করুন:'));
  $('#start').attr('value', gt.gettext('শুরু করুন'));
  $('#stop').attr('value', gt.gettext('থামুন'));
  $('#reset').attr('value', gt.gettext('পুনরায় শুরু করুন'));
  bubbleLabel = gt.gettext('গঠিত বুদবুদ সংখ্যা:');
  minLabel = gt.gettext(' মিনিট');
  secLabel = gt.gettext(' সেকেন্ড');
  $.getJSON(simPath + 'js/jsonData.json', function (json1) {
    for (j = 0; j < 2; j++) {
      powerArray[j] = json1.Lights.Watts.Watt[j].value;
    }
    for (j = 0; j < 2; j++) {
      distanceArray[j] = json1.Lights.Distance.Dist[j].value;
    }

    for (var i = 0; i < powerArray.length; i++) {
      document.lister.thelist0.options[i] = new Option(powerArray[i], i);
    }
    for (var i = 0; i < distanceArray.length; i++) {
      document.lister.thelist1.options[i] = new Option(distanceArray[i], i);
    }
    for (var i = 0; i < colorArray.length; i++) {
      document.lister.thelist2.options[i] = new Option(colorArray[i], i);
    }
    $('#beakerDiv').qtip({
      content: tooltipMsg[0],
      style: {
        textAlign: 'center',
        'font-size': 13,
        color: '#593E1A',
        width: 125,
        border: { width: 1, radius: 3 },
        tip: true,
        name: 'cream',
      },
      position: {
        corner: { target: 'topRight', tooltip: 'bottomLeft' },
        target: 'mouse',
      },
    });
    $('#testtubeDiv').qtip({
      content: tooltipMsg[1],
      style: {
        textAlign: 'center',
        'font-size': 13,
        color: '#593E1A',
        width: 125,
        border: { width: 1, radius: 3 },
        tip: true,
        name: 'cream',
      },
      position: {
        corner: { target: 'topRight', tooltip: 'bottomLeft' },
        target: 'mouse',
      },
    });
    $('#funnelDiv').qtip({
      content: tooltipMsg[2],
      style: {
        textAlign: 'center',
        'font-size': 13,
        color: '#593E1A',
        width: 125,
        border: { width: 1, radius: 3 },
        tip: true,
        name: 'cream',
      },
      position: {
        corner: { target: 'topRight', tooltip: 'bottomLeft' },
        target: 'mouse',
      },
    });
    $('#ElodeaDiv').qtip({
      content: tooltipMsg[3],
      style: {
        textAlign: 'center',
        'font-size': 13,
        color: '#593E1A',
        width: 125,
        border: { width: 1, radius: 3 },
        tip: true,
        name: 'cream',
      },
      position: {
        corner: { target: 'topRight', tooltip: 'bottomLeft' },
        target: 'mouse',
      },
    });
    $('#solnDiv').qtip({
      content: tooltipMsg[4],
      style: {
        textAlign: 'center',
        'font-size': 13,
        color: '#593E1A',
        width: 125,
        border: { width: 1, radius: 3 },
        tip: true,
        name: 'cream',
      },
      position: {
        corner: { target: 'topRight', tooltip: 'bottomLeft' },
        target: 'mouse',
      },
    });
    $('#powerSourceImg').qtip({
      content: tooltipMsg[5],
      style: {
        textAlign: 'center',
        'font-size': 13,
        color: '#593E1A',
        width: 125,
        border: { width: 1, radius: 3 },
        tip: true,
        name: 'cream',
      },
      position: {
        corner: { target: 'topRight', tooltip: 'bottomLeft' },
        target: 'mouse',
      },
    });
    $('#scaleImg').qtip({
      content: tooltipMsg[6],
      style: {
        textAlign: 'center',
        'font-size': 13,
        color: '#593E1A',
        width: 125,
        border: { width: 1, radius: 3 },
        tip: true,
        name: 'cream',
      },
      position: {
        corner: { target: 'topRight', tooltip: 'bottomLeft' },
        target: 'mouse',
      },
    });
  });
});
//function for select power source dropdown
function selectpower_FN(evt) {
  degree = 0;
  power = evt.selectedIndex;
  tooltipHidden();
  tooltipforClockhidden();
  rays();
}
//function for select color dropdown
function selectcolor_FN(evt) {
  degree = 0;
  color = evt.selectedIndex;
  rays();
  tooltipHidden();
  tooltipforClockhidden();
}
function rays() {
  for (var m = 0; m < powerArray.length; m++) {
    for (l = 0; l < colorArray.length; l++) {
      if (power == m && color == l) {
        document.getElementById('lightrays').src =
          simPath + 'images/' + imgarray[m][l];
      }
    }
  }
}
//function for select distance dropdown
function selectdistance_FN(evt) {
  degree = 0;
  dist = evt.selectedIndex;
  tooltipHidden();
  tooltipforClockhidden();
  if (evt.selectedIndex == 0) {
    $('#powerAndLight').animate({
      left: '53.35%',
    });
  } else {
    $('#powerAndLight').animate({
      left: '93%',
    });
  }
}
//function to start experiment
function start_FN() {
  degree = 0;
  tooltipHidden();
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
  document.getElementById('thelist0').disabled = true;
  document.getElementById('thelist1').disabled = true;
  document.getElementById('thelist2').disabled = true;
  tooltipforClockhidden();
  document.getElementById('clockBody').style.visibility = 'visible';
  document.getElementById('needle').style.visibility = 'visible';
  Int2 = setInterval(rotateTarget, 40);
  bubbles();
}
function tooltipforClockhidden() {
  $('#tooltipforClock').css({ visibility: 'hidden' });
  $('#tooltipLabelforClock').css({ visibility: 'hidden' });
}
//function for rotation of needle
function rotateTarget() {
  degree++;
  document.getElementById('needle').style.webkitTransformOrigin = '76% 89%';
  document.getElementById('needle').style.webkitTransform =
    'rotate(' + degree + 'deg)';
  document.getElementById('needle').style.MozTransformOrigin = '3px 25px';
  document.getElementById('needle').style.MozTransform =
    'rotate(' + degree + 'deg)';
}

//function to produce bubbles according to each combo selected
function bubbles() {
  if (
    (power == 0 && dist == 0 && color == 0) ||
    (power == 0 && dist == 1 && color == 2)
  ) {
    $('.x1').css({ visibility: 'visible' });
    $('.x1').addClass('x1Ani');
    count = 3;
  } else if (
    (power == 0 && dist == 0 && color == 1) ||
    (power == 0 && dist == 1 && color == 3) ||
    (power == 1 && dist == 0 && color == 0) ||
    (power == 1 && dist == 0 && color == 2)
  ) {
    $('.x2').css({ visibility: 'visible' });
    $('.x2').addClass('x2Ani');
    count = 6;
  } else if (
    (power == 0 && dist == 0 && color == 2) ||
    (power == 1 && dist == 1 && color == 1)
  ) {
    $('.x3').addClass('x3Ani');
    $('.x3').css({ visibility: 'visible' });
    count = 5;
  } else if (power == 0 && dist == 0 && color == 3) {
    $('.x4').addClass('x4Ani');
    $('.x4').css({ visibility: 'visible' });
    count = 10;
  } else if (
    (power == 0 && dist == 1 && color == 0) ||
    (power == 1 && dist == 1 && color == 2)
  ) {
    $('.x5').addClass('x5Ani');
    $('.x5').css({ visibility: 'visible' });
    count = 2;
  } else if (
    (power == 0 && dist == 1 && color == 1) ||
    (power == 1 && dist == 1 && color == 0)
  ) {
    $('.x6').addClass('x6Ani');
    $('.x6').css({ visibility: 'visible' });
    count = 4;
  } else if (power == 1 && dist == 0 && color == 1) {
    $('.x7').addClass('x7Ani');
    $('.x7').css({ visibility: 'visible' });
    count = 12;
  } else if (power == 1 && dist == 0 && color == 3) {
    $('.x8').addClass('x8Ani');
    $('.x8').css({ visibility: 'visible' });
    count = 15;
  } else if (power == 1 && dist == 1 && color == 3) {
    $('.x9').addClass('x9Ani');
    $('.x9').css({ visibility: 'visible' });
    count = 8;
  }
}

//function for stop
function stop_FN() {
  document.getElementById('stop').disabled = true;
  clearInterval(Int2);
  bubble_Hidden();
  bubbleRemove();
  $('#tooltipLabel').css({ visibility: 'visible' });
  $('#tooltip2').css({ visibility: 'visible' });
  $('#tooltipforClock').css({ visibility: 'visible' });
  $('#tooltipLabelforClock').css({ visibility: 'visible' });
  calc = Math.ceil((degree * count) / 365);
  // alert(degree+"---degree"+"---"+calc);
  calc1 = (degree / 60).toFixed(1);
  //  <!--1min=60 sec-->
  // alert(calc1)
  calc1 = calc1 * 10;
  min0 = calc1 / 60;
  min = Math.floor(min0);
  sec0 = min0 - min;
  sec = Math.ceil(sec0 * 60); //.toFixed(1)
  document.getElementById('tooltipLabel').innerHTML = bubbleLabel + ' ' + calc;
  document.getElementById('tooltipLabelforClock').innerHTML =
    min + '&nbsp;' + minLabel + '&nbsp;' + sec + '&nbsp;' + secLabel;
}
//bubble hidden when time reaches 1 min
function bubble_Hidden() {
  $('.x1,x2,x3,x4,x5,x6,x7,x8,x9').css({ visibility: 'hidden' });
  $('.bubbleBeakr').css({ visibility: 'hidden' });
  document.getElementById('start').disabled = false;
  document.getElementById('thelist0').disabled = false;
  document.getElementById('thelist1').disabled = false;
  document.getElementById('thelist2').disabled = false;
}
//remove bubble animation
function bubbleRemove() {
  $('.x1').removeClass('x1Ani');
  $('.x2').removeClass('x2Ani');
  $('.x3').removeClass('x3Ani');
  $('.x4').removeClass('x4Ani');
  $('.x5').removeClass('x5Ani');
  $('.x6').removeClass('x6Ani');
  $('.x7').removeClass('x7Ani');
  $('.x8').removeClass('x8Ani');
  $('.x9').removeClass('x9Ani');
}
//tooltip indication for bubbles
function tooltipHidden() {
  $('#tooltipLabel').css({ visibility: 'hidden' });
  $('#tooltip2').css({ visibility: 'hidden' });
}
