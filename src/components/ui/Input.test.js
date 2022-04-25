import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('renders card component', () => {
  test('renders without crashing', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeVisible();
  });
  test('renders passed value correctly', () => {
    const fn = jest.fn();
    render(<Input value='test' onChange={fn} />);
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });
  test('fires onChange handler function', () => {
    const fn = jest.fn();
    render(<Input onChange={fn} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(fn).toHaveBeenCalled();
  });
});
