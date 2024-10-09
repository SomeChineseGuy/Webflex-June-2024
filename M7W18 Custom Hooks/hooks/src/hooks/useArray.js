import { useState } from "react";

const useArray = (initialVal) => {
  const [items, setItems] = useState(initialVal);
  const deleteItem = (userIdx) => {
    const newArr = items.filter((item, idx) => idx !== userIdx )
    setItems(newArr)
  }

  const addItem = (newItem) => {
    setItems([...items, newItem])
  }

  return {
    items,
    addItem,
    deleteItem
  }
}

export default useArray;