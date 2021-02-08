import React from 'react'
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Database/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders movie search page',()=>{
  const {getByTestId,getByText} = render(<App />);
  const linkSearch = getByTestId('search')
  fireEvent.click(linkSearch)
  const detailTitle = getByText(/result/i)
  expect(detailTitle).toBeInTheDocument()
})

test('renders movie detail page',()=>{
  const {getByTestId,getByText} = render(<App />);
  const linkCard = getByTestId('card')
  expect(linkCard).toBeInTheDocument()
})