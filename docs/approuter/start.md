---
title: Approuter
meta:
  - name: keywords
  - content: approuter
---

# Approuter

The application router is the single entry point for the (business) application. It has the responsibility to serve static content, authenticate users, rewrite URLs, and proxy requests to other micro services while propagating user information.

![create 01](./images/result.png)

## Create the approuter

The first step is to create our basic approuter. Below my-approuter is created but you can give it any name. Since it is not a real app there is no need to make special settings for vue so we can use the `--default`.
```
$ vue create my-approuter --default
```

## Add SAP Cloud Foundry plugin

```
$ vue add scp-cf-approuter
```

## Adjust router configuration

The xs-app.json descriptor contains all configuration information used by the application router. A route defines how an incoming request path is updated and/or forwarded to a destination.<br>
<br>
One example is already given in xs-app.json<br>
``` json
{
  "routes": [
     {
        "source": "^/myapp/(.*)$",
        "target": "$1",
        "destination": "myapp"       
      }
  ]
}
```

## Adjust destination configuration

Make a mapping between the destination name in `xs-app.json` and the actual target-url for the app. Go to your subaccount `Connectivity > Destinations`. If you have not made an app yet, deploy and change the configuration later.<br>

![create 0](./images/appjson-routes.png)

![create 0](./images/dest-settings.png)

As an alternative (not recommended), you can set the destinations in `manifest.yml`.<br>
``` json
    destinations: >
      [
        {
          "name":"myapp",                                             
          "url":"https://myapp-s0000000000trial.cfapps.eu10.hana.ondemand.com/",    
          "forwardAuthToken": true                                    
        }
      ]
```

## Deploy
Run:
```
$ npm run build && cf push
```


## Local development
If you want to test locally and do not want to deploy your approuter every time you can set `default-services.json` and run npm start.

Copy the data from your xsuaa instance in default-services.json after "uaa".

Change the uaadomain to include your specific domain:

```
"uaadomain": "s000000000trial.authentication.eu10.hana.ondemand.com",
```
