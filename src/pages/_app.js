// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js

import '../../scripts/polyfills'
import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import { settings } from '~/api/__mock__'
import { createEmotionCache } from '~/utils'
import { RootProvider } from '~/contexts'
import * as layoutVariants from '~/layouts'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function App(props) {
  const {
    Component,
    defaultLocale,
    emotionCache = clientSideEmotionCache,
    locale,
    pageProps: pagePropsProp,
  } = props

  const { headerColor, headerMode, layout, page, ...pageProps } = pagePropsProp
  const LayoutComponent = layout ? layoutVariants[layout] : layoutVariants.App

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>

      <RootProvider defaultLocale={defaultLocale} locale={locale} {...pageProps}>
        <LayoutComponent headerColor={headerColor} headerMode={headerMode}>
          <Component {...pageProps} />
        </LayoutComponent>
      </RootProvider>
    </CacheProvider>
  )
}

App.getInitialProps = async (props) => {
  const { ctx } = props

  return {
    defaultLocale: ctx.defaultLocale,
    locale: ctx.locale,
    pageProps: {
      settings,
    },
  }
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  defaultLocale: PropTypes.string.isRequired,
  emotionCache: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
