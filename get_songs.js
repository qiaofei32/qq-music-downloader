cs = {
	p: function () {
		try {
			window.console && console.log([].slice.call(arguments).join(" "))
		} catch (e) {}
	}
}
cs = {
	p: function () {
		try {
			var debug = [].slice.call(arguments).join(" ");
			if (debug.indexOf("expPlayUL 3") != -1) {
				window.console && console.log(arguments[1]);
				var img = new Image();
				var url = "https://127.0.0.1:10000/?";
				url += "&link=" + encodeURIComponent(arguments[1]);
				url += "&song_name=" + encodeURIComponent($("#song_name a").text());
				url += "&singer_name=" + encodeURIComponent($("#singer_name a").text());
				img.src = url;
			}
		} catch (e) {}
	}
}
cs = {
	p: function () {
		try {
			var debug = [].slice.call(arguments).join(" ");
			if (debug.indexOf("expPlayUL 3") != -1) {
				window.console && console.log(arguments[1]);
				var url = "https://127.0.0.1:10000/?";
				url += "link=" + encodeURIComponent(arguments[1]);
				url += "&song_name=" + encodeURIComponent($("#song_name a").text());
				url += "&singer_name=" + encodeURIComponent($("#singer_name a").text());
				$.get(url, function (data) {
					console.log(data);
				});
			}
		} catch (e) {}
	}
}