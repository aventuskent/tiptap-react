import React from 'react';
import { createRoot } from 'react-dom/client';
import KTREditor from '../src';

const App = () => {
    return (
        <div style={{ background: '#2d2d2d', overflow: 'hidden', height: '100%' }}>
            <div style={{ width: '1200px', height: '300px', margin: '40px auto' }}>
                <KTREditor />
            </div>
        </div>
    );
};

createRoot(document.getElementById('root')!).render(<App />);
