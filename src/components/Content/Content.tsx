import React from 'react'
import styled from '@emotion/styled'

import media from '@/styles/media'

const ContentWrapper = styled.div`
  max-width: 100%;

  ${media.minWidth(768)`
    max-width: 80%;
  `}

  ${media.minWidth(1200)`
    max-width: 100%;
  `}
`

const Content = ({ children }: { children: React.ReactNode }) => (
  <ContentWrapper>{children}</ContentWrapper>
)

export default Content
