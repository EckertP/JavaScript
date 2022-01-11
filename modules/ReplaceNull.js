/* 

	@INFO: Replace the Number '9' in a Function to '09' string!
	> Mostly Used by Timers or Clocks

*/

function ReplaceNull(zahl) {
	zahl = (zahl < 10 ? '0' : '') + zahl;
	return zahl;
}