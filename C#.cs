// if(oSession.url.Contains("y.qq.com")) {
	// oSession.oResponse.headers["Content-Security-Policy"] = "cript-src http://www.infosec-wiki.com https://*.qq.com http://*.qq.com https://*.gtimg.cn http://*.gtimg.cn https://*.url.cn http://*.url.cn https://*.tenpay.com http://*.tenpay.com https://*.qpic.cn http://*.qpic.cn https://*.idqqimg.com http://*.idqqimg.com https://*.gtimg.com http://*.gtimg.com https://*.soso.com http://*.soso.com https://*.jd.com http://*.jd.com 'unsafe-inline' 'unsafe-eval'; report-uri https://stat.y.qq.com/monitor/report_csp";
// }

if(oSession.url.Contains("player_module_0501d9c.js")) {

	oSession.utilDecodeResponse();
	
	var oBody = System.Text.Encoding.UTF8.GetString(oSession.responseBodyBytes);
	
	var old_js = 'cs={p:function(){try{window.console&&console.log([].slice.call(arguments).join("	"))}catch(e){}}}';
	
	var new_js = 'cs={p:function(){try{var debug=[].slice.call(arguments).join(" ");if(debug.indexOf("expPlayUL 3")!=-1){window.console&&console.log(arguments[1]);var url="https://127.0.0.1:10000/?";url+="link="+encodeURIComponent(arguments[1]);url+="&song_name="+encodeURIComponent($("#song_name a").text());url+="&singer_name="+encodeURIComponent($("#singer_name a").text());$.get(url,function(data){console.log(data);});}}catch(e){}}}';
	
	oBody = oBody.replace(old_js, new_js);
	
	oSession.utilSetResponseBody(oBody); 
}