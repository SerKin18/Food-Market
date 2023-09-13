import './section.css'
import ProductBox from '../product-box/product-box.js'

export default function Section() {

	return (
		<div className="container">
			<div className="products-box grid-box">
				<ProductBox />
			</div>
		</div >
	)
};
