/* eslint-disable import/no-named-as-default */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';
import MainPage from '../pages/MainPage';

describe('MainPage component', () => {
  it('Renders', async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MainPage />
        </LocaleProvider>
      </Provider>
    );
    await screen.findByTestId('play-button');

    const playButton = screen.getByTestId('play-button');

    expect(playButton).toBeInTheDocument();
  });
});
