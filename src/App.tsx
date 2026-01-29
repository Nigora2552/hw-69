import './App.css'
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import {Route, Routes} from "react-router-dom";
import Movies from "./containers/Movies/Movies.tsx";

function App() {


    return (
        <>
            <ToolBar/>
            <Routes>
                <Route path='/' element={(<Movies/>)}/>
            </Routes>
        </>
    )
}

export default App
