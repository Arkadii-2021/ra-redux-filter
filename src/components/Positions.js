import { useSelector } from "react-redux";
import Item from "./Item";


export default function Positions() {
	const search = useSelector(state => state.filter);
	
	return (
			<ul className="positions__item" >
				{useSelector(state => state.item).map(({id, name, price}) => {
						if (name.toLowerCase().indexOf(search) === 0 || name.toLowerCase().indexOf(search) !== -1) {
							return <Item id={id} name={name} price={price} key={id} />	
						}
					})
				}
			</ul>
	)
};