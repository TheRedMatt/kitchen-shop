"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useModal } from "@/components/sections/ModalProvider"

export default function StepsSection() {
	const { openModal } = useModal()

	function openForm() {
		openModal() // 👈 просто вызываем модалку, без аргументов
	}

	return (
		<section className="w-full bg-white py-24 px-6">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center text-2xl md:text-4xl font-medium text-[#2b2b2b] leading-snug mb-14">
					Only <span className="font-semibold text-black">5 steps</span> — and your brand new kitchen will be ready in just{" "}
					<span className="font-semibold text-black">14 days</span>
				</h2>

				{/* Единая сетка */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					
					{/* Step 0 */}
					<Card className="bg-[#1a1a1a] text-white flex flex-col justify-between rounded-2xl p-8 shadow-lg">
						<CardContent className="p-0 relative z-10">
							<h3 className="font-bold text-xl mb-3">Request a Measurement</h3>
							<p className="text-sm leading-relaxed mb-6">
								Submit a request — we’ll discuss your preferences and agree on a convenient time for our designer to visit.
							</p>
						<Button
							className="
								mt-16 bg-[#ffb700] hover:bg-[#ffcc33] text-black font-medium
								rounded-xl px-60 py-10 text-lg shadow-md
								max-md:px-10 max-md:py-4 max-md:text-base
							"
						>
							Book a visit
						</Button>
						</CardContent>
					</Card>

					{/* Step 1 */}
					<Card className="relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center text-white">
						<Image
							src="/images/steps/measure.png"
							alt="Measurement & Design"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/60" />
						<CardContent className="relative z-10 p-8 flex flex-col justify-center">
							<span className="absolute right-6 top-4 text-[250px] font-bold text-white/20 select-none leading-none">
								01
							</span>
							<h3 className="font-bold text-xl mb-2">Measurement & Design Project</h3>
							<p className="text-sm leading-relaxed">
								A free visit from our specialist to take precise measurements and create a detailed kitchen design with an accurate cost estimate.
							</p>
						</CardContent>
					</Card>

					{/* Step 2 */}
					<Card className="bg-white relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-row items-center">
						<div className="relative w-1/3 flex justify-center items-center">
							<Image
								src="/images/steps/contract.png"
								alt="Contract"
								width={200}
								height={260}
								className="object-contain drop-shadow-lg rotate-[-4deg]"
							/>
						</div>
						<CardContent className="relative w-2/3 z-10 flex flex-col justify-center gap-3 pr-8">
							<span className="absolute right-6 top-4 text-[250px] font-bold text-black/10 select-none leading-none">
								02
							</span>
							<h3 className="font-bold text-lg text-black">Contract</h3>
							<p className="text-sm text-[#2b2b2b] leading-relaxed">
								After approving the design and estimate, we sign a formal contract. A <b>10% prepayment</b> is required to start production.
							</p>
						</CardContent>
					</Card>

					{/* Step 3 */}
					<Card className="relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center text-white">
						<Image
							src="/images/steps/production.png"
							alt="Manufacturing"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/45" />
						<CardContent className="relative z-10 p-8 flex flex-col justify-center">
							<span className="absolute right-6 top-4 text-[250px] font-bold text-white/20 select-none leading-none">
								03
							</span>
							<h3 className="font-bold text-xl mb-2">Manufacturing</h3>
							<p className="text-sm leading-relaxed">
								Your kitchen is crafted on modern European equipment according to your individual dimensions.
							</p>
						</CardContent>
					</Card>

					{/* Step 4 */}
					<Card className="bg-[#ffdb7c] relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center">
						<CardContent className="relative z-10 p-8 flex flex-col justify-center gap-3">
							<span className="absolute right-6 top-4 text-[250px] font-bold text-black/10 select-none leading-none">
								04
							</span>
							<h3 className="font-bold text-lg text-black">Quality Control</h3>
							<p className="text-sm text-[#2b2b2b] leading-relaxed max-w-sm">
								Each kitchen undergoes a strict quality check to ensure it matches your expectations perfectly.
							</p>
						</CardContent>
					</Card>

					{/* Step 5 */}
					<Card className="relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center text-white">
						<Image
							src="/images/steps/install.png"
							alt="Assembly & Installation"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/60" />
						<CardContent className="relative z-10 p-8 flex flex-col justify-center">
							<span className="absolute right-6 top-4 text-[250px] font-bold text-white/20 select-none leading-none">
								05
							</span>
							<h3 className="font-bold text-xl mb-2">Assembly & Installation</h3>
							<p className="text-sm leading-relaxed">
								Free installation by skilled craftsmen with over <b>5 years of experience</b>.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
