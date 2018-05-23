module.exports = {
  title: 'Building vue.js apps for SAP Cloud Platform',
  description: "Scaffold vue.js apps for SCP - Cloud Foundry",
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
          '/guide/guide',
          '/guide/api'
        ]
      }
    ]
  }
}