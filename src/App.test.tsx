import React from 'react';
import App from './App';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';

describe('App', () => {
  it('App <nav> exists', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
