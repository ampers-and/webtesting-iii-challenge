// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

//Display Render
test('Render Display', () => {
    const locked = jest.fn();
    const closed =jest.fn();
    
    render(
        <Display
            locked={locked}
            closed={closed}
        />
    )
    });


//Display lock and gate states

test('Display - unlocked and open', () => {
    const bool = false;
    const display = render(<Display locked={bool} closed={bool} />);
    expect(display.getByText(/Open/i));
    expect(display.getByText(/Unlocked/i));
})

test('Display - locked and closed', () => {
    const bool = true;
    const display = render(<Display locked={bool} closed={bool} />);
    expect(display.getByText(/Closed/i));
    expect(display.getByText(/Locked/i));
})

