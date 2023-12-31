"use client"

import Image from 'next/image'
import {useRive} from "@rive-app/react-canvas";
import {useEffect} from "react";
import cat_placeholder from "../../public/rive/cat/cat_placeholder";


export default function RiveCatAnimated()
{
	const {rive, RiveComponent, canvas} = useRive({
		autoplay: true,
		src: "/rive/cat/cat.riv",
		stateMachines: "State Machine 1",
	});

	// Register the window's mouse events to the canvas.
	useEffect(() =>
	{
		const onMouseMove = (e: MouseEvent) => canvas?.dispatchEvent(new MouseEvent("mousemove", {clientX: e.clientX, clientY: e.clientY}));
		const onTouchMove = (e: TouchEvent) => canvas?.dispatchEvent(new TouchEvent("touchmove", {touches: [e.touches[0]!]}));

		window.addEventListener("mousemove", onMouseMove,  {passive: true});
		window.addEventListener("touchmove", onTouchMove,  {passive: true});

		// When the component unmounts, remove the event listeners.
		return () =>
		{
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("touchmove", onTouchMove);
		};
	}, [canvas]);

	const className = "pointer-events-none h-24 w-24 sm:h-32 sm:w-32";

	// Shows a tiny base64 loading image until rive is fully loaded.
	return (
		<>
			{!rive && <Image src={'/rive/cat/cat.png'} width={128} height={128} placeholder={cat_placeholder} alt={"Loading..."} className={className}/>}
			<RiveComponent aria-label="Animated cat icon"  className={className}/>
		</>
	);
}