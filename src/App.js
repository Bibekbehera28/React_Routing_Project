import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";



function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element = {<Home/>}> </Route>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/>
            <Route path="/*" element={<Error/>} />
       
        </Routes>
        </BrowserRouter>
    );
}

export default App;
