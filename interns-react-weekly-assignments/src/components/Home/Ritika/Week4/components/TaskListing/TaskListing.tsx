// import React, { useState, useEffect } from "react";
// import { Tasks } from "../../utils/interfaces/interfaces";
// import { TaskListingWrapper } from "./TaskListing.styled";
// import TaskForm from "../TaskForm/TaskForm";
// import DeleteModal from "../DeleteModal/DeleteModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../assets/download-removebg-preview.png";
// import { formatDate } from "../../utils/dateFormation/dateFormater";

// const TaskListing = () => {
//   const [tasksToShow, setTasksToShow] = useState<Tasks[]>([]);
//   const [selectedTask, setSelectedTask] = useState<Tasks | null>(null);
//   const [showAddTask, setShowAddTask] = useState<boolean>(false);
//   const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
//   const [filter, setFilter] = useState<string>("All");
//   const [deleteTaskId, setDeleteTaskId] = useState<number>(0);
//   const [tasks, setTasks] = useState<Tasks[]>(() => {
//     const storedTasks = localStorage.getItem("tasks");
//     return storedTasks ? JSON.parse(storedTasks) : [];
//   });

//   let serialNumber: number = 0;
//   const editTask = (task: Tasks) => {
//     setSelectedTask(task);
//     setShowAddTask(true);
//   };

//   const toggleStatus = (taskId: number) => {
//     const handleTaskStatus = tasksToShow.map((task) => {
//       if (task.id === taskId) {
//         return {
//           ...task,
//           status: task.status === "Pending" ? "Done" : "Pending",
//         };
//       }
//       return task;
//     });
//     setTasksToShow(handleTaskStatus);
//     setTasks(handleTaskStatus);
//     localStorage.setItem("tasks", JSON.stringify(handleTaskStatus));
//   };

//   const handleDelete = (taskId: number) => {
//     setDeleteTaskId(taskId);
//     setShowDeleteModal(true);
//   };

//   useEffect(() => {
//     setTasksToShow(tasks);
//   }, []);

//   return (
//     <TaskListingWrapper>
//       {showAddTask && (
//         <TaskForm setTasksToShow={setTasksToShow} selectedTask={selectedTask} setShowAddTask={setShowAddTask} />
//       )}
//       {showDeleteModal && (
//         <DeleteModal
//           setTasksToShow={setTasksToShow}
//           tasksToShow={tasksToShow}
//           deleteTaskId={deleteTaskId}
//           setShowDeleteModal={setShowDeleteModal}
//           setTasks={setTasks}
//         />
//       )}
//       <div className="task-list-container">
//         <h2 className="main-heading">
//           To-Do List
//           <img src={logo} alt="logo" />
//         </h2>
//         <div className="heading-buttons">
//           <button
//             className="add-task-button"
//             onClick={() => {
//               setShowAddTask(true);
//               setSelectedTask(null);
//             }}
//           >
//             Add Task
//           </button>
//           <select name="filter" id="filter" onChange={(e) => setFilter(e.target.value)}>
//             <option value="All">All</option>
//             <option value="Pending">Pending</option>
//             <option value="Done">Done</option>
//           </select>
//         </div>
//         <table className="task-table">
//           <thead>
//             <tr>
//               <th className="s_no">S No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Date of Completion</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasksToShow?.map((task, index) => {
//               if (
//                 (filter === "Done" && task.status === "Done") ||
//                 (filter === "Pending" && task.status === "Pending") ||
//                 filter === "All"
//               ) {
//                 serialNumber++;
//                 return (
//                   <tr key={task.id}>
//                     <td className="s_no"> {serialNumber}</td>
//                     <td>{task.value}</td>
//                     <td>{task.description}</td>
//                     <td>{formatDate(task.date)}</td>
//                     <td>
//                       <div className="button-container">
//                         <button className={`task-status status-${task.status}`} onClick={() => toggleStatus(task.id)}>
//                           {" "}
//                           {task.status}
//                         </button>
//                         <button
//                           className="delete-button"
//                           onClick={() => {
//                             handleDelete(task.id);
//                           }}
//                         >
//                           <FontAwesomeIcon icon={faTrash} />
//                         </button>
//                         <button className="edit-button" onClick={() => editTask(task)}>
//                           <FontAwesomeIcon icon={faPenToSquare} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               }
//             })}
//           </tbody>
//         </table>
//       </div>
//     </TaskListingWrapper>
//   );
// };

// export default TaskListing;
export{}