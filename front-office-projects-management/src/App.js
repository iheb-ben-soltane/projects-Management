import ProjectAdd from "./Components/ProjectAdd";
import TaskAdd from "./Components/TaskAdd";
import ProjectUpdate from "./Components/ProjectUpdate";
import TaskUpdate from "./Components/TaskUpdate";
import Home from "./Components/Home";
import ProjectAll from "./Components/ProjectAll";
import Tasks from "./Components/TaskAll";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              allproject="allproject"
              alltasks="alltasks"
              addproject="/allproject/addproject"
            />
          }
        />
        <Route
          path="allproject"
          element={
            <ProjectAll
              alltasks="/alltasks"
              addproject="/allproject/addproject"
              updateproject="updateproject"
              addtask="addtask"
              updatetask="updatetask"
            />
          }
        />
        <Route path="/allproject/addproject" element={<ProjectAdd />} />
        <Route
          path="/allproject/addtask"
          element={<TaskAdd addproject="/allproject/addproject" />}
        />
        <Route path="/allproject/updatetask" element={<TaskUpdate />} />
        <Route path="/allproject/updateproject" element={<ProjectUpdate />} />
        <Route
          path="/alltasks"
          element={
            <Tasks
              updatetask="updatetask"
              allproject="allproject"
              addproject="/allproject/addproject"
            />
          }
        />
        <Route path="/alltasks/addtask" element={<TaskAdd />} />
        <Route path="/alltasks/updatetask" element={<TaskUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
