import { test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import InputURL from '../components/ui/InputURL/InputURL';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';

test('InputURL component', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter>
            <InputURL gridAreaProp="navbar" toggleDocs={() => {}} />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });

  const urlInput = screen.getByLabelText('Enter URL');

  expect(urlInput).toHaveValue('https://rickandmortyapi.com/graphql');

  fireEvent.change(urlInput, { target: { value: 'https://test.com' } });
  expect(urlInput).toHaveValue('https://test.com');
});
