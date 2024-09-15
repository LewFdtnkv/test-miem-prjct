import { useState } from 'react'
import './App.css'
import AddBreakWindow from './components/AddBreakWindow'
import EditScheduleWindow from './components/EditScheduleWindow'
import Buttons from './components/Buttons'
import MultiDateCalendar from './components/Calendars';
import MainPage from './components/MainPage'
import dayjs from 'dayjs';

export default function App() {
  const format = 'HH:mm'; 
  const [projects, setProjects] = useState([]);
  const [mode, setMode] = useState('default')
  const [selectedDates, setSelectedDates] = useState([dayjs()]);
  const [time, setTime] = useState(["10:00", "18:00"])
  const [breaken, setBreaken]=useState()
  const [rest, setRest] = useState([])
  const [selectedRests, setSelectedRests] = useState([])
  return (
    <>
      <Buttons setMode={setMode} setBreaken={setBreaken} rest={rest}/>
      {mode === 'default' && <MainPage setRest={setRest} rest={rest}selectedRests={selectedRests} setMode={setMode}selectedDates={selectedDates}setSelectedDates={setSelectedDates}time={time}setTime={setTime} projects={projects} setProjects={setProjects}/>}
      
      {mode === 'calendar' && <MultiDateCalendar selectedRests={selectedRests}setSelectedRests={setSelectedRests} breaken={breaken} setBreaken={setBreaken}selectedDates={selectedDates} setSelectedDates={setSelectedDates} setMode={setMode}/>}
      {mode === 'editGraph' && <EditScheduleWindow setRest={setRest}setSelectedDates={setSelectedDates} selectedDates={selectedDates}time={time}setTime={setTime} setMode={setMode} format={format}/>}
      {mode === 'addBreak' && <AddBreakWindow setProjects={setProjects} setMode={setMode} setBreaken={setBreaken} projects={projects}  format={format} rest={rest} setRest={setRest} selectedRests={selectedRests}setSelectedRests={setSelectedRests}/>}
     
    </>
  )
}
