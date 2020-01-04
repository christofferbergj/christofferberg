import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '../link'
import { HeaderContainer, HeaderMenu } from './style'
import styled from '@emotion/styled'

const Logo = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`

export const Header = () => (
  <HeaderContainer>
    <nav className='header__wrapper'>
      <Link to='/' name='home'>
        <Logo>Christoffer Berg</Logo>
      </Link>

      <HeaderMenu>
        <Link name='github' to='https://github.com/christofferberg'>
          <FontAwesomeIcon icon={['fab', 'github']} />
          Github
        </Link>
      </HeaderMenu>
    </nav>
  </HeaderContainer>
)
