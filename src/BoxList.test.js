import { fireEvent, render } from '@testing-library/react';
import BoxList from './BoxList';

const addRect = (boxList, height="10", width="10", color="#FFFFFF") =>  {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const fillInput = boxList.getByLabelText("Fill");
    fireEvent.change(backgroundInput, {target: {value:color}});
    fireEvent.click(button);
}

test('renders', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList/>);
  expect(asFragment()).toMatchSnapshot();
});

if('adds new box', () => {
    const boxList = render(<BoxList/>);
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
    addRect(boxList);
    expect(boxList.queryByText("X")).toBeInTheDocument();
});