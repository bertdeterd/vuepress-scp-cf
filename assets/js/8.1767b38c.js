(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"cloud-connector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloud-connector","aria-hidden":"true"}},[this._v("#")]),this._v(" Cloud Connector")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you want to test the Cloud Connector you can install it on your laptop."),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Go to your folder where you installed the CC and start go.bat. Your CC is now running on https://localhost:8443"),t("br"),t("img",{attrs:{src:r(214),alt:"create 0"}}),t("br"),t("br"),this._v("\nSome considerations:"),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Start the initial setup. Initial credentials > "),t("strong",[this._v("user:")]),t("code",[this._v("Administrator")]),this._v(" and "),t("strong",[this._v("password:")]),t("code",[this._v("manage")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("The installation type is "),t("code",[this._v("Master")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Go to "),t("code",[this._v("Cloud To On-Premise")]),this._v(" and create a virtual host which maps to your SAP backend system. Click on the + button"),t("br"),t("img",{attrs:{src:r(213),alt:"create 1"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ui-certificate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui-certificate","aria-hidden":"true"}},[this._v("#")]),this._v(" UI Certificate")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, the Cloud Connector includes a self-signed UI certificate. It is used to encrypt the communication between the browser-based user interface and the Cloud Connector itself. For security reasons, however, you should replace this certificate with your own one to let the browser accept the certificate without security warnings."),t("br"),this._v("\nHaving the UI certificate properly configured will remove the warning (Untrusted Connection warning thrown in most browsers) we would get when accessing the Cloud Connector."),t("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Open the Cloud Connector")]),n("li",[e._v("Go to Connector > Configuration, tab USER INTERFACE")]),n("li",[e._v("Press button "),n("code",[e._v("Generate certificate signing request")]),n("br"),n("img",{attrs:{src:r(212),alt:"create a csr"}}),n("br")]),n("li",[e._v("Go to XCA and create a root certificate")]),n("li",[e._v("Import the downloaded CSR into XCA")]),n("li",[e._v("Use the root certificate for signing the CSR")]),n("li",[e._v("Download the signed CSR (now called a certificate!) in DER format")]),n("li",[e._v("Upload to the Cloud Connector "),n("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For Chrome the SAN attribute should be the same as the CN attribute with a prefix of "),t("code",[this._v("DNS:")]),this._v("."),t("br"),this._v("\nThe end result should be:"),t("br"),t("img",{attrs:{src:r(211),alt:"localhost green"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"system-certificate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-certificate","aria-hidden":"true"}},[this._v("#")]),this._v(" System certificate")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('In order to set up a mutual authentication between the Cloud Connector and any back-end system it connects to, you can import an X.509 client certificate into the Cloud Connector. The Cloud Connector will then use the so-called "system certificate" for all HTTPS requests to back-ends that request or require a client certificate.'),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ca-certificate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ca-certificate","aria-hidden":"true"}},[this._v("#")]),this._v(" CA Certificate")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In order to use principal propagation you need to allow the Cloud Connector to propagate the user. In the case of HTTPS, the Cloud Connector will forward the true identity in a short-living X.509 certificate in an HTTP header named "),t("code",[this._v("SSL_CLIENT_CERT")]),this._v(". The backend system needs to use this certificate for logging on the real user.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"principal-propagation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principal-propagation","aria-hidden":"true"}},[this._v("#")]),this._v(" Principal Propagation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"refresh-idp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refresh-idp","aria-hidden":"true"}},[this._v("#")]),this._v(" Refresh IdP")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Go to "),t("code",[this._v("Cloud To On-Premise")]),this._v(", tab Principal Propagation and click on Refresh. The cloud connector is delivered without trusting any IdP by default.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"more-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-info","aria-hidden":"true"}},[this._v("#")]),this._v(" More info")])}],i=r(0),o=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[e._v("The Cloud Connector is a small server installed inside the customer’s landscape and acts as a reverse proxy to establish a connection with the connectivity service on SAP Cloud Platform. Once the connection is established, the Cloud Connector accepts calls from SAP Cloud Platform and routes them through to the correct endpoint of one of the on-premise systems.")]),e._m(1),e._m(2),r("ul",[r("li",[e._v("Go to "),r("a",{attrs:{href:"https://tools.hana.ondemand.com/#cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tools.hana.ondemand.com/#cloud"),r("OutboundLink")],1),e._v(" and install the Cloud Connector (CC) windows or windows (portable)."),r("br")]),e._m(3),e._m(4),e._m(5),r("li",[e._v("Your region starts with cf. For EU it is cf.eu10.hana.ondemand.com.")]),r("li",[e._v("Your subaccount is the subaccount ID (see your SCP: subaccount details, field ID)")])]),e._m(6),e._m(7),e._m(8),e._m(9),r("p",[e._v("The steps are well described in this "),r("a",{attrs:{href:"https://blogs.sap.com/2017/06/26/how-to-guide-xca-quick-start-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog"),r("OutboundLink")],1),e._v(". The basics are:"),r("br")]),e._m(10),e._m(11),e._m(12),e._m(13),r("p",[e._v("Copy from UI certificate")]),e._m(14),e._m(15),r("p",[e._v("Go to Configuration, Tab OnPremise, section CA Certificate + Click on icon to create a self-signed (typical self-signed for CA)")]),e._m(16),r("p",[e._v("Under Principal Propagation generate a sample certificate (the first icon in the row).  One of the roles of the SCC in the context of Principal propagation is to generate short-lived certificates based on some identity information retrieved from the logged in user.")]),r("p",[e._v("We will use the generated sample certificate later in our configuration to build our rule in the CERTRULE transaction.\nEnter your SCP login (emailaddress!) as CN name")]),e._m(17),e._m(18),e._m(19),r("ul",[r("li",[r("a",{attrs:{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/db9170a7d97610148537d5a84bf79ba2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAP help documentation"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"https://blogs.sap.com/2015/07/13/cloud-connector-a-brief-guide-for-beginners/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blogs.sap.com/2015/07/13/cloud-connector-a-brief-guide-for-beginners/"),r("OutboundLink")],1)])])])},n,!1,null,null,null);t.default=o.exports},211:function(e,t){e.exports="data:image/png;base64,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"},212:function(e,t,r){e.exports=r.p+"assets/img/csrcreate.88e4db8b.png"},213:function(e,t,r){e.exports=r.p+"assets/img/cc_create_vh.4c7e98db.png"},214:function(e,t){e.exports="data:image/png;base64,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"}}]);