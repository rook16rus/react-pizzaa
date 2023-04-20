const initialState = {
    sortBy: 'popular',
    category: null
};

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }

    return state
}

export default filters