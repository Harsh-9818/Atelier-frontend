// // //old header
// // import { useState, useEffect, useRef } from 'react';
// // import '/src/App.css';
// // import { Link } from 'react-router-dom';

// // function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const menuRef = useRef(null); // Reference for the dropdown menu

// //   // Close menu on outside click
// //   useEffect(() => {
// //     const handleOutsideClick = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         setIsMenuOpen(false); // Close the menu if clicked outside
// //       }
// //     };

// //     document.addEventListener('mousedown', handleOutsideClick);

// //     return () => {
// //       document.removeEventListener('mousedown', handleOutsideClick);
// //     };
// //   }, []);

// //   return (
// //     <div className="bg-gray-900 text-lg text-white h-16 w-full py-4 px-24 flex items-center justify-between sticky top-0 z-10">
// //       <Link to="/" className="font-bold text-2xl">
// //         Atelier
// //       </Link>

// //       {/* Centered Links (Hidden on smaller screens) */}
// //       <div className="hidden md:flex flex-1 justify-left pl-20 text-gray-400 gap-10 text-sm font-base">
// //         <Link to="about">About</Link>
// //         <Link to="services">Our Services</Link>
// //         <Link to="work">Components</Link>
// //         <Link to="work">Socials</Link>
// //       </div>

// //       {/* Hamburger Menu */}
// //       <div
// //         className="flex md:hidden flex-col items-end gap-1 cursor-pointer"
// //         onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle dropdown menu
// //       >
// //         <div className="w-6 h-0.5 bg-white"></div>
// //         <div className="w-6 h-0.5 bg-white"></div>
// //         <div className="w-6 h-0.5 bg-white"></div>
// //       </div>

// //       {/* Right-aligned Button (Hidden on smaller screens) */}
// //       <div className="hidden md:flex bg-cyan-300 h-9 w-32 rounded-3xl items-center justify-center">
// //         <Link to="work" className="font-bold text-black text-xs">
// //           WORK WITH US
// //         </Link>
// //       </div>

// //       {/* Dropdown Menu */}
// //       {isMenuOpen && (
// //         <div
// //           ref={menuRef} // Attach ref to the dropdown menu
// //           className="absolute top-16 right-4 bg-gray-800 w-48 rounded-lg shadow-lg z-20 flex flex-col text-sm font-semibold"
// //         >
// //           <Link
// //             to="about"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)} // Close dropdown on click
// //           >
// //             About
// //           </Link>
// //           <Link
// //             to="services"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Our Services
// //           </Link>
// //           <Link
// //             to="work"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Components
// //           </Link>
// //           <Link
// //             to="work"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Socials
// //           </Link>
// //           <Link
// //             to="work"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Get in touch
// //           </Link>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Header;




// //grid code
// "use client"

// import React, { useEffect, useRef } from "react"

// export default function Grid() {
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const width = canvas.width
//     const height = canvas.height
//     const gridSize = 10
//     const cellSize = width / gridSize

//     let progress = 0
//     let lastProgress = 0

//     const points = [
//       { x: 9, y: 9 },
//       { x: 7, y: 9 },
//       { x: 7, y: 7.5 },
//       { x: 5, y: 7.5 },
//       { x: 5, y: 6 },
//       { x: 3, y: 6 },
//       { x: 3, y: 4.5 },
//       { x: 1, y: 4.5 },
//       { x: 1, y: 3 },
//       { x: 0, y: 3 },
//     ]

//     // Draw grid with transparent lines
//     const drawGrid = () => {
//       ctx.strokeStyle = "rgba(255, 255, 255, 0)"  // Fully transparent grid lines
//       ctx.lineWidth = 1

//       for (let i = 0; i <= gridSize; i++) {
//         const pos = i * cellSize

//         // Vertical lines
//         ctx.beginPath()
//         ctx.moveTo(pos, 0)
//         ctx.lineTo(pos, height)
//         ctx.stroke()

//         // Horizontal lines
//         ctx.beginPath()
//         ctx.moveTo(0, pos)
//         ctx.lineTo(width, pos)
//         ctx.stroke()
//       }
//     }

//     const drawZigzag = (start, end) => {
//       ctx.beginPath()
//       ctx.strokeStyle = "#00ffff"
//       ctx.lineWidth = 1

//       for (let i = Math.floor(start); i < Math.min(points.length - 1, Math.ceil(end)); i++) {
//         const startPoint = points[i]
//         const endPoint = points[i + 1]
//         const startX = startPoint.x * cellSize
//         const startY = startPoint.y * cellSize
//         const endX = endPoint.x * cellSize
//         const endY = endPoint.y * cellSize

//         if (i === Math.floor(start)) {
//           const t = start - Math.floor(start)
//           ctx.moveTo(startX + t * (endX - startX), startY + t * (endY - startY))
//         } else {
//           ctx.lineTo(startX, startY)
//         }

//         if (i === Math.ceil(end) - 1) {
//           const t = end - Math.floor(end)
//           ctx.lineTo(startX + t * (endX - startX), startY + t * (endY - startY))
//         } else {
//           ctx.lineTo(endX, endY)
//         }
//       }

//       ctx.stroke()
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height)
//       drawGrid()

//       progress += 0.03 // Medium speed animation
//       if (progress > points.length - 1) {
//         progress = 0
//         lastProgress = 0
//       }

//       if (progress - lastProgress > 1) {
//         lastProgress = progress - 1
//       }

//       drawZigzag(lastProgress, progress)

//       requestAnimationFrame(animate)
//     }

//     animate()

//     return () => {
//       // Cleanup
//     }
//   }, [])

//   return (
//     <div className="relative w-80 h-80 p-4">
//       <canvas ref={canvasRef} width={320} height={320} className="w-full h-full" />
//     </div>
//   )
// }
