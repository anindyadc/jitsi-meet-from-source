import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra({
  output: 'export',
  basePath: '/jitsi-meet-from-source',
  images: {
    unoptimized: true
  },
})
