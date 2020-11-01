
function _random(max: number) {
    return Math.round(Math.random() * 1000) % max;
}

let id = 0;

export const resetId = () => {
    id = 0;
}

const adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
const colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
const nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];

export type Todo = {
    id: number,
    label: string,
    isSelected: boolean,
}

export type State = {
    todos: Array<Todo>;
}

export const getInitialState = (): State => {
    return {
        todos: [],
    };
}

const getTodo = (label: string): Todo => {
    return {
        label,
        id: ++id,
        isSelected: false,
    };
}

export const generateTodos = (count: number = 1000): Array<Todo> => {
    const todos = [];
    for (let i = 0; i < count; i++) {
        todos.push(getTodo(adjectives[_random(adjectives.length)] + " " + colours[_random(colours.length)] + " " + nouns[_random(nouns.length)]));
    }
    return todos;
}

export const setTodos = (state: State, n: number): State => {
    state.todos = generateTodos(n);
    return state;
}

export const addTodos = (state: State, n: number): State => {
    state.todos = state.todos.concat(generateTodos(n));
    return state;
} 

export const clear = (state: State): State => {
    state.todos = [];
    return state;
}

export const setSelected = (state: State, id: number): State => {
    state.todos = state.todos.map((todo: Todo) => {
        todo.isSelected = todo.id === id;
        return todo;
    })
    return state;
}

export const deleteTodo = (state: State, id: number): State => {
    state.todos = state.todos.filter((todo: Todo) => todo.id !== id);
    return state;
}

export const updateEveryTenth = (state: State): State => {
    for(let i=0; i < state.todos.length; i+=10) {
        state.todos[i].label = state.todos[i].label + ' !!!';
    }
    return state;
}

export const swapRows = (state: State): State => {
    if(state.todos.length > 998) {
        const a = state.todos[1];
        state.todos[1] = state.todos[998];
        state.todos[998] = a;
    }

    return state;
}