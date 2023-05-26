import React from "react";
import { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
    let localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
    }else{
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);
    // guardar todos en local storage
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);  
  };

  return[item, saveItem];
}; 

export { useLocalStorage };
// ----------------------------------------------
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'arreglar los problemas de todos', completed: false}
// ];

// localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODO_V1');