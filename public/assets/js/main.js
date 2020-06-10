/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		$(document).ready(function () {
			$('#sendEmailForm').submit(function (e) {
				e.preventDefault();
				var data = $('#sendEmailForm').serializeArray().reduce(function (obj, item) {
					obj[item.name] = item.value;
					return obj;
				}, {});
				var bodyContent = "Hola, mi nombre es " + data.name + ". Y quisiera comunicarme con ustedes, este es mi email: " + data.email + " Aparte les quería decir esto: " + data.message;
				Email.send({
					Host: "smtp.elasticemail.com",
					Username: "micpavenezuela@gmail.com",
					Password: "9A8AE57483BC9CB832FA7603DECEC2226735",
					To: 'micpavenezuela@gmail.com',
					From: "micpavenezuela@gmail.com",
					Subject: "Formulario de contacto",
					Body: bodyContent
				}).then(function (message) {
					alert(message);
				});
				console.log(data);
			});
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);