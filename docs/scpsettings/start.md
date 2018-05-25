---
title: SCP settings
meta:
  - name: keywords
  - content: sap scp
---

# SCP settings 

## Create destination
A destination is nothing more than a name for the virtual host you created in the SAP Cloud Connector. In the app we will retrieve the virtual host from the destination name. For this there is an npm package [scp-cf-destination](/packages/npm.html) which our vue app plugin makes use of<br><br>
Go to your subaccount<br>
![destination in SCP](./images/dest-location.png)
<br><br>
Click on:<br>
![new destination in SCP](./images/dest-new.png)
<br><br>
Create a new destination. change `mycompany_sap_dev` to any name which is convenient for your company. In the URL field type the name of the **virtual host** your created in the Cloud Connector<br>
![config destination in SCP](./images/dest-config.png)



