import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"
import './App.css'
import DrVidyaPalve from "./pages/doctors/drvidya/DrVidyaPalve"
import DrAmitPalve from "./pages/doctors/dramitpalve/DrAmitPalve"
import ConsultationSuccess from "./layout/ConsultationSuccessBooking"
// import GlobalWhatsAppBubble from "./layout/GlobalWhatsAppBubble"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/dr-vidya-palve" element={<DrVidyaPalve />} />
        <Route path="/doctor/dr-amit-palve" element={<DrAmitPalve />} />
        <Route path="/thank-you" element ={<ConsultationSuccess />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <GlobalWhatsAppBubble /> */}
    </>
  )
}

export default App
