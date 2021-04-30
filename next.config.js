// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
	assetPrefix: !debug ? '' : '',
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ['en-US', 'es-US', 'fr'],
		// This is the default locale you want to be used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: 'en-US'
	}
}
