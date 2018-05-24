module.exports = {
  title: 'Building vue.js apps for SAP Cloud Platform',
  description: "Scaffold vue.js apps for SCP - Cloud Foundry",
  base: '/vuepress-scp-cf/',
  themeConfig: {
    nav: [
      { text: 'GUIDE', link: '/guide/' }
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