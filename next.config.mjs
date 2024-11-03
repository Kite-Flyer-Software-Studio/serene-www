import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'zh'],
  // },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.lumacdn.com',
      port: '',
      pathname: '**'
    }]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /component/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },

            // dimensions: true
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /url/,
      issuer: /\.[jt]sx?$/,
      type: 'asset/resource',
    })

    return config
  },
}

export default withNextIntl(nextConfig)
