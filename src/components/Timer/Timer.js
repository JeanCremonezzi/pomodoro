import { useState, useEffect } from "react";
import ButtonTimer from "../ButtonTimer/ButtonTimer";

import "./Timer.css";

function Timer({stageTime, changeStage}) {
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(25 * 60);
	const [situation, setSituation] = useState("start");

	useEffect(() => {
		if (situation === "start") {
			setTime(stageTime);
		}

		if (!isPaused && time > 0) {
			const interval = setInterval(() => {
				setTime(time - 1);
			}, 1000);

			return () => clearInterval(interval);
		}

		if (time === 0) {
			setIsPaused(true);
			setSituation("start");
			setTime(25 * 60);
			changeStage();
		}
	}, [time, isPaused, situation, changeStage, stageTime]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60).toLocaleString("en-US", {
			minimumIntegerDigits: 2,
		});

		const seconds = (time - minutes * 60).toLocaleString("en-US", {
			minimumIntegerDigits: 2,
		});

		return minutes + ":" + seconds;
	};

	return (
		<main className="timerMain">
			<p className="timer">{formatTime(time)}</p>
			<ButtonTimer
				isPaused={isPaused}
				pause={setIsPaused}
				situation={situation}
				setSituation={setSituation}
			/>
		</main>
	);
}

export default Timer;
