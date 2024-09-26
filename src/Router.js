import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/uni" element={<p>uni</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
