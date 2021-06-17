import * as React from 'react'
import PropTypes from 'prop-types'
import i18n, { i18nConfig } from 'es2015-i18n-tag'

const I18nContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  I18nContext.displayName = 'I18nContext'
}

export function useI18n() {
  return React.useContext(I18nContext)
}

const DEFAULT_LANG = 'en'
export function I18nProvider(props) {
  const { children, lang = DEFAULT_LANG } = props

  let translations
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    translations = require(`../../../public/locales/${lang}.json`)
  } catch (err) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    translations = require(`../../../public/locales/${DEFAULT_LANG}.json`)
  }

  i18nConfig({
    // locales: 'en-US',
    translations,
    // Intl NumberFormat options as described here: https://goo.gl/pDwbG2
    number: {},
    // Intl DateTimeFormat options as described here: https://goo.gl/lslekB
    date: {},
  })

  const contextValue = {
    t: i18n,
  }

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string,
}

export default I18nContext
