import React, { useState } from 'react';

import logo from '../../assets/icons/logo.svg';
import classes from './Sidebar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ activeModule, setActiveModule }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={classes.menuIcon} onClick={toggleSidebar}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={`${classes.sidebar} ${isOpen ? classes.open : ''}`}>
                <div className={classes.profileInfo}>
                    <img src={logo} alt="Logo" className={classes.logo} />
                    <p className={classes.profileName}>Admin</p>
                </div>
                <ul className={classes.navLinks}>
                    {['users', 'ingredients', 'diets', 'cuisines', 'mealTypes', 'recipes'].map((module) => (
                        <li
                            key={module}
                            className={activeModule === module ? classes.active : ''}
                            onClick={() => setActiveModule(module)}
                        >
                            {module.charAt(0).toUpperCase() + module.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
