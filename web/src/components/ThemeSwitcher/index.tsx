import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi'

import './styles.css';

function ThemeSwitcher(){
    return (
            <div className="switch_container">

                <div className="sun">
                    
                    <FiSun color="#FFF"/>
                            
                </div>

                <input 
                    id="switch_shadow" 
                    className="switch switch_shadow"  
                    type="checkbox" 
                    onChange={() => {}}
                    
                />

                <label htmlFor="switch_shadow"></label>

                <div className="moom">

                    <FiMoon color="#FFF"/>

                </div>

            </div>
       
    );
}

export default ThemeSwitcher;