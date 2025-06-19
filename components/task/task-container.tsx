import CardTask from "./task-card";

export default function ContainerTask() {
  return (
    <div className="flex justify-between mt-5 rounded">
      <div className="dark:bg-red-800">
        <p className=" font-bold text-xl">To Do</p>
        <CardTask />
      </div>
      <div className="dark:bg-yellow-900">
        <p className=" font-bold text-xl">In Progress</p>
      </div>
      <div className="dark:bg-green-900">
        <p className=" font-bold text-xl">Done</p>
      </div>
    </div>
  );
}
