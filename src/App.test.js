import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App test', () => {
  it('renders learn react link', async () => {
    const {getByRole} = render(<App />);
    const ac = getByRole('textbox');
    await userEvent.type(ac, 'Hello!');
  });
})

