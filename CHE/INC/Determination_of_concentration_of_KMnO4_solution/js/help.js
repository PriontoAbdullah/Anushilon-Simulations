// JavaScript Document
var trip;
var tripClickFlag=false;
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
	tripClickFlag=true;
	 $(".content").scrollTop(0);
	if($("#titrate").find(':selected').val()==0)
	{
		trip = new Trip([
		{
			sel : $('#titrate'),
			position : 'e',
			content : helpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#speedchg'),
			position : 'e',
			content :helpMsg[1] ,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#molaritychg'),
			position : 'e',
			content :helpMsg[2] ,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#volumechg'),
			position : 'e',
			content :helpMsg[3] ,
			expose : false,
			delay : 4000
		},
		
		{
			sel : $('#testtube'),
			position : 'n',
			content :helpMsg[4] ,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#conicalflaskArea'),
			position : 'n',
			content : helpMsg[5],
			expose : false,
			delay : 6000
		},
		{
			sel : $('.buretteOffOn'),
			position : 'n',
			content : helpMsg[6],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#showChecked'),
			position : 'e',
			content : helpMsg[7],
			expose : false,
			delay : 4000
		}]); 
	}
	else 
	{
		trip = new Trip([
		{
			sel : $('#titrate'),
			position : 'e',
			content : helpMsg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#speedchg'),
			position : 'e',
			content :helpMsg[1] ,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#molaritychg'),
			position : 'e',
			content :helpMsg[2] ,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#volumechg'),
			position : 'e',
			content :helpMsg[3] ,
			expose : false,
			delay : 4000
		},
		
		{
			sel : $('#testtube'),
			position : 'n',
			content :helpMsg[10] ,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#conicalflaskArea'),
			position : 'n',
			content : helpMsg[8],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burner_btn'),
			position : 'n',
			content : helpMsg[9],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#conicalflaskArea'),
			position : 'n',
			content : helpMsg[5],
			expose : false,
			delay : 6000
		},
		{
			sel : $('.buretteOffOn'),
			position : 'n',
			content : helpMsg[6],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#showChecked'),
			position : 'e',
			content : helpMsg[7],
			expose : false,
			delay : 4000
		}]);
	}
		
          
		trip.start(); 
   		window.trip = trip;
	});


});
