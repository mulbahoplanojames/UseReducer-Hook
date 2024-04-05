import { useContext } from "react";

const ComponentF = () => {
	return (
		<>
			<p>Component F is with in Component E</p>

			<h2>Component E Count -{counterContext.count} </h2>
			<button onClick={() => counterContext.dispatch("increment")}>
				Increment
			</button>
			<button onClick={() => counterContext.dispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => counterContext.dispatch("reset")}>Reset</button>
		</>
	);
};

export default ComponentF;
