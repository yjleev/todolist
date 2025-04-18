import { useState, useEffect } from "react";

type Todo = {
    id: number;
    text: string;
    level: number;
    time: number;
    done: boolean;
};

function useEdit(todos: Todo[]) {
    const [menu, setMenu] = useState<boolean>(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [selectTodo, setSelectTodo] = useState<number[]>([]);
    const [editMode, setEditMode] = useState<boolean>(false);
    

    const onMenu = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        setMenu(true);
        setPosition({ x: e.clientX, y: e.clientY });
    }

    const toggleSelect= (id: number) => {
        setSelectTodo((prev) =>
          prev.includes(id) ? prev.filter((todoId) => todoId !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        setSelectTodo([]);
      }, [editMode])

    const toggleSelectAll = () => {
      setSelectTodo((prev) =>
        prev.length === todos.length ? [] : todos.map((todo) => todo.id)
      );
    };

    const onEdit = () => {
        setEditMode(true);
    };

    const done = () => {
        todos.forEach((todo) => {
            if (selectTodo.includes(todo.id)) {
              todo.done = true;
            }
        });
    };

    useEffect(() => {
        const close = () => setMenu(false);
        document.addEventListener("click", close);
    }, []);

    return {
        menu,
        setMenu,
        position,
        setPosition,
        onMenu,
        editMode,
        setEditMode,
        selectTodo,
        setSelectTodo,
        onEdit,
        toggleSelect,
        toggleSelectAll,
        done,
    }
}

export default useEdit