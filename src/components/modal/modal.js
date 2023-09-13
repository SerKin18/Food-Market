import { Component } from 'react'
import './modal.css'
import OpenOrder from '../orderList/orderList'

export default class ModalIcon extends Component {
	state = {
		name: '',
		mail: '',
		val: false,
		inputClass: 'input-field',
		modal: "modal"
	}
	changeInputModal = (e) => {
		const clientName = e.target.value
		if (clientName !== '') {
			this.setState((name) => ({
				name: clientName
			}))
		}

	}
	changeInputModalEmail = (e) => {
		const clientMail = e.target.value
		if (clientMail !== '') {
			this.setState((mail) => ({
				mail: clientMail
			}))
		}
	}
	validation = () => {
		if (this.state.name === '' || this.state.mail === '') {
			this.setState({
				val: false,
				inputClass: 'input-field error'
			})


		}
		else {
			this.setState({
				val: true,
				inputClass: 'input-field'
			})
		}
	}
	closeModal = () => {
		this.validation()
		if (this.state.val) {

			const value = false
			this.props.openModal(value)
		}

	}

	escapeModal = () => {
		const value = false
		this.props.openModal(value)
	}

	render() {


		if (!this.props.isOpened) {
			return null
		}
		// return (
		// 	<div>
		// 		{JSON.stringify(this.props.orderList)}
		// 	</div>)
		return (
			<div className='modal-window' onClick={this.escapeModal}>
				{this.props.openModal}
				<div className="modal">
					<div className='escape' onClick={this.escapeModal}>
						<span className='escape_modal'></span>
						<span className='escape_modal'></span>
					</div>
					<h2>Ваш заказ</h2>
					<div className='order-box'>
						<OpenOrder orderList={this.props.orderList} />
					</div>
					<div className="form_order">
						<form action="#" className="form" >
							<input type="text" className={this.state.inputClass} placeholder="Имя" onChange={this.changeInputModal}></input>
							<input type="email" className={this.state.inputClass} placeholder="e-mail" onChange={this.changeInputModalEmail}></input>
							<button type="submit" className="send-button" onClick={this.closeModal}>Отправить</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
