import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = {
	runtime: "edge",
};

export default async function handler(req: NextRequest) {
	try {
		const { searchParams } = req.nextUrl;
		const hasTitle = searchParams.has("title");
		const titleLength = hasTitle
			? searchParams.get("title")?.slice(0, 70)
			: "MyMusic";
		let title = titleLength.length == 70 ? titleLength + "..." : titleLength;
		title = title || "MyMusic";

		return new ImageResponse(
			(
				<div
					style={{
						height: "100%",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
						padding: 80,
						backgroundColor: "#030303",
						backgroundImage:
							"radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
						backgroundSize: "100px 100px",
						backgroundPosition: "-30px -10px",
						fontWeight: 600,
						color: "white",
					}}
				>
					<div tw="flex items-center absolute top-12 left-20">
						<svg
							height="40"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
							/>
						</svg>
						<p
							tw="text-3xl font-extrabold ml-2"
							style={{
								fontWeight: 700,
							}}
						>
							MyMusic
						</p>
					</div>

					<h1
						tw="pr-4"
						style={{
							fontSize: 64,
							margin: "0 0 40px -2px",
							lineHeight: 1.1,
							textShadow: "0 2px 30px #000",
							letterSpacing: -4,
							backgroundImage: "linear-gradient(90deg, #fff 40%, #aaa)",
							backgroundClip: "text",
							"-webkit-background-clip": "text",
							color: "transparent",
						}}
					>
						{title}
					</h1>

					<p
						style={{
							position: "absolute",
							bottom: 70,
							left: 80,
							margin: 0,
							fontSize: 26,
							letterSpacing: -1,
						}}
					>
						MyMusic API Documentation
					</p>
				</div>
			),
			{ width: 1200, height: 630 }
		);
	} catch (e) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
