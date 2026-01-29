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
                <Route path='*' element={(<h1>Page not found</h1>)}/>
            </Routes>
        </>
    )
}

export default App
