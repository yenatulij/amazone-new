import React from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import Lower from "./LowerHeader";

function Header() {
	return (
		<>
			<section className={classes.header__container}>
				{/* Logo delivery  */}
				<div className={classes.logo__container}>
					{/* logo */}
					<a href="/">
						<img
							src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt="amazon logo"
						/>
					</a>
					{/* delivery */}

					<div className={classes.delivery}>
						<span>
							{" "}
							<SlLocationPin />{" "}
						</span>
						<p> Delivered to</p>
						<span>Eritrea</span>
					</div>
				</div>
				{/* Search bar starts */}
				<div className={classes.search}>
					{/* Search */}
					<select name="" id="">
						<option value="">All</option>
					</select>
					<input type="text" name="" id="" placeholder="Search product" />
					{/* icon  */}
					<FaSearch size={25} />
				</div>
				{/* Other section  */}
				<div className={classes.order__container}>
					<a href="" className={classes.language}>
						{" "}
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
							alt=""
						/>
						<select name="" id="">
							<option value=""> EN </option>
						</select>
					</a>

					{/* three components  */}

					<a href="">
						<p>Sign In</p>
						<span>Account & Lists</span>
					</a>
					{/* orders */}
					<a href="">
						<p>returns</p>
						<span>& Orders</span>
					</a>
					{/* cart */}
					<a to="{/* /cart */}" className={classes.cart}>
						{/* icon */}
						<BiCartAdd size={35} />
						<span>0</span>
					</a>
				</div>
			</section>
			<section>
				<Lower />
			</section>
		</>
	);
}
// time 5:3o today 14th feb 2024

export default Header;
