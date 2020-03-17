import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Letter } from './Letter';
import { random } from '../utils';

const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export function Grid() {
  const getRandomArm = useCallback((oneStepBack, twoStepsBack, index, dIndex, iIndex, jIndex) => {
    let arm;
    const arms = ['i', 'd', 'j'];

    // prevs steps ae different
    if (!oneStepBack && !twoStepsBack) {
      arm = random(arms);
    }
    // index immediately before of d, i, o j
    else if ([dIndex - 1, iIndex - 1, jIndex - 1].includes(index)) {
      do {
        arm = random(arms);
      } while (arm === oneStepBack);
    }
    // prev steps are iqual
    else if (oneStepBack === twoStepsBack) {
      do {
        arm = random(arms);
      } while (arm === oneStepBack);
    }
    // it's ok
    else {
      arm = random(arms);
    }
    return arm;
  }, []);

  const [values, setValues] = useState([]);

  // create an object {letter: a, arm: d}
  const generateValues = useCallback(() => {
    const initialValues = Array.from('abcdefghijklmnopqrstuvxyz').map(letter => ({ letter, arm: null }));

    const valuesWithFixedLetters = initialValues.map(({ letter }) => {
      switch (letter) {
        case 'i':
          return { letter, arm: 'd' };
        case 'd':
          return { letter, arm: 'i' };
        case 'j':
          return { letter, arm: 'j' };
        default:
          return { letter, arm: null };
      }
    });

    const dIndex = initialValues.findIndex(({ letter }) => letter === 'd');
    const iIndex = initialValues.findIndex(({ letter }) => letter === 'i');
    const jIndex = initialValues.findIndex(({ letter }) => letter === 'j');

    const fullValues = valuesWithFixedLetters.reduce((acc, current, index) => {
      if ([dIndex, iIndex, jIndex].includes(index)) {
        acc.push({ letter: current.letter, arm: current.arm });
      } else if (index <= 1) {
        acc.push({
          letter: current.letter,
          arm: getRandomArm(null, null, index, dIndex, iIndex, jIndex),
        });
      } else {
        const oneStepBack = acc[index - 1].arm;
        const twoStepsBack = acc[index - 2].arm;
        acc.push({
          letter: current.letter,
          arm: getRandomArm(oneStepBack, twoStepsBack, index, dIndex, iIndex, jIndex),
        });
      }
      return acc;
    }, []);

    setValues(fullValues);
  }, [getRandomArm]);

  useEffect(() => {
    generateValues();
  }, [generateValues]);

  return (
    <StyledGrid>
      {values.map(({ letter, arm }) => (
        <Letter key={letter} letter={letter} arm={arm} />
      ))}
    </StyledGrid>
  );
}
