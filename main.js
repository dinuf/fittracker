
window.onload = function () {

	 graphFunctionality(80.6);
	// Hover for calories and weight
	
	

	var addText = Array.prototype.slice.call(document.getElementsByClassName('add-hover'));
	var widgetContent = Array.prototype.slice.call(document.getElementsByClassName('hide-onhover'));
	var hoverElements = Array.prototype.slice.call(document.getElementsByClassName('overlay'));

	
	for (i = 0; i <= 1; i++) {
		hoverElements[i].onmouseover = function () {

			this.style.opacity = '0.5';
			widgetContent[hoverElements.indexOf(this)].style.opacity = '0';
			widgetContent[hoverElements.indexOf(this)].style.transition = '0.5s';
			addText[hoverElements.indexOf(this)].style.opacity = '1';
			addText[hoverElements.indexOf(this)].style.transition = '2s';
		}

	

	}

	for (i = 0; i <= 1; i++) {
		hoverElements[i].onmouseout = function () {

			this.style.opacity = '0';
			widgetContent[hoverElements.indexOf(this)].style.opacity = '1';
			widgetContent[hoverElements.indexOf(this)].style.transition = '2s';
			addText[hoverElements.indexOf(this)].style.opacity = '0';
			addText[hoverElements.indexOf(this)].style.transition = '0.5s';
		}
	}

	// Hover for Macros, lifts 

	for (i = 2; i <= hoverElements.length - 1; i++) {
		hoverElements[i].onmouseover = function () {

			this.style.opacity = '0.5';
			addText[hoverElements.indexOf(this)].style.opacity = '1';
			addText[hoverElements.indexOf(this)].style.transition = '2s';
		}
	}

	for (i = 2; i <= hoverElements.length - 1; i++) {
		hoverElements[i].onmouseout = function () {

			this.style.opacity = '0';
			addText[hoverElements.indexOf(this)].style.opacity = '0';
			addText[hoverElements.indexOf(this)].style.transition = '0.5s';
		}
	}
	

	// Popup onclick + show mask

	var mask = document.getElementById('mask-popup');
	var popup = Array.prototype.slice.call(document.getElementsByClassName('popup-widget'));
	var cancelBtn = Array.prototype.slice.call(document.getElementsByClassName('cancel'));



	for (i = 0; i <= popup.length - 1; i++) {

		hoverElements[i].onclick = function () {
			mask.style.display = 'block';
			popup[hoverElements.indexOf(this)].style.display = 'block';
		}
	}


	mask.onclick = function () {

		for (i = 0; i <= popup.length - 1; i++) {
			popup[i].style.display = 'none';
			mask.style.display = 'none';
		}
	}
	


	//Cancel button

	for (i = 0; i <= cancelBtn.length - 1; i++) {

		cancelBtn[i].onclick = function () {
			popup[cancelBtn.indexOf(this)].style.display = 'none';
			mask.style.display = 'none';
		}
	}
	

	//  on submit modify values

	var CaloriesandWeightValues = Array.prototype.slice.call(document.getElementsByClassName('value'));

	function submitCalories(){

		var caloriesInput = document.getElementById('calories-input').value;
		CaloriesandWeightValues[0].innerHTML = parseInt(caloriesInput);
		mask.style.display = 'none';
		popup[0].style.display = 'none';

	}

	function submitWeight(){

		var weightInput = document.getElementById('weight-input').value;
		CaloriesandWeightValues[1].innerHTML=+weightInput;
		mask.style.display = 'none';
		popup[1].style.display = 'none';
		graphFunctionality(+weightInput);
	}


	function percentCalculate() {

		var macrosValue = Array.prototype.slice.call(document.getElementsByClassName('macros-value'));
		var carbsInput = document.getElementById('carbs-input').value;
		var fatsInput = document.getElementById('fats-input').value;
		var proteinsInput = document.getElementById('proteins-input').value;



		macrosValue[0].innerHTML = parseInt(carbsInput);
		macrosValue[1].innerHTML = parseInt(fatsInput);
		macrosValue[2].innerHTML = parseInt(proteinsInput);

		var total = parseInt(macrosValue[0].innerHTML) + parseInt(macrosValue[1].innerHTML) + parseInt(macrosValue[2].innerHTML);

		var carbsPercentage = document.getElementById('carbs-percentage');
		var fatsPercentage = document.getElementById('fats-percentage');
		var proteinsPercentage = document.getElementById('proteins-percentage');

		carbsPercentage.innerHTML = (parseInt(macrosValue[0].innerHTML) / total) * 100;
		carbsPercentage.innerHTML = parseFloat(carbsPercentage.innerHTML).toFixed(2) + '%';
		fatsPercentage.innerHTML = (parseInt(macrosValue[1].innerHTML) / total) * 100;
		fatsPercentage.innerHTML = parseFloat(fatsPercentage.innerHTML).toFixed(2) + '%';
		proteinsPercentage.innerHTML = (parseInt(macrosValue[2].innerHTML) / total) * 100;
		proteinsPercentage.innerHTML = parseFloat(proteinsPercentage.innerHTML).toFixed(2) + '%';
	}

	function submitMacros(){

		mask.style.display = 'none';
		popup[2].style.display = 'none';
		percentCalculate();
	}


	function submitLifts() {

		mask.style.display = 'none';
		popup[3].style.display = 'none';
		var deadliftkgInput = document.getElementById('deadlift-kg-input').value;
		var benchpresskgInput = document.getElementById('benchpress-kg-input').value;
		var squatkgInput = document.getElementById('squat-kg-input').value;
		var deadliftLift = document.getElementById('deadlift-lift');
		var benchpressLift = document.getElementById('benchpress-lift');
		var squatLift = document.getElementById('squat-lift');

		deadliftLift.innerHTML = parseInt(deadliftkgInput);
		benchpressLift.innerHTML = parseInt(benchpresskgInput);
		squatLift.innerHTML = parseInt(squatkgInput);

		var deadliftReps = document.getElementById("deadlift-reps");
		var benchpressReps = document.getElementById('benchpress-reps');
		var squatReps = document.getElementById('squat-reps');

		var deadliftrepsInput = document.getElementById('deadlift-reps-input').value;
		var benchpressrepsInput = document.getElementById('benchpress-reps-input').value;
		var squatrepsInput = document.getElementById('squat-reps-input').value;



		deadliftReps.innerHTML = parseInt(deadliftrepsInput);
		benchpressReps.innerHTML = parseInt(benchpressrepsInput);
		squatReps.innerHTML = parseInt(squatrepsInput);


	}
	var submitBtn = Array.prototype.slice.call(document.getElementsByClassName('submit'));

	submitBtn[0].onclick = submitCalories;

	submitBtn[1].onclick = submitWeight;

	submitBtn[2].onclick = submitMacros;
		
	submitBtn[3].onclick = submitLifts;







	// ENTER + ESCAPE 

	var caloriesInput = document.getElementById('calories-input');
	var weightInput = document.getElementById('weight-input');
	var macrosInput = Array.prototype.slice.call(document.getElementsByClassName('macros-input'));
	var liftsInput = Array.prototype.slice.call(document.getElementsByClassName('lifts-input'));
	var liftsReps = Array.prototype.slice.call(document.getElementsByClassName('lifts-reps'));
	var liftsInputReps = liftsInput.concat(liftsReps);
	







	caloriesInput.addEventListener("keyup", function (e) {

		if (e.keyCode === 13) {

			submitCalories();
		}

		if (e.keyCode == 27) {

			mask.style.display = 'none';
			popup[0].style.display = 'none';
		}
	})

	weightInput.addEventListener("keyup", function (e) {

		if (e.keyCode === 13) {

			submitWeight();
		}
		if (e.keyCode == 27) {

			mask.style.display = 'none';
			popup[1].style.display = 'none';
		}
	})

	for (i = 0; i <= macrosInput.length - 1; i++) {
		macrosInput[i].addEventListener("keyup", function (e) {

			if (e.keyCode === 13) {

				submitMacros();
			}

			if (e.keyCode == 27) {

				mask.style.display = 'none';
				popup[2].style.display = 'none';

			}

		})
	};



	for (i = 0; i <= liftsInputReps.length - 1; i++) {
		liftsInputReps[i].addEventListener("keyup", function (e) {

			if (e.keyCode===13) {

				submitLifts();

			}

			if (e.keyCode==27){

				mask.style.display = 'none';
				popup[3].style.display = 'none';

			}

		}
		)
	};

	// Weight validation

	weightInput.addEventListener("keyup", function () {

		weightInput.value = weightInput.value.replace(/(\.\d{2})\d+/g, '$1');
		weightInput.value = weightInput.value.replace(/(\d\d\d)\d+/, '$1');
		weightInput.value = weightInput.value.replace(/^0+/, '');

	});

	// Avoid multiple zeros input




	for (i = 0; i <= liftsInput.length - 1; i++) {

		liftsInput[i].addEventListener("keyup", function () {
			this.value = +this.value;
		})
	};

	for (i = 0; i <= liftsInput.length - 1; i++) {

		liftsReps[i].addEventListener("keyup", function () {
			this.value = +this.value;
		})
	};






	
}
