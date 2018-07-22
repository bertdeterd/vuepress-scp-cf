---
title: Prerequisites
meta:
  - name: keywords
  - content: cf npm node visual studio code sap
---

# Prerequisite 

In order to create and deploy your app, you must have installed the items below.<br>


## Visual Studio Code 

This is not a hard requirement. You can choose your own preferred IDE. But if you have not made a choice yet, we recommend to install Visual Studio Code.<br><br>
Download and install from: <https://code.visualstudio.com/download><br>
<br>
Install the **Vetur** extension. Do `CTRL-SHIFT-X` in Visual Studio Code, search for 'vetur' and click on the install button.
If you use Vuetify also install the extension **vuetify-vscode**.


## Spring Tool Suite
Microservices are created as Spring Boot applications in Spring Tool Suite. Download and install this from [https://spring.io/tools/sts](https://spring.io/tools/sts)


## Node JS and NPM

Download and install from: <https://nodejs.org/en/>
Check the version in your terminal:
```shell
$ node --version
```
```shell
$ npm --version
```
::: tip
in Visual Studio Code you can use ```CTRL + ` ``` to open your terminal
:::


## Cloud Foundry CLI

To deploy your app to SCP-CF you will need the Cloud Foundry CLI. 

Download and install from: <https://github.com/cloudfoundry/cli#downloads><br>
Check the version in your terminal:
```shell
$ cf --version
```
Update with installer from download site <https://github.com/cloudfoundry/cli#downloads>


## Vue CLI

To create Vue apps we will need the Vue CLI<br>
Install with npm:
```sh
$ npm install -g @vue/cli
```

Check the version in your terminal:
```
$ vue --version
```

For updating 
```
$ npm update @vue/cli -g
```

## SAP NPM registry
To let npm be able to find the SAP npm packages (which we will be using), we must register the @sap-scoped npm packages
```
$ npm config set @sap:registry https://npm.sap.com/
```
This creates a `.npmrc` file in your root (Windows: `C:\Users\<USER>`).<br><br>
To check out which packages SAP provides, type the following in your terminal:
```
$ npm search --registry  https://npm.sap.com/ sap
```

## More info

* read the blog from Sven Kohlhaas: <https://blogs.sap.com/2017/05/16/sap-npm-registry-launched-making-the-lives-of-node.js-developers-easier/>

