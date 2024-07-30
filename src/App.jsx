import { useEffect, useState } from 'react'
import './App.css'
import InterviewCards from './components/InterviewCards'
import ParentComp from './PassData/ChildToParent';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LandingPage from './Pages/Landing';

function App() {
 
  const [interviewNotes,setInterviewNotes]=useState([]);


  useEffect(()=>{
    fetch("https://665543473c1d3b602938b986.mockapi.io/interviewcards",{
      method:"GET"
    }).then((res)=>res.json())
    .then((data)=>setInterviewNotes(data))
    .catch((err)=>console.log(err));
  },[]);

  return (
    <>
        <LandingPage data={interviewNotes} />
    </>
  )
}

function NewComp() {

  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Clean Un Mounting ------");
    }
  }, [])

  console.log("component rendering")
  return <h1>Hello</h1>
}


function TimerComp(){

  const [time,setTime] = useState(0);

  useEffect(()=>{
    const interval1 = setInterval(()=>{
      setTime(time+1);
    },1000)

    return()=>{
        clearInterval(interval1);
    }
  },[]);

  return(<>
    <div>
      <h1>Timer : {time}</h1>
    </div>
  </>)
}

export default App
