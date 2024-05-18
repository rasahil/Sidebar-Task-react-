import { useState } from 'react';
import {  Route, Routes} from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-64 flex-shrink-0 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow">
        {/* Header */}
        <header className="bg-gray-900 text-white p-4">
          <button onClick={toggleSidebar} className="block md:hidden">Toggle Sidebar</button>
        </header>
        
        {/* Content */}
        <main className="p-4">
          <Routes>
            {/* Define your routes */}
            <Route path="/home">
              <h1>Home Page Content</h1>
            </Route>
            <Route path="/contact">
              <h1>Contact Page Content</h1>
            </Route>
            {/* Add more routes as needed */}
            <Route path="/">
              <h1>Default Content</h1>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;
