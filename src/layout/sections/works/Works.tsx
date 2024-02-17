import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../../components/menu/Menu';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';

const worksItems = ["All", "Landing Page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>

            <Menu menuItems={worksItems}/>

            <FlexWrapper justify="space-around">
                <Work title={"Social Network"} 
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam"}
                    src={socialImg}/>
                <Work title={"Timer"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam"}
                    src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: lightblue;
`