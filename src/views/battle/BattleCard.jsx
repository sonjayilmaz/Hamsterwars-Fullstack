const BattleCard = (props) => {
	const name = props.name
	const imgName = props.imgName
	const age = props.age
	const favFood = props.favFood
	const loves = props.loves
	const wins = props.wins
	const defeats = props.defeats
	const games = props.games
	//const urlImg = `url(http://localhost:1337/img/$)`

	return (
		<article className="battle-hamster-wrapper">
			<h2>{name}</h2>
			<img src={urlImg + imgName} alt={name} />
			<p>{age}</p>
			<p>{favFood}</p>
			<p>{loves}</p>
			<p>{wins}</p>
			<p>{defeats}</p>
			<p>{games}</p>
		</article>
	)
}

export default BattleCard