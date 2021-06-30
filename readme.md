### Simple HTTP Load Balancer

#### Technologies used:
1. HAProxy
2. Node.JS application servers

#### Commands to run
```
port=4444 nodemon appserver.js
port=5555 nodemon appserver.js
port=6666 nodemon appserver.js
port=7777 nodemon appserver.js
port=8888 nodemon appserver.js
haproxy -f http.cfg
```
```Hit localhost:8080 on browser``` <br><p>
(Add as many ports to http.cfg as desired to create more app servers to be load balanced.)

<i>That's all it takes to create a Layer 7 Load Balancer!</i>