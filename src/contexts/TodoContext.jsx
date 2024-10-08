import { createContext } from 'react';
import { useTodo } from '../hooks/useTodo';

export const TodoContext = createContext({});

/**
 * TodoProvider component.
 *
 * @component
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
export const TodoProvider = ({ children }) => {
  const {
    addInputValue,
    searchKeyword,
    onChangeAddInputValue,
    filteredTodos,
    handleAddNewTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        addInputValue,
        searchKeyword,
        onChangeAddInputValue,
        filteredTodos,
        handleAddNewTodo,
        handleDeleteTodo,
        handleChangeSearchKeyword,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
