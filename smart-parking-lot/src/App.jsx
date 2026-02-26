import { useState } from "react";
import AddSlot from "./components/AddSlot";
import SlotList from "./components/SlotList";
import ParkVehicle from "./components/ParkVehicle";
import RemoveVehicle from "./components/RemoveVehicle";

function App() {
  const [slots, setSlots] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">

      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">
           Smart Parking Lot System
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <AddSlot slots={slots} setSlots={setSlots} />

        <ParkVehicle
          slots={slots}
          setSlots={setSlots}
          setMessage={setMessage}
        />
      </div>

      <div className="mb-6">
        <RemoveVehicle
          slots={slots}
          setSlots={setSlots}
          setMessage={setMessage}
        />
      </div>

      {/* Slot List */}
      <SlotList slots={slots} />

      {/* Message Alert */}
      {message && (
        <div className="mt-6 bg-blue-100 text-blue-800 p-4 rounded-lg shadow">
          {message}
        </div>
      )}

    </div>
  );
}

export default App;