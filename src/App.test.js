import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
});