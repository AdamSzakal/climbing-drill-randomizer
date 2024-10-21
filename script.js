	const drills = [
	{
		"title": "Hips to wall",
		"place": "On flash grade problem.",
		"description": "Between every move, touch the wall with your any hip. Position your body so the extra load is on your feet and core, not your remaining hand.",
		"goal": "To efficiently move your weight close to the wall, helping you use your feet."
	},
	{
		"title": "Feet forward",
		"place": "On flash grade overhang wall.",
		"description": "Before you grab hold with your hand, you have to touch it with your foot.",
		"goal": "Improve overhang mobility and body awareness."
	},
	{
		"title": "Straight Arms",
		"place": "On flash grade problem",
		"description": "Climb using only straight arms. Twist your hips to inrease reach, and use your feet to push upward.",
		"goal": "To use hip rotation to improve body positioning, and to use legs and feet (instead of arms) to initiate movements."
	},
	{
		"title": "Hover hands",
		"place": "On flash grade problem.",
		"description": "Hover your hand above the next hold for 2 seconds before grabbing it. Use your feet and core to take the extra load.",
		"goal": "Will improve positioning your body to find stable, static positions that allow your free hand to move.",
	},
	{
		"title": "Silent feet",
		"place": "Anywhere.",
		"description": "Position your feet without making a sound.",
		"goal": "Learning intentional foot placement, resulting in saved energy and avoided mistakes."
	},
	{
		"title": "Single-touch hands",
		"place": "Anywhere.",
		"description": "Climb problems without ever adjusting your hand on a hold.",
		"goal": "Learning intentional hand placement, activating your core and legs, resulting in saved energy and avoided mistakes."
	},
	{
		"title": "Elimination round",
		"place": "Flash grade problem.",
		"description": "Climb problem – upon ascent, eliminate one hold. Repeat. Get out of your comfort zone.",
		"goal": "Improve your ability to read a problem, by feeling impact of removing holds."
	}
	]

	let index = Math.ceil(Math.random() * drills.length);
	let drill = drills[index-1];
	let imgIndex = Math.floor(Math.random() * 7); // 8 images right now
	let imgUrl = "img/crag-" + imgIndex;
	console.log(imgUrl)

	// Populate content
	document.querySelector("#index").innerText = index;
	document.querySelector("#total").innerText = drills.length;
	document.querySelector("#title").innerText = drill.title;
	document.querySelector("#place").innerText = drill.place;
	document.querySelector("#description").innerText = drill.description;
	document.querySelector("#goal").innerText = drill.goal;

	// Set mood image
	document.querySelector("#mood").style.backgroundImage="url(img/crag-" + imgIndex + ".jpg)"
	document.querySelector("#mood").style.backgroundImage="linear-gradient(0deg, #375B41 0%, #375B41 100%), url(img/crag-" + imgIndex + ") lightgray 100% / cover no-repeat;"