const alldrinks = document.querySelectorAll('.drink');

alldrinks.forEach((drink, index) => {
	setTimeout(() => {
		drink.style.display = 'block';
	}, (index + 2)* 1000);

	drink.addEventListener('click', (e) => {
		let activeDrink = e.target;

		alldrinks.forEach((d) => {
			if (d !== activeDrink) {
				d.classList.remove('active');
				d.style.display = 'none';
			} else {
				d.classList.add('active');
			}
		});
	});
});
