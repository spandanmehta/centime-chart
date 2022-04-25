import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('renders card component', () => {
  test('renders without crashing', () => {
    render(<Card />);
    expect(screen.getByTestId('card')).toBeVisible();
  });
  test('renders passed content correctly', () => {
    render(
      <Card>
        <h1>test</h1>
      </Card>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('test');
  });
});
