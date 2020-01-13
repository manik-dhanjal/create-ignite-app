// @inheritedComponent Drawer

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import { SITE_HEADER_ID } from 'src/site.config'

const headerHeight = `var(--${SITE_HEADER_ID}-height)`

export const styles = {
  root: {
    top: `${headerHeight} !important`, // Override `MuiModal` inline style.
  },
  backdrop: {
    top: headerHeight,
  },
  paper: {
    top: headerHeight,
    width: 414, // iPhone 6/7/8 Plus
    maxWidth: '100%',
    height: `calc(100% - ${headerHeight})`,
  },
  paperAnchorRight: {
    // Prevent `Drawer` position jumps due to scrollbar being shown/hidden.
    boxSizing: 'content-box',
    '& > *': {
      boxSizing: 'border-box',
    },
  },
}

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const {
    anchor,
    BackdropProps: { className: BackdropClassName, ...BackdropProps } = {},
    children,
    classes,
    PaperProps: { className: PaperClassName, ...PaperProps } = {},
    ...other
  } = props

  return (
    <Drawer
      classes={{
        root: classes.root,
        paper: classnames(
          classes.paper,
          {
            [classes.paperAnchorRight]: anchor === 'right',
            'mui-fixed': anchor === 'right',
          },
          PaperClassName,
        ),
      }}
      BackdropProps={{
        className: classnames(classes.backdrop, BackdropClassName),
        ...BackdropProps,
      }}
      PaperProps={PaperProps}
      anchor={anchor}
      ref={ref}
      {...other}
    >
      {children}
    </Drawer>
  )
})

AppDrawer.propTypes = {
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  BackdropProps: PropTypes.object,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  PaperProps: PropTypes.object,
}

AppDrawer.uiName = 'AppDrawer'

export default withStyles(styles)(AppDrawer)