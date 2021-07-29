import React from 'react';
import { Link } from 'react-router-dom';
import RMDB from '../../images/RMDB.svg'
import Filmify from '../../images/logo.png';
import { Wrapper, Content, FilmifyLogoImg, LogoImg } from './Header.styles';

const Header=()=>(
    <Wrapper>
        <Content>
            <Link to='/'> 
            <FilmifyLogoImg src={Filmify} alt="filmify-logo"></FilmifyLogoImg>
            </Link>
            
            <LogoImg src={RMDB} alt="The Movie DB"></LogoImg>
        </Content>
    </Wrapper>
);
export default Header;