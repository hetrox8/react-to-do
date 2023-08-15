import React from 'react';
import styles from './TodoItem.module.css';
// Update the path to your styles

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}> {/* Use the 'styles' object */}
      <div className={styles.content}> {/* Use the 'styles' object */}
        {/* ... */}
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
