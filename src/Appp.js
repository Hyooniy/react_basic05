import ProductList from "./components/ProductList";
import data from "./data.json";
import './App.css';
import { useState } from 'react';

export default function App() {
  const [order,setOrder] = useState('date');
  const [items,setItems] = useState(data);
  const sortItems = items.sort((a,b) => a[order]-b[order])
  const newClick = () => setOrder('rating');
  const bestClick = () => setOrder('date');
  const DeleteItem = (id) => {
    //새로운 배열
    const newItem = items.filter((item) => item.id !==id)
    setItems(newItem)
  }
  return (
    <div id="wrap">
      <div className="btn">
        <button type="button" onClick={newClick}>최신 순</button>
        <button type="button" onClick={bestClick}>베스트 순</button>
      </div>        
      <ProductList 
        items = {sortItems}
        onDelete={DeleteItem}/>
    </div>
  );
}
