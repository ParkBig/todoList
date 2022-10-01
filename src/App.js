import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [arr, setArr] = useState([])
  const [titles, setTitles] = useState("");
  const [contents, setContents] = useState("");

  const onChange = (ev) => {(ev.target.id === "forTitle") ? setTitles(ev.target.value) : setContents(ev.target.value) }
  const onSubmit = (ev) => {ev.preventDefault(); setArr([{tit:titles, cont:contents, done:false},...arr]); setTitles(""); setContents("")}
  
  return (
    <div style={{width:"1200px", margin:"auto"}}>
      <div style={{display:"flex",height:"50px",margin:"auto",padding:"10px",justifyContent:"space-between"}}>
        <div><h3>My Todo List</h3></div>
        <div><h3>React</h3></div>
      </div>
      <div className='App-parentForm'>
        <form className="App-form" onSubmit={onSubmit}>
          <div style={{marginLeft:"20px"}}>
            <label className='App-label'>제목</label> 
            <input id='forTitle' className='App-input' required onChange={onChange} value={titles} />
            <label className='App-label'>내용</label> 
            <input className='App-input' required onChange={onChange} value={contents} />  
          </div>
          <button className='App-button'>추가하기</button>
        </form>
      </div>
      <div>
        <div id='working'>
          <h1>Working..🔥</h1>
          <div className='App-working'>
            {arr.map((prop,index)=> !prop.done ? <List key={index} index={index} arr={arr} setArr={setArr} title={prop.tit} content={prop.cont} done={prop.done} /> : null)}
          </div>
        </div>
        <div id='done'>
          <h1>Done..!🎉</h1>
          <div className='App-working'>
            {arr.map((prop,index)=> prop.done ? <List key={index} index={index} arr={arr} setArr={setArr} title={prop.tit} content={prop.cont} done={prop.done} /> : null)}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
