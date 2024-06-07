import axios from "axios";

const baseURL = "http://localhost:8080/GestionDesProjetsBackOffice/TaskRest";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllTasks = async () => {
  try {
    const response = await axiosInstance.get("/tasks");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching projects: ${error}`);
  }
};
const addTask = async (codeProject, description, startDate, endDate) => {
  try {
    const response = await axiosInstance.post(`/add/${codeProject}`, {
      description: description,
      startDate: startDate,
      endDate: endDate,
    });
    console.log("Response:", response);
    if (response.status === 200) {
      console.log("Project added successfully");
    } else {
      console.error("Failed to add project");
    }
  } catch (error) {
    console.error("Error adding project:", error.message);
  }
};

const updateTask = async (codeTask, newStartDay, newEndDay, newDescription) => {
  try {
    const response = await axiosInstance.post(
      `/update/${codeTask}/${newStartDay}/${newEndDay}/${newDescription}`
    );
    console.log("Response:", response);
    if (response.status === 200) {
      console.log("Task updated successfully");
    } else {
      console.error("Failed to update task");
    }
  } catch (error) {
    console.error("Error updating task:", error.message);
  }
};
const deleteTask = async (projectCode, taskCode) => {
  try {
    const response = await axiosInstance.delete(
      `/delete/${projectCode}/${taskCode}`
    );
    console.log("Response:", response);
    if (response.status === 200) {
      console.log("Project deleted successfully");
    } else {
      console.error("Failed to delete project");
    }
  } catch (error) {
    console.error("Error deleting project:", error.message);
  }
};

export { getAllTasks, deleteTask, updateTask, addTask };
