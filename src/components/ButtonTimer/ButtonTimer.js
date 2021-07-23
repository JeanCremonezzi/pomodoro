import "./ButtonTimer.css";

function ButtonTimer(props) {
	let buttonClass = props.situation;

	const handleClick = () => {
		props.pause(!props.isPaused);

		props.situation === "start" || props.situation === "resume"
			? props.setSituation("stop")
			: props.setSituation("resume");
	};

	return (
		<button className={buttonClass} onClick={handleClick}>
			{buttonClass}
		</button>
	);
}

export default ButtonTimer;
