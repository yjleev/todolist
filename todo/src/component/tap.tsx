import { useState } from "react";

type Todo = {
    id: number;
    text: string;
    level: number;
    time: number;
    done: boolean;
};

function useTab(todos: Todo[]) {
  const [tab, setTab] = useState<"all" | "incomplete" | "complete">("all");

  const filter = todos.filter((todo) => {
    if (tab === "incomplete") return !todo.done;
    if (tab === "complete") return todo.done;
    return true;
  });

  return {
    tab,
    setTab,
    filter
  }
}

export default useTab;