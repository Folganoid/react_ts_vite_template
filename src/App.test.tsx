import React from 'react';
import App from './App';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('App <nav> exists', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
