module.exports = {
  title: 'VueSAP',
  description: "Fast app development for SCP | Cloud Foundry",
  base: '/vuepress-scp-cf/',
  themeConfig: {
    nav: [
      { text: 'GUIDE', link: '/prerequisite/start.html' },
      { text: 'SCP', link: 'https://account.hanatrial.ondemand.com/cockpit#/home/trialhome' }

      
    ],
    sidebar: [
      {
        title: 'Prerequisites',
        collapsable: false,
        children: [
          '/prerequisite/start'
        ]
      },
      {
        title: 'Approuter',
        collapsable: false,
        children: [
          '/approuter/start',
          '/approuter/scpsettings'
        ]
      },
      {
        title: 'App',
        collapsable: true,
        children: [
          '/approuter/start',
          '/approuter/scpsettings'
        ]
      }
    ]
  }
}