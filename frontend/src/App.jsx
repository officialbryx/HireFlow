import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-100 max-w-3xl w-full p-4 rounded-lg shadow-md">
          <h1 className="mb-4 text-2xl font-bold text-center">Welcome to HireFlow</h1>
          <UserList />
        </div>
      </div>
    </>
  );
}

export default App;
