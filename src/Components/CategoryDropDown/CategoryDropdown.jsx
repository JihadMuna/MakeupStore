import React from "react";
import styles from "./CategoryDropdown.module.css";

const CategoryDropdown = ({ categories, onSelectCategory }) => {
    return (
      <div className={styles.dropdown}>
        <span>Categories</span>
        <ul>
          {categories.map((category) => (
            <li key={category.id} onClick={() => onSelectCategory(category.name)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CategoryDropdown;