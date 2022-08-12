$(function(){

	initializeDateTimePicker();

	initializeBookings();

	// Add Header to the HTML
	$("#headerField").load("templates/header.html", function(){
		addActiveHeader();

		var loading = $.loading();
		loading.ajax(true);	
	}); 

	//Add Footer to the HTML
	$("#footerField").load("templates/footer.html"); 

	$('#screenshot-carousel').carousel({
      interval: 5000
    });

	$(document).on('click', '.dropdownKolleksjon', function(){ 
		if(!window.mobileAndTabletcheck()){
			window.location.replace('kolleksjon.html');
		}
	});

	$(document).on('click', '.dropdownAccessories', function(){ 
		if(!window.mobileAndTabletcheck()){
			window.location.replace('accessories.html');
		}
	});
	  
});

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function addActiveHeader(){
	var url = window.location.href.split('/');
	url = url[url.length -1].split('#')[0];

	if(url == "index.html"){
		$('.menu_list > li').eq(0).addClass('current-item');
	}else if(url == "kolleksjon.html"){
		$('.menu_list > li').eq(1).addClass('current-item');
	}else if(url == "accessories.html"){
		$('.menu_list > li').eq(2).addClass('current-item');
	}else if(url == "bestill_time.html" || url == "bestilling_ferdig.html"){
		$('.menu_list > li').eq(3).addClass('current-item');
	}else if(url == "om_oss.html"){
		$('.menu_list > li').eq(4).addClass('current-item');
	}else{
		$('.menu_list > li').eq(0).addClass('current-item');
	}
}


function initializeBookings(){

	$('#booking_form_main').submit(function(e) {
		e.preventDefault();
		var values = $(this).serializeArray();

		if($.trim(values[0]['value']) == '' ){
			alert('Du må skrive inn et navn')
		}else if($.trim(values[1]['value']) == '' &&  !isEmail(values[2]['value'])){
			alert('Du må skrive inn en epost eller et telefonnummer')
		}else if($.trim(values[3]['value']) == ''){
			alert('Du må skrive inn en melding')
		}else{
			SendEmail('email_kontakt.php',  values);
		}

	});

	$('#booking_form').submit(function(e) {
		e.preventDefault();

		if($.trim(this[0].value) && $.trim(this[1].value) && $.trim(this[2].value)){
			var values = $(this).serialize();
			
			$.ajax({
				type: "POST",
				url: 'php/dataUpload.php',
				data: values,
					
				success: function (data) {
					SendEmail('email_booking.php', values);
				},
				cache: false
			});
			
		}else{
			alert('Fyll inn mer informasjon');			
		};
	});

}

function SendEmail(emailPHP, values){

	$.ajax({
		type: "POST",
		url: 'php/email_kontakt.php',
		data: values,
			
		success: function (data) {
			if(emailPHP=='email_kontakt.php'){
				if(data=='1'){
				alert('Melding sendt. Vi vil svare deg iløpet av neste arbeidsdag');
				}else{
					alert(data);
				}
				$('#booking_form_main')[0].reset();
			}else if(emailPHP=='email_booking.php'){
				$('#booking_form')[0].reset();
				document.location.href = "bestilling_ferdig.html";
			}
		},
		cache: false
	});

}


function initializeDateTimePicker(){
	$('#datetimepicker1').datetimepicker({
        locale: 'nb',
        daysOfWeekDisabled: [0],
        viewMode: 'months',
        format: 'L'
    });
    $('#datetimepicker2').datetimepicker({
        locale: 'nb',
        daysOfWeekDisabled: [0],
        viewMode: 'months',
        format: 'L'
    });
    $('#datetimepicker3').datetimepicker({
        locale: 'nb',
        enabledHours: [10, 11, 12, 13, 14, 15, 16, 17, 18],
        stepping: [30],
        format: 'LT'
    });
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
