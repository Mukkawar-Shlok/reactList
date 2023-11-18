import {useState} from 'react';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: true },
  { id: 4, description: "adwawd", quantity: 1, packed: true },
];


function App() {
  return (
    <div className="app">
     <Logo/>
     <Form/>
     <ParkingList/>
     <Stats/>

    </div>
  );
}


function Logo(){
  return (
   <h1>🥥Far Away🌴</h1>
      
     );
}

function Form(){

  const [description,setDescription]  = useState("");
  const [option,setOption] =  useState(1);

  function handleSubmit(e){
    e.preventDefault();
    console.log("sadadw");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Things you need for 😎 trips?</h3>
      <select value={option} onChange={(e)=>setOption(Number (e.target.value))}>
        {Array.from({length:20}, (_,i)=> i+1).map((i)=>(<option value={i} key={i} >{i}</option>)) }
      </select>
      <input type="text" placeholder="Item Name..." value={description} onChange={(e)=>setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

function Item(props){
  const {item} = props;
  return <li>
    <span style={ item.packed ? {textDecoration:"line-through"}:{}} >
      {item.quantity} {item.description}
    </span>
  <button>❎</button>
    </li>

}

function ParkingList(){
  return (
    <div className="list" >
    <ul >
    {initialItems.map(item=> <Item item={item} key={item.id}/> )}
    </ul>
    </div>
  );
}

function Stats(){
  return (
    <footer className="stats">
      
      <em>You have X items in your list and you already packed X (X%)</em>
    </footer>
  );
}





export default App;
