//*--Ready function---------
var gt,
	c,
	ctx,
	waveY = 74,
	waveY2 = 74,
	waveHeight = true;
var controlLabel,
	InsArray,
	opt1,
	opt2,
	supply_type_options,
	combo_2val = 0;
var Q = 0.05,
	Q1 = 0.5,
	color_arr;
var minAB = 0,
	maxAB = 100;
var scaleAlft, bridgeAlft;
var materialColor = [ '#EE6647', '#d9e3ec', '#cfcfc3', '#6D5955' ];
var g, density;
var envioIndx = 0;
var material = 0;
var distance,
	bridgeDist = 100;
var frqcy = 55;
var bridgeAlft, bridgeBlft;
var valueA = 0,
	valueB = 100;
var paperLft, clrvibratePaper;
var clrWavelft, clrWaveRgt;
var m,
	M = 0.05,
	T,
	diameter = 0.5,
	r;
var clr,
	vibrating = false,
	amplitude = 4;
var prevVal,
	paperFall = false,
	paperTop = 179,
	paperLmt = false;
var preValA = 1,
	preValB = 100;
var vibrSpeed = 7,
	supplyType;
var resonacLengths = [],
	tempDist;
var distancePre, distancePost;
var popMSG,
	vibrating = false;
var hited = false,
	waveYtemp;
var magnet_position, magnet_left;
var gt = $;
function setMaterial(val) {
	Q1 = val;
	$('#sliderspan1').html(Q1 + ' mm');
	$('#wire').css({ height: val * 5 + 'px' });
}
function setDiameter(val) {
	diameter = Q1 = val;
	$('#sliderspan1').html(Q1 + ' mm');
	$('#wire').css({ height: val * 2 + 'px' });
	$('#wireInWeight').css({ width: val * 2 + 'px' });
	calculateDistance();
}
function setWeight(val) {
	M = val;
	calculateDistance();
	for (i = 10; i <= val * 100; i = i + 5) {
		$('#weight_' + i).show();
	}
	for (i = val * 100 + 5; i <= 500; i = i + 5) {
		$('#weight_' + i).hide();
	}
	Q = val;
	$('#rightVal,#arrow_txt').html(Q + ' kg');
}
function setFrequency(val) {
	frqcy = val;
	calculateDistance();
	$('#sliderspan').html(frqcy + ' Hz');
}
function setAmplitude() {
	console.log('hit>?');
	if (amplitude <= 2) {
		amplitude = amplitude + 2;
	}
	if (amplitude >= 62) {
		amplitude = amplitude - 2;
	}
	if (distance <= 50) {
		distance = bridgeDist > resonacLengths[0] + resonacLengths[0] / 2 ? resonacLengths[1] : resonacLengths[0];
	}

	if (bridgeDist < distance + 30 && amplitude < 62 && amplitude > 2) {
		console.log('hit>>>', bridgeDist, distance, vibrating, hited);

		if (bridgeDist <= distance + 2 && bridgeDist >= distance - 2 && !vibrating && hited) {
			startVibration();
			console.log('hit>>>>>>>>');
		} else {
			if (vibrating && (bridgeDist.toFixed(1) >= distance + 2 || bridgeDist.toFixed(1) <= distance - 2)) {
				clearInterval(clr);
				clearInterval(clrvibratePaper);
				waveYtemp = waveY;
				waveY = 74;
				ctx.clearRect(0, 0, 160, 150);
				ctx.beginPath();
				ctx.moveTo(0, 74);
				ctx.strokeStyle = materialColor[material];
				ctx.bezierCurveTo(80, waveY, 80, waveY, 160, 74);
				ctx.stroke();
				if (!paperFall) {
					$('#paperSmall').css({ top: '181px' });
					ctx.beginPath();
					ctx.fillStyle = '#FFFFFF';
					ctx.fillRect(74, 72, 14, 14);
					ctx.stroke();
				}
				vibrating = false;
			}
		}
	}
}
function vibratePaper() {
	// -----------vibrating paper on sonometer------------
	$('#paperSmall').css({
		top: paperTop + 'px'
	});
	$('#paperSmall').css({
		top: paperTop + 'px'
	});
	if (paperTop <= 179) {
		paperLmt = false;
	}
	if (paperTop >= 183) {
		paperLmt = true;
	}
	if (paperLmt) {
		paperTop--;
	} else {
		paperTop++;
	}
}
function scaleAmotion(val) {
	valueA = parseFloat(val);
	valueA = valueA.toFixed(1);
	if (valueA > magnet_position - 2) {
		$('#slide_val4').prop('value', magnet_position - 2);
		$('#bridgeA_ctrl_val').html((magnet_position - 2).toFixed(1) + ' cm');
		$('#scaleA').css({ left: -39 - (magnet_position - 2) * 38 + 'px' });
		$('#zoomBridgeA').css({ left: (magnet_position - 2) * 2 + 'px' });
		$('#slide_val4').prop('disabled', true);
		$('#slide_val4').prop('disabled', false);
	} else {
		$('#bridgeA_ctrl_val').html(val + ' cm');
		$('#scaleA').css({ left: -39 - valueA * 38 + 'px' });
		$('#zoomBridgeA').css({ left: valueA * 2 + 'px' });
		$('#bridgeA').css({ left: 96 + val * 3.5 + 'px' });
	}

	scaleAlft = $('#scaleA').position().left;
	bridgeBlft = $('#bridgeB').position().left;
	paperLft = $('#paperSmall').position().left;
	bridgeAlft = $('#bridgeA').position().left;
	$('#bridge_A_txt').css({ left: bridgeAlft - 21 + 'px' });
	if (bridgeAlft > paperLft - 15 && !paperFall) {
		$('#paperSmall').css({ left: bridgeAlft + 15 + 'px' });
	}
	bridgeDist = valueB - valueA;
	setAmplitude();
	preValA = valueA;
}
function scaleBmotion(val) {
	valueB = parseFloat(val);
	valueB = valueB.toFixed(1);
	if (valueB < magnet_position + 2) {
		$('#slide_val5').prop('value', magnet_position + 2);
		$('#bridgeB_ctrl_val').html((magnet_position + 2).toFixed(1) + ' cm');
		$('#scaleB').css({ left: -3839 + (100 - (magnet_position + 2)).toPrecision(3) * 38 + 'px' });
		$('#zoomBridgeB').css({ left: (magnet_position + 2) * 2 + 'px' });
		$('#slide_val5').prop('disabled', true);
		$('#slide_val5').prop('disabled', false);
	} else {
		$('#bridgeB_ctrl_val').html(val + ' cm');
		$('#bridgeB').css({ left: 467 - (100 - val) * 3.5 + 'px' });
		$('#scaleB').css({ left: -3839 + (100 - val).toPrecision(3) * 38 + 'px' });
		$('#zoomBridgeB').css({ left: val * 2 + 'px' });
	}

	scaleAlft = $('#scaleB').position().left;
	bridgeAlft = $('#bridgeA').position().left;
	paperLft = $('#paperSmall').position().left;
	bridgeBlft = $('#bridgeB').position().left;
	$('#bridge_B_txt').css({ left: bridgeBlft - 12 + 'px' });
	if (bridgeBlft < paperLft + 15 && !paperFall) {
		$('#paperSmall').css({ left: bridgeBlft - 15 + 'px' });
	}
	bridgeDist = valueB - valueA;
	setAmplitude();
	preValB = valueB;
}
function waveGenerator(ID, lft, tp) {
	$(ID).animate({ left: lft - 1, top: tp + 1 }, function() {
		$(ID).animate({ left: lft, top: tp });
	});
}
function startVibration() {
	clr = setInterval(function() {
		drawWave();
	}, 6);
	clrvibratePaper = setInterval(function() {
		vibratePaper();
	}, 10);
	vibrating = true;
}
function magnetMotion(value) {
	magnet_position = parseFloat(value);
	if (magnet_position < valueA + 1 || magnet_position > valueB - 2) {
		if (magnet_position < valueA + 1) {
			magnet_left = 275.5 + (valueA + 1 - 50) * 3.5;
			$('#magnet_pos_val').html((parseFloat(valueA) + 2).toFixed(1) + ' cm');
			$('#magnet_slider').prop('value', parseFloat(valueA) + 1);
		} else {
			magnet_left = 275.5 + (valueB - 2 - 50) * 3.5;
			$('#magnet_pos_val').html((parseFloat(valueB) - 2).toFixed(1) + ' cm');
			$('#magnet_slider').prop('value', parseFloat(valueB) - 2);
		}

		$('#magnet').css({ left: magnet_left });
		$('#paperSmall').css({ left: magnet_left + 12 });
		$('#magnet_slider').prop('disabled', true);
		$('#magnet_slider').prop('disabled', false);
	} else {
		magnet_left = 275.5 + (value - 50) * 3.5;
		$('#magnet_pos_val').html(value + ' cm');
		$('#magnet').css({ left: magnet_left });
		$('#paperSmall').css({ left: magnet_left + 12 });
	}
}
function stopVibration() {
	clearInterval(clrWaveRgt);
	clearInterval(clrWavelft);
	$('#forkWavesLft, #forkWavesRgt').hide();
	$('#tFork').animate({ top: '55px' });
	$('#popup').hide();
	clearInterval(clr);
	clearInterval(clrvibratePaper);
	waveYtemp = waveY;
	waveY = 74;
	ctx.clearRect(0, 0, 160, 150);
	ctx.beginPath();
	ctx.moveTo(0, 74);
	ctx.strokeStyle = materialColor[material];
	ctx.bezierCurveTo(80, waveY, 80, waveY, 160, 74);
	ctx.stroke();
	if (!paperFall) {
		ctx.beginPath();
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(74, 72, 14, 14);
		ctx.stroke();
	}
}
function drawWave() {
	ctx.clearRect(0, 0, 160, 150);
	ctx.beginPath();
	ctx.moveTo(0, 74);
	ctx.bezierCurveTo(80, waveY, 80, waveY, 160, 74);
	ctx.stroke();
	ctx.beginPath();
	if (bridgeDist.toPrecision(bridgeDist >= 10 ? 3 : 2) != distance.toFixed(1) && !paperFall) {
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(74, waveY - 8, 14, 14);
		ctx.stroke();
	} else {
		paperFall = true;
		clearInterval(clrvibratePaper);
		$('#paperSmall').css({ top: '218px' });
		$('#replacePaper').attr('disabled', false);
		if (distance > 50) {
			$('#popupMsg').html(popMSG[0]);
		} else {
			var index = bridgeDist > resonacLengths[0] + resonacLengths[0] / 2 ? 1 : 0;
			$('#popupMsg').html(popMSG[index]);
		}
		$('#popup').css({ left: $('#paperSmall').css('left') });
		if (hited) {
			$('#popup').show();
		}
		//$( "popupMsg" ).detach();
	}
	if (waveY > 80 || waveY < 68) {
		waveY == 79;
	}
	if (waveY >= 80) {
		waveHeight = false;
	}
	if (waveY <= 68) {
		waveHeight = true;
	}
	if (waveHeight) {
		waveY++;
	} else {
		waveY--;
	}
}
function calculateDistance() {
	r = diameter / 2;
	r = r / 1000;
	m = 3.14 * r * r * density[material];
	T = M * g[envioIndx];
	distance = Math.sqrt(T / m) / (2 * frqcy);
	distance = distance * 100;
	tempDist = distance;
	resonacLengths = [];
	if (distance <= 50) {
		resonacLengths[0] = distance;
		resonacLengths[1] = 2 * distance;
	} else {
		resonacLengths[0] = distance;
	}
	distancePre = resonacLengths[0];
	distancePost = resonacLengths[1];
	if (resonacLengths.length > 1) {
		if (bridgeDist >= resonacLengths[resonacLengths.length - 1]) {
			distance = resonacLengths[resonacLengths.length - 1];
		}
		if (bridgeDist <= resonacLengths[0]) {
			distance = resonacLengths[0];
		}
	}
}
window.onload = function() {
	document.getElementById('expName').innerHTML = gt.gettext('AC Sonometer');
	controlLabel = [
		gt.gettext('Reset'),
		gt.gettext('Power On'),
		gt.gettext('Place paper rider'),
		gt.gettext('Power Off'),
		gt.gettext('Type of AC supply')
	];
	InsArray = [
		gt.gettext('Select environment'),
		gt.gettext('Add weighs(kg)'),
		gt.gettext('Select wire material'),
		gt.gettext('Diameter of the wire:'),
		gt.gettext('Frequency:'),
		gt.gettext('Weight hanger weight:'),
		1,
		0.05,
		0.5,
		100,
		55,
		gt.gettext('Position of bridge A:'),
		gt.gettext('Position of bridge B:')
	];
	opt2 = [ gt.gettext('Copper'), gt.gettext('Steel'), gt.gettext('Nichrome'), gt.gettext('Constantan') ];
	opt1 = [
		gt.gettext('Earth (g=9.8 m/s&#178;)'),
		gt.gettext('Moon (g=1.6 m/s&#178;)'),
		gt.gettext('Uranus (g=8.69 m/s&#178;)'),
		gt.gettext('Saturn (g=10.44 m/s&#178;)'),
		gt.gettext('Jupiter (g=24.79 m/s&#178;)'),
		gt.gettext('Mars (g=3.711 m/s&#178;)'),
		gt.gettext('Venus (g=8.83 m/s&#178;)'),
		gt.gettext('Mercury (g=3.7 m/s&#178;)'),
		gt.gettext('Neptune (g=11.15 m/s&#178;)')
	];
	supply_type_options = [ gt.gettext('Frequency Generator'), gt.gettext('A.C Main') ];
	popMSG = [
		gt.gettext('First resonance length'),
		gt.gettext('Second resonance length'),
		gt.gettext('Third resonance length'),
		gt.gettext('Fourth resonance length')
	];
	color_arr = [ '#000000', '#a8624a', '#9d9d9d', '#b6916d' ];
	g = [ 9.8, 1.6, 8.69, 10.44, 24.79, 3.711, 8.83, 3.7, 11.15 ];
	density = [ 8940, 7769, 8400, 8900 ];
	magnet_position = 50; /** value of css left attribute of magnet image */
	$(document).ready(function() {
		mainTop = $('#mainDiv').position().top;
		mainLeft = $('#mainDiv').position().left;
		$('#mainDiv').mousedown(function(event) {
			event.preventDefault();
		});
		addLabel();
		addintoDropDown($('#Combo1'), opt1);
		addintoDropDown($('#materialCombo'), opt2);
		addintoDropDown($('#supply_type'), supply_type_options);
		c = document.getElementById('zoomCanvas');
		ctx = c.getContext('2d');
		function plotLine() {
			ctx.clearRect(0, 0, 160, 150);
			ctx.beginPath();
			ctx.moveTo(0, 74);
			ctx.strokeStyle = materialColor[material];
			ctx.bezierCurveTo(80, waveY, 80, waveY, 160, 74);
			ctx.stroke();
			ctx.beginPath();
			ctx.fillStyle = '#FFFFFF';
			ctx.fillRect(74, 72, 14, 14);
			ctx.stroke();
		}
		plotLine();

		//combo_sliderchange();
		function addLabel() {
			//Function for adding label for all controls---
			$('#reload').attr('value', controlLabel[0]);
			$('#hitTfork').attr('value', controlLabel[1]);
			$('#replacePaper').attr('value', controlLabel[2]);
			$('#supply_type_label').html(controlLabel[4]);
			$('#Ins1').html(InsArray[0]);
			$('#Ins2').html(InsArray[2]);
			$('#Ins01').html(InsArray[5]);
			$('#rightmaxvals2').html(InsArray[6]);
			$('#rightminvals').html(InsArray[7]);
			$('#rightmaxvals').html(InsArray[8]);
			$('#rightVal').html(Q + ' kg');
			$('#slidertxt').html(InsArray[4]);
			$('#sliderspan').html(frqcy + ' Hz');
			$('#slidertxt1').html(InsArray[3]);
			$('#sliderspan1').html(Q1 + ' mm');
			$('#rightminvals2').html(InsArray[8]);
			$('#rightmaxvals1').html(InsArray[9]);
			$('#rightminvals1').html(InsArray[10]);
			$('#bridgeA_ctrl_lbl').html(InsArray[11]);
			$('#bridgeA_ctrl_val').html(minAB + ' cm');
			$('#bridgeA_lbl_min').html(minAB);
			$('#bridgeA_lbl_max').html(maxAB);
			$('#bridgeB_ctrl_lbl').html(InsArray[12]);
			$('#bridgeB_ctrl_val').html(maxAB + ' cm');
			$('#bridgeB_lbl_min').html(minAB);
			$('#bridgeB_lbl_max').html(maxAB);
			$('#magnet_position_lbl').html(gt.gettext('চৌম্বক অবস্থান: '));
			$('#magnet_pos_val').html('50 cm');
			$('#magnet_lbl_min').html('10');
			$('#magnet_lbl_max').html('90');
			$('#bridge_A_txt').html(gt.gettext('Bridge AAA'));
			$('#bridge_B_txt').html(gt.gettext('Bridge B'));
		}
		function addintoDropDown(getId, valueSet) {
			//Function for adding option in combo box---
			var selected = getId;
			$.each(valueSet, function(val, text) {
				selected.append($('<option></option>').val(val).html(text));
			});
		}
		$('#Combo1').change(function() {
			//on change function of combo box.
			envioIndx = $(this).find('option:selected').val();
			calculateDistance();
			Resetitems();
		});
		$('#materialCombo').change(function() {
			material = $(this).find('option:selected').val();
			$('#wire, #wireInWeight').css({ 'background-color': materialColor[material] });
			plotLine();
			calculateDistance();
			setAmplitude();
			Resetitems();
		});
		$('#supply_type').change(function() {
			supplyType = $(this).find('option:selected').val();
			$('#light_on').hide();
			$('#hitTfork').attr('value', controlLabel[1]);
			stopVibration();
			if (supplyType == 1) {
				frqcy = 50;
				$('#rightminvals1').html(50);
				$('#sliderspan').html(50 + ' Hz');
				$('#slide_val3').attr('disabled', true);
				$('#slide_val3').attr('value', 50);
				$('#knob').hide();
				$('#switch').show();
			} else {
				$('#rightminvals1').html(InsArray[10]);
				$('#sliderspan').html(InsArray[10] + ' Hz');
				$('#slide_val3').attr('disabled', false);
				$('#slide_val3').attr('value', 55);
				$('#knob').show();
				$('#switch').hide();
				frqcy = 55;
			}
			valueA = 0;
			valueB = 100;
			$('#slide_val4').prop('value', valueA);
			$('#bridgeA_ctrl_val').html(valueA + ' cm');
			$('#scaleA').css({ left: -39 - valueA * 38 + 'px' });
			$('#zoomBridgeA').css({ left: valueA * 2 + 'px' });
			$('#bridgeA').css({ left: 96 + valueA * 3.5 + 'px' });
			$('#bridge_A_txt').css({ left: '75px' });
			$('#slide_val5').prop('value', valueB);
			$('#bridgeB_ctrl_val').html(valueB + ' cm');
			$('#bridgeB').css({ left: 467 - (100 - valueB) * 3.5 + 'px' });
			$('#scaleB').css({ left: -3839 + (100 - valueB).toPrecision(3) * 38 + 'px' });
			$('#zoomBridgeB').css({ left: valueB * 2 + 'px' });
			$('#bridge_B_txt').css({ left: '455px' });
			bridgeDist = valueB - valueA;
			calculateDistance();
		});
		$('#replacePaper').click(function() {
			paperFall = false;
			//bridgeDist=100;
			$('#popup').hide();
			clearInterval(clr);
			waveY = 74;
			ctx.clearRect(0, 0, 160, 150);
			ctx.beginPath();
			ctx.moveTo(0, 74);
			ctx.strokeStyle = materialColor[material];
			ctx.bezierCurveTo(80, waveY, 80, waveY, 160, 74);
			ctx.stroke();
			ctx.beginPath();
			ctx.fillStyle = '#FFFFFF';
			ctx.fillRect(74, 72, 14, 14);
			ctx.stroke();
			vibrating = false;
			if (bridgeDist.toPrecision(bridgeDist >= 10 ? 3 : 2) == distance.toFixed(1) && !paperFall) {
				if (valueA <= 1) {
					valueB = parseFloat(valueB) - 1;
					$('#slide_val5').prop('value', valueB);
					$('#bridgeB_ctrl_val').html(valueB + ' cm');
					$('#bridgeB').css({ left: 467 - (100 - valueB) * 3.5 + 'px' });
					$('#scaleB').css({ left: -3839 + (100 - valueB).toPrecision(3) * 38 + 'px' });
					$('#zoomBridgeB').css({ left: valueB * 2 + 'px' });
					bridgeDist = valueB - valueA;
				} else {
					valueA = parseFloat(valueA) + 1;
					$('#slide_val4').prop('value', valueA);
					$('#bridgeA_ctrl_val').html(valueA + ' cm');
					$('#scaleA').css({ left: -39 - valueA * 38 + 'px' });
					$('#zoomBridgeA').css({ left: valueA * 2 + 'px' });
					$('#bridgeA').css({ left: 96 + valueA * 3.5 + 'px' });
					bridgeDist = valueB - valueA;
				}
			}

			$('#paperSmall').css({ top: '181px' });
			$('#replacePaper').attr('disabled', true);
			setAmplitude();
		});
		$('#hitTfork').click(function() {
			bridgeDist = valueB - valueA;
			var text = $('#hitTfork').attr('value');
			if (text == controlLabel[1]) {
				hited = true;
				$('#light_on').show();
				if (supplyType == 1) {
					$('#switch').attr('src', simPath + '/images/switch_on.png');
				}
				bridgeDist = valueB - valueA;
				calculateDistance();
				setAmplitude();
				$('#Combo1, #materialCombo').prop('disabled', true);
				$('#slide_val2,#slide_val1,#slide_val3').prop('disabled', true);
				$('#hitTfork').attr('value', controlLabel[3]);
			} else {
				hited = false;
				vibrating = false;
				$('#light_on').hide();
				if (supplyType == 1) {
					$('#switch').attr('src', simPath + '/images/switch_off.png');
				}
				$('#slide_val2,#slide_val1,#slide_val3').prop('disabled', false);
				$('#hitTfork').attr('value', controlLabel[1]);
				stopVibration();
			}
		});
		function Resetitems() {
			//resetting slider value and appartus position
			(Q = 0.05), (Q1 = 0.5), (frqcy = 55);
			$('#slide_val1').val(Q);
			$('#slide_val2').val(Q1);
			$('#slide_val3').val(frqcy);
			$('#sliderspan1').html(Q1 + ' mm');
			$('#rightVal').html(Q + ' kg');
			$('#sliderspan').html(frqcy + ' kg');
			$('#Hanging_right').css({ height: 12 + 'px' });
			vibrating = false;
			$('#popup').hide();
		}
		$('#reload').click(function() {
			//*--Function to click reload button to reset all events---
			window.location.reload();
		});
	});
};
