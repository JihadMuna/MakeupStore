import React from 'react';
import styles from './styles/CategoryDropdown.module.css'; // Create a CSS file for styling

const CategoryDropdown = ({ categories, onSelectCategory }) => {
  return (
    <div className={styles.dropdown}>
      <span>Categories</span>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
