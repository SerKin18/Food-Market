
import './orderList.css'

export default function OpenOrder(props) {
	console.log(props.orderList);

	return props.orderList.map(item => {
		const orderItemPrice =(item.caunt*item.price )
		return (
			<div className="order-box__item" data-id={item.food} data-price="25" key={item.id}>
				<div className='order-box__top'><h3 className="order-box__title">{item.name}</h3>
				</div>
				<div className="order-box__img">
					<img className="img-fluid" src={item.img} alt='' />
				</div>
				<div className='order-box__price'><h4 className="order-box__title">Кол-во: {item.caunt}шт</h4>

					<h4 className="order-box__title">Сумма: {orderItemPrice}грн</h4>
				</div>
			</div>
		)
	})

}