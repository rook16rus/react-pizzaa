import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useMemo} from "react";

import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaLoadingBlock from "../components/PizzaBlock/PizzaLoadingBlock";

function Home() {
    const items = useSelector((state) => state.pizzas.items);
    const isLoaded = useSelector((state) => state.pizzas.isLoaded);
    const {category, sortBy} = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    const categoryNames = useMemo(() => [
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ], []);

    const sortItems = useMemo(() => [
        {name: "популярности", type: "popular", order: "desc"},
        {name: "цене", type: "price", order: "desc"},
        {name: "алфавит", type: 'name', order: "asc"}
    ], []);

    const onSelectCategory = useCallback(index => {
            dispatch(setCategory(index))
        }, []
    )

    const onSelectSort = useCallback(obj => {
            console.log(obj)
            dispatch(setSortBy(obj))
        }, []
    )

    const elements = isLoaded
        ? items.map((item) => {
            return (
                <PizzaBlock key={item.id} {...item}/>
            )
        })
        : Array(10).fill(0).map((item, index) => <PizzaLoadingBlock key={index}/>)
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeItem={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    onClickSortType={onSelectSort}
                    activeSortType={sortBy.type}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {elements}
            </div>
        </div>
    );
}

export default Home;