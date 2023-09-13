import '../top-card/top-card.css'

export default function TopCard({ openModal, summ, counter }) {
	return (
		<div className="top-cart ">
			<div className="top-cart-info container">
				<div className=" top-cart-info-container">
					<span className="top-cart-info__item">
						Товаров в корзине - <span className="red-info" id="goods">{counter||'XXX'}</span>,
						на сумму <span className="red-info" id="price">{summ||'XXX'}</span> грн</span>
					<button className="btn-check"
						onClick={() => openModal(true)}
					>Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}