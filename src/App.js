import "./App.css";
import Header from "./Components/Header";
import Task from "./Components/Tasks";
import NotCompletedTasks from "./Components/NotCompletedTasks";

const completedTask = [
  {
    id: 1,
    jobContent: "Khăn lau tay",
  },
  {
    id: 2,
    jobContent: "Kệ nhà tắm",
  },
  {
    id: 3,
    jobContent: "Đồ dùng điện",
  },
  {
    id: 4,
    jobContent: "Khoai lang 2+ Khoai tây 1",
  },
  {
    id: 5,
    jobContent: "Hành tây 1 củ",
  },
];
const notCompletedTask = [
  {
    id: 6,
    jobContent: "Điện thoại",
  },
  {
    id: 7,
    jobContent: "Bàn là",
  },
];
function App() {
  let taskItems = [];
  let notCompletedTaskItems = [];
  completedTask.map((task) => {
    return taskItems.push(
      <Task key={task.id} id={task.id} jobContent={task.jobContent} />
    );
  });
  notCompletedTask.map((task) => {
    return notCompletedTaskItems.push(
      <NotCompletedTasks
        key={task.id}
        id={task.id}
        jobContent={task.jobContent}
      />
    );
  });

  return (
    <div className="main">
      <div className="container">
        <Header />
        <section className="tasks">{taskItems}</section>
        <section className="completedTasks">
          <div className="headerComplete">
            <div>Completed</div>
            <div className="quantityCompletedTasks">2</div>
          </div>
          {notCompletedTaskItems}
        </section>
      </div>
    </div>
  );
}

export default App;
