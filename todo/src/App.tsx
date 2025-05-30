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
import { Menu, Span } from "./style/menu";
import { EditBox, AllButton, CancelButton } from "./style/edit";


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
    onMenu,
    editMode,
    setEditMode,
    selectTodo,
    setSelectTodo,
    toggleSelect,
    toggleSelectAll,
    onEdit,
    done
  } = useEdit(filter);

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
            <SortButton $active={sort==="latest" ? true : false} onClick={() => setSort("latest")}>최신순</SortButton>
            <SortButton $active={sort==="oldest" ? true : false} onClick={() => setSort("oldest")}>오래된순</SortButton>
            <SortButton $active={sort==="high" ? true : false} onClick={() => setSort("high")}>높은순</SortButton>
            <SortButton $active={sort==="low" ? true : false} onClick={() => setSort("low")}>낮은순</SortButton>
            <Button onClick={toggle}>테마</Button>
          </SortBox>
          <SortBox>
            <SortButton $active={tab==="all" ? true : false} onClick={() => setTab("all")}>전체</SortButton>
            <SortButton $active={tab==="incomplete" ? true : false} onClick={() => setTab("incomplete")}>미완료</SortButton>
            <SortButton $active={tab==="complete" ? true : false} onClick={() => setTab("complete")}>완료</SortButton>
            {editMode ? (
            <EditBox>
              <AllButton onClick={() => toggleSelectAll()}>전체선택</AllButton>
              <CancelButton onClick={() => setEditMode(false)}>취소</CancelButton>
            </EditBox>
            ) : (
            <Button onClick={() => onEdit()}>편집</Button>
            )}
          </SortBox>
          <ListBox>
          {filter.map((todo) => (
            <Todo $selected={editMode && selectTodo?.some(($selected) => $selected === todo.id)}
              key={todo.id} onContextMenu={(e) => onMenu(e, todo.id)} onClick={() => toggleSelect(todo.id)}>
              {todo.text}  |  중요도: {todo.level}  |  시간: {(todo.time).toLocaleString()}
            </Todo>
          ))}
          {menu && (
            <Menu position={position}>
              <Span onClick={(e) => done}>완료</Span>
              <Span>수정</Span>
              <Span>삭제</Span>
            </Menu>
           )}
          </ListBox>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App