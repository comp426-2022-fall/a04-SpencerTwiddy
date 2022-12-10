export function roll(sides, dice, times) {
	let res = [];
	for (let i=0; i<times; i++) {
		let tot = 0;
		for (let j=0; j<dice; j++) {
			tot = tot + Math.floor(Math.random() * sides) + 1;
		}
		res.push(tot);
	}
	let ans = {
  		'sides': sides,
		'dice': dice,
		'rolls': times,
		'results': res
	};
	console.log("inside roll runs");
	return ans;
}