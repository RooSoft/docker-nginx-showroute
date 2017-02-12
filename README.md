# docker-nginx-showroute
Proof-of-concept about how to route web into unexposed Docker containers.

When successfully setup, an NGINX server will be created and be exposed to the host. It will be able to send requests to a the web server in another container. There will be no way to access the web server without going through NGINX first.

![Explanation](https://github.com/RooSoft/docker-nginx-showroute/raw/master/example.png)

