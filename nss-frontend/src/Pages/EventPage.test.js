// EventPage.test.js
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import EventPage from './EventPage';

// Mocking Auth0Provider and useAuth0 hook
jest.mock('@auth0/auth0-react', () => ({
  ...jest.requireActual('@auth0/auth0-react'),
  useAuth0: jest.fn(),
}));

describe('EventPage Component', () => {
  test('renders loader while loading', () => {
    useAuth0.mockReturnValue({
      isLoading: true,
      isAuthenticated: false,
      user: null,
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Auth0Provider>
          <EventPage />
        </Auth0Provider>
      </BrowserRouter>
    );

    // Assuming you have a loader component, check if it's rendered
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('renders event details when not loading', async () => {
    useAuth0.mockReturnValue({
      isLoading: false,
      isAuthenticated: true,
      user: {
        sub: 'user123', // You may need to adjust this based on your actual user data
      },
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });

    // Assuming you have a mock event object, adjust this based on your actual event data
    const mockEvent = {
      eventID: '1',
      picture: 'mock_picture_url',
      volunteers: [],
      organiserLogo: 'mock_logo_url',
      // ... other event details
    };

    // Mocking the fetchEvents function
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: [mockEvent] }),
    });

    render(
      <BrowserRouter>
        <Auth0Provider>
          <EventPage />
        </Auth0Provider>
      </BrowserRouter>
    );

    // Assuming you have a component that displays event details, check if it's rendered
    await waitFor(() => {
      expect(screen.getByText('Organised by')).toBeInTheDocument();
      expect(screen.getByText('Venue')).toBeInTheDocument();
      // ... add more assertions based on your component
    });
  });

  test('registers volunteer when Register button is clicked', async () => {
    useAuth0.mockReturnValue({
      isLoading: false,
      isAuthenticated: true,
      user: {
        sub: 'user123',
      },
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });

    const mockEvent = {
      eventID: '1',
      volunteers: [],
      // ... other event details
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: [mockEvent] }),
    });

    render(
      <BrowserRouter>
        <Auth0Provider>
          <EventPage />
        </Auth0Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('Register Yourself as Volunteer'));
    });

    // Assuming you have a success message or other indication after registration
    await waitFor(() => {
      expect(screen.getByText('Registration successful')).toBeInTheDocument();
    });
  });

  // Add more test cases based on your component's behavior

});
