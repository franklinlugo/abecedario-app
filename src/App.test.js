import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders letters', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('i').nextSibling).toHaveTextContent('d');
  expect(getByTestId('d').nextSibling).toHaveTextContent('i');
  expect(getByTestId('j').nextSibling).toHaveTextContent('j');
});
