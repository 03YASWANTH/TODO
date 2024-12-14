import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(props) {
  return (
    <div className="flex justify-between h-fit items-center w-6/12 mx-28 my-3 p-3 mb-3 bg-white rounded-lg shadow-lg border border-gray-200">
    
      <div className="text-lg font-medium text-gray-800 flex-grow break-words">
        {props.content}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => props.handleEdit(props.id, props.content)}
          className="p-2 text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <EditIcon fontSize="medium" />
        </button>
        <button
          onClick={() => props.handleDelete(props.id)}
          className="p-2 text-red-600 hover:text-red-800 transition duration-300"
        >
          <DeleteIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
}

export default Todo;
