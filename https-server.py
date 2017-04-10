import os
import web
import urllib
import thread
from web.wsgiserver import CherryPyWSGIServer

urls = ("/.*", "download")
CherryPyWSGIServer.ssl_certificate = "cert.pem"
CherryPyWSGIServer.ssl_private_key = "key.pem"

def url_download(link, file_name):
	urllib.urlretrieve(link, file_name)

class MyApplication(web.application):
	def run(self, port=10000, *middleware):
		func = self.wsgifunc(*middleware)
		return web.httpserver.runsimple(func, ('127.0.0.1', port))

class download(object):
	def GET(self, *args, **agrv):
		user_data = web.input()
		try:
			link = user_data.link.encode("utf8")
			link = urllib.unquote(link)
			song_name = user_data.song_name
			singer_name = user_data.singer_name
			file_name = "songs/%s-%s.m4a" %(singer_name, song_name)
			file_name = file_name.encode("gbk")
			if not os.path.exists(file_name):
				# urllib.urlretrieve(link, file_name)
				thread.start_new_thread(url_download, (link, file_name))
			return file_name.decode("gbk").encode("utf8")
		except:
			return "Error!"

if __name__ == "__main__":
	app = MyApplication(urls, globals())
	app.run(port=10000)

