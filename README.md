# docker-nginx-showroute
Proof-of-concept about how to route web into unexposed Docker containers.

When successfully setup, an NGINX server will be created and be exposed to the host. It will be able to send requests to a the web server in another container. There will be no way to access the web server without going through NGINX first.

![Explanation](https://github.com/RooSoft/docker-nginx-showroute/raw/master/example.png)

## Steps to reproduce
1. Install Docker
2. Create the web server Docker image
3. Instanciate both containers using Docker Compose
4. Test that new setup


### Install Docker
Install the [latest version of Docker](https://docs.docker.com/engine/installation/)

### Create the web server Docker image

1. Go into the *showroute_image_source* folder
2. Use this command: `docker build -t showroute .`

### Instanciate both containers using Docker Compose

1. Go back to the project's home folder `cd ..`
2. Use this command: `docker-compose up`

### Test that new setup

Now you should be able to reach a local server on port 80 that's answering to any URL that starts from *http://localhost/chat*. The server will get a request on its port 80 with chat removed from the path.

Example: http://localhost/chat/start will map to http://localhost/start in the web server.

Browsing `localhost/chat/start` should return something similar to this:

`172.19.0.3 Time: Tue Feb 14 2017 13:20:38, URL: /chat/1`.

This means that the NGINX server got the request, routed it to the "chat" web server, got its response and sent it as a response. The "chat" server simply answers by sending the URL it got from the NGINX request.
