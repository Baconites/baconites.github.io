
	$('#add').click(function(){
		var show = $('#problem').html();
		var x = '<div class="form-group"><label for="question">Enter your question : </label><input type="text" class="form-control" placeholder="question"><label for="question">Answer : </label>'
		x+='<input type="text" class="form-control" placeholder="answer 1"><input type="text" class="form-control" placeholder="answer 2">'
		x+='<div class="form-inline"><label for="realanswer">Right answer is : </label><select name="" id=""><option value="1">1</option>'
		x+='<option value="2">2</option></select></div></div>';
		$('#problem').html(show+x);

	});

$(window).on('load', function() {
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");
});