/* var appModule = angular.module("foodPatra",[]);

appModule.controller("discountController",function($scope){
	
}); */

$(document).ready(function(){
	console.log("Jquery is loading");
	//var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	//var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
	//var isiPod = /ipod/i.test(navigator.userAgent.toLowerCase());
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	var isWebOS = /webos/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	//Initiating the Submit event
	var isDevice = isMobielDevice(isiDevice,isAndroid);
	var $submitButtonClass = $(".submitButtonClass");
	var $formGroup = $(".form-group");
	if(isDevice){
		$submitButtonClass.css("margin-top","10px");
		$formGroup.find("label").removeClass("col-xs-3 col-sm-3 col-md-3 col-lg-3").addClass("col-xs-6 col-sm-6 col-md-6 col-lg-6");
	} else {
		if($formGroup.find("label").hasClass("col-xs-6")){
			$formGroup.find("label").removeClass("col-xs-6 col-sm-6 col-md-6 col-lg-6").addClass("col-xs-3 col-sm-3 col-md-3 col-lg-3");
		}
		$submitButtonClass.css("margin-top","0px");
	}
	$("#numberOfVouchersSubmit").on("click",function(e){
		console.log("click is event is triggered");
		//Get the value of discount vouchers
		var $foodVoucher = $("#foodPatraVoucherContainer");
		$foodVoucher.empty();
		var singleVoucherHTML = '<div class="singleVoucher col-xs-4 col-sm-4 col-md-4 col-lg-4" style="border-style:dotted;-moz-border-style:dotted;">'
						+'<div style="margin-top:3%;">'
							+'<div class="btn-primary btn-md col-xs-5 col-sm-5 col-md-5 col-lg-5" style="background-color:#CC3C39;border-radius:5px;">Visit FoodPatra.com</div>'
							+'<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">'
							  +'<span class="glyphicon glyphicon-arrow-right" style="font-size:30px;color:#CC3C39;"></span>'
							+'</div>'
							+'<div class="btn-primary btn-md col-xs-5 col-sm-5 col-md-5 col-lg-5" style="background-color:#93B944;border-radius:5px;">Search Restaurant</div>'
						+'</div>'
						+'<div style="float:right;margin-right:17%;margin-top:3%;">'
						  +'<span class="glyphicon glyphicon-arrow-down" style="font-size:30px;color:#93B944;"></span>'
						+'</div>'
						+'<div class="clearfix"></div>'
						+'<div style="width:100%;margin-top:3%;">'
							+'<div class="btn-primary col-xs-5 col-sm-5 col-md-5 col-lg-5" style="border-radius:5px;float:right;background-color:#694A8E;">Call & aske for food coupon while ordering</div>'
							+'<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style="float:right;">'
							  +'<span class="glyphicon glyphicon-arrow-left" style="font-size:30px;color:#694A8E;"></span>'
							+'</div>'
							+'<div class="btn-primary col-xs-5 col-sm-5 col-md-5 col-lg-5" style="float:right;border-radius:5px;background-color:#298EA8;">Earn foodpatra points</div>'
						+'</div>'
						+'<div class="clearfix"></div>'
						+'<div style="margin-left:17%;margin-top:3%;">'
						  +'<span class="glyphicon glyphicon-arrow-down" style="font-size:30px;color:#298EA8;"></span>'
						+'</div>'
						+'<div style="width:100%;margin-top:3%;">'
							+'<div class="btn-primary col-xs-5 col-sm-5 col-md-5 col-lg-5" style="border-radius:5px;background-color:#E57D23;">Get your food and patra coupon</div>'
							+'<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">'
							  +'<span class="glyphicon glyphicon-arrow-right" style="font-size:30px;color:#E57D23;"></span>'
							+'</div>'
							+'<div class="btn-primary col-xs-5 col-sm-5 col-md-5 col-lg-5" style="border-radius:5px;background-color:#AD3330;margin-bottom:3%;">Use points for free mobile recharge</div>'
						+'</div>'
					+'</div>';
		var discountVoucherNumer = $("#discountVoucherNumer").val();
		if(!(isNaN(discountVoucherNumer)) && discountVoucherNumer !="" && discountVoucherNumer != null){
			for(var numberOfVoucher = 0;numberOfVoucher < discountVoucherNumer;numberOfVoucher++){
				$foodVoucher.append(singleVoucherHTML);
			}
		} else {
			console.log("Please enter the number");
		}
		if(isDevice){
			$foodVoucher.find(".singleVoucher").removeClass("col-xs-4 col-sm-4 col-md-4 col-lg-4").addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12");
			//$(".submitButtonClass").css("margin-top","10px");
		} else {
			if($foodVoucher.hasClass("col-xs-12")){
				$foodVoucher.find(".singleVoucher").removeClass("col-xs-12 col-sm-12 col-md-12 col-lg-12").addClass("col-xs-4 col-sm-4 col-md-4 col-lg-4");
				//$(".submitButtonClass").css("margin-top","0px");
			} else {
				console.log("do nothing");
			}
			
		}
		e.preventDefault();
	});
});
function isMobielDevice(iphone,android){
	if(iphone || android){
		return true;
	} else{
		return false;
	}
}