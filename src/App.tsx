import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"
import './App.css'
import DrVidyaPalve from "./pages/doctors/drvidya/DrVidyaPalve"
import ConsultationSuccess from "./layout/ConsultationSuccessBooking"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor/dr-vidya-palve" element={<DrVidyaPalve />} />
      <Route path="/consultation-booking-successful" element ={<ConsultationSuccess />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
