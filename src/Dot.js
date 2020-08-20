import React from 'react';

export default function Dot(props) {
    const dotSize = `${Math.floor(Math.random()*2)}em`
    const colors = ['#eb4034', 'none', '#d9bc1c', 'none', '#409111', 'none', '#34bf80', 'none', '#0fdbd5', 'none', '#0f68db', 'none', '#544ac7', 'none', '#882fcc', 'none', '#d321d9', 'none', '#d11d7d', 'none', '#cc1830', 'none', '#360c12', 'none',  '#160b30', 'none', '#370e40', '#62376b', 'none', '#235b6e', 'none', '#1fb52b', 'none', '#317036', '#a1c965', 'none', '#a67b26', 'none', '#a16020', 'none', 'white', 'silver', 'none']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const dotProperties = { 
        position: 'relative',
        left: `${Math.floor(Math.random()*1200)}px`,
        top: `${Math.floor(Math.random()*90)}px`,
        transition: 'all 3s ease-in-out',
        border: `1.3px solid ${randomColor2}`,
        height: `${dotSize}`,
        width: `${dotSize}`,
        backgroundColor: randomColor,
        borderRadius: '50%'
    }
    return(
        <div className='dot' id={props.id} style={dotProperties}></div>
    ) 
}