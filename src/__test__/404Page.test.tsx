import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Page404 from '../pages/404Page';
import { LocaleProvider } from '../context/StoreContext';

describe('<404Page>', () => {
  test('should render 404 Page', () => {
    render(
      <LocaleProvider>
        <MemoryRouter>
          <Page404 />
        </MemoryRouter>
      </LocaleProvider>
    );
    screen.getByText(/Ошибка!/i);
    screen.getByText(/404/i);
    expect(
      screen.getByText(/К сожалению, запрашиваемая вами страница не найдена/i)
    ).toBeInTheDocument();
    screen.getByText(/Перейти на главную/i);
  });

  test('should navigate to Main Page after click on button', async () => {
    render(
      <LocaleProvider>
        <MemoryRouter>
          <Page404 />
        </MemoryRouter>
      </LocaleProvider>
    );

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(window.location.pathname).toBe('/');
  });
});
