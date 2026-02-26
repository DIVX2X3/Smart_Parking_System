import RemoveVehicle from "../components/RemoveVehicle";

function RemoveVehiclePage({ slots, setSlots, setMessage }) {
  return (
    <RemoveVehicle
      slots={slots}
      setSlots={setSlots}
      setMessage={setMessage}
    />
  );
}

export default RemoveVehiclePage;