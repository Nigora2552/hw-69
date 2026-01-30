import './App.css'
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import {Route, Routes} from "react-router-dom";
import Movies from "./containers/Movies/Movies.tsx";
import AllInfoAboutMovie from "./containers/AllInfoAboutMovie/AllInfoAboutMovie.tsx";

function App() {


    return (
        <>
            <ToolBar/>
            <Routes >
                <Route path='/' element={(  <Movies/>)}/>
                <Route path='/:id' element={(<AllInfoAboutMovie/>)}/>
                <Route path='*' element={(<h1>Page not found</h1>)}/>
            </Routes>
        </>
    )
}

export default App
