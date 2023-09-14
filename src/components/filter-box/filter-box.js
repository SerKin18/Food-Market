import React from 'react'
import { Component } from 'react'
import './filter-box.css'
export default class FilterBox extends Component {


	getFilterValue = (e) => {
		console.log(e.target.value);
		this.props.onUpfilter(e.target.value)
	}
	getPriceValue = (e) => {
		console.log(e.target.value);

		this.props.onUpPricefilter(Number(e.target.value))
	}
	itemSearch = (e) => {
		console.log(e.target.value);
		
		this.props.onUpSearchFilter(e.target.value)
	}
	render() {
		return (
			<div className="filter-box container">
				<div className="select-box">
					<label className="filter-label">Категория</label>
					<select onChange={this.getFilterValue} className="select-control" id="select-category" >
						<option value="all">Все</option>
						<option value="breakfast">Завтраки</option>
						<option value="first-course">Первые блюда</option>
						<option value="garnish">Гарниры</option>
					</select>
				</div>
				<div className="price-select-box">

					<label className="filter-label">Цена</label>
					<select onChange={this.getPriceValue} className="select-control" id="select-price">
						<option value="0">Все</option>
						<option value="30">До 30 грн</option>
						<option value="50">До 50 грн</option>
						<option value="100">До 100 грн</option>
						<option value="150">До 150 грн</option>
					</select>
					<label className="filter-label">Поиск</label>
					<input type="text" className='filter-input' placeholder="Поиск товара" onChange={this.itemSearch}></input>
				</div>
			</div>/*/filter-box*/
		)
	}
}