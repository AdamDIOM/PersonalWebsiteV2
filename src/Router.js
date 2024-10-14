import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Uni from './Uni/Uni';
import Campaign from './SUCampaign/Campaign';

function Router() {
  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
        <Route path="/uni" element={<Uni />} />
        <Route path="/officer" element={<Campaign />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
