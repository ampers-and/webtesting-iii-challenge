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