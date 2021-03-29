function select_option(select, option) {
	let options = select.getElementsByClassName("option");
	let container = select.parentElement.parentElement;
	let value = option.innerText;

	for (let i = 0; i < options.length; i++) {
		if (options[i] === option) {
			options[i].classList.add("active");
		} else {
			options[i].classList.remove("active");
		}
	}

	for (let i = 0; i < container.classList.length; i++) {
		let clas = container.classList.item(i);

		if (clas.startsWith("with-")) {
			container.classList.remove(clas);
		}
	}

	container.classList.add(`with-${value}`);
}

function listen_for_unit_change() {
	let unit_selects = document.getElementsByClassName("unit-selector");

	for (let i = 0; i < unit_selects.length; i++) {
		let unit_select = unit_selects[i];
		let unit_options = unit_select.getElementsByClassName("option");

		for (let j = 0; j < unit_options.length; j++) {
			let unit_option = unit_options[j];

			unit_option.addEventListener("click", function() {
				select_option(unit_select, unit_option);
			});
		}
	}
}

listen_for_unit_change();
