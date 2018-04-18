$(document).ready(function(){
	console.log('the document is ready');
	$(".btn-danger").click(function(){
		$("h1").text('Goodbye, world!');
	});
});