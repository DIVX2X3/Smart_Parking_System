import { useState } from "react";

function RemoveVehicle({ slots, setSlots, setMessage }) {

  const [slotNo, setSlotNo] = useState("");

  const handleRemove = () => {

    const updated = slots.map((slot) =>
      slot.slotNo === Number(slotNo)
        ? { ...slot, isOccupied: false }
        : slot
    );

    setSlots(updated);
    setMessage(`✅ Slot ${slotNo} is now free`);
  };

  return (
    <div className="bg-gradient-to-br from-red-100/70 to-pink-200/60 backdrop-blur-md shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">

      <h2 className="text-xl font-semibold mb-4 text-red-600">
        ❌ Remove Vehicle
      </h2>

      <input
        type="number"
        placeholder="Slot Number"
        value={slotNo}
        onChange={(e) => setSlotNo(e.target.value)}
        className="w-full border rounded p-2 mb-4"
      />

      <button
        onClick={handleRemove}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-2 rounded mx-auto block"
      >
        Remove Vehicle
      </button>

    </div>
  );
}

export default RemoveVehicle;