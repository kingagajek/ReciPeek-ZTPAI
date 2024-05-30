import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const EditModal = ({ open, onClose, item, onChange, onSave, activeModule }) => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        if (activeModule === 'users') {
            axios.get('http://localhost:8080/api/users/roles')
                .then(response => {
                    setRoles(response.data);
                }).catch(error => {
                    console.error('Error fetching roles:', error);
                });
        }
    }, [activeModule]);

    if (!item) return null;

    const handleInputChange = (e) => {
        onChange(e.target.name, e.target.value);
    };

    const renderField = (key, value) => {
        if (key === 'role' && activeModule === 'users') {
            return (
                <FormControl fullWidth margin="dense" key={key}>
                    <InputLabel id="role-select-label">Role</InputLabel>
                    <Select
                        labelId="role-select-label"
                        value={value.id || ''}
                        onChange={(e) => onChange('role', { id: e.target.value })}
                    >
                        {roles.map(role => (
                            <MenuItem key={role.id} value={role.id}>
                                {role.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        } else {
            return (
                <TextField
                    key={key}
                    margin="dense"
                    label={key}
                    fullWidth
                    value={value}
                    onChange={(e) => onChange(key, e.target.value)}
                    name={key}
                />
            );
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{item.id ? 'Edit' : 'Add'} {activeModule.slice(0, -1)}</DialogTitle>
            <DialogContent>
                {Object.keys(item).map((key) => (
                    key !== 'id' && renderField(key, item[key])
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditModal;