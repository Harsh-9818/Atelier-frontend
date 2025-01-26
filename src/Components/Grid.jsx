"use client"

import React, { useEffect, useRef } from "react"

export default function Grid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const gridSize = 10
    const cellSize = width / gridSize

    let progress = 0
    let lastProgress = 0

    // Modify the points to start from the upper half of the canvas
    const points = [
      { x: 9, y: 5 },   // Start from the upper portion
      { x: 7, y: 5 },
      { x: 7, y: 4.5 },
      { x: 5, y: 4.5 },
      { x: 5, y: 4 },
      { x: 3, y: 4 },
      { x: 3, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      { x: 0, y: 2 },
    ]

    const drawZigzag = (start, end) => {
      ctx.beginPath()
      ctx.strokeStyle = "#00FFFF"
      ctx.lineWidth = 1

      for (let i = Math.floor(start); i < Math.min(points.length - 1, Math.ceil(end)); i++) {
        const startPoint = points[i]
        const endPoint = points[i + 1]
        const startX = startPoint.x * cellSize
        const startY = startPoint.y * cellSize
        const endX = endPoint.x * cellSize
        const endY = endPoint.y * cellSize

        if (i === Math.floor(start)) {
          const t = start - Math.floor(start)
          ctx.moveTo(startX + t * (endX - startX), startY + t * (endY - startY))
        } else {
          ctx.lineTo(startX, startY)
        }

        if (i === Math.ceil(end) - 1) {
          const t = end - Math.floor(end)
          ctx.lineTo(startX + t * (endX - startX), startY + t * (endY - startY))
        } else {
          ctx.lineTo(endX, endY)
        }
      }

      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      progress += 0.05 // Medium speed animation
      if (progress > points.length - 1) {
        progress = 0
        lastProgress = 0
      }

      if (progress - lastProgress > 1) {
        lastProgress = progress - 1
      }

      drawZigzag(lastProgress, progress)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [])

  return (
    <div className="relative w-full h-40 sm:hidden md:block"> {/* Adjust height to show only the upper half */}
      <canvas ref={canvasRef} width={320} height={160} className="w-full h-full" /> {/* Reduce the height to half */}
    </div>
  )
}
