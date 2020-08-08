import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi'

import './styles.css';

function ThemesSwitch(){
    return (
            <div className="switch_container">

                <div className="sun">
                    
                    <FiSun />
                            
                </div>

                <input id="switch_shadow" className="switch switch_shadow"  type="checkbox"/>
                <label htmlFor="switch_shadow"></label>

                <div className="moom">

                    <FiMoon />

                </div>

            </div>
       
    );
}

export default ThemesSwitch;