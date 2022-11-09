import {Navigate, Route, Routes} from "react-router-dom";
import Create from "../components/crud/create";
import Retrieve from "../components/crud/retrieve";
import Update from "../components/crud/update";

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/create"/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/retrieve' element={<Retrieve/>}/>
            <Route path='/update' element={<Update/>}/>
        </Routes>
    )
}