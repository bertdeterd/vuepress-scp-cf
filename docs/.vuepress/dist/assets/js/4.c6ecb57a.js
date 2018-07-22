(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),a("p",[e._v("You have installed vue-cli.")]),e._m(5),a("p",[e._v("Furthermore it is assumed you have created a xsuaa instance in SCP as described "),a("a",{attrs:{href:"https://bertdeterd.github.io/vuepress-scp-cf/scpsettings/start.html#create-uaa-service-instance",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("."),a("br")]),e._m(6),e._m(7),e._m(8),a("br"),e._m(9),e._m(10),a("br"),e._m(11),e._m(12),a("br"),a("p",[e._v("You have created a vue.js application with additional SCP-CF approuter settings and files:")]),e._m(13),e._m(14),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),a("p",[e._v("(1) You have installed vue-cli.")]),e._m(20),a("p",[e._v("(2) You have created an approuter "),a("br"),e._v("\nSee "),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-scp-cf-approuter",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli-pugin-scp-cf-approuter"),a("OutboundLink")],1),e._v(" for more details."),a("br")]),e._m(21),a("p",[e._v("First create a vue.js application. One option is to create an app with the default settings:")]),e._m(22),a("p",[e._v("For a more robust setup of your app it is better to manually select features and select the vue-router.")]),e._m(23),a("p",[e._v("You have created a basic vue.js application. For the SCP-CF node js app you will need some additional settings and files:")]),e._m(24),e._m(25),e._m(26),a("p",[e._v("or")]),e._m(27),e._m(28),a("p",[e._v("For deploying to CF just call:")]),e._m(29),e._m(30)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vueplugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vueplugins","aria-hidden":"true"}},[this._v("#")]),this._v(" vueplugins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The most important driver for fast app development are - besides vue itself ofcourse - the vue plugins\n"),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vue-plugin-scp-cf-approuter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-plugin-scp-cf-approuter","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-plugin-scp-cf-approuter")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A package to create an approuter in a few steps/commands from a basic vue.js application for the Cloud Foundry SAP Cloud Platform (SCP). The approuter is the central point of entry to your business applications.\n"),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prerequisite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm install -g @vue/cli\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Steps")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Create a basic vue.js application"),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ vue create my-approuter --default\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Add the approuter plugin"),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ vue add scp-cf-approuter\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Deploy to Cloud Foundry"),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm run build && cf push\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("manifest.yml"),a("br"),e._v("\ndeployment manifest for cloud foundry")]),a("li",[e._v("xs-app.json"),a("br"),e._v("\nconfigures the application router and describes the routes")]),a("li",[e._v("start script in package.json"),a("br"),e._v("\nlet CF know to start the approuter from SAP (@sap/approuter)")]),a("li",[e._v("a .cfignore"),a("br"),e._v("\nto avoid node_modules folder being uploaded to CF")]),a("li",[e._v("a .npmrc"),a("br"),e._v("\nfor registering @sap npm registry within CF")]),a("li",[e._v("vue.config.js  "),a("br"),e._v("\nwe need 'resources' as our build folder and not 'dist'.")]),a("li",[e._v("connection to CF userinfo service "),a("br"),e._v("\nwith this we can show the user you are logged in")]),a("li",[e._v("logout feature"),a("br"),e._v("\na button to logout to a logout page\n"),a("br"),a("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To let the approuter be able to forward you to your webapplication, you will need to adjust manifest.yml (destinations) and xs-app.json manually ofcourse."),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After your changes re-deploy to CF:"),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm run build && cf push\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vue-plugin-scp-cf-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-plugin-scp-cf-app","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-plugin-scp-cf-app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A package to scaffold a nodejs app from a basic vue.js application for the Cloud Foundry SAP Cloud Platform (SCP).\nThe app has the Destination Service and the Connectivity Service embedded\n"),t("br"),t("br"),this._v("\nBased on Vue CLI v3.0.0-beta.11")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prerequisite-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm install -g @vue/cli\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" Documentation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ vue create my-app  --default \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/bertdeterd/images/master/cpcfapp/VUE-CLI-SelectFeatures.png",alt:"image selectfeatures",title:"Info"}}),t("br"),this._v("(use the space key to select/deselect a feature)"),t("br"),this._v("\nfor more options see : https://github.com/vuejs/vue-cli/blob/dev/docs/cli.md")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("add manifest.yml"),a("br"),e._v("\ndeployment manifest for cloud foundry")]),a("li",[e._v("add nodejs server "),a("br"),e._v("\nadds server.js to set up a nodejs server")]),a("li",[e._v("add server routes"),a("br"),e._v("\nthese routes will be the api routes which connect to SAP Gateway (oData services)."),a("br"),e._v("\nthe sap/bc/ping service has been implemented as an example"),a("br"),e._v("\ncall this service in vue js frontend with $http.get('/sap/basic/ping')")]),a("li",[e._v("add xs-app.json")]),a("li",[e._v("add xs-security.json")]),a("li",[e._v("create start script in package.json")]),a("li",[e._v("add .cfignore"),a("br"),e._v("\nto avoid node_modules folder and default-destinations.json being uploaded to CF")]),a("li",[e._v("add .npmrc"),a("br"),e._v("\nfor registering @sap npm registry within CF")]),a("li",[e._v("alter the main entryfile (main.js|ts) to include axios."),a("br"),e._v("\n$http can be used as your http client "),a("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[t("strong",[this._v("All these tasks are performed by this plugin")])]),this._v(" if you call:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ vue add scp-cf-app\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm i vue-cli-plugin-scp-cf-app --save-dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ vue invoke scp-cf-app \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm run build\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ cf push\n")])])])}],!1,null,null,null);t.default=r.exports}}]);