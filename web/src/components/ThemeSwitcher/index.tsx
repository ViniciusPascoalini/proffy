import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import './styles.css';

interface Props {
    toogleTheme(): void;
  }

const ThemeSwitcher: React.FC<Props> = ({ toogleTheme }) => {
    const { title } = useContext(ThemeContext);

    return (
            <div className="switch_container">

                <div className="sun">
                    
                    <FiSun color="#FFF"/>
                            
                </div>

                <input 
                    id="switch_shadow" 
                    className="switch switch_shadow"  
                    type="checkbox"
                    checked={title === 'dark'}
                    onChange={toogleTheme}
                />

                <label htmlFor="switch_shadow"></label>

                <div className="moom">

                    <FiMoon color="#FFF"/>

                </div>

            </div>
       
    );
}

export default ThemeSwitcher;