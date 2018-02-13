var mainHtml;

function previewHtml() {
	var html = $('#html').val();
	window.localStorage.setItem("resumeHtml", html);

	$('#container').html(html);
}

function loadHtml() {
	$.get('/resume.html')
		.then((res) => {
			mainHtml = res;

			$('#container').html(res);
		})
}

function saveHtml() {
	var html = mainHtml;

	$.post('/resume', {
		html: html
	}).then((res) => {
		console.log(res);
	})
}

$(function() {
	loadHtml();
})