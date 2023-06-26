const Footer = () => {
	return (
		<footer className=" bg-primary-footer">
			<div className="container grid gap-6 py-8 sm:grid-cols-repeat">
				<div className="mx-auto max-w-xs text-center sm:mx-0 sm:text-start">
					<h3 className="font-lobster text-4xl font-bold text-primary-headdings">
						Store
					</h3>
					<p className="mt-4 text-primary-text">
						Specializes in providing high-quality, stylish prducts for your
						wardrobe.
					</p>
				</div>
				<div className="footer_list">
					<p>shop</p>
					<ul className="">
						<li>All Collections</li>
						<li>Winter Edition</li>
						<li>Discount</li>
					</ul>
				</div>

				<div className="footer_list">
					<p>company</p>
					<ul className="">
						<li>About Us</li>
						<li>Contact</li>
						<li>Affiliates</li>
					</ul>
				</div>

				<div className="footer_list">
					<p>support</p>
					<ul className="">
						<li>FAQs</li>
						<li>Cookie Plicy</li>
						<li>Trems of Use</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
