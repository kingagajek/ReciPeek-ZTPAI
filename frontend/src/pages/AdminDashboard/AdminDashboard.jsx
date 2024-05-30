import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import AdminTable from '../../components/AdminTable/AdminTable';
import EditModal from '../../components/EditModal/EditModal';
import classes from './AdminDashboard.module.css';
import { useAuth } from '../../context/AuthProvider';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const [activeModule, setActiveModule] = useState('users');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editItem, setEditItem] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
            const response = await axios.get(`http://localhost:8080${url}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    useEffect(() => {
        fetchData(activeModule).then(dataFetched => {
            if (dataFetched.content) {
                setData(dataFetched.content);
            } else {
                setData(dataFetched);
            }
        });
    }, [activeModule]);

    const columnsForModule = (module) => {
        switch (module) {
            case 'users':
                return [
                    { key: 'id', title: 'ID' },
                    { key: 'login', title: 'Login' },
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
                    { key: 'createdAt', title: 'Created at', collapsible: true }
                ];
            default:
                return [];
        }
    };
        
    const columns = columnsForModule(activeModule);

    const handleEditItem = async (id) => {
        if (activeModule === 'recipes') {
            navigate(`/addRecipe/${id}`);
        } else {
            try {
                const response = await axios.get(`http://localhost:8080/api/${activeModule}/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                setEditItem(response.data);
                setShowModal(true);
            } catch (error) {
                console.error(`Error fetching ${activeModule} with ID: ${id}`, error);
            }
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            let url = '';
            switch (activeModule) {
                case 'users':
                    url = `/api/users/${id}`;
                    break;
                case 'ingredients':
                    url = `/api/ingredients/${id}`;
                    break;
                case 'diets':
                    url = `/api/diets/${id}`;
                    break;
                case 'cuisines':
                    url = `/api/cuisines/${id}`;
                    break;
                case 'mealTypes':
                    url = `/api/mealTypes/${id}`;
                    break;
                case 'recipes':
                    url = `/api/recipes/${id}`;
                    break;
                default:
                    throw new Error('Invalid module for deletion');
            }
            await axios.delete(`http://localhost:8080${url}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleAddNewItem = () => {
        if (activeModule === 'recipes') {
            navigate('/addRecipe');
        } else if (activeModule !== 'users') {
            let newItem = { id: '' };
            switch (activeModule) {
                case 'ingredients':
                    newItem = { name: '' };
                    break;
                case 'diets':
                    newItem = { type: '' };
                    break;
                case 'cuisines':
                    newItem = { name: '' };
                    break;
                case 'mealTypes':
                    newItem = { name: '' };
                    break;
                default:
                    console.error('Invalid module for adding new item');
                    return;
            }
            setEditItem(newItem);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditItem(null);
    };

    const handleSaveItem = async () => {
        try {
            let url = '';
            let payload = {};
            switch (activeModule) {
                case 'users':
                    url = `/api/users`;
                    if (!editItem.login || !editItem.email || !editItem.role.id) {
                        alert('Login, Email, and Role are required');
                        return;
                    }
                    payload = {
                        login: editItem.login,
                        email: editItem.email,
                        role: { id: editItem.role.id }
                    };
                    break;
                case 'ingredients':
                    url = `/api/ingredients`;
                    if (!editItem.name) {
                        alert('Name is required');
                        return;
                    }
                    payload = editItem;
                    break;
                case 'diets':
                    url = `/api/diets`;
                    if (!editItem.type) {
                        alert('Type is required');
                        return;
                    }
                    payload = editItem;
                    break;
                case 'cuisines':
                    url = `/api/cuisines`;
                    if (!editItem.name) {
                        alert('Name is required');
                        return;
                    }
                    payload = editItem;
                    break;
                case 'mealTypes':
                    url = `/api/mealTypes`;
                    if (!editItem.name) {
                        alert('Name is required');
                        return;
                    }
                    payload = editItem;
                    break;
                default:
                    throw new Error('Invalid module for saving');
            }

            if (editItem.id) {
                await axios.put(`http://localhost:8080${url}/${editItem.id}`, payload, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
            } else {
                await axios.post(`http://localhost:8080${url}`, payload, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
            }

            setShowModal(false);
            setEditItem(null);
            fetchData(activeModule).then(dataFetched => {
                if (dataFetched.content) {
                    setData(dataFetched.content);
                } else {
                    setData(dataFetched);
                }
            });
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    const handleEditInputChange = (field, value) => {
        setEditItem({ ...editItem, [field]: value });
    };

    return (
        <div className={classes.dashboard}>
            <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
            <div className={classes.mainContent}>
                <AdminTable
                    data={data}
                    columns={columns}
                    onEdit={handleEditItem}
                    onDelete={handleDeleteItem}
                    addNewText={activeModule !== 'users' ? `Add new ${activeModule}` : null}
                    onAddNew={activeModule !== 'users' ? handleAddNewItem : null}
                />
            </div>
            <EditModal
                open={showModal}
                onClose={handleCloseModal}
                item={editItem}
                onChange={handleEditInputChange}
                onSave={handleSaveItem}
                activeModule={activeModule}
            />
        </div>
    );
};

export default AdminDashboard;