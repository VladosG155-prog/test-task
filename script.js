document.addEventListener('DOMContentLoaded', () => {
	const pointers = document.querySelectorAll('.point');

	const wrapper = document.querySelector('.wrapper');

	wrapper.addEventListener('click', (e) => {
		const btn = e.target.closest('button');
		if (btn) {
			btn.classList.toggle('active');
		} else {
			pointers.forEach((point) => {
				point.classList.remove('active');
			});
		}
	});
});
