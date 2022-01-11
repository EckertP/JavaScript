/* 

	@INFO: 

*/

function setCustomName() {
	var url = new URL(window.location)
	var name = url.searchParams.get("name")
	if (name) {
		customName = name
	} else {
		customName = "Dummy"
	}
}

function setCustomDate() {
	var url = new URL(window.location)
	var day = url.searchParams.get("day")
	var month = url.searchParams.get("month")
	var year = url.searchParams.get("y")

	if (day && month && year) {
		customDate = `${month}.${day}.${year}`
	} else {
		var yearFirst1 = new Date().getFullYear()
		customDate = `1.1.${Math.floor(yearFirst1 + 1)}`
	}
}