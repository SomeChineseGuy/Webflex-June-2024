import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

const data = [{
  title: "Card 1 ",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus itaque perspiciatis quasi veniam, iste corporis libero quo numquam!",
  buttonWords: "Click Here!"
},
{
  title: "Card 2 ",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus itaque perspiciatis quasi veniam, iste corporis libero quo numquam!",
  buttonWords: "Broken!",
  buttonStatus: "broken"
},
{
  title: "Card 3 ",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus itaque perspiciatis quasi veniam, iste corporis libero quo numquam!",
  buttonWords: "Loading!",
  buttonStatus: "loading"
}]

function App() {
  return (
    <div className="App">
      <h1>Hello everyone!</h1>
      <div className="card-containers">
        {data.map((item, idx) => {
          return (
            <Card
              key={idx}
              title={item.title}
              content={item.content}
              buttonWords={item.buttonWords}
              buttonStatus={item.buttonStatus}
            />
          );
        })}
        {/* <Card 
          title={data[0].title}
          content={data[0].content}
          buttonWords={data[0].buttonWords}
        />
        <Card 
          title={data[1].title}
          content={data[1].content}
          buttonWords={data[1].buttonWords}
          buttonStatus={data[1].buttonStatus}
        />
        <Card 
          title={data[2].title}
          content={data[2].content}
          buttonWords={data[2].buttonWords}
          buttonStatus={data[2].buttonStatus}
        /> */}
        
      </div>
    </div>
  );
}

export default App;



// console.log(res.rows)
// [{},{},{}]
