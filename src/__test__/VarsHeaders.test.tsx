import { test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { store } from '../store/store';
import VarsHeaders from '../components/ui/VarsHeaders/VarsHeaders';
import { LocaleProvider } from '../context/StoreContext';

test('VarsHeaders component', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter>
            <VarsHeaders gridAreaProp="navbar" />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });

  const variablesButton = screen.getByRole('button', {
    name: /Query Vars/i,
  });
  const headersButton = screen.getByRole('button', { name: /HTTP Headers/i });

  expect(variablesButton).toBeDisabled();
  expect(headersButton).not.toBeDisabled();

  fireEvent.click(headersButton);
  expect(headersButton).toBeDisabled();
  expect(variablesButton).not.toBeDisabled();

  const textarea = screen.getByRole('textbox');
  fireEvent.change(textarea, { target: { value: 'test input' } });
  expect(textarea).toHaveValue('test input');
});
