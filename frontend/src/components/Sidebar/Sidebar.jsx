import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = ({ activeModule, setActiveModule }) => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.profileInfo}>
                <img src="../../assets/images/chicken-wrap.jpg" alt="Admin" className={classes.profilePic} />
                <p className={classes.profileName}>Admin Name</p>
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
    );
};

export default Sidebar;
