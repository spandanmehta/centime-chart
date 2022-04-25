import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('renders button component', () => {
  test('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeVisible();
  });
  test('displays passed value correctly', () => {
    render(<Button value={'test'} />);
    expect(screen.getByRole('button')).toHaveValue('test');
  });
  test('fires function onClick event', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(fn).toHaveBeenCalled();
  });
});
