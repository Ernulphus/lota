import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home';
import { MemoryRouter } from 'react-router';

describe(Home, () =>{
  it('renders correctly', async () => {
    render(<MemoryRouter><Home /></MemoryRouter>);

    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Library of Trans Alexander');
  });
}
)