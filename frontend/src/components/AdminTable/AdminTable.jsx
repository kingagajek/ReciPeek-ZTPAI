import React, { useState } from 'react';
import classes from './AdminTable.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const AdminTable = ({ data, columns, onEdit, onDelete, addNewText, onAddNew }) => {
    const [expandedColumns, setExpandedColumns] = useState({});

    const toggleColumn = (key) => {
        setExpandedColumns(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <div className={classes.tableContainer}>
            {addNewText && (
                <button className={classes.addButton} onClick={onAddNew}>
                    {addNewText}
                </button>
            )}
            <div className={classes.tableWrapper}>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} className={classes.column}>
                                    {col.title}
                                </th>
                            ))}
                            <th className={classes.actionsColumn}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {columns.map(col => (
                                    <td
                                        key={col.key}
                                        className={`${classes.column} ${col.collapsible && !expandedColumns[col.key] ? classes.collapsed : ''}`}
                                    >
                                        {item[col.key]}
                                    </td>
                                ))}
                                <td className={classes.actionCells}>
                                    <div className={classes.actionButtons}>
                                        <button className={classes.iconButton} onClick={() => onEdit(item.id)}>
                                            <EditIcon />
                                        </button>
                                        <button className={classes.iconButton} onClick={() => onDelete(item.id)}>
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTable;