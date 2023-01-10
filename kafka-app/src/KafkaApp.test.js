import React from 'react';
import { render } from '@testing-library/react';
import KafkaApp from './KafkaApp';

test('renders learn react link', () => {
  const { getByText } = render(<KafkaApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
