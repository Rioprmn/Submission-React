import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Detailpage from './pages/detailpage';
import Addnotepage from './pages/addnotepage';
import Archivepage from './pages/archivepage';
import Notfoundpage from './pages/notfoundpage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/notes/new" element={<Addnotepage />} />
          <Route path="/notes/:id" element={<Detailpage />} />
          <Route path="/archives" element={<Archivepage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;