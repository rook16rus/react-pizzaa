import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                setPizzas(json.pizzas)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="*" element={<Home items={pizzas}/>}></Route>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
