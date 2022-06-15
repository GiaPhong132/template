function showData() {
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	console.log(xmlhttp);
	console.log(document.getElementById("data").innerHTML);

	var data = document.getElementById("data");
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('data').innerHTML = '<tr id="insert" style="text-align:center"><td><input type="number" id="new_id"></td><td><input type="text" id="new_name"></td><td><input type="number" id="new_year"></td><td><input type="button"class="btn btn-outline-success" value="Insert Row" onclick="insert_row();"></td></tr>';
	
			var myArray = JSON.parse(this.responseText)
			myArray.forEach(element => {
				var row = data.insertRow(0).outerHTML = "<tr id='row" + element.id + "' style='text-align:center' > <td id='id_val" + element.id + "'>" + element.id + "</td><td id='name_val" + element.id + "'>" + element.name + "</td><td id='year_val" + element.id + "'>" + element.year + "</td><td><input type='button' class='edit_button' id='edit_button" + element.id + "' value='Edit' onclick='edit_row(" + element.id + ");'/><input type='button' class='save_button' id='save_button" + element.id + "' value='Save' onclick='save_row(" + element.id + ");'/><input type='button' class='delete_button' id='delete_button" + element.id + "' value='Delete' onclick='delete_row(" + element.id + ");'/></td></tr>";
			});
		}
	};
	xmlhttp.open("GET", "show.php", true);
	xmlhttp.send();

}

function insert_row() {
	var id = document.getElementById("new_id").value;
	var name = document.getElementById("new_name").value;
	var year = document.getElementById("new_year").value;
	if (name.length < 5 || name.length > 40) {
		alert("Please enter string has length in range [5:40]!");
	}
	if (year < 1990 || year > 2015) {
		alert("Please enter integer number in range [1990:2015]!");
	}
	$.ajax
		({
			type: 'post',
			url: 'option.php',
			data: {
				insert_row: 'insert_row',
				id_val: id,
				name_val: name,
				year_val: year
			},
			success: function (response) {
				console.log(response);
				if (response == "success") {
					var table = document.getElementById("mytable");
					var table_len = (table.rows.length) - 1;
					var row = table.insertRow(table_len).outerHTML = "<tr id='row" + id + "' style='text-align:center' > <td id='id_val" + id + "'>" + id + "</td><td id='name_val" + id + "'>" + name + "</td><td id='year_val" + id + "'>" + year + "</td><td><input type='button' class='edit_button' id='edit_button" + id + "' value='Edit' onclick='edit_row(" + id + ");'/><input type='button' class='save_button' id='save_button" + id + "' value='Save' onclick='save_row(" + id + ");'/><input type='button' class='delete_button' id='delete_button" + id + "' value='Delete' onclick='delete_row(" + id + ");'/></td></tr>";
					document.getElementById("new_id").value = "";
					document.getElementById("new_name").value = "";
					document.getElementById("new_year").value = "";
				}
			}
		});
}

function edit_row(id) {
	var id = document.getElementById("id_val" + id).innerHTML;
	var name = document.getElementById("name_val" + id).innerHTML;
	var year = document.getElementById("year_val" + id).innerHTML;

	document.getElementById("name_val" + id).innerHTML = "<input type='text' id='name_text" + id + "' value='" + name + "'>";
	document.getElementById("year_val" + id).innerHTML = "<input type='number' id='year_text" + id + "' value='" + year + "'>";

	document.getElementById("edit_button" + id).style.display = "none";
	document.getElementById("save_button" + id).style.display = "inline-block";
	document.getElementById("delete_button" + id).style.display = "inline-block";
}

function save_row(id) {
	var name = document.getElementById("name_text" + id).value;
	var year = document.getElementById("year_text" + id).value;
	if (name.length < 5 || name.length > 40) {
		alert("Please enter string has length in range [5:40]!");
	}
	if (year < 1990 || year > 2015) {
		alert("Please enter integer number in range [1990:2015]!");
	}
	$.ajax
		({
			type: 'post',
			url: 'option.php',
			data: {
				edit_row: 'edit_row',
				id_val: id,
				name_val: name,
				year_val: year
			},
			success: function (response) {
				console.log(response);
				if (response == "success") {
					document.getElementById("name_val" + id).innerHTML = name;
					document.getElementById("year_val" + id).innerHTML = year;
					document.getElementById("edit_button" + id).style.display = "inline-block";
					document.getElementById("save_button" + id).style.display = "inline-block";
					document.getElementById("delete_button" + id).style.display = "inline-block";
				}
			}
		});
}

function delete_row(id) {
	console.log(id);
	if (confirm("Ban co chac chan muon xoa khong?")) {
		$.ajax
			({
				type: 'post',
				url: 'option.php',
				data: {
					delete_row: 'delete_row',
					id: id,
				},
				success: function (response) {
					// if (response == "success") {
					var row = document.getElementById("row" + id);
					row.parentNode.removeChild(row);
					// }
				}
			});
	}
}