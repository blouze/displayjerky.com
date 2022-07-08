import getRoutes from './utils/getRoutes'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,
  // Nope, enable it so meta tags are rendered in each page correctly
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DisplayJerky',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'DisplayJerky' },
      { hid: 'description', name: 'description', content: 'DisplayJerky' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/custom.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/gtag'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://gitlab.com/broj42/nuxt-cookie-control
    ['nuxt-cookie-control'],
    // https://github.com/nicolasbeauvais/vue-social-sharing
    'vue-social-sharing/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.glsl$/,
        loader: 'webpack-glsl-loader'
      })
    }
  },

  // https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      Archivo: true,
      'Press Start 2P': true,
      'Source Sans Pro': true
    },
    display: 'swap'
  },

  // https://github.com/nuxt-community/fontawesome-module
  fontawesome: {
    icons: {
      brands: ['faTwitter', 'faInstagram', 'faItchIo']
    }
  },

  // https://gitlab.com/broj42/nuxt-cookie-control
  cookies: {
    necessary: [
      {
        name: {
          en: 'Default Cookies'
        },
        description: {
          en: 'Used for cookie control.'
        },
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analitycs',
        // if you don't set identifier, slugified name will be used
        identifier: 'ga',
        description: {
          en: 'Google GTM is ...'
        },

        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-LD498CBMDN',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          })
        },
        declined: () => {
        }
      }
    ]
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .where({ extension: { $eq: '.md' } })
        .only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  sitemap: {
    hostname: 'https://displayjerky.com',
    filter ({ routes }) {
      return routes.filter(route => !route.url.split('/').some(el => ['tsu-chi-tsu'].includes(el)))
    },
    routes () {
      return getRoutes()
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/tsu-chi-tsu/',
    Sitemap: 'https://displayjerky.com/sitemap.xml'
  },

  env: {
    HOST_NAME: 'https://displayjerky.com',
    social: {
      twitter: { icon: ['fab', 'twitter'], url: 'https://twitter.com/DisplayJerky/' },
      instagram: { icon: ['fab', 'instagram'], url: 'https://www.instagram.com/display_jerky/' },
      'itch.io': { icon: ['fab', 'itch-io'], url: 'https://displayjerky.itch.io/' }
    }
  }
}
