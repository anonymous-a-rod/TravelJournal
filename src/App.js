import './App.css';
import Card from './Card';
import Nav from './Nav';
import data from './data';

function App() {
  const card1 = data[0];

  const cards = data.map((item, i, row) => {
    return (
      <Card 
        {...item}
        key={item.id}
        last={(i + 1 !== row.length)? true : false}
      />
      
    )
    
  })
console.log(card1.img)
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
