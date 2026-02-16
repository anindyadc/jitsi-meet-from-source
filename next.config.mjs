import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra({
  output: 'export',
  // Optionally, if deploying to a subdirectory like https://<username>.github.io/<repo-name>/
  basePath: process.env.NODE_ENV === 'production' ? '/jitsi-meet-from-source' : '',
})
