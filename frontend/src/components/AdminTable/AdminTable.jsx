import React from 'react';
import classes from './AdminTable.module.css';

const AdminTable = ({ data, columns, onEdit, onDelete, addNewText, onAddNew }) => {
  return (
    <div  className={classes.tableContainer }>
      {addNewText && (
        <button className={classes.addButton} onClick={onAddNew}>
          {addNewText}
        </button>
      )}
      <table className={classes.table}>
        <thead>
        <tr>
            {columns.map(col => <th key={col.key} className={`${classes[col.key + 'Column']}`}>{col.title}</th>)}
            <th className={classes.actionsColumn}>Actions</th>
        </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map(col => <td key={col.key} className={classes[col.key + 'Column']}>{item[col.key]}</td>)}
              <td className={classes.actionCells}>
                <button className={classes.editButton} onClick={() => onEdit(item.id)}>Edit</button>
                <button className={classes.deleteButton} onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  );
};

export default AdminTable;
