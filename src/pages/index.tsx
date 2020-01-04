import React from 'react'
import { Banner } from '../components/banner'
import { Highlight } from '../components/intro/highlight'
import styled from '@emotion/styled'

const Highlights = styled.h2`
  margin-top: 0;
`

export default () => (
  <Banner>
    <h3>Efficient frontend developer with a passion for:</h3>

    <Highlights>
      <Highlight>Data</Highlight>, <Highlight>JavaScript</Highlight>,{' '}
      <Highlight>UX</Highlight>, <br />
      <Highlight>Performance</Highlight> & <Highlight>Accessibility</Highlight>.
    </Highlights>
  </Banner>
)
