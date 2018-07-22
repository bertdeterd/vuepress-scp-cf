---
title: Microservices
meta:
  - name: keywords
  - content: intro sap vue sts
---

# Introduction



## Create microservice 
Microservices are created as spring boot applications in Spring Tool Suite. Download and install this from [https://spring.io/tools/sts](https://spring.io/tools/sts)<br>
<br>
## Consume microservice in app

* Change manifest.yml environment variable `destinations` (or in SCP directly) and add the destination to the url of the microservice<br>
![localhostx green](./images/manifest.png)
* Change xs-app.json in your app and make a route to the destination<br>
![localhost5 green](./images/xsapp.png)
* Call the service with axios ($http) in your app<br>
![localhost6 green](./images/axios.png)





