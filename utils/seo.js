export const createSEOMeta = data => [
  // PRIMARY
  {
    hid: 'title',
    name: 'title',
    content: data.title || 'DisplayJerky'
  },
  {
    hid: 'description',
    name: 'description',
    content: data.description || 'DisplayJerky'
  },

  // OPEN GRAPH / FACEBOOK
  {
    hid: 'og:type',
    property: 'og:type',
    content: 'website'
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: `${process.env.HOST_NAME}${data.url}`
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: data.title || 'DisplayJerky'
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.description || 'DisplayJerky'
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: `${process.env.HOST_NAME}${data.image || '/logo.png'}`
  },

  // TWITTER
  {
    hid: 'twitter:card',
    property: 'twitter:card',
    content: data.cardType || 'summary_large_image'
  },
  {
    hid: 'twitter:url',
    property: 'twitter:url',
    content: `${process.env.HOST_NAME}${data.url}`
  },
  {
    hid: 'twitter:site',
    property: 'twitter:site',
    content: '@DisplayJerky'
  },
  {
    hid: 'twitter:title',
    property: 'twitter:title',
    content: data.title
  },
  {
    hid: 'twitter:description',
    property: 'twitter:description',
    content: data.description
  },
  {
    hid: 'twitter:image',
    property: 'twitter:image',
    content: `${process.env.HOST_NAME}${data.image || '/logo.png'}`
  }
]
