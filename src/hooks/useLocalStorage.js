import { useState, useEffect } from "react";


const useLocalStorage = (itemName, initialValue) => {
   const [item, setItem] = useState(initialValue);
   const [loading, setLoading] = useState(true); //estado de carga
   const [error, setError] = useState(false); // estado de error
    
    // useEffect
    useEffect(() => {
      setTimeout(() => {
        try{
          let localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }

          setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true);  
        }
      }, 2000);
    }, []);

    // guardar todos en local storage
    const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);  
  };

  return {
    item, 
    saveItem, 
    loading,
    error
  };
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