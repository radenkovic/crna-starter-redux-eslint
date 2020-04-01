import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './index';

test('renders learn react link', () => {
  const { getByText } = render(
    <Router>
      <Dashboard />
    </Router>
  );
  const linkElement = getByText(/Go to index/i);
  expect(linkElement).toBeInTheDocument();
});
