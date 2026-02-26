import { useState } from "react";

function ParkVehicle({ slots, setSlots, setMessage }) {

  const [needsEV, setNeedsEV] = useState(false);
  const [needsCover, setNeedsCover] = useState(false);

  const handlePark = () => {

    for (let i = 0; i < slots.length; i++) {

      if (
        !slots[i].isOccupied &&
        slots[i].isEVCharging === needsEV &&
        slots[i].isCovered === needsCover
      ) {

        const updated = [...slots];
        updated[i].isOccupied = true;

        setSlots(updated);
        setMessage(`✅ Vehicle parked in slot ${updated[i].slotNo}`);

        return;
      }
    }

    setMessage("❌ No slot available");

  };

  return (
    <div className="bg-gradient-to-br from-green-100/70 to-green-200/60 backdrop-blur-md shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">

      <h2 className="text-xl font-semibold mb-4 text-green-600">
        🚗 Park Vehicle
      </h2>

      <div className="flex gap-4 mb-4">

        <label>
          <input
            type="checkbox"
            checked={needsCover}
            onChange={() => setNeedsCover(!needsCover)}
          />
          <span className="ml-2">Needs Covered</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={needsEV}
            onChange={() => setNeedsEV(!needsEV)}
          />
          <span className="ml-2">Needs EV Charging</span>
        </label>

      </div>

      <button
        onClick={handlePark}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-2 rounded mx-auto block"
      >
        Park Vehicle
      </button>

    </div>
  );
}

export default ParkVehicle;