export const initState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }, {
            item: 'Learn More',
            completed: false,
            id: 3892987555
        }
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [
                    ...state.todos, {
                        item: action.item,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
        case "TOGGLE_TODO":
            return {
                todos: state.todos.map((t, index) => index === action.index
                        ? {...t,completed: !t.completed}
                        : t)
            };
        case "NUKE_TODO":
            return {
                todos: state.todos.filter(t => !t.completed)
            };
        default:
            return state;
    };
};