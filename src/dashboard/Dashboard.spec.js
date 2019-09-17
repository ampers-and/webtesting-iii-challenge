// Test away
import React from 'react';
import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

{ /*
describe ('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();
    })
})
*/}

test('Render Dashboard', () => {
    render (<Dashboard />);
})

test('should match snapshot', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});


//Initial State Display

test('contains display and controls', () => {
    const { getByText } = render(<Dashboard />)

    getByText(/Unlocked/i);
    getByText(/Open/i);

    getByText(/Close Gate/i);
    getByText(/Lock Gate/i);
})