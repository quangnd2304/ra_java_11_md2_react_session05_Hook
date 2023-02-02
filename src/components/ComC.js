import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ExContext';

export default function ComC() {
    const obj = useContext(ThemeContext);
    return (
        <div>
            <p className={obj.theme}>{obj.content}</p>
        </div>
    )
}
