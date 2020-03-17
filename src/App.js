import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { Letter } from './components/Letter';

const StyledApp = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 150px);
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

function App() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getRandomArm = useCallback((oneStepBack, twoStepsBack, index, dIndex, iIndex, jIndex) => {
    let arm;
    const arms = ['i', 'd', 'j'];

    if (!oneStepBack && !twoStepsBack) {
      arm = arms[randomNumber(0, 2)];
    } else if (index === dIndex - 1 || index === iIndex - 1 || index === jIndex - 1) {
      do {
        arm = arms[randomNumber(0, 2)];
      } while (arm === oneStepBack);
    } else if (oneStepBack === twoStepsBack) {
      do {
        arm = arms[randomNumber(0, 2)];
      } while (arm === oneStepBack);
    } else {
      arm = arms[randomNumber(0, 2)];
    }
    return arm;
  }, []);

  const letters = 'abcdefghijklmnopqrstuvxyz';

  const [values, setValues] = useState([]);

  const generateValues = useCallback(() => {
    const initialValues = letters.split('').map(letter => {
      return { letter, arm: null };
    });

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
    <>
      <GlobalStyles />
      <StyledApp>
        {values.map(({ letter, arm }) => (
          <Letter key={letter} letter={letter} arm={arm} />
        ))}
      </StyledApp>
    </>
  );
}

export default App;
