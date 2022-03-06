import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App test', () => {
  it('renders autocomplete', async () => {
    const {getByRole} = render(<App />);
    // Get Autocomplete input box.
    const ac = getByRole('textbox');
    // Type some text.
    await userEvent.type(ac, 'Hello!');

    expect(ac.value).toBe('Hello!');

    // When Karma browser window doesn't have focus, every key press resets the
    // input value due.
  });
})

