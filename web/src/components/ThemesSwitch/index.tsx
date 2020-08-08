import React from 'react';

import './styles.css';

function ThemesSwitch(){
    return (
            <div className="switch_container">
                <input id="switch_shadow" className="switch switch_shadow"  type="checkbox"/>
                <label htmlFor="switch_shadow"></label>
            </div>
       
    );
}

export default ThemesSwitch;