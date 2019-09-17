// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Render Controls', () => {

    render(<Controls />);
});


test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});


test('Control Buttons', () => {
    // const locked = jest.fn();
    // const closed = jest.fn();
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();
    
    const { getByText } = render(
            <Controls
                locked={true}
                closed={true}
                toggleLocked={toggleLocked}
                toggleClosed={toggleClosed}
            />);
    
    const lockButton = getByText(/Unlock Gate/i);
    const gateButton = getByText(/Open Gate/i);
    
    fireEvent.click(lockButton);
    // fireEvent.click(gateButton);
    expect(toggleLocked).toHaveBeenCalled();
    // expect(toggleClosed).toHaveBeenCalled();
    
    });
    
    test('Control Buttons', () => {
        const toggleClosed = jest.fn();
        
        const { getByText } = render(
                <Controls
                    closed= {true}
                    toggleClosed={toggleClosed}
                />);
        
        const gateButton = getByText(/Open Gate/i);
        
        // fireEvent.click(lockButton);
        fireEvent.click(gateButton);
        // expect(toggleLocked).toHaveBeenCalled();
        expect(toggleClosed).toHaveBeenCalled();
        
        });