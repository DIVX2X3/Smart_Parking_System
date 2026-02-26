import ParkVehicle from "../components/ParkVehicle";

function ParkVehiclePage({ slots, setSlots, setMessage }) {
  return (
    <ParkVehicle
      slots={slots}
      setSlots={setSlots}
      setMessage={setMessage}
    />
  );
}

export default ParkVehiclePage;