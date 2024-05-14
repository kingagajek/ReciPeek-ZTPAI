import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import AdminTable from '../../components/AdminTable/AdminTable';
import classes from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const [activeModule, setActiveModule] = useState('users');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (module) => {
        try {
            let url = '';
            switch (module) {
                case 'users':
                    url = '/api/users';
                    break;
                case 'ingredients':
                    url = '/api/ingredients';
                    break;
                case 'diets':
                    url = '/api/diets';
                    break;
                case 'cuisines':
                    url = '/api/cuisines';
                    break;
                case 'mealTypes':
                    url = '/api/mealTypes';
                    break;
                case 'recipes':
                    url = '/api/recipes';
                    break;
                default:
                    throw new Error('Invalid module');
            }
            const response = await axios.get(`http://localhost:8080${url}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    useEffect(() => {
        fetchData(activeModule).then(dataFetched => {
            setData(dataFetched);
        });
    }, [activeModule]);

    const columnsForModule = (module) => {
        switch (module) {
            case 'users':
                return [
                    { key: 'id', title: 'ID' },
                    { key: 'name', title: 'Name' },
                    { key: 'email', title: 'Email' }
                ];
            case 'ingredients':
                return [
                    { key: 'id', title: 'ID' },
                    { key: 'name', title: 'Name' }
                ];
            case 'diets':
                return [
                    { key: 'id', title: 'ID' },
                    { key: 'type', title: 'Type' }
                ];
            case 'cuisines':
                return [
                    { key: 'id', title: 'ID' },
                    { key: 'name', title: 'Name' }
                ];
            case 'mealTypes':
                return [
                    { key: 'id', title: 'ID' },
                    { key: 'name', title: 'Name' }
                ];
            case 'recipes':
                return [
                    { key: 'id', title: 'ID' },
                    { key: 'title', title: 'Title' },
                    { key: 'cookTime', title: 'Cook Time' },
                    { key: 'description', title: 'Description' }
                ];
            default:
                return [];
        }
    };

    const columns = columnsForModule(activeModule);

      const handleEditUser = (userId) => {
        console.log('Editing user:', userId);
    };

    const handleDeleteUser = (userId) => {
        console.log('Deleting user:', userId);
    };

    const handleAddNewUser = () => {
        console.log('Adding new user');
    };

    return (
        <div className={classes.dashboard}>
            {/* <Header /> */}
            <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
            <div className={classes.mainContent}>
                <div>Active Module: {activeModule}</div>
                <AdminTable
                    data={data}
                    columns={columns}
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                    addNewText={`Add New ${activeModule}`}
                    onAddNew={handleAddNewUser}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
