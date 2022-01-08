var controlText,
  titrateItemstype,
  btnLabel,
  testtArray,
  toolTipMsgArray,
  restLbl,
  helpMsg;
window.onload = function init() {
  document.getElementById('expName').innerHTML = gt.gettext('');
  $('#olabmenuBar li:first-child a').html(gt.gettext('সাহায্য করুন!'));
  //$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
  //$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
  //$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
  controlText = [
    gt.gettext('ড্রপ হার:'),
    gt.gettext('টাইট্রেট:'),
    gt.gettext('টাইট্রেটের মোলারিটি, M1: '),
    gt.gettext('টাইট্রেটের আয়তন, V1:'),
    gt.gettext('ফলাফল'),
    gt.gettext('টাইট্রেন্টের মোলারিটি, a '),
    '(V1 x M1 x n2) /(V2 x n1)',
    gt.gettext('টাইট্রান্টের মোলের সংখ্যা, n2'),
    gt.gettext('টাইট্রান্টের মোলের সংখ্যা n1'),
    gt.gettext('টাইট্রান্টের মোলার ভর, b'),
    gt.gettext('প্রদত্ত টাইট্রেন্টের শক্তি, [a x b]'),
    '  g/lit',
    '  M ',
    gt.gettext('টাইট্রান্টের আয়তন দেখান V2'),
    'পাতলা H<sub>2</sub>SO<sub>4</sub>',
    gt.gettext('তাপমাত্রা: '),
  ];
  titrateItemstype = [gt.gettext('মোহরের লবণ'), gt.gettext('অক্সালিক অ্যাসিড')];
  btnLabel = [gt.gettext('শুরু করুন'), gt.gettext('থামুন')];
  testtArray = [gt.gettext('Correct.'), gt.gettext('ভুল! আবার চেষ্টা করুন')];
  toolTipMsgArray = [
    gt.gettext('বুরেট'),
    gt.gettext('টাইট্রেশন ফ্লাস্ক'),
    gt.gettext('ক্ল্যাম্প স্ট্যান্ড'),
    gt.gettext('টাইট্রেশন শুরু করতে অগ্রভাগ বা স্টার্ট বোতামে ক্লিক করুন।'),
    gt.gettext('টাইট্রেশন বন্ধ করতে অগ্রভাগ বা স্টপ বোতামে ক্লিক করুন।'),
    gt.gettext('টাইট্রেশন রিসেট করতে রিসেট বোতামে ক্লিক করুন।'),
    gt.gettext('বার্নার'),
  ];
  restLbl = gt.gettext('রিসেট');
  helpMsg = [
    gt.gettext('টাইট্রেট নির্বাচন করুন।'),
    gt.gettext('ড্রপের হার বাড়ান/কমান।'),
    gt.gettext('টাইট্রেটের মোলারিটি পরিবর্তন করুন।'),
    gt.gettext('টাইট্রেটের ভলিউম পরিবর্তন করুন।'),
    gt.gettext(
      'টিউবটি টেনে আনুন এবং </br> সালফিউরিক অ্যাসিডটি </br> শঙ্কুযুক্ত ফ্লাস্কে ঢেলে দিন </br> মোহরের লবণ।'
    ),
    gt.gettext('শঙ্কু ফ্লাস্কটি টেনে আনুন এবং <br> এটিকে বুরেটের নীচে রাখুন।'),
    gt.gettext(
      'টাইট্রেশন শুরু করতে অগ্রভাগ বা </br> স্টার্ট বোতামে ক্লিক করুন।'
    ),
    gt.gettext('টাইট্রান্টের ভলিউম দেখাতে চেকবক্সে ক্লিক করুন।'),
    gt.gettext(
      'শঙ্কু ফ্লাস্কটি টেনে আনুন এবং <br> এটিকে বার্নারের উপরে রাখুন।'
    ),
    gt.gettext('গরম করা শুরু করতে বার্নার <br> গাঁটে ক্লিক করুন।'),
    gt.gettext(
      'টিউবটি টেনে আনুন এবং </br> সালফিউরিক অ্যাসিডটি শঙ্কুযুক্ত </br> ফ্লাস্কে ঢেলে দিন </br> অক্সালিক অ্যাসিড।'
    ),
  ];
  //*--Ready function---------
  $(document).ready(function () {
    //*--Apply selectable false--------
    $(
      '#bgCanvas,#buretteWater,#burette,#zoomArea,#drops,#buretteZoom,#solutionDiv,#volTitrant,#flask,#tooltp,#popup,#label_board,#burner,#burner_btn,#testtubeStand,#solutionBgDiv'
    ).mousedown(function (event) {
      event.preventDefault();
    });
    //*--Array declaration----------

    var testtubeImgChange = [
      'testtube_with_solution.png',
      'testtube_no_solution.png',
    ];
    var wrongorcorrectImg = ['correct.png', 'wrong.png'];
    var reactions = [
      '2KMnO<sub>4</sub>  +  8H<sub>2</sub>SO<sub>4</sub> +  10FeSO<sub>4</sub>(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.6H<sub>2</sub>O ' +
        String.fromCharCode(8594) +
        ' K<sub>2</sub>SO<sub>4</sub>+2MnSO<sub>4</sub>+5Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>+ 10(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>+68H<sub>2</sub>O',
      '2KMnO<sub>4</sub> + 2H<sub>2</sub>SO<sub>4</sub> + <br> 5C<sub>2</sub>H<sub>2</sub>O<sub>4</sub>.2H<sub>2</sub>O  ' +
        String.fromCharCode(8594) +
        ' K<sub>2</sub>SO<sub>4</sub> + <br> 2MnSO<sub>4</sub> + 18H<sub>2</sub>O+ 10CO<sub>2</sub>',
    ];
    var burneronoffImg = ['burner_off.png', 'burner_on.png'];
    var sampleSoln = ['conical_flask_solution.png', 'conicalFlskWaterPink.png'];
    var dragObj = ['testtube', 'conicalflaskArea'];
    var displayArray = ['block', 'none'];
    var conc = [1, 2],
      molariystartValue = [2, 1],
      numMoles = [10, 5];
    //*--variable declaration------------------
    var noMolesTitrant = 2,
      noMolesTitrate = numMoles[0];
    var bgTop = $('#bgCanvas').position().top;
    var bgLeft = $('#bgCanvas').position().left;
    var solnHeight = $('#solutionDiv').height();
    var buretteZoomScaleTop = $('#buretteZoomScale').position().top;
    var solnDivTop = bgTop + 72,
      dropTop = solnDivTop - 5,
      molarMassVal = 158,
      vcolorTop = solnDivTop;
    var solnBgDivTop = bgTop + 71;
    var molarMass = ' ' + molarMassVal + ' g/mol';
    var dropCnt = 0,
      TotalVolOfTitrate = 0,
      dropCntTotal = 401;
    var solnTop = $('#soln').position().top;
    var solnBgTop = $('#solnBG').position().top;
    var buretteWaterTop = $('#buretteWater').position().top;
    var M1 = 1,
      V1 = 10,
      titrantVol = 0.1,
      titrantStopVol = 0,
      rotateEvt,
      rotateCnt = 0,
      rotateCnt2 = 5,
      dropEvt;
    var speed = 2000,
      waterInc = 0.215,
      zooomwaterInc = 0.75,
      solnInc = 0.07;
    var strength,
      keyFlag = false,
      animFlag = false,
      flameFlag = false;
    var flaming,
      tempChange,
      selectedTitrate = titrateItemstype[0];
    var startTemp = 20,
      maxSpeed = 3000,
      minSpeed = 2500;
    var solnVioletWidth = 10;
    var solnVioletleft = 25;
    //*--Calling functionn for randomly selecting one number----
    randomNumber = getRandom(0, conc.length - 1);
    var M2 = molariystartValue[randomNumber];
    //*--Loading option values in drop down----
    addintoDropDown($('#titrate'), titrateItemstype);
    //*--Add label for all controls----
    addLabel();
    //*--Start drag the testtube----
    startPour();
    //*--Show all tooltips---------
    toolTipMsgChange();
    $('#tooltp').html(toolTipMsgArray[3]);
    //*--Function to add values into the drop down---
    function addintoDropDown(getId, valueSet) {
      var selected = getId;
      $.each(valueSet, function (val, text) {
        selected.append($('<option></option>').val(val).html(text));
      });
    }
    //*--Function to change speed slider---
    $('#speed').change(function () {
      $('#speedchg').html(this.value);
      speed = this.value * -minSpeed + maxSpeed;
      dropsFun();
    });
    //*--Function to change molarity slider---
    $('#molarity').change(function () {
      M1 = this.value;
      $('#molaritychg').html(M1);
      changeEvent(); //Reset all events
    });
    //*--Function to change volume slider---
    $('#volume').change(function () {
      V1 = this.value;
      $('#volumechg').html(V1);
      changeEvent(); //Reset all events
    });
    //*--Function to select the Titrate---
    $('#titrate').change(function () {
      if (this.value == 0) {
        noMolesTitrate = numMoles[0];
        conc = [1, 2];
        $('#reaction').html(reactions[0]);
        selectedTitrate = titrateItemstype[0];
      } else {
        conc = [2, 4];
        noMolesTitrate = numMoles[1];
        $('#reaction').html(reactions[1]);
        selectedTitrate = titrateItemstype[1];
      }
      changeEvent(); //Reset all events
      if (tripClickFlag == true) {
        trip.stop();
        tripClickFlag = false;
      }
    });
    //*--Function to click the on button to start the flame ---
    $('#burnerOnOff').click(function () {
      var currentimg = $('#burner_btn').attr('src');
      if (currentimg == simPath + 'images/' + burneronoffImg[0]) {
        $('#conicalflaskArea').draggable({ disabled: true });
        $('#burner_btn').attr('src', simPath + 'images/' + burneronoffImg[1]);
        $('#flame').css({ display: displayArray[0] });
        flaming = setInterval(flames, 50);
        tempChange = setInterval(temperatureChange, 1000);
        flameFlag = true;
      }
    });
    //*--Function to show the flame ---------
    function flames() {
      if ($('.flame1').css('display') == 'block') {
        $('.flame1,.flame3,.flame4').hide();
        $('.flame2').show();
      } else if ($('.flame2').css('display') == 'block') {
        $('.flame1,.flame2,.flame4').hide();
        $('.flame3').show();
      } else if ($('.flame3').css('display') == 'block') {
        $('.flame1,.flame3,.flame2').hide();
        $('.flame4').show();
      } else {
        $('.flame2,.flame3,.flame4').hide();
        $('.flame1').show();
      }
    }
    //*--Function to show temperature change  ---------
    function temperatureChange() {
      startTemp = startTemp + 10;
      $('#temperature').css({ display: displayArray[0] });
      $('#tempValue').html(startTemp + String.fromCharCode(176) + 'C');
      if (startTemp == 90) {
        $('#conicalflaskArea').css({ cursor: 'pointer' });
        $('#conicalflaskArea').draggable({ disabled: false });
        dragItem(
          'conicalflaskArea',
          bgTop + 200,
          bgTop + 270,
          bgLeft + 200,
          bgLeft + 320,
          236,
          272
        );
        $('#temperature,#burnerOnOff').css({ display: displayArray[1] });
        $('#flame').css({ display: displayArray[1] });
        $('#burner_btn').attr('src', simPath + 'images/' + burneronoffImg[0]);
        clearInterval(tempChange);
        clearInterval(flaming);
      }
    }
    //*--Function to start the testtube animation ---------
    function startPour() {
      dragItem(
        'testtube',
        bgTop + 170,
        bgTop + 250,
        bgLeft + 130,
        bgLeft + 200,
        236,
        272
      );
    }
    //*--Function to start drag events---------
    function dragItem(
      sampleid,
      minTop,
      maxTop,
      minLeft,
      maxLeft,
      topPos,
      leftPos
    ) {
      //*-----Start drag event ----------------
      $('#' + sampleid).draggable({
        //stop the drag event
        stop: function (event, ui) {
          if (
            this.offsetTop >= minTop &&
            this.offsetLeft >= minLeft &&
            this.offsetTop <= maxTop &&
            this.offsetLeft <= maxLeft
          ) {
            if (sampleid == dragObj[0]) {
              // Testtube
              if (animFlag == false) {
                $('#testtubeImg').attr(
                  'src',
                  simPath + 'images/' + testtubeImgChange[1]
                );
                $('#testtube').draggable({ disabled: true });
                $('#testtube').css({
                  top: bgTop + 179 + 'px',
                  left: bgLeft + 148 + 'px',
                });
                $('#testtube').rotate(90);
                $('#solnPour,#solnPourStart').css('display', 'block');
                $('#solnPour,#solnPourStart').css('opacity', '1');
                solnHeight = solnHeight + 5;
                solnDivTop = solnDivTop - 5;
                solnBgDivTop = solnBgDivTop - 5;
                solnTop = solnTop + 5;
                solnBgTop = solnBgTop + 5;
                $('#solutionBgDiv').animate({ top: solnBgDivTop + 'px' });
                $('#solnBG').animate({ top: solnBgTop + 'px' });
                $('#solutionDiv').animate({
                  height: solnHeight + 'px',
                  top: solnDivTop + 'px',
                });
                $('#soln').animate({ top: solnTop + 'px' });
                $('#solutionBgDiv2').animate({ top: solnBgDivTop + 'px' });
                $('#solnBG2').animate({ top: solnBgTop + 'px' });
                $('#soln2').animate({ top: solnTop + 'px' });
                $('#solutionDiv2').animate(
                  {
                    height: solnHeight + 'px',
                    top: solnDivTop + 'px',
                  },
                  500,
                  function () {
                    $('#solnPour,#solnPourStart').animate(
                      {
                        opacity: '0',
                      },
                      500,
                      function () {
                        $('#solnPour,#solnPourStart').css('display', 'none');
                        $('#testtube').rotate(0);
                        $('#testtube').css({
                          top: bgTop + 100 + 'px',
                          left: bgLeft + 100 + 'px',
                        });
                        $('#testtube').animate({
                          top: bgTop + 223 + 'px',
                          left: bgLeft + 75 + 'px',
                        });
                        animFlag = true;
                        dragConicalFlask();
                      }
                    );
                  }
                );
              } else {
                this.style.left = bgLeft + 75 + 'px';
                this.style.top = bgTop + 223 + 'px';
              }
            } else {
              //Conical flask
              this.style.left = bgLeft + leftPos + 'px';
              this.style.top = bgTop + topPos + 'px';
              if (selectedTitrate == titrateItemstype[0]) {
                $('#start').removeAttr('disabled');
                $('#onoffCommon').css({ display: displayArray[0] });
              } else {
                if (flameFlag == false) {
                  $('#burnerOnOff').css({ display: displayArray[0] });
                } else {
                  $('#start').removeAttr('disabled');
                  $('#onoffCommon').css({ display: displayArray[0] });
                }
              }
            }
          } else {
            if (sampleid == dragObj[0]) {
              //Testtube
              this.style.left = bgLeft + 75 + 'px';
              this.style.top = bgTop + 223 + 'px';
              if (animFlag == false) {
                startPour();
              } else {
                dragConicalFlask();
              }
            } else {
              // Conical flask
              $('#onoffCommon').css({ display: displayArray[1] });
              $('#start').attr('disabled', 'disabled');
              if (flameFlag == false) {
                this.style.left = bgLeft + 160 + 'px';
                this.style.top = bgTop + 246 + 'px';
              } else {
                this.style.left = bgLeft + 425 + 'px';
                this.style.top = bgTop + 158 + 'px';
              }
            }
          }
        },
      });
    }
    //*--Function to call  conical flask drag event--------
    function dragConicalFlask() {
      $('#conicalflaskArea').draggable({ disabled: false });
      $('#conicalflaskArea').css({ cursor: 'pointer' });
      if (selectedTitrate == titrateItemstype[0]) {
        // Mohr's Salt
        dragItem(
          'conicalflaskArea',
          bgTop + 200,
          bgTop + 270,
          bgLeft + 200,
          bgLeft + 320,
          236,
          272
        );
      } else {
        // Oxalic acid
        dragItem(
          'conicalflaskArea',
          bgTop + 70,
          bgTop + 180,
          bgLeft + 350,
          bgLeft + 500,
          158,
          425
        );
      }
    }

    //*--Function to click start button to start titration---
    $('#start,#onoffCommon').click(function () {
      $('#conicalflaskArea').draggable({ disabled: true });
      $('#violetDiv').css('visibility', 'hidden');
      $('#solutionDiv,#solutionBgDiv').css('visibility', 'visible');
      $('#solutionDiv2,#solutionBgDiv2').css('visibility', 'hidden');
      if ($('#start').val() == btnLabel[0]) {
        $('#buretteOff').css({ display: displayArray[1] });
        $('#buretteOn').css({ display: displayArray[0] });
        $('#start').val(btnLabel[1]);
        rotateEvt = setInterval(rotateFunction, 100);
        dropsFun();
        titrantStopVol = TotalVolOfTitrate;
        $('#volTitrant').html(' ' + titrantStopVol + '  ml');
        $('#molarity,#volume').attr('disabled', 'disabled');
        $(
          '#molTitrant,#molesTitrate,#molesTitrant,#strengthval,#displayResult'
        ).removeAttr('disabled');
      } else {
        stopRotation();
      }
    });

    function dropsFun() {
      clearInterval(dropEvt);
      dropEvt = setInterval(dropFn, speed);
    }
    function clearIntervalfn() {
      $('#drops').stop(true);
      $('#violetDiv').css('visibility', 'hidden');
      clearInterval(dropEvt);
      clearInterval(rotateEvt);
      $('#burette').css('z-index', '1');
    }
    function rotateFunction() {
      if (rotateCnt < 5) {
        $('#flask,#soln,#solnBG,#vImg').rotate(rotateCnt);
        rotateCnt++;
      } else {
        if (rotateCnt2 > -3) {
          $('#flask,#soln,#solnBG,#vImg').rotate(rotateCnt2);
          rotateCnt2--;
        } else {
          rotateCnt = 0;
          rotateCnt2 = 5;
        }
      }
    }
    //*--Function to drop solution---
    function dropFn() {
      if ($('#start').val() == btnLabel[1]) {
        $('#drops').css({
          display: displayArray[0],
          top: bgTop + 3 + 'px',
        });
        $('#violetDiv').css('visibility', 'hidden');
      } else {
        $('#drops').css({
          display: displayArray[1],
          top: bgTop + 3 + 'px',
        });
        $('#violetDiv').css('visibility', 'hidden');
      }
      solnVioletWidth = 10;
      solnVioletleft = 293;
      $('#violetDiv').css({
        width: solnVioletWidth + 'px',
        left: solnVioletleft + 'px',
      });
      $('#drops').animate(
        {
          top: dropTop + 'px',
        },
        function () {
          $('#drops').css({
            display: displayArray[1],
            top: bgTop + 3 + 'px',
          });
          $('#violetDiv').animate({ width: '23px', left: '290px' });
          solutionIncrement();
        }
      );
    }
    //Function to solution increment
    function solutionIncrement() {
      if (dropCnt < dropCntTotal) {
        if ($('#start').val() == btnLabel[1]) {
          dropCnt++;
          /*---- Burette  solution increment ---------------*/
          buretteWaterTop = buretteWaterTop + waterInc;
          $('#buretteWater').css({ top: buretteWaterTop });
          /*---- Burette zoom area: solution increment----- */
          buretteZoomScaleTop = buretteZoomScaleTop - zooomwaterInc;
          $('#buretteZoomScale').css({ top: buretteZoomScaleTop + 'px' });
          /*------ Conical flask solution increment------ */
          solnHeight = solnHeight + solnInc;
          solnDivTop = solnDivTop - solnInc;
          solnBgDivTop = solnBgDivTop - solnInc;
          solnTop = solnTop + solnInc;
          solnBgTop = solnBgTop + solnInc;
          dropTop = solnDivTop - 5;
          vcolorTop = solnDivTop;
          incrementSoln(); //conical flask solution increses
          /*----calculate readings--------------*/
          calculation();
          $('#violetDiv').css({ top: vcolorTop + 233 + 'px' });
          $('#violetDiv').css('visibility', 'visible');
        } else {
          $('#violetDiv').css('visibility', 'hidden');
        }
      } else {
        $('#start').val(btnLabel[0]);
        $('#drops').animate('destroy');
        $('#violetDiv').css('visibility', 'hidden');
        $('#onoffCommon').css({ display: displayArray[1] });
        $('#start').attr('disabled', 'disabled');
        $('#buretteOff').css({ display: displayArray[0] });
        $('#buretteOn').css({ display: displayArray[1] });
        $('#flask,#soln,#solnBG,#vImg').rotate(0);
        clearIntervalfn();
      }
    }
    //*---Function to increse solution
    function incrementSoln() {
      $('#solutionBgDiv').css({ top: solnBgDivTop + 'px' });
      $('#solnBG').css({ top: solnBgTop + 'px' });
      $('#solutionDiv').css({
        height: solnHeight + 'px',
        top: solnDivTop + 'px',
      });
      $('#soln').css({ top: solnTop + 'px' });
      $('#solutionBgDiv2').css({ top: solnBgDivTop + 'px' });
      $('#solnBG2').css({ top: solnBgTop + 'px' });
      $('#solutionDiv2').css({
        height: solnHeight + 'px',
        top: solnDivTop + 'px',
      });
      $('#soln2').css({ top: solnTop + 'px' });
    }
    //*--Function to calculate strngth , volume of titrant and molarity of titrant ---
    function calculation() {
      titrantVol = (
        (M1 * V1 * noMolesTitrant) /
        (noMolesTitrate * conc[randomNumber])
      ).toFixed(1);
      M2 = (M1 * noMolesTitrant * V1) / (titrantVol * noMolesTitrate);
      strength = M2 * molarMassVal;
      TotalVolOfTitrate = (dropCnt / 10).toFixed(1);
      $('#volTitrant').html(' ' + TotalVolOfTitrate + ' ml');
      if (TotalVolOfTitrate == titrantVol) {
        changeColor();
      }
    }
    //*--Function to change color of the solution ---
    function changeColor() {
      $('#soln').attr('src', simPath + 'images/' + sampleSoln[1]);
    }
    //*--Function to calculate no. of moles in titrant---
    $('#molesTitrant').keyup(function () {
      if (keyFlag == true) {
        if ($('#molesTitrant').val() == noMolesTitrant) {
          $('#correct1').attr(
            'src',
            simPath + 'images/' + wrongorcorrectImg[0]
          );
        } else {
          $('#correct1').attr(
            'src',
            simPath + 'images/' + wrongorcorrectImg[1]
          );
        }
        $('#correct1').css({ display: displayArray[0] });
      }
    });
    //*--Function to calculate no. of moles in titrate --
    $('#molesTitrate').keyup(function () {
      if (keyFlag == true) {
        if ($('#molesTitrate').val() == noMolesTitrate) {
          $('#correct2').attr(
            'src',
            simPath + 'images/' + wrongorcorrectImg[0]
          );
        } else {
          $('#correct2').attr(
            'src',
            simPath + 'images/' + wrongorcorrectImg[1]
          );
        }
        $('#correct2').css({ display: displayArray[0] });
      }
    });
    //*--Function to calculate molarity of titrant ---
    $('#molTitrant').keyup(function () {
      if (keyFlag == true) {
        var molarity = M2;
        molarity = roundNumber(molarity, 2);
        var molarityEnter = $('#molTitrant').val();
        molarityEnter = roundNumber(molarityEnter, 2);
        if (molarity == molarityEnter) {
          $('#correct3').attr(
            'src',
            simPath + 'images/' + wrongorcorrectImg[0]
          );
        } else {
          $('#correct3').attr(
            'src',
            simPath + 'images/' + wrongorcorrectImg[1]
          );
        }
        $('#correct3').css({ display: displayArray[0] });
      }
    });
    //*--Function to calculate strength of titrant ---
    $('#strengthval').keyup(function () {
      if (keyFlag == true) {
        $('#result').css({ display: displayArray[0] });
        $('#strengthval').removeAttr('disabled');
        var strengthValue = strength;
        strengthValue = roundNumber(strengthValue, 2);
        var strengthValEnter = $('#strengthval').val();
        strengthValEnter = roundNumber(strengthValEnter, 2);
        if (strengthValEnter == strengthValue) {
          $('#correct').attr('src', simPath + 'images/' + wrongorcorrectImg[0]);
          $('#resTxt').html(testtArray[0]);
        } else {
          $('#correct').attr('src', simPath + 'images/' + wrongorcorrectImg[1]);
          $('#resTxt').html(testtArray[1]);
        }
      }
    });
    $('#strengthval,#molTitrant,#molesTitrant,#molesTitrate').keypress(
      function (key) {
        if (key.charCode > -1 && key.charCode <= 57) {
          keyFlag = true;
          return true;
        } else {
          keyFlag = false;
          return false;
        }
      }
    );
    $('#strengthval,#molTitrant,#molesTitrant,#molesTitrate').change(
      function () {
        dotRestrict(this);
      }
    );
    //*--Function to reset all events ---
    function changeEvent() {
      $('#testtube').css({
        '-webkit-transform': '',
      });
      stopRotation();
      $('#molTitrant,#molesTitrate,#molesTitrant,#strengthval').attr(
        'disabled',
        'disabled'
      );
      (TotalVolOfTitrate = 0), (titrantVol = 0.1), (dropCnt = 0);
      $('#solutionDiv,#solutionDiv2').css({ height: '7px', top: '69px' });
      $('#soln,#soln2').css({ top: '-65px' });
      $('#solnBG,#solnBG2').css({ top: '-63px' });
      $('#solutionBgDiv,#solutionBgDiv2').css({ top: '68px' });
      $('#buretteZoomScale').css({ top: '-150px' });
      solnTop = $('#soln').position().top;
      solnBgTop = $('#solnBG').position().top;
      $('#buretteWater').css({ top: '0px' });
      buretteWaterTop = $('#buretteWater').position().top;
      solnHeight = $('#solutionDiv').height();
      buretteZoomScaleTop = $('#buretteZoomScale').position().top;
      $('#molarity,#volume').removeAttr('disabled');
      $('#correct1,#correct2,#correct3,#result').css({
        display: displayArray[1],
      });
      $('#result,#volTitrant,#onoffCommon').css({ display: displayArray[1] });
      $('#volTitrant').html(' ');
      $('#molesTitrant').val('');
      $('#molesTitrate').val('');
      $('#molTitrant').val('');
      $('#strengthval').val('');
      (waterInc = 0.215), (zooomwaterInc = 0.75), (solnInc = 0.07);
      solnDivTop = bgTop + 72;
      solnBgDivTop = bgTop + 71;
      dropTop = solnDivTop - 5;
      vcolorTop = solnDivTop;
      $('#soln').attr('src', simPath + 'images/' + sampleSoln[0]);
      $('#displayResult').removeAttr('checked');
      (keyFlag = false), (animFlag = false), (flameFlag = false);
      $('#testtube').css({ display: displayArray[0] });
      $('#testtubeImg').attr('src', simPath + 'images/' + testtubeImgChange[0]);
      $('#testtube').css({ top: bgTop + 223 + 'px', left: bgLeft + 75 + 'px' });
      $('#conicalflaskArea').draggable({ disabled: true });
      startPour();
      startTemp = 20;
      $('#temperature,#burnerOnOff').css({ display: displayArray[1] });
      $('#flame').css({ display: displayArray[1] });
      $('#burner_btn').attr('src', simPath + 'images/' + burneronoffImg[0]);
      clearInterval(tempChange);
      clearInterval(flaming);
      $('#conicalflaskArea').css({ top: 243 + 'px', left: 160 + 'px' });
      $('#start,#displayResult').attr('disabled', 'disabled');
      $('#start').val(btnLabel[0]);
      $('#solutionDiv2,#solutionBgDiv2').css('visibility', 'visible');
      $('#solutionDiv,#solutionBgDiv').css('visibility', 'hidden');
      $('#testtube').draggable({ disabled: false });
    }
    //*--Function to stop the rotation ---
    function stopRotation() {
      $('#buretteOff').css({ display: displayArray[0] });
      $('#buretteOn').css({ display: displayArray[1] });
      (rotateCnt = 0), (rotateCnt2 = 5);
      $('#flask,#soln,#solnBG,#vImg').rotate(0);
      $('#start').val(btnLabel[0]);
      $('#molarity,#volume').removeAttr('disabled');
      $('#drops').css({ display: displayArray[1], top: '240px' });
      clearIntervalfn();
    }
    //*--Function to click reset button to reset all events---
    $('#reset').click(function () {
      changeEvent(); //Reset all events
      window.location.reload();
    });
    //*--Function to call showToolTip function---
    function toolTipMsgChange() {
      showToolTip(
        'buretteDiv',
        toolTipMsgArray[0],
        'rightMiddle',
        'leftMiddle',
        130,
        2,
        15 + 'px',
        'leftMiddle'
      );
      showToolTip(
        'flask',
        toolTipMsgArray[1],
        'leftMiddle',
        'rightMiddle',
        130,
        2,
        15 + 'px',
        'rightMiddle'
      );
      showToolTip(
        'stand',
        toolTipMsgArray[2],
        'rightMiddle',
        'leftMiddle',
        130,
        2,
        15 + 'px',
        'leftMiddle'
      );
      showToolTip(
        'burner',
        toolTipMsgArray[6],
        'topBottom',
        'bottomMiddle',
        110,
        2,
        15 + 'px',
        'rightMiddle'
      );
    }
    //*--Function to show tooltip---
    function showToolTip(
      name,
      msg,
      tgt,
      tooltipPos,
      toolWidth,
      toolPad,
      toolFontSize,
      tipPos
    ) {
      $('#' + name).qtip({
        content: msg,
        position: { corner: { target: tgt, tooltip: tooltipPos } },
        style: {
          width: toolWidth,
          padding: toolPad,
          background: '#FFFF99',
          color: 'black',
          textAlign: 'center',
          fontSize: toolFontSize,
          border: { width: 1, radius: 5, color: '#FFFFCC' },
          tip: tipPos,
        },
      });
      $('#' + name).css({ cursor: 'pointer' });
    }

    /*..Function for loading tooltip....	*/
    $('#onoffCommon')
      .mouseover(function () {
        $('#popup').css({ display: displayArray[0] });
        if ($('#start').val() == btnLabel[1]) {
          $('#tooltp').html(toolTipMsgArray[4]);
        } else {
          if ($('#start').is(':disabled') == false) {
            $('#tooltp').html(toolTipMsgArray[3]);
          } else {
            $('#tooltp').html(toolTipMsgArray[5]);
          }
        }
      })
      .mouseout(function () {
        $('#popup').css({ display: 'none' });
      });

    //*--Function to show the result---
    $('#displayResult').click(function () {
      $('#volTitrant').toggle(this.checked);
    });

    //*--Function for valaidating text inputs---
    function dotRestrict(e) {
      var count = 0,
        str = e.value;
      var a1 = new Array();
      a1 = str.split('');
      var len = a1.length;
      for (var i = 0; i < len; i++) {
        if (a1[i] == '.') {
          count++;
        }
      }
      if (a1[len - 1] == '.') {
        e.value = '';
      }
      if (count > 1) {
        e.value = '';
      }
    }
    //*--Function for adding label for all controls---
    function addLabel() {
      $('#speedText').html(controlText[0]);
      $('#titrateText').html(controlText[1]);
      $('#molarityText').html(controlText[2]);
      $('#volumeText').html(controlText[3]);
      $('#resultText').html(controlText[4]);
      $('#titrntMolarity').html(controlText[5]);
      $('#molLabel').html(controlText[6]);
      $('#titrantMoles').html(controlText[7]);
      $('#titrateMoles').html(controlText[8]);
      $('#molarMassTitrant').html(controlText[9]);
      $('#molarMassval').html(molarMass);
      $('#strngthTitrant').html(controlText[10]);
      $('#strngthSym').html(controlText[11]);
      $('#molUnit').html(controlText[12]);
      $('#showChecked').html(controlText[13]);
      $('#reaction').html(reactions[0]);
      $('#label_txt').html(controlText[14]);
      $('#temperatureLabel').html(controlText[15]);
      $('#start').val(btnLabel[0]);
      $('#reset').val(restLbl);
    }
    //*--Function to select random concentration-----
    function getRandom(low, high) {
      return Math.floor(Math.random() * (1 + high - low)) + low;
    }
    //*--Function to round the digit with corresponding decimal places----
    function roundNumber(num, dec) {
      var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
      return result;
    }
    /*-----------------------------------------------------------------*/
  });
};
