import axios from "axios";

const baseURL = "http://localhost:8080/GestionDesProjetsBackOffice/ProjectRest";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllProjects = async () => {
  try {
    const response = await axiosInstance.get("/Projects");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching projects: ${error}`);
  }
};

const addProject = async (description, startDate) => {
  try {
    const response = await axiosInstance.post("/add", {
      description: description,
      startDate: startDate,
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

const updateProject = async (codeProject, newStartDay, newDescription) => {
  try {
    const response = await axiosInstance.post(
      `/update/${codeProject}/${newStartDay}/${newDescription}`
    );
    console.log("Response:", response);
    if (response.status === 200) {
      console.log("Project updated successfully");
    } else {
      console.error("Failed to update project");
    }
  } catch (error) {
    console.error("Error updating project:", error.message);
  }
};

const deleteProject = async (projectCode) => {
  try {
    const response = await axiosInstance.delete(`/delete/${projectCode}`);
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

export { getAllProjects, deleteProject, updateProject, addProject };
