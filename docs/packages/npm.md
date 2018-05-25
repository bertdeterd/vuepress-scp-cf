---
title: npm
meta:
  - name: keywords
  - content: intro sap vue
---

# npm

The vue plugins we use to create our app are - besides vue - based on the following packages. If you use the vue plugin you do not need to install them manually. 
<br>

## scp-cf-destination

A package to be used as express middleware to make a connection to the connectivity service of the Cloud Foundry SAP Cloud Platform (SCP) with the on-premise SAP backend system. The destination service is being used to retrieve the virtual host<br>
Axios is used as an easy-to-use http client which can be used in other routes with: **req.axios**

### Documentation

```
$ npm install --save scp-cf-destination
```

### Usage

Before your own api routes insert the middleware **route.use(scp-cf-destination)**
This ensures that:
- the virtual host is being retrieved (in axios this will be the baseUrl)
- an oauth request is made to the connectivity service
- an access token is being returned
- global defaults are being set for axios

There are two ways to make basic settings for the destination service :
- In your app you set the env variable  **SAP_SCC_BACKEND_DESTINATION: 'mycompany_sap_dev'**
  in the manifest.yml file. <br>
- set the env manually and restage your app


### Example

For testing this scenario go to SICF:
- make sure the sap/bc/ping service is activated
- in Logon Data add a service user and password if principal propagation is not set up


``` js
const sccConnector = require("scp-cf-destination");

router.use(sccConnector);

router.get("/ping", function(req, res) {
    req.axios.get( '/sap/bc/ping' )
      .then(response => {
         res.send(response.data);
        })
      .catch(error => {
         console.log(error);
      });  
});

```


