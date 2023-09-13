import { Component } from 'react'
import './product-box.css'

class ProduxBoxMeta extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 0,
			price:0,
			order: false,

		}
	}
	inputItemChange = (e) => {
		this.setState(() => ({
			value: e.target.value,

		}))
	}
	closeOrder = () => {
		this.setState(({ order: !this.state.order }))
	}
	buttonChange = () => {
		this.setState({ 
			price:this.props.price,
			value:this.state.value,
			order: !this.state.order

		 })
		this.props.getValues([this.state.value, this.state.price])
		this.props.addToOrder(this.props.id, Number(this.state.value))
	}
	render() {
		if (this.state.order===true) {
			return (
				<div>
					<button className="finish_order" onClick={this.closeOrder}>Ваш товар в корзине</button>
				</div>
			)
		}
		else
			return (
				<div className="product-box__meta">
					<p>{this.props.price} грн</p>
					<div className="qty" >
						<input className="qty__item" type="number" min="1" value={this.state.value} onChange={this.inputItemChange} />
					</div>
					<button className="product-box__btn" onClick={this.buttonChange} disabled={!this.state.value} >Добавить</button>
				</div>
			)
	}

}
class ProductBox extends Component {


	render() {
		let style = { opacity: 0.2 }

		const { data } = this.props;
		return data.map((item) => {
			return (
				<div className="product-box__item" data-id={item.food} data-price="25" key={item.id}>
					<div className='product-box__top'><h3 className="product-box__title">{item.name}</h3>
						<div className='busket'>
							<img className="img-busket" alt='' src='i\img-dusket.svg' style={style} />
						</div>
					</div>
					<div className="product-box__img">
						<img className="img-fluid" src={item.img} alt='' />
					</div>
					<ProduxBoxMeta price={item.price} id={item.id} getValues={this.props.getValues} addToOrder={this.props.addToOrder}busket={this.props.busket} />

				</div>
			)
		})
	}
}

export default ProductBox