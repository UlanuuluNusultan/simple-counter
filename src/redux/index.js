import { createStore } from "redux"


const counterState = {
    counter: 0,
}

const countReduser = (state = counterState, action) => {
    switch (action.type) {
        case 'plass':
            return { counter: state.counter + 1 }
        case 'minus':
            if (state.counter > 0) {
                return { counter: state.counter - 1 }
            }
        case 'kill':
            return { counter: state.counter = 0 }
    }
    return state
}

const store = createStore(countReduser)

export default store