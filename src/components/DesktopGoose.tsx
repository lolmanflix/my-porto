import { useEffect, useRef, useState } from 'react'

const DesktopGoose = () => {
  const gooseRef = useRef<HTMLDivElement>(null)
  const [isWalking, setIsWalking] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [targetX, setTargetX] = useState(0)
  const [targetY, setTargetY] = useState(0)
  const currentPosRef = useRef({ x: 100, y: 100 })
  const [walkFrame, setWalkFrame] = useState(0)
  const animationFrameRef = useRef<number | null>(null)
  const lastUpdateRef = useRef(0)
  const walkFrameUpdateRef = useRef(0)

  // Initialize position
  useEffect(() => {
    if (gooseRef.current) {
      currentPosRef.current = { x: 100, y: 100 }
      gooseRef.current.style.left = '100px'
      gooseRef.current.style.top = '100px'
    }
  }, [])

  // Set random target position
  useEffect(() => {
    const setRandomTarget = () => {
      const maxX = window.innerWidth - 100
      const maxY = window.innerHeight - 100
      const newX = Math.max(50, Math.min(maxX, Math.random() * maxX))
      const newY = Math.max(50, Math.min(maxY, Math.random() * maxY))
      
      setTargetX(newX)
      setTargetY(newY)
      setIsWalking(true)
    }

    // Initial target after a short delay
    setTimeout(() => setRandomTarget(), 500)

    // Set new targets periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        setRandomTarget()
      } else {
        // Pause and rest
        setIsWalking(false)
        setTimeout(() => {
          setIsWalking(true)
          setRandomTarget()
        }, 2000 + Math.random() * 3000)
      }
    }, 4000 + Math.random() * 6000)

    return () => clearInterval(interval)
  }, [])

  // Optimized movement using direct DOM manipulation
  useEffect(() => {
    if (!gooseRef.current) return

    const moveToTarget = (timestamp: number) => {
      if (!gooseRef.current) return

      // Throttle updates to 60fps
      if (timestamp - lastUpdateRef.current < 16) {
        animationFrameRef.current = requestAnimationFrame(moveToTarget)
        return
      }
      lastUpdateRef.current = timestamp

      const { x, y } = currentPosRef.current
      const dx = targetX - x
      const dy = targetY - y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > 3 && isWalking) {
        const speed = 1.2
        const moveX = (dx / distance) * speed
        const moveY = (dy / distance) * speed

        const newX = x + moveX
        const newY = y + moveY

        currentPosRef.current = { x: newX, y: newY }

        // Direct DOM manipulation for better performance
        gooseRef.current.style.left = `${newX}px`
        gooseRef.current.style.top = `${newY}px`

        // Update direction only when it changes
        if (Math.abs(dx) > 0.5) {
          const newDirection = dx > 0 ? 'right' : 'left'
          if (newDirection !== direction) {
            setDirection(newDirection)
          }
        }

        // Update walk frame (throttled - only update state every 3 frames)
        walkFrameUpdateRef.current++
        const currentWalkFrame = walkFrameUpdateRef.current % 8
        if (walkFrameUpdateRef.current % 3 === 0) {
          setWalkFrame(currentWalkFrame)
        }
        const bobOffset = Math.sin(currentWalkFrame * 0.8) * 2
        gooseRef.current.style.transform = `translateY(${bobOffset}px) ${direction === 'left' ? 'scaleX(-1)' : ''}`

        animationFrameRef.current = requestAnimationFrame(moveToTarget)
      } else if (distance <= 3 && isWalking) {
        // Reached target, pause briefly
        setIsWalking(false)
        setTimeout(() => {
          setIsWalking(true)
          const maxX = window.innerWidth - 100
          const maxY = window.innerHeight - 100
          setTargetX(Math.max(50, Math.min(maxX, Math.random() * maxX)))
          setTargetY(Math.max(50, Math.min(maxY, Math.random() * maxY)))
        }, 500 + Math.random() * 1000)
      }
    }

    if (isWalking) {
      animationFrameRef.current = requestAnimationFrame(moveToTarget)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetX, targetY, isWalking, direction])

  return (
    <div
      ref={gooseRef}
      className="fixed pointer-events-none z-50 will-change-transform"
      style={{
        left: '100px',
        top: '100px',
        width: '80px',
        height: '80px',
      }}
    >
      {/* Simple Cartoon Duck - Clean Minimalist Design */}
      <div className="relative">
        <svg
          viewBox="0 0 80 80"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.1))',
          }}
        >
          {/* Body - Smooth rounded oval */}
          <ellipse
            cx="35"
            cy="45"
            rx="20"
            ry="18"
            fill="#FFFFFF"
            stroke="#D8D8D8"
            strokeWidth="1.5"
          />

          {/* Head - Perfect round circle */}
          <circle
            cx="50"
            cy="35"
            r="14"
            fill="#FFFFFF"
            stroke="#D8D8D8"
            strokeWidth="1.5"
          />

          {/* Beak - Oval-shaped orange beak (prominent) */}
          <ellipse
            cx="62"
            cy="35"
            rx="6"
            ry="5"
            fill="#FF9500"
            stroke="#E67E00"
            strokeWidth="1"
          />

          {/* Left Eye - Small solid black circle */}
          <circle cx="46" cy="32" r="2.5" fill="#000000" />

          {/* Right Eye - Small solid black circle */}
          <circle cx="54" cy="32" r="2.5" fill="#000000" />

          {/* Wing - Large rounded oval wing */}
          <ellipse
            cx="28"
            cy="42"
            rx="12"
            ry="18"
            fill="#FFFFFF"
            stroke="#D8D8D8"
            strokeWidth="1.5"
          />

          {/* Left Leg - Slender orange leg with walking animation */}
          <g transform={`translate(30, 60) rotate(${isWalking ? (walkFrame < 4 ? -20 : 20) : 0} 0 0)`}>
            <rect
              x="-2"
              y="0"
              width="4"
              height="12"
              rx="2"
              fill="#FF9500"
            />
            <ellipse
              cx="0"
              cy="15"
              rx="5"
              ry="3"
              fill="#FF9500"
            />
          </g>

          {/* Right Leg - Slender orange leg with walking animation */}
          <g transform={`translate(40, 60) rotate(${isWalking ? (walkFrame < 4 ? 20 : -20) : 0} 0 0)`}>
            <rect
              x="-2"
              y="0"
              width="4"
              height="12"
              rx="2"
              fill="#FF9500"
            />
            <ellipse
              cx="0"
              cy="15"
              rx="5"
              ry="3"
              fill="#FF9500"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default DesktopGoose

