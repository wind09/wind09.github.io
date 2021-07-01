$(document).ready(function(){
	
});


function sendMail() {

	var from = $("textarea#msg_from_email").val();
	var subject = $("textarea#msg_subject").val();
	var content = $("textarea#msg_content").val();
	var link = 'mailto:kanchen@waymo.com?cc=' + from
				+'&subject='+subject+'&body='+content;
	window.location.href = link;
}