(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(t,a,s){"use strict";s.r(a);var e=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"approuter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approuter","aria-hidden":"true"}},[t._v("#")]),t._v(" Approuter")]),e("p",[t._v("The application router is the single entry point for the (business) application. It has the responsibility to serve static content, authenticate users, rewrite URLs, and proxy requests to other micro services while propagating user information.")]),e("p",[e("img",{attrs:{src:s(212),alt:"create 01"}})]),e("h2",{attrs:{id:"create-the-approuter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-approuter","aria-hidden":"true"}},[t._v("#")]),t._v(" Create the approuter")]),e("p",[t._v("The first step is to create our basic approuter. Below my-approuter is created but you can give it any name. Since it is not a real app there is no need to make special settings for vue so we can use the "),e("code",[t._v("--default")]),t._v(".")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ vue create my-approuter --default\n")])])]),e("h2",{attrs:{id:"add-sap-cloud-foundry-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-sap-cloud-foundry-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Add SAP Cloud Foundry plugin")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ vue add scp-cf-approuter\n")])])]),e("h2",{attrs:{id:"adjust-router-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adjust-router-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Adjust router configuration")]),e("p",[t._v("The xs-app.json descriptor contains all configuration information used by the application router. A route defines how an incoming request path is updated and/or forwarded to a destination."),e("br"),e("br"),t._v("\nOne example is already given in xs-app.json"),e("br")]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"routes"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token property"}},[t._v('"source"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"^/myapp/(.*)$"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{attrs:{class:"token property"}},[t._v('"target"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"$1"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{attrs:{class:"token property"}},[t._v('"destination"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"myapp"')]),t._v("       \n      "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"adjust-destination-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adjust-destination-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Adjust destination configuration")]),e("p",[t._v("Make a mapping between the destination name in "),e("code",[t._v("xs-app.json")]),t._v(" and the actual target-url for the app in "),e("code",[t._v("manifest.yml")]),t._v(". If you have not made an app yet, deploy and change the configuration later."),e("br")]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("    destinations"),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" >\n      "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{attrs:{class:"token property"}},[t._v('"name"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),e("span",{attrs:{class:"token string"}},[t._v('"myapp"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                             \n          "),e("span",{attrs:{class:"token property"}},[t._v('"url"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),e("span",{attrs:{class:"token string"}},[t._v('"https://myapp-s0000000000trial.cfapps.eu10.hana.ondemand.com/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n          "),e("span",{attrs:{class:"token property"}},[t._v('"forwardAuthToken"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("                                    \n        "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("You can also change the destination configuration in SCP directly. Go to the user-provided variables for your approuter app and change the variable."),e("br")]),e("p",[e("img",{attrs:{src:s(211),alt:"create 0"}})]),e("h2",{attrs:{id:"deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy")]),e("p",[t._v("Run:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ npm run build && cf push\n")])])]),e("h2",{attrs:{id:"local-development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-development","aria-hidden":"true"}},[t._v("#")]),t._v(" Local development")]),e("p",[t._v("If you want to test locally and do not want to deploy your approuter every time you can set "),e("code",[t._v("default-services.json")]),t._v(" and run npm start.")]),e("p",[t._v('Copy the data from your xsuaa instance in default-services.json after "uaa".')]),e("p",[t._v("Change the uaadomain to include your specific domain:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"uaadomain": "s000000000trial.authentication.eu10.hana.ondemand.com",\n')])])])])}],n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);a.default=r.exports},211:function(t,a,s){t.exports=s.p+"assets/img/approuter-env.418bb15b.png"},212:function(t,a,s){t.exports=s.p+"assets/img/result.ab7f85b5.png"}}]);