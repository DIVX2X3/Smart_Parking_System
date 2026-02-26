import { useState } from "react";

function AddSlot({ slots, setSlots }) {
  const [slotNo, setSlotNo] = useState("");
  const [isCovered, setIsCovered] = useState(false);
  const [isEVCharging, setIsEVCharging] = useState(false);

  const handleAdd = () => {

    if (!slotNo) return;

    const newSlot = {
      slotNo: Number(slotNo),
      isCovered,
      isEVCharging,
      isOccupied: false,
    };

    setSlots([...slots, newSlot]);

    setSlotNo("");
    setIsCovered(false);
    setIsEVCharging(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100/70 to-blue-200/60 backdrop-blur-md shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        ➕ Add Parking Slot
      </h2>

      <input
        type="number"
        placeholder="Slot Number"
        value={slotNo}
        onChange={(e) => setSlotNo(e.target.value)}
        className="w-full border rounded p-2 mb-3"
      />

      <div className="flex gap-4 mb-4">

        <label>
          <input
            type="checkbox"
            checked={isCovered}
            onChange={() => setIsCovered(!isCovered)}
          />
          <span className="ml-2">Covered</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={isEVCharging}
            onChange={() => setIsEVCharging(!isEVCharging)}
          />
          <span className="ml-2">EV Charging</span>
        </label>

      </div>

      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded mx-auto block"
      >
        Add Slot
      </button>

    </div>
  );
}

export default AddSlot;