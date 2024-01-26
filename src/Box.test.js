import { render } from '@testing-library/react';
import Box from './Box';

test('renders', () => {
  render(<Box />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Box/>);
  expect(asFragment()).toMatchSnapshot();
});