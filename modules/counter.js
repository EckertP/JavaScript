/* 

	@INFO: Counts down from the Date NOW to the Input Date 
	@STATUS: Mostly Used for me to a Birthday Function!


*/


function counter() {
	let interval = setInterval(() => {
		var nowtime = new Date().getTime()
		var bday = new Date(customDate)
		var duration = Math.floor(bday - nowtime)

		document.getElementById('timer').innerHTML = content

		if (duration <= -1) {
			document.getElementById('timer').innerHTML = `Counter Finished ${customName}`
			ballons()
			clearInterval(interval)
		}
	}, 1000);
}