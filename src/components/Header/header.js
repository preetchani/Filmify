import React from 'react';
import RMDB from '../../images/RMDB.svg'
import Filmify from '../../images/logo.png';
import { Wrapper, Content, FilmifyLogoImg, LogoImg } from './Header.styles';

const Header=()=>(
    <Wrapper>
        <Content>
            <FilmifyLogoImg src={Filmify} alt="filmify-logo"></FilmifyLogoImg>
            <LogoImg src={RMDB} alt="The Movie DB"></LogoImg>
        </Content>
    </Wrapper>
);
export default Header;