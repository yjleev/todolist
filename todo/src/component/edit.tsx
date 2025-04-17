import { useState } from "react";

function useEdit() {
    const [menu, setMenu] = useState<boolean>(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const onMenu = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        setMenu(true);
        setPosition({ x: e.clientX, y: e.clientY });
    }

    return {
        menu,
        setMenu,
        position,
        setPosition,
        onMenu
    }
}

export default useEdit