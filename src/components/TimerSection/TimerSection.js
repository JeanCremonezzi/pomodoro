import { useState } from "react";
import Timer from "../Timer/Timer";

import "./TimerSection.css";

function TimerSection() {
	const [stage, setStage] = useState("focus");
	const [stageTime, setStageTime] = useState(25 * 60);

	const changeStage = () => {
		if (stage === "focus") {
			setStage("rest");
			setStageTime(5 * 60);
		} else {
			setStage("focus");
			setStageTime(25 * 60);
		}
	};

	return (
		<section>
			<h2>{stage}</h2>

			<Timer changeStage={changeStage} stageTime={stageTime}/>
		</section>
	);
}

export default TimerSection;
