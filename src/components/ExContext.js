//ExContext --> CompB -->CompC
import React from 'react';
import ComB from './ComB';
import { useState, createContext } from 'react';

// Tạo context chia sẻ dữ liệu với ComB và ComC
export const ThemeContext = createContext();

export default function ExContext() {
    const [theme, setTheme] = useState('light');
    const [content, setContent] = useState('Rikkei Academy - học viện đào tạo CNTT chất lượng nhật bản');
    const handleToggle = () => {
        setTheme((theme === 'light') ? 'dark' : 'light');
    }
    let objShare = { theme, content };
    return (
        <div>
            <h2>React Hook - Context and useContext</h2>
            <ThemeContext.Provider value={objShare}>
                <ComB />
            </ThemeContext.Provider>
            <button onClick={handleToggle}>ToggleTheme</button>
        </div>
    )
}
