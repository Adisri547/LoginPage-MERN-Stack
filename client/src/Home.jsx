import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  // Example: pretend we retrieved user's name (you can replace with real logic later)
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // This would come from localStorage, context, or backend in a real app
    const fakeName = "Aditya Srivastav";
    setUserName(fakeName);
  }, []);

  const handleLogout = () => {
    // Optional: Clear auth state here
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-full max-w-2xl space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome{userName ? `, ${userName}` : ""}!
        </h1>

        <p className="text-gray-600 text-lg italic">
          "The secret of getting ahead is getting started." – Mark Twain
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
