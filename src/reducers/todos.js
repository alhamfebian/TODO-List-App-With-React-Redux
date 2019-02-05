const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
          (todo.id === action.id)
              ? {...todo, completed: !todo.completed}
              : todo
      )
    case 'DELETE_TODO':
      return state.filter((data, i) => i !== action.id);
    case 'DUPLICATE_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'UPDATE_TODO':
      return state.map((todo)=>{
        if(todo.id === action.id) {
          return {
            ...todo,
            text:action.data.newTodo,
            completed: false
          }
        } else return todo;
      })
    default:
      return state
  }
}

export default todos
