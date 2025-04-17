import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  level: number;
  time: number;
  done: boolean;
};

function useSort(todos: Todo[]) {
  const [sort, setSort] = useState<"latest" | "oldest" | "high" | "low">("latest");

  const sortTodo = [...todos].sort((a, b) => {
    if (sort === "latest") return b.time - a.time;
    if (sort === "oldest") return a.time - b.time;
    if (sort === "high") return b.level - a.level;
    if (sort === "low") return a.level - b.level;
    return 0;
  });

  return {
    sort,
    setSort,
    sortTodo
  }
}

export default useSort;