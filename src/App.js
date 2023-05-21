import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";
import Card from "./components/Card";

function App() {
  const {drawer} = useSelector(state=>state.drawer)
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
          {drawer && <Card/>}
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
