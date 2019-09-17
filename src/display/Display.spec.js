// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';


test('Render Display', () => {
    const setGate = jest.fn();
    const setLock =jest.fn();
    
    render(
        <Display
            setGate={setGate}
            setLock={setLock}
        />
    )
    });
    
    test('Gate Opens')