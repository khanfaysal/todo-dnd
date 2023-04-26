project Name : todo-dnd

Description: The React drag and drop todo project is a simple application that allows users to manage tasks by dragging and dropping them between different sections. The sections represent the different statuses of the tasks, such as "To Do", "In Progress", and "Closed". 

The project uses React, along with two libraries: `react-dnd` and `react-hot-toast`. `react-dnd` is a drag and drop library for React, and `react-hot-toast` is a library for displaying toast messages. 

The `ListTasks` component is the main component that renders the different sections, and it also manages the state of the tasks. The state is divided into three arrays: `todos`, `inprogress`, and `closed`, each containing the tasks with the corresponding status. 

The `Section` component is responsible for rendering a single section, and it also handles the drop event when a task is dropped into the section. The component uses the `useDrop` hook from `react-dnd` to handle the drop event, and it updates the status of the task and saves it to local storage. 

The `Task` component is responsible for rendering a single task, and it also handles the drag event when the task is dragged. The component uses the `useDrag` hook from `react-dnd` to handle the drag event, and it also allows the user to remove the task. 

Overall, the React drag and drop todo project provides a simple and intuitive way for users to manage their tasks using drag and drop functionality.

Library : 1. React Hot Toast : https://react-hot-toast.com/
          2. React dnd: https://react-dnd.github.io/react-dnd/about
          3. React uuid: https://www.npmjs.com/package/uuid  

live link : https://main--fascinating-daifuku-1fe9ba.netlify.app/

