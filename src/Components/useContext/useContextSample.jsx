import React, { useContext } from 'react'
import ThemeContext from '../../Context/ThemeContext'


function ThemeChange() {

    const { theme, ToggleTheme } = useContext(ThemeContext)
    console.log(useContext(ThemeContext).theme)


    return (
        <div style={{ background: theme == 'light' ? 'white' : 'black' }}>
            <h1 style={{ color: theme == 'light' ? 'black' : 'white' }}> Current Theme: {theme} </h1>
            <button onClick={ToggleTheme}>
                Switch to {theme == 'light' ? 'dark' : 'light'} mode
            </button>

        </div>
    )
}

export default ThemeChange