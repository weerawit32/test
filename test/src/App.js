import logo from './logo.svg';
import './App.css';
import { useCallback, useState} from 'react'

function App() {
  const data = new Array(10).fill(null);
  const [indexOfItem, setIndexOfIItem] = useState(0);

    console.log(data)
  


  return (
    <div className="App">
      <ul>
      {data.map((item, index) => {

        return <Item key={index} index={index} indexOfItem={indexOfItem} setIndexOfIItem={setIndexOfIItem}/>
      })
      }

      </ul>
    </div>
  );
}

const Item = ({index, indexOfItem, setIndexOfIItem}) => {

  return <li onClick={()=> setIndexOfIItem(index)}>{indexOfItem === index ? "selected": index}</li>
}

export default App;
