module.exports = {
  title: 'VueSAP',
  description: "Fast app development for SCP | Cloud Foundry",
  base: '/vuepress-scp-cf/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'GUIDE', link: '/general/intro.html' },
      { text: 'VUE', link: 'https://vuejs.org/v2/guide/' },
      { text: 'SCP', link: 'https://account.hanatrial.ondemand.com/cockpit#/home/trialhome' }

      
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: true,
        children: [ 
          '/general/intro',
          '/prerequisite/start',
          'cloudconnector/start',
          '/scpsettings/start',
          '/sapsettings/start',
          'approuter/start',
          'app/start',
          'app/service-gateway',
          'app/service-rules'
        ]
      },
      {
        title: 'Packages',
        collapsable: true,
        children: [ 
          '/packages/npm',
          '/packages/vueplugins'
        ]
      }
    ]
  }
}