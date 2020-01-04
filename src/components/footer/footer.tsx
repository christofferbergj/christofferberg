import React, { ReactNode } from 'react'

import { Container } from '../container'
import { StyledFooter } from './style'

interface ISocial {
  icon: ReactNode
  to: string
}

interface IFooterProps {
  social: ISocial[]
}

export const Footer = ({ social }: IFooterProps) => (
  <StyledFooter>
    <Container>
      <div className='footer__wrapper'>
        <ul>
          {social.map((item) => (
            <li key={item.to}>
              <a href={item.to} target='_blank' rel='noopener noreferrer'>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </StyledFooter>
)
