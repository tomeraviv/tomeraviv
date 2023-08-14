"use client";

import {useRive} from "@rive-app/react-canvas";
import {useEffect} from "react";
import cat_placeholder from "../../public/rive/cat_placeholder";

export default function RiveCatAnimated()
{
	const {rive, RiveComponent, canvas} = useRive({
		autoplay: true,
		src: "/rive/cat.riv",
		stateMachines: "State Machine 1",
	});

	// Register the window's mouse events to the canvas.
	useEffect(() =>
	{
		const onMouseMove = (e: MouseEvent) => canvas?.dispatchEvent(new MouseEvent("mousemove", {clientX: e.clientX, clientY: e.clientY}));
		const onTouchMove = (e: TouchEvent) => canvas?.dispatchEvent(new TouchEvent("touchmove", {touches: [e.touches[0]!]}));

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("touchmove", onTouchMove);

		// When the component unmounts, remove the event listeners.
		return () =>
		{
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("touchmove", onTouchMove);
		};
	}, [canvas]);

	const className = "w-24 h-24 pointer-events-none -mt-[72px] ml-[160px] sm:w-32 sm:h-32 absolute -mt-24 sm:ml-52 sm:-mt-24 sm:ml-52";

	// Shows a tiny base64 loading image until rive is fully loaded.
	return (
		<>
			{!rive && <img src={cat_placeholder} alt={"Loading..."} className={className + " blur-sm"}/>}
			<RiveComponent aria-label="Animated cat icon" className={className}/>
		</>
	);
}