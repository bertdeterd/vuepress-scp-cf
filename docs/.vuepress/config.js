module.exports = {
  title: 'VueSAP',
  description: "Fast app development for SCP | Cloud Foundry",
  base: '/vuepress-scp-cf/',
  themeConfig: {
    nav: [
      { text: 'GUIDE', link: '/general/intro.html' },
      { text: 'SCP', link: 'https://account.hanatrial.ondemand.com/cockpit#/home/trialhome' }

      
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/general/intro',
          '/prerequisite/start',
          'cloudconnector/start',
          '/scpsettings/start',
          '/sapsettings/start',
          'approuter/start',
          'app/start'
        ]
      }
    ]
  }
}