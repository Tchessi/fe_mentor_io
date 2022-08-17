const ratingForm = document.querySelector('.rating');
const ratingItems = [...document.querySelectorAll('.rating__list--item')];
const submitBtn = document.querySelector('.rating > button');
const thankYouComponent = document.querySelector('.thank-you');
const selectedRate = document.querySelector('.thank-you__confirm > p > span');

const selectRating = (e) => {
	ratingItems.forEach((item) => item.classList.remove('selected'));
	e.target.classList.add('selected');
	const rate = e.target.textContent;
	selectedRate.textContent = rate;
};

ratingItems.forEach((item) => item.addEventListener('click', selectRating));

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (selectedRate.textContent === '') return;

	ratingForm.classList.add('faded');
	setTimeout(() => {
		ratingForm.classList.add('hide');
		ratingForm.classList.remove('faded');
		thankYouComponent.classList.remove('hide');
	}, 1000);
});
