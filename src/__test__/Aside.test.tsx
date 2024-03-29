import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';
import Aside from '../components/Aside/Aside';

describe('<Aside>', () => {
  test('shoud render with correct class when isOpen is true', () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter>
            <Aside isOpen toggleDocs={() => {}} />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
    const asideElement = screen.getByRole('complementary');

    expect(asideElement).toHaveClass('_aside_ee6eeb _open_ee6eeb');
  });

  test('should render with correct class when isOpen is false', () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter>
            <Aside isOpen toggleDocs={() => {}} />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
    const asideElement = screen.getByRole('complementary');

    expect(asideElement).toHaveClass('_aside_ee6eeb');
  });
});
