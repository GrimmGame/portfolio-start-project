import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>

            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"codeSvg"} 
                        title={"html5"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam quisquam rem labore, architecto nemo magnam, excepturi sunt odio ipsam minus assumenda corporis."}/>

                <Skill iconId={"css"} 
                        title={"css3"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam quisquam rem labore, architecto nemo magnam, excepturi sunt odio ipsam minus assumenda corporis."}/>
                <Skill iconId={"react"} 
                        title={"react"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam quisquam rem labore, architecto nemo magnam, excepturi sunt odio ipsam minus assumenda corporis."}/>

                <Skill iconId={"typeScript"} 
                        title={"TypeScript"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam quisquam rem labore, architecto nemo magnam, excepturi sunt odio ipsam minus assumenda corporis."}/>

                <Skill iconId={"styledComp"} 
                        title={"StyledComponents"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam quisquam rem labore, architecto nemo magnam, excepturi sunt odio ipsam minus assumenda corporis."}/>
                <Skill iconId={"figma"} 
                        title={"Figma"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed dolorum vero illo, voluptate voluptas repellendus aliquam quisquam rem labore, architecto nemo magnam, excepturi sunt odio ipsam minus assumenda corporis."}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section `
    background-color: lightsalmon;
    min-height: 100vh;
`