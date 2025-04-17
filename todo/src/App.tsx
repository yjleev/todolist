import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './style/global';
import Container from './style/container';
import Title from './style/title';
import useTheme from './component/usetheme';
import { InputBox, Task, Level } from './style/input';
import { SortBox, SortButton } from "./style/sort";
import { Button } from "./style/button";
import { ListBox } from "./style/list";
import { Todo } from "./style/todo";
import useCreate from './component/create';
import useSort from "./component/sort";
import useTab from "./component/tap";
import useEdit from "./component/edit";
import { Menu } from "./style/menu";


function App() {
  const { theme, toggle } = useTheme();

  const {
    input,
    setInput,
    level,
    setLevel,
    inputRef,
    todos,
    setTodos,
    addTodo
  } = useCreate();

  const {
    sort,
    setSort,
    sortTodo
  } = useSort(todos);

  const {
    tab,
    setTab,
    filter
  } = useTab(sortTodo);

  const {
    menu,
    setMenu,
    position,
    setPosition,
    onMenu
  } = useEdit();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Title>To-do-List</Title>
          <InputBox>
            <Task
            type="text"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={addTodo}
            />
            <Level type="number" min={1} max={5} value={level} 
            onKeyDown={(e) => e.preventDefault()}
            onChange={(e) => setLevel(parseInt(e.target.value))}/>
          </InputBox>
          <SortBox>
            <SortButton active={sort==="latest" ? true : false} onClick={() => setSort("latest")}>최신순</SortButton>
            <SortButton active={sort==="oldest" ? true : false} onClick={() => setSort("oldest")}>오래된순</SortButton>
            <SortButton active={sort==="high" ? true : false} onClick={() => setSort("high")}>높은순</SortButton>
            <SortButton active={sort==="low" ? true : false} onClick={() => setSort("low")}>낮은순</SortButton>
            <Button onClick={toggle}>테마</Button>
          </SortBox>
          <SortBox>
            <SortButton active={tab==="all" ? true : false} onClick={() => setTab("all")}>전체</SortButton>
            <SortButton active={tab==="incomplete" ? true : false} onClick={() => setTab("incomplete")}>미완료</SortButton>
            <SortButton active={tab==="complete" ? true : false} onClick={() => setTab("complete")}>완료</SortButton>
            <Button>편집</Button>
          </SortBox>
          <ListBox>
          {filter.map((todo) => (
            <Todo key={todo.id} onContextMenu={(e) => onMenu(e, todo.id)}>
              {todo.text}  |  중요도: {todo.level}  |  시간: {(todo.time).toLocaleString()}
            </Todo>
          ))}
          {menu && (
            <Menu position={position}>
              <span>완료</span>
              <span>수정</span>
              <span>삭제</span>
            </Menu>
           )}
          </ListBox>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App