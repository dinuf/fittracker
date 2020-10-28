
			function graphFunctionality(value){

				var date=new Date();
				var day =date.getDay()-1;
				
		
	var kg = document.getElementsByClassName("kg-value"),
		mondayGraph = document.getElementById("monday-graph"),
		tuesdayGraph = document.getElementById("tuesday-graph"),
		wednesdayGraph = document.getElementById("wednesday-graph"),
		thursdayGraph = document.getElementById("thursday-graph"),
		fridayGraph = document.getElementById("friday-graph"),
		saturdayGraph = document.getElementById("saturday-graph"),
		sundayGraph = document.getElementById("sunday-graph"),
		array = [129.33, 129.33, 123, 144, 120, 121, 122],
		days = [mondayGraph, tuesdayGraph, wednesdayGraph, thursdayGraph, fridayGraph, saturdayGraph, sundayGraph];
		array[day]=value;

	function setHeight(array) {
		var arrayPixels = getPixels(array);
		for (var i = 0; i <= days.length - 1; i++) {
			days[i].style.height = arrayPixels[i] + "px";
		}
	}

	function maxFrom(array) {
		var max = array[0];
		for (var j = 0; j <= array.length; j++) {
			if (array[j] >= max) {
				var max = array[j];
			}
		}
		return max;
	}
	function minFrom(array) {
		var min = array[0];
		for (var j = 0; j <= array.length; j++) {
			if (array[j] <= min) {
				var min = array[j];
			}
		}
		return min;
	}

	function getkgValue(array) {
		for (var i = 0; i <= array.length - 1; i++) {
			kg[i].innerHTML = array[i] + "kg";
		}

	}

	function getPixels(array) {
		var maxPixels = 350,
			minPixels = 150,
			maxValue = maxFrom(array),
			minValue = minFrom(array),
			array2 = [];

		var pixelValue = (maxPixels - minPixels) / (maxValue - minValue);

		for (var i = 0; i < array.length; i++) {
			array2[i] = minPixels + ((array[i] - minValue) * pixelValue);
		}

		return array2;
	}

	setHeight(array);
	getkgValue(array);

	

};

