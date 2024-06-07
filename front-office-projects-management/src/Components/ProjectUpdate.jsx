import React from "react";
import { updateProject } from "./ProjectApi";
import { useState } from "react";

const ProjectUpdate = (props) => {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleUpdateProject = async (e) => {
    e.preventDefault();

    try {
      await updateProject(code, startDate, description);
      console.log("Project updated successfully");
      setCode("");
      setDescription("");
      setStartDate("");
      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating project!", error);
    }
  };
  return (
    <body class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
      <header>
        <nav
          aria-label="menu nav"
          class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
        >
          <div class="flex flex-wrap items-center">
            <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
              <a href="/" aria-label="Home">
                <span class="text-xl pl-2">
                  <i class="fas fa-wrench pr-0 md:pr-3"></i>
                </span>
              </a>
            </div>

            <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span class="relative w-full">
                <input
                  aria-label="search"
                  type="search"
                  id="search"
                  placeholder="Search"
                  class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                />
                <div
                  class="absolute search-icon"
                  style={{ top: "1rem", left: ".8rem" }}
                >
                  <svg
                    class="fill-current pointer-events-none text-white w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </span>
            </div>

            <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
              <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li class="flex-1 md:flex-none md:mr-3">
                  <a
                    href="/"
                    class="inline-block py-2 px-4 text-white no-underline"
                  >
                    Active
                  </a>
                </li>
                <li class="flex-1 md:flex-none md:mr-3">
                  <a
                    class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="/"
                  >
                    link
                  </a>
                </li>
                <li class="flex-1 md:flex-none md:mr-3">
                  <div class="relative inline-block">
                    <button
                      onclick="toggleDD('myDropdown')"
                      class="drop-button text-white py-2 px-2"
                    >
                      {" "}
                      <span class="pr-2">
                        <i class="em em-robot_face"></i>
                      </span>{" "}
                      Hi, User{" "}
                      <svg
                        class="h-3 fill-current inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div class="flex flex-col md:flex-row">
          <nav aria-label="alternative nav">
            <div class="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
              <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                  <li class="mr-3 flex-1">
                    <a
                      href="../"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-600"
                    >
                      <i class="fas fa-home pr-0 md:pr-3 "></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                        Home
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="/allproject"
                      class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2  border-gray-800 hover:border-red-500"
                    >
                      <i class="fas fa-box pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        Show All Projects
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="/alltasks"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                    >
                      <i class="fas fa-tasks pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        Show All Tasks
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="/allproject/addproject"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-orange-500"
                    >
                      <i class="fas fa-plus pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        Add Project
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="/alltasks/addtask"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-500"
                    >
                      <i class="fas fa-plus pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        Add Task
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="/allproject/updateproject"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-green-500"
                    >
                      <i class="fas fa-pencil-alt pr-0 md:pr-3 text-green-500"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        Update Project
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="/alltasks/updatetask"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500"
                    >
                      <i class="fas fa-pencil-alt pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        Update Task
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="#"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                    >
                      <i class="fa fa-envelope pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        Messages
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section>
            <div
              id="main"
              class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
            >
              <div class="bg-gray-800 pt-3">
                <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 class="font-bold pl-2"> Update Project</h1>
                </div>
              </div>
              <div className="w-full h-full flex justify-center mt-20">
                <div className="w-full h-full flex flex-col justify-center items-center mt-9 ">
                  <form
                    onSubmit={handleUpdateProject}
                    action=""
                    className="w-full h-600"
                  >
                    <label
                      htmlFor="code"
                      className="text-[35px] mt-5 text-black-600"
                    >
                      Code Projet
                    </label>
                    <input
                      type="text"
                      id="code"
                      className="w-[980px] bg-slate-100 border border-black text-center"
                      value={code}
                      required
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <label
                      htmlFor="description"
                      className="text-[35px] mt-5 text-black-600"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="w-[980px] bg-slate-100 border border-black text-center"
                      value={description}
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <label
                      htmlFor="startdate"
                      className="text-[35px] mt-5 text-black-600"
                    >
                      Start Date
                    </label>
                    <input
                      type="text"
                      id="startdate"
                      className="w-[990px] bg-slate-100 border border-black text-center mb-3"
                      placeholder=" yyyy-mm-ddTHH:mm:ss.SSSZ"
                      value={startDate}
                      required
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <div className="flex flex-col items-center mb-9">
                      <div className="flex mb-9">
                        <input
                          type="submit"
                          className="w-[70px] bg-blue-600 ml-4 rounded-md text-white text-lg cursor-pointer"
                        />
                        <input
                          type="reset"
                          className="w-[70px] bg-red-600 ml-4 rounded-md text-white text-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {showSuccessPopup && (
              <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-green-600  p-8 rounded-md shadow-md">
                  <p className="text-white text-lg font-semibold">
                    Project updated successfully!
                  </p>
                </div>
              </div>
            )}
            <div class="w-full md:w-1/2 xl:w-1/2 p-6 mx-auto flex items-center justify-center">
              <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4"></div>

                  <p class="text-gray-600">&copy; 2024 Copyright </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </body>
  );
};

export default ProjectUpdate;
