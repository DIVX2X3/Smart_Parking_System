import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import AddSlotPage from "./pages/AddSlotPage";
import ParkVehiclePage from "./pages/ParkVehiclePage";
import RemoveVehiclePage from "./pages/RemoveVehiclePage";
import SlotListPage from "./pages/SlotListPage";

function App() {

  const [slots, setSlots] = useState([]);
  const [message, setMessage] = useState("");

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">

        {/* Header with Navigation in Same Line */}

<div className="bg-white shadow-md rounded-xl p-4 mb-6 flex items-center justify-between">

  {/* Left Side Title */}

  <h1 className="text-2xl font-bold text-blue-600">
    Smart Parking Lot System 🚗
  </h1>


  {/* Right Side Navigation */}

  <div className="flex gap-6">

    <Link to="/" className="font-semibold hover:text-blue-600">
      Home
    </Link>

    <Link to="/add" className="font-semibold hover:text-blue-600">
      Add Slot
    </Link>

    <Link to="/park" className="font-semibold hover:text-blue-600">
      Park Vehicle
    </Link>

    <Link to="/remove" className="font-semibold hover:text-blue-600">
      Remove Vehicle
    </Link>

    <Link to="/slots" className="font-semibold hover:text-blue-600">
      Slot List
    </Link>

  </div>

</div>


        {/* Routes */}

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/add"
            element={<AddSlotPage slots={slots} setSlots={setSlots} />}
          />

          <Route
            path="/park"
            element={
              <ParkVehiclePage
                slots={slots}
                setSlots={setSlots}
                setMessage={setMessage}
              />
            }
          />

          <Route
            path="/remove"
            element={
              <RemoveVehiclePage
                slots={slots}
                setSlots={setSlots}
                setMessage={setMessage}
              />
            }
          />

          <Route
            path="/slots"
            element={<SlotListPage slots={slots} />}
          />

        </Routes>


        {/* Message */}

        {message && (

          <div className="mt-6 bg-blue-100 text-blue-800 p-4 rounded-lg shadow text-center">

            {message}

          </div>

        )}

      </div>

    </BrowserRouter>

  );

}

export default App;