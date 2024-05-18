import { useState } from "react";
import { Sidebar } from "./Components/Sidebar";
import { IconButton, Typography } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Starred from "./Components/Starred";
import Contact from "./Components/Contact";
import Drafts from "./Components/Drafts";
import Settings from "./Components/Settings";
import LogOut from "./Components/LogOut";
import Analytics from "./Components/Analytics";
import Analytics1 from "./Components/Analytics1";
import Analytics2 from "./Components/Analytics2";
import Analytics3 from "./Components/Analytics3";
import Reporting from "./Components/Reporting";
import Projects from "./Components/Projects";
import Project1 from "./Components/Project1";
import Project2 from "./Components/Project2";
import Project3 from "./Components/Project3";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="bg-green-600 p-4 flex gap-4 items-center">
          <Typography variant="h6" color="white">
            Demo Side Bar
          </Typography>
          <IconButton className="" color="white" onClick={toggleSidebar}>
            <Bars3Icon className="h-6 w-6" />
          </IconButton>
        </div>
        <div className="flex flex-grow ">
          <Sidebar isOpen={isSidebarOpen} />
          <div className="flex-grow p-4 ">
            <Routes>
              <Route path="/" element={<Dashboard />}>
                <Route path="/analytics" element={<Analytics />}>
                  <Route path="analytics1" element={<Analytics1 />} />
                  <Route path="analytics2" element={<Analytics2 />} />
                  <Route path="analytics3" element={<Analytics3 />} />
                </Route>
                <Route path="/reporting" element={<Reporting />} />
                <Route path="/projects" element={<Projects />}>
                  <Route path="project1" element={<Project1 />} />
                  <Route path="project2" element={<Project2 />} />
                  <Route path="project3" element={<Project3 />} />
                </Route>
              </Route>
              <Route path="/starred" element={<Starred />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/drafts" element={<Drafts />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<LogOut />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
