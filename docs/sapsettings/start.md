---
title: SAP settings
meta:
  - name: keywords
  - content: sap settings cf ping sicf
---

# SAP settings 
On the SAP backend, some settings must be checked if you want Principal Propagation to work. The transactions are: RZ10, STRUST, CERTRULE, SICF and SMICM.

## Set ping service 
The ping service is always provided in the app. Go to `SICF` transaction and activate **/sap/bc/ping** service. <br>
::: tip
If you do not want to setup principal propagation, enter a service user for this service and skip the rest of this chapter.
:::

## RZ10
In order to have your oData Gateway service request a certificate rather than prompt for a username and a password, certain profile parameters need to be maintained. This configuration is done using the transaction `RZ10`. <br>

icm/HTTPS/verify_client <br>  
* Instructs the system to request a certificate from the client
* Value = 1

login/certificate_mapping_rulebased<br>
* Indicate how to interpret the certificates received
* Value = 1

icm/HTTPS/trust_client_with_issuer<br>
* This is the issuer of the system certificate 
* Copy Subject of the issuer exactly as is
* For testing purpose enter `*` 

icm/HTTPS/trust_client_with_issuer<br>
* This is the Subject of the system certificate itself
* For testing enter `*`

## STRUST
In transaction `STRUST`, the **issuer** of the System Certificate needs to be added to the Certificate list of the SSL server Standard. Again, it is the issuer of the System Certificate of the SAP Cloud Connector that is required here!

## CERTRULE
Go to your Cloud Connector : Connector > Configuration, tab ON PREMISE, subtab PRINCIPAL PROPAGATION and click on the button `create a sample certificate`. Enter your SAP login emailaddress as CN attribute and download the certificate. Upload the created sample certificate in CERTRULE. Connect the CN with a SAP User ID.

## SMICM
Restart ICM after changes in RZ10
Use ICM trace for troubleshooting.

## Create SAP Gateway Service
Beyond this scope. Ask your SAP developer.

## More info
* https://blogs.sap.com/2017/06/22/how-to-guide-principal-propagation-in-an-https-scenario/
* https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/a8bb87a72d094e0d981d2b1f67df7bc3.html


