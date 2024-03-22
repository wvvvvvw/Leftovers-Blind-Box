const subPackages = [
  {
    "root": "blindBox",
    "pages": [
      "pages/find/index",
    ]
  },
]

export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    // navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
