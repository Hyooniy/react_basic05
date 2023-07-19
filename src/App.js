import ProductList from "./components/ProductList";
import data from "./data.json";
import './App.css';
import { useState } from 'react';

function Option({etc,sortItems}){
  const etcChange = (e) =>{
    return sortItems(e.target.value);
  }
  return(
    <select defaultValue={etc} onChange={etcChange}>
      <option value= "necklace">necklace</option>
      <option value= "earring">earring</option>
    </select>
  )
}
export default function App() {
  const [etc,setEtc] = useState('');
  const [items,setItems] = useState(data);
  //변수 만들기
  let subData =  data;
  const sortItems = (a) => {
    console.log(a)
    const newItem = subData.filter((item) => {
      return item.kind === a});
      setEtc(a);
      setItems(newItem);
  }
  const DeleteItem = (id) => {
    //새로운 배열
    const newItem = items.filter((item) => item.id !==id)
    setItems(newItem);
  }
  return (
    <div id="wrap">
      <div className="btn">
        <Option 
        etc={etc}
        sortItems={sortItems}/>
      </div>
      <ProductList 
        items = {items}
        onDelete={DeleteItem}/>
    </div>
  );
}
