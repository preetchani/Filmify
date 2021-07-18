import React from 'react';

import { Wrapper,Content,Text } from './MainSection.styles';

const MainSection = (props)=>(
    <Wrapper image={props.image}>
        <Content>
            <Text>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default MainSection;