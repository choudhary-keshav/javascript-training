// import React from "react";
// import { Tasks } from "../../utils/interfaces/interfaces";
// import { TaskFormWrapper } from "../TaskForm/TaskForm.styled";
// import message from "../../utils/constants/constants.json";

// const DeleteModal: React.FunctionComponent<{
//   setTasksToShow: React.Dispatch<React.SetStateAction<Tasks[]>>;
//   tasksToShow: Tasks[];
//   deleteTaskId: number;
//   setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
//   setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
// }> = ({ setTasksToShow, tasksToShow, deleteTaskId, setShowDeleteModal, setTasks }) => {

//   const deleteTask = (index: number) => {
//     const newTaskList = tasksToShow.filter((task) => task.id !== index);
//     setTasksToShow(newTaskList);
//     setTasks(newTaskList);
//     localStorage.setItem("tasks", JSON.stringify(newTaskList));
//     setShowDeleteModal(false);
//   };
  
//   return (
//     <TaskFormWrapper>
//       <div className="add-task">
//         <div className="cross" onClick={() => setShowDeleteModal(false)}>
//           x
//         </div>
//         <div className="header">{message.deleteConfirmation}</div>
//         <div className="input-field-container">
//           <button onClick={() => deleteTask(deleteTaskId)}>Confirm</button>
//         </div>
//       </div>
//     </TaskFormWrapper>
//   );
// };

// export default DeleteModal;
export{}