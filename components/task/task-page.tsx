import { Button } from "../ui/button";
import ContainerTask from "./task-container";

export default function Task() {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-4xl">Project 1</p>
            <p>Complete overhaul of the company website with modern design</p>
          </div>
          <Button>+ Add Task</Button>
        </div>
        <div>
          <ContainerTask />
        </div>
      </div>
    </div>
  );
}
