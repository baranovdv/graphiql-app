import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';
import Docs from '../components/Docs/Docs';

describe('<Docs>', () => {
  test('should render Docs Component', async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <Docs />
        </LocaleProvider>
      </Provider>
    );

    const title = await screen.findByRole('heading', { level: 3 });

    expect(title).toHaveTextContent('Query');
  });

  test('should render type information', async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <Docs />
        </LocaleProvider>
      </Provider>
    );

    const buttons = await screen.findAllByRole('button');

    const idButton = buttons.find((btn) => btn.textContent === 'ID');

    if (idButton) {
      fireEvent.click(idButton);

      const idTitle = await screen.findByRole('heading', { level: 4 });

      expect(idTitle).toHaveTextContent('ID');
    }
  });

  test('Should render type information for input', async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <Docs />
        </LocaleProvider>
      </Provider>
    );

    const buttons = await screen.findAllByRole('button');

    const idButton = buttons.find((btn) => btn.textContent === 'Characters');

    if (idButton) {
      fireEvent.click(idButton);

      const idTitle = await screen.findByRole('heading', { level: 4 });

      expect(idTitle).toHaveTextContent('Characters');
    }
  });
});
