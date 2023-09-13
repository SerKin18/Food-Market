import { Component } from 'react'
import Footer from '../footer/footer'
import TopCard from '../top-card/top-card'
import Header from '../header/header'
import Modal from '../modal/modal'
import FilterBox from '../filter-box/filter-box'

import ProductBox from '../product-box/product-box'
import { data } from '../../data/products'
import './App.css'

const DEFAULT_VALUE = 'XXX'
export default class App extends Component {
	state = {
		counter: DEFAULT_VALUE,
		summ: DEFAULT_VALUE,
		filt: 'all',
		priceFilt: 0,
		modal: false,
		searchItem: '',
		order: []
	}
	getValues = (array) => {
		const result = {
			resultCaunt: 0,
			resultPrice: 0
		};
		array.forEach((element) => {
			result.resultCaunt += element.caunt;
			result.resultPrice += element.price * element.caunt;
		});
		return result

	}
	// setCard = (cauntValue, sumValue) => {
	// 	this.setState((prevState) => ({
	// 		counter: prevState.counter === DEFAULT_VALUE ? Number(cauntValue) : prevState.counter + Number(cauntValue),
	// 		summ: prevState.summ === DEFAULT_VALUE ? Number(sumValue) * Number(cauntValue) : prevState.summ += (Number(sumValue) * Number(cauntValue)),

	// 	}))
	// }



	filterCategory = (items, filt) => {
		if (filt === 'all') {
			return items
		}
		return items.filter(item => item.food === filt);

	}
	filterPrice = (items, priceFilt) => {
		if (priceFilt === 0) {
			return items
		}
		return items.filter(item => item.price <= priceFilt)
	}
	serchItem = (items, searchItem) => {
		if (searchItem === '') {
			return items
		}
		return items.filter((item) => {
			return item.name.toLowerCase().indexOf(searchItem.toLowerCase()) > -1
		})
	}

	onUpfilter = (filt) => {
		this.setState(() => ({ filt }))
	}
	onUpPricefilter = (priceFilt) => {
		this.setState(({ priceFilt }))
	}
	onUpSearchFilter = (searchItem) => {
		this.setState(({ searchItem }))
	}
	openModal = (value) => {
		this.setState(() => ({
			modal: value
		}))
	}
	addToOrder = (id, value) => {
		const orderElem = data.find(elem => elem.id === id)
		orderElem.caunt = value
		this.setState((state) => {
			return { ...state, order: [...state.order, orderElem] }
		})

	}


	render() {
		const { onUpSearchFilter, serchItem, onUpPricefilter, filterCategory, filterPrice, state, openModal } = this
		const newData = filterCategory((filterPrice((serchItem(data, state.searchItem)), state.priceFilt)), state.filt)
		console.log(this.state);


		return (
			<div className="app-container pt-40">
				<Modal isOpened={this.state.modal} orderList={this.state.order} openModal={openModal} />
				<TopCard counter={this.getValues(this.state.order).resultCaunt} summ={this.getValues(this.state.order).resultPrice} openModal={openModal} />
				<Header />
				<FilterBox onUpfilter={this.onUpfilter} onUpPricefilter={onUpPricefilter} onUpSearchFilter={onUpSearchFilter} />
				<div className="wrap">
					<div className="container">
						<div className="products-box grid-box">
							<ProductBox data={newData} getValues={this.getValues} addToOrder={this.addToOrder} />
						</div>
					</div >
				</div >
				<Footer />
			</div >
		)
	}
};


// const state={
// 	order:[
// 		{id....count...}
// 	]
// }

// function addToOrder(){

// }