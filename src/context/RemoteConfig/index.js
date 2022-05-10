import * as React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '../I18n'

export const RemoteConfigContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  RemoteConfigContext.displayName = 'RemoteConfigContext'
}

export function useRemoteConfig() {
  return React.useContext(RemoteConfigContext)
}

function RemoteConfigProvider(props) {
  const { children, ...other } = props

  const { locale } = useI18n()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = React.useMemo(() => other, [locale])

  return (
    <RemoteConfigContext.Provider value={contextValue}>{children}</RemoteConfigContext.Provider>
  )
}

RemoteConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RemoteConfigProvider
