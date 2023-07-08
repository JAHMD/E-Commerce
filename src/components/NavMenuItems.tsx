import { NavLink } from "react-router-dom";

type ItemType = {
	name: string;
	path: string;
};

type PropsType = {
	items: ItemType[];
};

const NavMenuItems = ({ items }: PropsType) => {
	return (
		<>
			{items.map((item) => (
				<li key={item.name}>
					<NavLink to={item.path} className="nav_link">
						{item.name}
					</NavLink>
				</li>
			))}
		</>
	);
};

export default NavMenuItems;
