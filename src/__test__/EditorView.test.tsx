import { describe, test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store/store';
import EditorView from '../components/ui/EditorView/EditorView';
import { LocaleProvider } from '../context/StoreContext';

describe('<EditorView>', () => {
  test('should render EditorView component', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <LocaleProvider>
            <MemoryRouter>
              <EditorView gridAreaProp="editor" />
            </MemoryRouter>
          </LocaleProvider>
        </Provider>
      );
    });
    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'test input' } });
    expect(textarea).toHaveValue('test input');

    fireEvent.keyDown(textarea, { key: 'Tab', code: 'Tab' });
    expect(textarea).toHaveValue('test input');
  });
});
