// document.addEventListener('click', (event) => {
// if(event.target.classList.contains('product-box__btn')){
// 	console.log('gfdg')
// }
// })


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
/*-----------------------------------------------------------------*/




const addButton = document.querySelectorAll('.product-box__btn');
const basketField = document.getElementById('goods');
const finalPriceFeild = document.getElementById('price');
const inputClientAll = document.querySelectorAll('.qty__item');
const selectCategory = document.querySelector('#select-category');
const selectPrice = document.querySelector('#select-price');
const products = document.querySelector('.products-box')
const productItem = document.querySelectorAll('.product-box__item')
const modal = document.querySelector('.modal-window');
const modalButton = modal.querySelector('.send-button');
const clientButton = document.querySelector('.btn-check');
const container = document.querySelector('.app-container')
const inputModal = modal.querySelectorAll('.input-field');
const clientForm = modal.querySelectorAll('.form');

/*-----------modal form-----------------------------------------*/
clientButton.addEventListener('click', (event) => {
	if(basketField.innerHTML !== 'XXX')
	modal.style.display = 'block'


})
modalButton.addEventListener('click', (event) => {

	if (validation(clientForm)) {
		modal.style.display = 'none'
		alert(`Заказ принят!
Благодарим за покупку!`)
		basketField.innerHTML = 'XXX';
		finalPriceFeild.innerHTML = 'XXX'
	}
}
);

function validation(form) {
	function removeError(input) {
		if (input.classList.contains('.error')) {
			input.classList.remove('.error')
		}
	}
	function createError(input) {
		if (input.value == '' || ' ') {
			input.classList.add('error')

		}
	}
	let result = true;
	for (const input of inputModal) {
		removeError(input)
		if (input.value == '' && ' ') {
			alert(`заполните поле ${input.placeholder}`);
			createError(input)
			result = false
		}
	}
	return result
}

/*------client order----------------------------------------------------*/

addButton.forEach((item) => {
	item.addEventListener('click', (event) => {
		let parent = item.parentElement;
		let quantity = Number(parent.querySelector('.qty__item').value);
		let price = parent.firstChild.length * quantity

		let basketValue = Number(basketField.innerHTML) ? Number(basketField.innerHTML) : 0;
		console.log(basketValue);

		if (event.target == item) {
			basketValue += quantity;
			basketField.innerHTML = basketValue;
			finalPriceFeild.innerHTML = price;
		}

	})
})

/*-------filter--------------------------------------------------*/
// function filter() {
// 	selectCategory.addEventListener('change', (event) => {
// 		let categoryValue = selectCategory.value;
// 		console.log(categoryValue);
// 		switch (categoryValue) {
// 			case 'all':
// 				productItem.forEach((item) => {
// 					item.style.display = 'block'
// 				})
// 				break
// 			case 'breakfast':
// 				getItem(categoryValue)
// 				break
// 			case 'first-course':
// 				getItem(categoryValue)
// 				break
// 			case 'garnish':
// 				getItem(categoryValue)
// 				break
// 		}
// 	})
// }

// filter()

function showElement(elem) {
	elem.style.display = 'block'
}
function hideElement(elem) {
	elem.style.display = 'none'
}

document.addEventListener('change', (event)=>{
	
if(event.target.classList.contains('select-control')){
	
	productItem.forEach((item)=>{
		hideElement(item)
	})
	const categoryValue = selectCategory.value;
	let priceValue = selectPrice.value;
	
	const shownElements =[...productItem].filter((item)=>{
		if(priceValue === '0')return true;
		const price = item.querySelector('p').innerHTML
		return parseInt(price) < priceValue
	}).filter((item)=>{
		if(categoryValue === 'all')return true;
		const itemCategory =item.getAttribute('data-id')
		return itemCategory === categoryValue
	})
	shownElements.forEach(showElement)
	// productItem.forEach(hideElement)
}
})



// function filterPrice() {
// 	selectPrice.addEventListener('change', (event) => {
// 		let priceValue = selectPrice.value;

// 		console.log(priceValue);
// 		switch (priceValue) {
// 			case '30':
// 				getPrice(priceValue)
// 				break
// 			case '50':
// 				getPrice(priceValue)
// 				break
// 			case '100':
// 				getPrice(priceValue)
// 				break
// 			case '150':
// 				getPrice(priceValue)
// 				break
// 		}
// 	})
// }
// filterPrice()

function getPrice(dataPriceValue) {
	productItem.forEach((item) => {
		if (Number(item.dataset.price) <= dataPriceValue) {
			item.style.display = 'block'
		}
		else {
			item.style.display = 'none'
		}
	})

}



// function rendom (qwerty){
// 	qwerty()
// }
 

// function log(){
// console.log('12');
	
// }
// rendom(log())


/*-----------------------------------------------------------*/
// const newArr = arr.filter((num) => {
// 	if (num % 2 === 1)
// 		return num;
// })
// console.log(newArr)

// const arrSumNew = arr.reduce(function (sum, current) {
// 	if (current % 2 === 1) {
// 		sum += current
// 	}
// 	return sum;
// }, 0)

// console.log(arrSumNew)


// function sum(array) {
// 	let newArrSum = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		newArrSum += array[i]
// 	}
// 	console.log(newArrSum)
// }
// sum(newArr)

/*------------------------------------------------------*/


// const products = [
// 	{
// 		title: 'product1',
// 		price: 3,
// 		category: 'servicets'
// 	},

// 	{
// 		title: 'product2',
// 		price: 5,
// 		category: 'b2b'
// 	},

// 	{
// 		title: 'product3',
// 		price: 7,
// 		category: 'b2c'
// 	},

// 	{
// 		title: 'product4',
// 		price: 9,
// 		category: 'b2b'
// 	},

// 	{
// 		title: 'product5',
// 		price: 9,
// 		category: 'b2c'
// 	}
// ]

// function checkServiseCategory(productlist, categoryname) {
// 	return !!productlist.find((value) => {
// 		return value.category == categoryname
// 	})
// 	// let result = false;
// 	// productlist.forEach(element => {

// 	// 	if (element.category === categoryname) {
// 	// 		result = true;
// 	// 	}

// 	// });
// 	// return result

// }
// console.log(checkServiseCategory(products, 'b2c'))





// const sumArr = products.reduce((accum, currentItem) => {
//  accum += currentItem.price;
//  return accum
// },0)
// console.log(sumArr)


// const filterArr = products.filter((value) => {
// 	return value.price >= 7;
// })
// console.log(filterArr) //2

// const sortMinMax = products.sort((prev, next) => prev.price - next.price);
// console.log(sortMinMax)

// const servArrFilter = products.filter((value) => {
// 	if(value.category == 'services'){
// 		console.log(true)
// 		return value
// 	}
// })
// console.log(servArrFilter)



// function checkCategory(productlist) {
// 	let result = false;
// 	productlist.forEach(element => {

// 		if (element.category === 'services') {
// 			result = true;
// 		}

// 	});
// 	return result
// }



// function getMiddle(s) {
// 	const wordLength = s.length

// 	if (s.length % 2 == 0) {
// 		const startIndex = wordLength / 2 - 1
// 		const endIndex = wordLength / 2 + 1
// 		return s.slice(startIndex, endIndex)
// 	}
// 	const index = Math.min(wordLength / 2)
// 	return s.slice(index, index + 1)
// 	console.log
// }

// console.log(getMiddle('test'))

// function poly(string) {
// 	string = string.toLowerCase()
// 	const stringArr = [...string]
// 	const newArr = [];
// 	stringArr.forEach(elem => {
// 		newArr.unshift(elem);
// 	})
// 	const reversedString = newArr.join('')
// 	return string === reversedString

// }

// function abbrevName(name){
//   const answer = [name[0]]
//   for(let i = 0; i < name.length; i++ ){
//   if(name[i] === " "){
//     answer.push(name[i + 1])
//   }
// }
// return answer.map(value => value.toUpperCase()).join(".")
//     // code away
// }
// abbrevName('John Wick')
// console.log(abbrevName())

// function abbrevName(name){
// 	const newArray = name.split(' ');
// 	return (newArray[0][0] + ' . ' + newArray[1][0] + ' . ').toUpperCase()

// }
// abbrevName(asda sdasd)

// function sumArray(array)  {
// 	if(array && array.length > 1) {
// 		 const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
// 		 return sortedArray.reduce((acc, cur) => acc + cur, 0)
// 	}

// 	return 0
// }
// sumArray({ 6, 2, 1, 8, 10 });
// console.log(sumArray())

