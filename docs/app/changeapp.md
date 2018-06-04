---
title: Change App
# We can even add meta tags to the page! This sets the keywords meta tag.
# <meta name="keywords" content="my SEO keywords"/>
meta:
  - name: keywords
  - content: my SEO keywords
---

# App

## Use backend service 

In your vue file add
``` js{8}
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  async created() {
    try {
      const response = await this.$http.get(`/sap/basic/ping`); 
      this.msg = response.data;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
```


## Add backend service 

To add a backend server, go to server/routes/sap and add a js file. If you want to subdivide your services add a folder.
One service is created: /sap/basic/ping. 


