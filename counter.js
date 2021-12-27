function counter() {
	let interval = setInterval(() => {
		var nowtime = new Date().getTime()
		var bday = new Date(customDate)

		var duration = Math.floor(bday - nowtime)

		let content;
		if (theme == "1") {
			content = `${msToTime(Math.floor(duration), true)}`
		} else {
			content = `${msToTime(Math.floor(duration), false)}`
		}

		document.getElementById('timer').innerHTML = content

		if (duration <= -1) {
			document.getElementById('timer').innerHTML = `Happy Birthday ${customName}`
			ballons()
			clearInterval(interval)
		}
	}, 1000);
}