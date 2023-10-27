import {TodoItem} from "./TodoItem";
import styled from "styled-components";

const StyledTodoItem = styled(TodoItem)`
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.task};
`

export const TodoList = ({title, items, onToggleTodo}) => {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {
                    items.map(todo => (
                        <StyledTodoItem
                            key={todo.id}
                            {...todo}
                            onToggleTodo={onToggleTodo}/>
                    ))
                }
            </ul>
        </>
    )
}