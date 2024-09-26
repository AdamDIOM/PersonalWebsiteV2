import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

function Router() {
  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uni" element={<p>uni</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
