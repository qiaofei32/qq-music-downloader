import pexpect

if __name__ == '__main__':

	password = 'root'
	cmd = 'python https-server.py 10000'

	child = pexpect.spawn(cmd)
	child.expect('Enter PEM pass phrase:')
	child.sendline(password)
	child.interact()

