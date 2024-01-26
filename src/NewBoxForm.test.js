import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders', () => {
  render(<NewBoxForm />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm/>);
  expect(asFragment()).toMatchSnapshot();
});