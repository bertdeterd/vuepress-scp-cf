(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(t,e,i){"use strict";i.r(e);var A=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"scp-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scp-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" SCP settings")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"create-destination-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-destination-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Create destination configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"create-destination-service-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-destination-service-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Create destination Service Instance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Provides a secure and reliable access to the destination configuration"),e("br"),this._v("\nFrom the service marketplace, click on "),e("code",[this._v("Destination")]),this._v("  :"),e("br"),e("img",{attrs:{src:i(200),alt:"Service marketplace"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a new instance. Basically it is just a name (e.g "),e("code",[this._v("my-destination")]),this._v(") but later on we will bind this instance to our app so that env variable VCAP_SERVICES has the destination service API url with which we can retrieve the virtual host. So it is essential for connecting our onpremise SAP backend to your app.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"create-uaa-service-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-uaa-service-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Create uaa service instance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Configure trust to identity providers for authentication. Manage your authorization model consisting of roles, groups and role collections, and assigning them to users. Use RESTful APIs to automate and integrate with other systems.\nFrom the service marketplace, click on "),e("code",[this._v("Authorization & Trust Management")]),this._v(" and create a new instance.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"create-connectivity-service-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-connectivity-service-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Create connectivity service instance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"create-with-scp-gui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-with-scp-gui","aria-hidden":"true"}},[this._v("#")]),this._v(" Create with SCP gui")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Go to your space within your subaccount and then go to the Service markeplace. From the service marketplace, click on "),e("code",[this._v("Connectivity")]),this._v(" and create a new instance.\n"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"create-with-cf-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-with-cf-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Create with CF CLI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can also create this service instance (for instance "),e("code",[this._v("my-connector")]),this._v(") with the CF CLI"),e("br"),this._v("\nFirst check which plan there is available with:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("$ cf marketplace "),e("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("s connectivity\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(199),alt:"smp conn"}}),e("br"),this._v("\nAnd then create the service instance with the plan available")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("$ cf create"),e("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("service connectivity lite my"),e("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("connecor\n")])])])}],s=i(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"content"},[t._m(0),t._m(1),A("p",[t._v("A destination is nothing more than a name for the virtual host you created in the SAP Cloud Connector. In the app we will retrieve the virtual host from the destination name. For this there is an npm package "),A("router-link",{attrs:{to:"/packages/npm.html"}},[t._v("scp-cf-destination")]),t._v(" which our vue app plugin will make use of"),A("br"),A("br"),t._v("\nGo to your subaccount"),A("br"),A("img",{attrs:{src:i(203),alt:"destination in SCP"}}),A("br"),A("br"),t._v("\nClick on:"),A("br"),A("img",{attrs:{src:i(202),alt:"new destination in SCP"}}),A("br"),A("br"),t._v("\nCreate a new destination. change "),A("code",[t._v("mycompany_sap_dev")]),t._v(" to any name which is convenient for your company. In the URL field type the name of the "),A("strong",[t._v("virtual host")]),t._v(" your created in the Cloud Connector"),A("br"),A("img",{attrs:{src:i(201),alt:"config destination in SCP"}})],1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),A("p",[t._v("Establishes a secure and reliable connectivity between cloud applications and on-premise systems.")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14)])},A,!1,null,null,null);e.default=a.exports},199:function(t,e){t.exports="data:image/png;base64,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"},200:function(t,e,i){t.exports=i.p+"assets/img/scp-service-marketplace.4ad97d03.png"},201:function(t,e,i){t.exports=i.p+"assets/img/dest-config.e78181ca.png"},202:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAA3CAIAAADIV+xqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAARySURBVHhe7Za/i5VHFIbt/Qf0DwixEJtdCKkEtxRtBFu1DdgnrQhWglUglQZS2LmghgQsZElIjKKNP5JGsxFRJBBFw8a1WJ/dd3w9ft/st7q5l3t1zsNwOXPmzPnmnvPe+e6W5SSpkcpI6qQykjqNKmPb9k9++vlKmSQ12lXGnj37UhwDtKuMlZWVFMcATSsjxTFA68qAFEeVVMYqKY4+qYxCiqNDKuMNKY5IKuMN/714meIwqYy3ePLkWYpDpDK6PHr0OMUBqYwKi4v3EUcJbZVUxsrz50syUEMcJbRVWlcGsti6ddv5C5ew5+b2z89fLBHN07QyJAv+Uuzc+RlTXiIYJaJ52lWGZcF0796DCwtXEAdGXhuiUWXwN8KyAIxPd8yijNu3f9+163M5G6dRZfThtkAWiGNmZndxtU0qo7D4132ujcOHv/jt6vXiapuxK+O7H36dPXIijgNfffPw73/KcjKtjFcZksV6Ujh3+catuw/KJJkyxqgM3xZVZTx99u/Rk2eJKfNkyhiXMuJLpKOMd3+/SD0MjOJaXl648ceo3kfK3zkM+cvy+8B5jhz/Vlcgn5xwE9chlTl++nvZGLYnwliUQZkojWvdaa2QPoZ77M7Fq2XkyohSoJ1zR09tQhxRGZsmKmPijEsZVHzDljPo8UAbFEax6JaLHpVh6Vh/8lhJGPJj90+l4M4BhvMrhiPJqUgGhjxs953BQC6nzl7SUjUDQ2rQT8VhOOWPSz4YsErm+Fz5R8VklHHvwWOG7IGv5M5RBZfVndOqReBS4pGhAFdTeVZDX+P8Zb4Gwfr1D+T3YWx7F86oDDStXQTgVDY8zsDT3VefHOLj/BWizap/MNE/KiajjAhhqlEf9YaqEeOyMlUVMFxfwKPeMDCYMghQBgIopQzj/GW+hp3r5ecY0S+8is0nJ9RJZCjGzY6wkRidgcwOUHBcBZ1NdYjZOg8aCZNXxgCxc3zqJ4JBFUhOgXSReiiAJTWJSGpHGKN6pJjf2DmQnwN4ql1+KDaf6pMNxcReQsyvM+BxgII7GQAnYTIc3A/7/0xGGRsGiE7nKATTH3+5SRXYS4GYEqPViMqnQb2+/PrctTt/8lYuy6+pKoPMA3eD0V6aqsN4F0vukw1tcS/JHDdiNKcMfW3/MmI5FFA2rEOnc8p26NgZJcEvQ6sRllADg2LpWciiowCoKsNpB/IbVokhEuMdlVH9Upr2lRFXQXs/BmWUeY8NA0S/c9iWl1ZdHZbkx6ZGXPUxzEuRfn5tlGe9/DQGP6vRyXgvZai7svlGemJfGXL68NF2AHQeNBI+pDtDUA5XJ+a3EzpNjb2MuDEe8a8DVPPHXTGex+HhWe6TDQfoSHjYqAy8HH1U+fUgBwM5FewzQAzoPGgkTPWdkUyQVEZSZyzK6N/S/REvxmQKGYsyko+AVEZSJ5WR1EllJHVSGUmdVEZSJ5WR1EllJHVSGUmdVEZSJ5WR1EllJHVSGUmdVEZSJ5WR1Okq41qSrNFVxlKSwNLSK2lILt3oJZ10AAAAAElFTkSuQmCC"},203:function(t,e,i){t.exports=i.p+"assets/img/dest-location.45ac3b16.png"}}]);