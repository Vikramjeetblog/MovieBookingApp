import './App.css';
import ShowDetails from './Components/ShowDetails';
import ShowList from './Components/ShowList';
import TicketDetails from './Components/TicketDetails';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          
          <Route path="/ticket-details/:id" element={<TicketDetails />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
