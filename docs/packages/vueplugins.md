---
title: vue plugins
meta:
  - name: keywords
  - content: intro sap vue
---

# vueplugins

The most important driver for fast app development are - besides vue itself ofcourse - the vue plugins
<br>

## vue-plugin-scp-cf-approuter

A package to create an approuter in a few steps/commands from a basic vue.js application for the Cloud Foundry SAP Cloud Platform (SCP). The approuter is the central point of entry to your business applications.
<br>

### Prerequisite

You have installed vue-cli. 
```
$ npm install -g @vue/cli
```

Furthermore it is assumed you have created a xsuaa instance in SCP as described [here](https://bertdeterd.github.io/vuepress-scp-cf/scpsettings/start.html#create-uaa-service-instance).<br>

### Steps

1. Create a basic vue.js application<br>
```
$ vue create my-approuter --default
```
<br>

2. Add the approuter plugin<br>
```
$ vue add scp-cf-approuter
```
<br>

3. Deploy to Cloud Foundry<br>
```
$ npm run build && cf push
```
<br>


You have created a vue.js application with additional SCP-CF approuter settings and files:
- manifest.yml<br>
deployment manifest for cloud foundry
- xs-app.json<br>
configures the application router and describes the routes
- start script in package.json<br>
let CF know to start the approuter from SAP (@sap/approuter)
- a .cfignore<br>
to avoid node_modules folder being uploaded to CF
- a .npmrc<br>
for registering @sap npm registry within CF 
- vue.config.js  <br>
we need 'resources' as our build folder and not 'dist'.
- connection to CF userinfo service <br>
with this we can show the user you are logged in
- logout feature<br>
a button to logout to a logout page
<br>
To let the approuter be able to forward you to your webapplication, you will need to adjust manifest.yml (destinations) and xs-app.json manually ofcourse.<br>

For deploying to CF just call:
```
$ npm run build
```
```
$ cf push
```





## vue-plugin-scp-cf-app

A package to scaffold a nodejs app from a basic vue.js application for the Cloud Foundry SAP Cloud Platform (SCP). 
The app has the Destination Service and the Connectivity Service embedded
<br><br>
Based on Vue CLI v3.0.0-beta.11

### Prerequisite

(1) You have installed vue-cli. 
```
$ npm install -g @vue/cli
```

(2) You have created an approuter <br>
See [vue-cli-pugin-scp-cf-approuter](https://www.npmjs.com/package/vue-cli-plugin-scp-cf-approuter) for more details.<br>

### Documentation

First create a vue.js application. One option is to create an app with the default settings:

```
$ vue create my-app  --default 
```

For a more robust setup of your app it is better to manually select features and select the vue-router.

![image selectfeatures](https://raw.githubusercontent.com/bertdeterd/images/master/cpcfapp/VUE-CLI-SelectFeatures.png "Info")
<br>(use the space key to select/deselect a feature)<br>
for more options see : https://github.com/vuejs/vue-cli/blob/dev/docs/cli.md

You have created a basic vue.js application. For the SCP-CF node js app you will need some additional settings and files:
- add manifest.yml<br>
deployment manifest for cloud foundry
- add nodejs server <br>
adds server.js to set up a nodejs server
- add server routes<br>
these routes will be the api routes which connect to SAP Gateway (oData services).<br>
the sap/bc/ping service has been implemented as an example<br>
call this service in vue js frontend with $http.get('/sap/basic/ping')
- add xs-app.json
- add xs-security.json
- create start script in package.json
- add .cfignore<br>
to avoid node_modules folder and default-destinations.json being uploaded to CF
- add .npmrc<br>
for registering @sap npm registry within CF 
- alter the main entryfile (main.js|ts) to include axios.<br>
$http can be used as your http client <br>

***All these tasks are performed by this plugin*** if you call:
```
$ vue add scp-cf-app
```
or
```
$ npm i vue-cli-plugin-scp-cf-app --save-dev
```
```
$ vue invoke scp-cf-app 
```



For deploying to CF just call:
```
$ npm run build
```
```
$ cf push
```


