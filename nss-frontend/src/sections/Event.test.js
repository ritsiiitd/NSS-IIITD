import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect(...).toBeInTheDocument()
import Events from './Events';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [] }),
    ok: true,
  })
);

describe('Events Component', () => {
  it('renders events', async () => {
    render(<Events />);
    // You might want to wait for the API call to be resolved
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    
    // Check if the component renders the events correctly
    expect(screen.getByText('upcoming')).toBeInTheDocument();
    expect(screen.getByText('events')).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();

    // You can add more assertions based on your component structure
  });

  it('renders event details', async () => {
    // Mocking an array of events for testing
    const mockEvents = [
      {
        eventID: 1,
        name: 'Book',
        organiser: 'SA',
        venue: 'LHC',
        date: new Date('2023-12-31'),
        deadline: new Date('2023-12-02'),
        volunteers: [],
        picture: 'https://example.com/image.jpg',
        title: 'We',
        description: 'utlaborum.',
      },
    ];

    // Mocking the fetch function to return the mock events
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: mockEvents }),
        ok: true,
      })
    );

    render(<Events />);
    // You might want to wait for the API call to be resolved
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    // Check if the component renders the event details correctly
    expect(screen.getByText(mockEvents[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockEvents[0].title)).toBeInTheDocument();
    expect(screen.getByAltText('event-image')).toHaveAttribute(
      'src',
      mockEvents[0].picture
    );

    // You can add more assertions based on your component structure
  });
});
