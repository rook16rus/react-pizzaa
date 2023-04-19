import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";


function Home({items}) {
    const elements = items && items.map((item) => {
        return (
            <PizzaBlock key={item.id} {...item}/>
        )
    })

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={(name) => console.log(name)}
                    items={[
                        "Мясные",
                        "Вегетарианская",
                        "Гриль",
                        "Острые",
                        "Закрытые",
                    ]}
                />
                <SortPopup
                    items={[
                        {name: "популярности", type: "popular"},
                        {name: "цене", type: "price"},
                        {name: "алфавит", type: 'alphabet'}
                    ]}
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