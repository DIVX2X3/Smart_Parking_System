import { Link } from "react-router-dom";

function Home() {
  return (

    <div className="space-y-8">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg p-10 text-center">

        <h1 className="text-4xl font-bold mb-3">
          Smart Parking Lot System 🚗
        </h1>

        <p className="text-lg opacity-90 mb-6">
          Efficiently manage and allocate parking slots with intelligent automation.
        </p>

        <div className="flex justify-center gap-4">

          <Link
            to="/add"
            className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Add Slot
          </Link>

          <Link
            to="/park"
            className="bg-green-500 px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Park Vehicle
          </Link>

        </div>

      </div>


      {/* Features Section */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">

          <div className="text-3xl mb-2">⚡</div>

          <h3 className="font-semibold text-lg mb-1">
            Fast Allocation
          </h3>

          <p className="text-gray-600 text-sm">
            Automatically assigns the nearest available parking slot.
          </p>

        </div>


        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">

          <div className="text-3xl mb-2">🔒</div>

          <h3 className="font-semibold text-lg mb-1">
            Smart Management
          </h3>

          <p className="text-gray-600 text-sm">
            Easily add, remove, and monitor parking slots.
          </p>

        </div>


        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">

          <div className="text-3xl mb-2">📊</div>

          <h3 className="font-semibold text-lg mb-1">
            Real-Time Status
          </h3>

          <p className="text-gray-600 text-sm">
            View live availability and occupancy of parking slots.
          </p>

        </div>

      </div>


      {/* Info Section */}

      <div className="bg-white shadow-md rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-3 text-blue-600">
          System Overview
        </h2>

        <ul className="space-y-2 text-gray-700">

          <li>✔ Add and manage parking slots</li>

          <li>✔ Automatic vehicle slot allocation</li>

          <li>✔ Support for EV charging slots</li>

          <li>✔ Covered and uncovered slot management</li>

          <li>✔ Real-time parking status tracking</li>

        </ul>

      </div>


      {/* Footer */}

      <div className="text-center text-gray-500 text-sm">

        Smart Parking Lot System • Built using React & Tailwind CSS

      </div>


    </div>

  );
}

export default Home;