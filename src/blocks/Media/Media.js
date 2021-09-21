import * as React from 'react'
import PropTypes from 'prop-types'
import { mediaType } from '@noaignite/oui/utils'
import { Media as OuiMedia, MediaReveal } from '@noaignite/oui'
import { Container } from 'components'

function Media(props) {
  const { mediaProps, renderIndex } = props

  return (
    <section>
      <Container>
        <MediaReveal>
          <OuiMedia
            {...(mediaProps?.component === 'video'
              ? { autoPlay: true, muted: true, loop: true, playsInline: true }
              : {})}
            {...mediaProps}
            priority={renderIndex === 0}
          />
        </MediaReveal>
      </Container>
    </section>
  )
}

Media.propTypes = {
  mediaProps: mediaType.isRequired,
  renderIndex: PropTypes.number.isRequired,
}

export default Media
