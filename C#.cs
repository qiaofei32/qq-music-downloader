
if(oSession.url.Contains("player_module_0501d9c.js")) {

	oSession.utilDecodeResponse();
	
	var oBody = System.Text.Encoding.UTF8.GetString(oSession.responseBodyBytes);
	
	var old_js = 'cs={p:function(){try{window.console&&console.log([].slice.call(arguments).join("	"))}catch(e){}}}';
	
	var new_js = 'cs={p:function(){try{var debug=[].slice.call(arguments).join(" ");if(debug.indexOf("expPlayUL 3")!=-1){window.console&&console.log(debug);var img=new Image();var url="https://127.0.0.1:8888/?";url+="&debug="+encodeURIComponent(debug);url+="&song_name="+encodeURIComponent($("#song_name a").text());url+="&singer_name="+encodeURIComponent($("#singer_name a").text());img.src=url;}}catch(e){}}}';
	
	oBody = oBody.replace(old_js, new_js);
	
	oSession.utilSetResponseBody(oBody); 
}