const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART":
            const currentPizzaItems = state.items[action.payload.id]
                ? [
                    ...state.items[action.payload.id].items,
                    action.payload
                ]
                : [action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: currentPizzaItems.reduce((sum, pizza) => pizza.price + sum, 0)
                }
            }

            const allPizzas = [].concat.apply([], Object.values(newItems).map(obj => obj.items));
            const totalPrice = allPizzas.reduce((sum, pizza) => pizza.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        case 'PLUS_CART_ITEM':
            const newwItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newwItems,
                        totalPrice: newwItems.reduce((sum, pizza) => pizza.price + sum, 0)
                    }
                },

            }
        case 'MINUS_CART_ITEM':
            const oldItems = state.items[action.payload].items;
            const newwItemss = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newwItemss,
                        totalPrice: newwItemss.reduce((sum, pizza) => pizza.price + sum, 0)
                    }
                },

            }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        case 'REMOVE_CART_ITEM':
            const newItemss = {
                ...state.items
            }

            const currentTotalPrice = newItemss[action.payload].totalPrice;
            const currentTotalCount = newItemss[action.payload].items.length;

            delete newItemss[action.payload]

            return {
                ...state,
                items: newItemss,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        default:
            return state
    }
}

export default cart