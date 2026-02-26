function SlotList({ slots }) {

  return (
    <div className="bg-gradient-to-br from-purple-100/70 to-indigo-200/60 backdrop-blur-md shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        📋 Parking Slots
      </h2>

      <table className="w-full">

        <thead>
          <tr className="bg-gray-200">

            <th className="p-2">Slot</th>
            <th className="p-2">Covered</th>
            <th className="p-2">EV</th>
            <th className="p-2">Status</th>

          </tr>
        </thead>

        <tbody>

          {slots.map((slot, index) => (

            <tr key={index} className="text-center border-t">

              <td className="p-2">{slot.slotNo}</td>

              <td>{slot.isCovered ? "✅" : "❌"}</td>

              <td>{slot.isEVCharging ? "⚡" : "❌"}</td>

              <td>
                {slot.isOccupied
                  ? <span className="text-red-600 font-semibold">Occupied</span>
                  : <span className="text-green-600 font-semibold">Available</span>}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default SlotList;