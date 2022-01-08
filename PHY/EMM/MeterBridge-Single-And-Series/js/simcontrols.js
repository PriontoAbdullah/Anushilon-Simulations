window.onload = function () {
  // JavaScript Document
  var variableArray = [];
  var connectionOptions = [];
  var jockeySliderLbl, selected_index, test_class;
  var testSamples = ["10", "12"];

  /// canvas for back ground image
  var canvas = document.getElementById("mainCanvas");
  canvas.width = 570;
  canvas.height = 440;
  var ctx = canvas.getContext("2d");

  var img = new Image();

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
  img.src = simPath + "images/MeterBridge.png";
  // function called on loading..
  window.onload = function init() {
    //for language translation
    document.getElementById("expName").innerHTML = gt.gettext("");
    variableArray = [
      gt.gettext("রোধক ব্যবস্থা:"),
      gt.gettext("জকি অবস্থান (cm):"),
      gt.gettext("এখানে রোধ নির্বাচন করুন"),
    ];
    $(document).ready(function () {
      $("#reset").attr("value", gt.gettext("পুনরায় শুরু করুন"));
      $("#exp").attr("value", gt.gettext("পরীক্ষণ শুরু করুন"));
      $("#key").attr("value", gt.gettext("চাবি ঢোকান"));
      document.getElementById("resistorLbl").innerHTML = gt.gettext(
        variableArray[0]
      );
      jockeySliderLbl = gt.gettext(variableArray[1]);
      document.getElementById("ResBoxLbl").innerHTML =
        gt.gettext("রোধ নির্বাচন করুন");
      document.getElementById("small").innerHTML = gt.gettext("ছোট");
      document.getElementById("tooltip1").innerHTML = gt.gettext(
        variableArray[2]
      );
      $("#input1").html(jockeySliderLbl + " " + 1);
    });
    for (var x = 0; x < testSamples.length; x++) {
      test_class = testSamples.indexOf(testType);
    }
    selected_index = 0;
    if (test_class == "1") {
      connectionOptions = [gt.gettext("একক")];
    } else {
      connectionOptions = [gt.gettext("একক"), gt.gettext("সিরিজ")];
    }
    addintoDropDown(
      $("#resistors"),
      connectionOptions
    ); /** Adding to drop down list */
  };
  /** Adding connection options to the drop down list */
  function addintoDropDown(getId, valueSet) {
    var _selected = getId;
    $.each(valueSet, function (val, text) {
      _selected.append($("<option></option>").val(val).html(text));
    });
  }

  /// canvas for meter bridge

  var mBridgeCanvas = document.getElementById("mBridge");
  mBridgeCanvas.width = 928;
  mBridgeCanvas.height = 98;
  var mBridgeCtx = mBridgeCanvas.getContext("2d");
  var mBridgeImg = new Image();
  mBridgeImg.onload = function () {
    mBridgeCtx.drawImage(mBridgeImg, 0, 0);
  };
  mBridgeImg.src = simPath + "images/MeterBridgeImg.png";

  /// canvas for galvanometer

  var galvanometerCanvas = document.getElementById("galvanometer");
  galvanometerCanvas.width = 81;
  galvanometerCanvas.height = 71;
  var galvanometerCtx = galvanometerCanvas.getContext("2d");
  var galvanometerImg = new Image();
  galvanometerImg.onload = function () {
    galvanometerCtx.drawImage(galvanometerImg, 0, 0);
  };
  galvanometerImg.src = simPath + "images/Galvanometer.png";

  /// canvas for zoomed galvanometer
  var galvanometerZoomCanvas = document.getElementById("zoomgalvanometer");
  galvanometerZoomCanvas.width = 250;
  galvanometerZoomCanvas.height = 160;
  var galvanometerZoomCtx = galvanometerZoomCanvas.getContext("2d");
  var galvanometerZoomImg = new Image();
  galvanometerZoomImg.onload = function () {
    galvanometerZoomCtx.drawImage(galvanometerZoomImg, 0, 0);
  };
  galvanometerZoomImg.src = simPath + "images/zoomGalvanometer.png";

  //canvas for zoomed galvanometer BG

  var zoomBGCanvas = document.getElementById("zoomBG");
  zoomBGCanvas.width = 271;
  zoomBGCanvas.height = 180;
  var zoomBGCtx = zoomBGCanvas.getContext("2d");
  var zoomBGImg = new Image();
  zoomBGImg.onload = function () {
    zoomBGCtx.drawImage(zoomBGImg, 0, 0);
  };
  zoomBGImg.src = simPath + "images/galBackground.png";

  /// canvas for scale

  var scaleCanvas = document.getElementById("scale");
  scaleCanvas.width = 1300;
  scaleCanvas.height = 270;
  var scaleCtx = scaleCanvas.getContext("2d");
  var scaleimg = new Image();
  scaleimg.onload = function () {
    scaleCtx.drawImage(scaleimg, 0, 0);
  };
  scaleimg.src = simPath + "images/scaleBG.png";

  /// canvas for zoom jockey

  var jockeyCanvas = document.getElementById("jockey");
  jockeyCanvas.width = 25;
  jockeyCanvas.height = 23;
  var jockeyCtx = jockeyCanvas.getContext("2d");
  var jockeyImg = new Image();
  jockeyImg.onload = function () {
    jockeyCtx.drawImage(jockeyImg, 0, 0);
  };
  jockeyImg.src = simPath + "images/jockey.png";

  /// canvas for line1

  var line1Canvas = document.getElementById("line1");
  line1Canvas.width = 97;
  line1Canvas.height = 72;
  var line1Ctx = line1Canvas.getContext("2d");
  var line1Img = new Image();
  line1Img.onload = function () {
    line1Ctx.drawImage(line1Img, 0, 0);
  };
  line1Img.src = simPath + "images/line1.png";

  /// canvas for line2

  var line2Canvas = document.getElementById("line2");
  line2Canvas.width = 101;
  line2Canvas.height = 108;
  var line2Ctx = line2Canvas.getContext("2d");
  var line2Img = new Image();
  line2Img.onload = function () {
    line2Ctx.drawImage(line2Img, 0, 0);
  };
  line2Img.src = simPath + "images/line2.png";

  /// canvas for wire conneted with galvanometer

  var wGalCanvas = document.getElementById("wireGal");
  wGalCanvas.width = 195;
  wGalCanvas.height = 87;
  var wGalCtx = wGalCanvas.getContext("2d");
  var wGalImg = new Image();
  wGalImg.onload = function () {
    wGalCtx.drawImage(wGalImg, 0, 0);
  };
  wGalImg.src = simPath + "images/wGal.png";

  /// canvas for wire conneted with jockey

  var wJockCanvas = document.getElementById("wireJockey");
  wJockCanvas.width = 362;
  wJockCanvas.height = 121;
  var wJockCtx = wJockCanvas.getContext("2d");
  var wJockImg = new Image();
  wJockImg.onload = function () {
    wJockCtx.drawImage(wJockImg, 0, 0);
  };
  wJockImg.src = simPath + "images/wJockey.png";

  /// canvas for wire battery

  var batteryCanvas = document.getElementById("battery");
  batteryCanvas.width = 116;
  batteryCanvas.height = 96;
  var batteryCtx = batteryCanvas.getContext("2d");
  var batteryImg = new Image();
  batteryImg.onload = function () {
    batteryCtx.drawImage(batteryImg, 0, 0);
  };
  batteryImg.src = simPath + "images/battery.png";
  batteryCanvas.onmouseover = function () {
    changeCursor();
  };
  batteryCanvas.onmouseout = function () {
    defaultCursor();
  };
  /// canvas for wire resistor
  var startFlag = false;
  var resistorCanvas = document.getElementById("resistor");
  resistorCanvas.width = 76;
  resistorCanvas.height = 82;
  var resistorCtx = resistorCanvas.getContext("2d");
  var resistorImg = new Image();
  resistorImg.onload = function () {
    resistorCtx.drawImage(resistorImg, 0, 0);
  };
  resistorImg.src = simPath + "images/resistor.png";
  resistorCanvas.onmouseover = function () {
    changeCursor();
  };
  resistorCanvas.onmouseout = function () {
    defaultCursor();
  };
  resistorCanvas.onclick = function () {
    if (startFlag == true) {
      showBox();
    } else {
      hideBox();
    }
  };

  /// canvas for shadow resistor

  var rshadowCanvas = document.getElementById("rshadow");
  rshadowCanvas.width = 59;
  rshadowCanvas.height = 33;
  var rshadowCtx = rshadowCanvas.getContext("2d");
  var rshadowImg = new Image();
  rshadowImg.onload = function () {
    rshadowCtx.drawImage(rshadowImg, 0, 0);
  };
  rshadowImg.src = simPath + "images/rshadow.png";

  /// canvas for shadow battery

  var bshadowCanvas = document.getElementById("bshadow");
  bshadowCanvas.width = 83;
  bshadowCanvas.height = 33;
  var bshadowCtx = bshadowCanvas.getContext("2d");
  var bshadowImg = new Image();
  bshadowImg.onload = function () {
    bshadowCtx.drawImage(bshadowImg, 0, 0);
  };
  bshadowImg.src = simPath + "images/bshadow.png";

  /// canvas for shadow galvanometer

  var gshadowCanvas = document.getElementById("gshadow");
  gshadowCanvas.width = 81;
  gshadowCanvas.height = 38;
  var gshadowCtx = gshadowCanvas.getContext("2d");
  var gshadowImg = new Image();
  gshadowImg.onload = function () {
    gshadowCtx.drawImage(gshadowImg, 0, 0);
  };
  gshadowImg.src = simPath + "images/gshadow.png";

  /// canvas for wire connected on battery

  var wBatteryCanvas = document.getElementById("wireBattery");
  wBatteryCanvas.width = 372;
  wBatteryCanvas.height = 124;
  var wBatteryCtx = wBatteryCanvas.getContext("2d");
  var wBatteryImg = new Image();
  wBatteryImg.onload = function () {
    wBatteryCtx.drawImage(wBatteryImg, 0, 0);
  };
  wBatteryImg.src = simPath + "images/wBattery.png";

  /// canvas for wire connected on Resistor

  var wResCanvas = document.getElementById("wireRes");
  wResCanvas.width = 47;
  wResCanvas.height = 63;
  var wResCtx = wResCanvas.getContext("2d");
  var wResImg = new Image();
  wResImg.onload = function () {
    wResCtx.drawImage(wResImg, 0, 0);
  };
  wResImg.src = simPath + "images/wResistor.png";

  // show tooltip
  document.getElementById("tooltip").innerHTML = "1 cm";
  document.getElementById("tooltip2").innerHTML = "0 ohm";
  // materials visible hidden
  document.getElementById("wireBattery").style.visibility = "hidden";
  document.getElementById("battery").style.visibility = "hidden";
  document.getElementById("resistor").style.visibility = "hidden";
  document.getElementById("rshadow").style.visibility = "hidden";
  document.getElementById("bshadow").style.visibility = "hidden";
  document.getElementById("wireRes").style.visibility = "hidden";
  document.getElementById("connector").style.visibility = "hidden";
  document.getElementById("connector2").style.visibility = "hidden";
  document.getElementById("tooltip1").style.visibility = "hidden";
  document.getElementById("tooltip2").style.visibility = "hidden";
  document.getElementById("box").style.visibility = "hidden";
  document.getElementById("close").style.visibility = "hidden";
  document.getElementById("wireOnStage").style.visibility = "hidden";
  document.getElementById("resValue").style.visibility = "hidden";

  var wireSelected;
  var selectWire = false;
  var selectResistor = false;
  var selectBattery = false;
  var flag = 0;

  function showParellelWire(e) {
    wireSelected = e.id;
    if (selected_index == 1) {
      if (wireSelected == "parallelWire1") {
        document.getElementById("wireSeries1").style.visibility = "visible";
        document.getElementById("parallelWire1").style.visibility = "hidden";
        document.getElementById("parallel1").style.visibility = "visible";
        flag++;
      } else if (wireSelected == "parallelWire2") {
        document.getElementById("wireSeries2").style.visibility = "visible";
        document.getElementById("parallelWire2").style.visibility = "hidden";
        document.getElementById("parallel2").style.visibility = "visible";
        flag++;
      }
      if (flag == "2") {
        selectWire = true;
      }
    } else {
      selectWire = true;
      document.getElementById("wireOnStage").style.visibility = "visible";
      document.getElementById("parallelWire1").style.visibility = "hidden";
      document.getElementById("parallelWire2").style.visibility = "hidden";
      document.getElementById("parallel1").style.visibility = "visible";
      document.getElementById("parallel2").style.visibility = "visible";
    }
    if (
      selectWire == true &&
      (selectResistor == true) & (selectBattery == true)
    ) {
      document.getElementById("exp").disabled = false;
    } else {
      document.getElementById("exp").disabled = true;
    }

    document.getElementById("resistors").disabled = true;
  }

  // for show resistor on stage
  function showResistor(e) {
    selectResistor = true;
    document.getElementById("resistor").style.visibility = "visible";
    document.getElementById("wireRes").style.visibility = "visible";
    document.getElementById("rshadow").style.visibility = "visible";
    document.getElementById("tooltip2").style.visibility = "visible";
    document.getElementById("resistor_control").style.visibility = "hidden";
    document.getElementById("res").style.visibility = "visible";
    if (
      selectWire == true &&
      (selectResistor == true) & (selectBattery == true)
    ) {
      document.getElementById("exp").disabled = false;
    } else {
      document.getElementById("exp").disabled = true;
    }
    document.getElementById("resistors").disabled = true;
  }
  // for show battery on stage
  function showBattery(e) {
    selectBattery = true;
    document.getElementById("battery").style.visibility = "visible";
    document.getElementById("wireBattery").style.visibility = "visible";
    document.getElementById("bshadow").style.visibility = "visible";
    document.getElementById("connector").style.visibility = "visible";
    document.getElementById("resistors").disabled = true;
    document.getElementById("battery_control").style.visibility = "hidden";
    document.getElementById("bat").style.visibility = "visible";
    if (
      selectWire == true &&
      (selectResistor == true) & (selectBattery == true)
    ) {
      document.getElementById("exp").disabled = false;
    } else {
      document.getElementById("exp").disabled = true;
    }
  }

  // starting the experiment
  function startExp() {
    document.getElementById("tooltip1").style.visibility = "visible";
    startFlag = true;
  }
  function showBox() {
    document.getElementById("box").style.visibility = "visible";
    document.getElementById("close").style.visibility = "visible";
    document.getElementById("resValue").style.visibility = "visible";
  }
  function hideBox() {
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("close").style.visibility = "hidden";
    document.getElementById("resValue").style.visibility = "hidden";
  }
  function closeBox() {
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("close").style.visibility = "hidden";
    document.getElementById("tooltip1").style.visibility = "hidden";
    document.getElementById("resValue").style.visibility = "hidden";
    document.getElementById("exp").disabled = true;
    document.getElementById("key").disabled = false;
  }

  // slider movement

  var degree = 0;
  var rotate = 0;
  var position1;
  var position2;
  var position3;
  var position4;
  var position5;
  var sliderValue = 1;
  var initialPosOftooltip = document.getElementById("tooltip").offsetLeft;
  var initialPosScale = document.getElementById("scalezoom").offsetLeft + 38;
  var initialPosJock = document.getElementById("jockey").offsetLeft;
  var initialPosWire = document.getElementById("wireJockeyImg2").offsetLeft;
  var initialPosExtraWire = document.getElementById("wire").offsetLeft;
  function jockeyPosition(newValue) {
    sliderValue = roundNumber(newValue, 2);
    $("#input1").html(jockeySliderLbl + " " + sliderValue);
    document.getElementById("tooltip").innerHTML = sliderValue + " cm";
    position1 = initialPosOftooltip + sliderValue * 4;
    position2 = initialPosScale - sliderValue * 34.8;
    position3 = initialPosJock + sliderValue * 4.52;
    position4 = initialPosWire + sliderValue * 3.8;
    document.getElementById("tooltip").style.left = position1 + "px";
    document.getElementById("scalezoom").style.left = position2 + "px";
    document.getElementById("jockey").style.left = position3 + "px";
    document.getElementById("wireJockeyImg2").style.left = position4 + "px";
    if (sliderValue > 66) {
      position5 = initialPosExtraWire + sliderValue * 2;
      document.getElementById("wire").style.visibility = "visible";
      document.getElementById("wire").style.left = position5 + "px";
    } else {
      document.getElementById("wire").style.visibility = "hidden";
    }

    if (sliderValue == balLength) {
      document.getElementById("needleRotate1").style.visibility = "hidden";
      document.getElementById("needleRotate2").style.visibility = "hidden";
      document.getElementById("firstneedleRotate1").style.visibility =
        "visible";
      document.getElementById("firstneedleRotate2").style.visibility =
        "visible";
      document.getElementById("needleRotate3").style.visibility = "hidden";
      document.getElementById("needleRotate4").style.visibility = "hidden";
    } else if (sliderValue < balLength) {
      document.getElementById("needleRotate1").style.visibility = "visible";
      document.getElementById("needleRotate2").style.visibility = "visible";
      document.getElementById("firstneedleRotate1").style.visibility = "hidden";
      document.getElementById("firstneedleRotate2").style.visibility = "hidden";
      document.getElementById("needleRotate3").style.visibility = "hidden";
      document.getElementById("needleRotate4").style.visibility = "hidden";
      document.getElementById("needleRotate1").style.MozTransformOrigin =
        "100% 100%";
      document.getElementById("needleRotate1").style.MozTransform =
        "rotate(" + -sliderValue * 0.01 + "rad)";
      document.getElementById("needleRotate1").style.webkitTransformOrigin =
        "100% 100%";
      document.getElementById("needleRotate1").style.webkitTransform =
        "rotate(" + -sliderValue * 0.01 + "rad)";
      document.getElementById("needleRotate2").style.MozTransformOrigin =
        "10% 100%";
      document.getElementById("needleRotate2").style.MozTransform =
        "rotate(" + -sliderValue * 0.009 + "rad)";
      document.getElementById("needleRotate2").style.webkitTransformOrigin =
        "100% 100%";
      document.getElementById("needleRotate2").style.webkitTransform =
        "rotate(" + -sliderValue * 0.009 + "rad)";
    } else if (sliderValue > balLength) {
      document.getElementById("needleRotate1").style.visibility = "hidden";
      document.getElementById("needleRotate2").style.visibility = "hidden";
      document.getElementById("firstneedleRotate1").style.visibility = "hidden";
      document.getElementById("firstneedleRotate2").style.visibility = "hidden";
      document.getElementById("needleRotate3").style.visibility = "visible";
      document.getElementById("needleRotate4").style.visibility = "visible";
      document.getElementById("needleRotate3").style.MozTransformOrigin =
        "100% 100%";
      document.getElementById("needleRotate3").style.MozTransform =
        "rotate(" + -sliderValue * 0.005 + "rad)";
      document.getElementById("needleRotate3").style.webkitTransformOrigin =
        "100% 100%";
      document.getElementById("needleRotate3").style.webkitTransform =
        "rotate(" + -sliderValue * 0.005 + "rad)";
      document.getElementById("needleRotate4").style.MozTransformOrigin =
        "10% 100%";
      document.getElementById("needleRotate4").style.MozTransform =
        "rotate(" + -sliderValue * 0.003 + "rad)";
      document.getElementById("needleRotate4").style.webkitTransformOrigin =
        "100% 100%";
      document.getElementById("needleRotate4").style.webkitTransform =
        "rotate(" + -sliderValue * 0.003 + "rad)";
    }
  }

  var rotate;
  var degree;
  var needleXPos;
  var needleYPos;
  var moveFlag = false;

  function roundNumber(num, dec) {
    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
  }
  //To change the cursor type
  function changeCursor() {
    document.body.style.cursor = "pointer";
  }
  function defaultCursor() {
    document.body.style.cursor = "default";
  }
  var unknown_r = 0;
  var unknown_r1 = 0;
  var unknown_r2 = 0;
  var totalResistance = 0;
  var known_R = 0;
  var balLength = 0;
  function calculation() {
    if (selected_index == 1) {
      unknown_r1 = 5;
      unknown_r2 = 4;
      totalResistance = unknown_r1 + unknown_r2;
      balLength = (100 * known_R) / (totalResistance + known_R);
    } else {
      if (wireSelected == "parallelWire1") {
        unknown_r = 5;
      } else if (wireSelected == "parallelWire2") {
        unknown_r = 4;
      }
      balLength = (100 * known_R) / (unknown_r + known_R);
    }
    balLength = roundNumber(balLength, 1);
  }
  var resistor = "Single";
  // select resistors combo box
  function resistorsCombo(thelist, theinput) {
    resistor = document.getElementsByName("resistors").item(0).value;
    selected_index = document.getElementById("resistors").selectedIndex;
  }

  function checkTotal() {
    var sum = 0;
    for (i = 0; i < document.listForm.choice.length; i++) {
      if (!document.listForm.choice[i].checked) {
        sum = sum + parseInt(document.listForm.choice[i].value);
      }
    }
    document.getElementById("tooltip2").innerHTML = sum + " ohm";
    known_R = sum;
  }

  // inserting jockey
  function onlyNumbers(evt) {
    var e = event || evt; // for trans-browser compatibility

    var charCode = e.which || e.keyCode;

    if (
      charCode == 190 ||
      charCode == 110 ||
      (charCode >= 96 && charCode <= 105)
    ) {
      return true;
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
  }
  function keyFn() {
    calculation();
    //document.getElementById("divJock").innerHTML="1";
    //document.getElementById("jock").value="1";
    document.getElementById("jock").value = "1";
    /*if ( $.browser.mozilla == true){		
			$('.jock').slider({ 
				value:"1",
			 });
	}*/
    jockeyPosition(1);
    document.getElementById("needleRotate1").style.visibility = "hidden";
    document.getElementById("needleRotate2").style.visibility = "hidden";
    document.getElementById("firstneedleRotate1").style.visibility = "visible";
    document.getElementById("firstneedleRotate2").style.visibility = "visible";
    document.getElementById("needleRotate3").style.visibility = "hidden";
    document.getElementById("needleRotate4").style.visibility = "hidden";

    if (document.getElementById("key").value == gt.gettext("চাবি বের করুন")) {
      document.getElementById("connector").style.visibility = "visible";
      document.getElementById("connector2").style.visibility = "hidden";
      document.getElementById("key").value = gt.gettext("চাবি ঢোকান");
      document.getElementById("jock").disabled = true;

      /*if ( $.browser.mozilla == true){		
			$('.jock').slider({ 
				disabled: true,
			 });
		}*/
    } else {
      document.getElementById("connector").style.visibility = "hidden";
      document.getElementById("connector2").style.visibility = "visible";
      document.getElementById("key").value = gt.gettext("চাবি বের করুন");
      document.getElementById("jock").disabled = false;
      /*if ( $.browser.mozilla == true){		
			$('.jock').slider({ 
				disabled: false,
			 });
		}*/
    }
  }
};
