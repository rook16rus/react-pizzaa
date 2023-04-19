import {useState} from "react";

export default function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    const elements = items && items.map((item, i) => {
        return <li key={i}
                   className={activeItem === i ? 'active' : ''}
                   onClick={() => onSelectItem(i)}
        >
            {item}
        </li>
    })

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {elements}
            </ul>
        </div>
    )
}