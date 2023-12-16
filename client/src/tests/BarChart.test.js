import React from 'react';
import { render, screen } from '@testing-library/react';
import BarChart from './BarChart';

describe('BarChart', () => {
    it('renders the component without crashing', () => {
        render(<BarChart data={{ labels: ['label1', 'label2'], datasets: [{ label: 'data1', data: [1, 2] }] }} option={{ title: { display: true, text: 'My Chart' } }} />);
        expect(screen.getByText('My Chart')).toBeInTheDocument();
    });

    it('renders the bars with the correct data', () => {
        render(<BarChart data={{ labels: ['label1', 'label2'], datasets: [{ label: 'data1', data: [1, 2] }] }} option={{ title: { display: true, text: 'My Chart' } }} />);
        expect(screen.getByText('label1')).toBeInTheDocument();
        expect(screen.getByText('label2')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });
});