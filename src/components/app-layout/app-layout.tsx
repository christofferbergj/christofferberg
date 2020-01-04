import React, { FC } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import normalize from '../../styles/normalize'

import './style'

export const AppLayout: FC = ({ children }) => {
  return (
    <StyledLayoutRoot>
      <Global styles={() => css(normalize)} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StyledLayoutRoot>
  )
}

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
