import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 0;
  padding-top: 100%;
  border: 1px solid #dcdcdc;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLetter = styled.span`
  margin: 0 0 0.5rem 0;
  line-height: 1;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

const StyledArm = styled.span`
  line-height: 1;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: #c0c0c0;
`;

export function Letter({ letter, arm }) {
  return (
    <Container>
      <Content>
        <StyledLetter>{letter}</StyledLetter>
        <StyledArm>{arm}</StyledArm>
      </Content>
    </Container>
  );
}

Letter.propTypes = {
  letter: string,
  arm: string,
};
