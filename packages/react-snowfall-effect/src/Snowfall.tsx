'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Constants for performance optimization
const MOUSE_INFLUENCE_DISTANCE = 150;
const FRICTION = 0.98;
const EDGE_FADE_DISTANCE = 100;
const MELTING_RATE = 0.02;
const BOUNCE_DAMPING = 0.5;
const MIN_BOUNCE_SPEED = 0.1;

// Type definitions
interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  wind: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  image: HTMLImageElement | null;
  life: number;
  velX: number;
  velY: number;
  landed: boolean;
}

interface AccumulationPoint {
  x: number;
  y: number;
  size: number;
}

interface MousePosition {
  x: number;
  y: number;
}

interface AnimationState {
  isRunning: boolean;
  lastFrameTime: number;
}

// Utility types for better type safety
type SnowflakeShape = 'circle' | 'star' | 'dot';
type Range = { min: number; max: number };
type RotationConfig = { enabled: boolean; speed: Range };

export interface SnowfallProps {
  snowflakeCount?: number;
  images?: string[];
  speed?: Range;
  wind?: Range;
  size?: Range;
  opacity?: Range;
  rotation?: RotationConfig;
  colors?: string[];
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
  fps?: number;
  snowflakeShape?: SnowflakeShape;
  fadeEdges?: boolean;
  followMouse?: boolean;
  gravity?: number;
  bounce?: boolean;
  melt?: boolean;
  accumulate?: boolean;
}

// Utility functions for better code organization
const getRandomInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const calculateDistance = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

const createSnowflake = (
  canvasWidth: number,
  canvasHeight: number,
  speed: Range,
  wind: Range,
  size: Range,
  opacity: Range,
  rotation: RotationConfig,
  colors: string[],
  loadedImages: HTMLImageElement[]
): Snowflake => ({
  x: Math.random() * canvasWidth,
  y: Math.random() * canvasHeight,
  size: getRandomInRange(size.min, size.max),
  speed: getRandomInRange(speed.min, speed.max),
  wind: getRandomInRange(wind.min, wind.max),
  opacity: getRandomInRange(opacity.min, opacity.max),
  rotation: Math.random() * 360,
  rotationSpeed: rotation.enabled
    ? getRandomInRange(rotation.speed.min, rotation.speed.max)
    : 0,
  color: colors[Math.floor(Math.random() * colors.length)],
  image:
    loadedImages.length > 0
      ? loadedImages[Math.floor(Math.random() * loadedImages.length)]
      : null,
  life: 1,
  velX: 0,
  velY: 0,
  landed: false,
});

const drawStar = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number
): void => {
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < spikes; i++) {
    const x1 = cx + Math.cos(rot) * outerRadius;
    const y1 = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x1, y1);
    rot += step;

    const x2 = cx + Math.cos(rot) * innerRadius;
    const y2 = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x2, y2);
    rot += step;
  }

  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
};

const drawSnowflakeShape = (
  ctx: CanvasRenderingContext2D,
  snowflake: Snowflake,
  shape: SnowflakeShape
): void => {
  ctx.fillStyle = snowflake.color;
  ctx.strokeStyle = snowflake.color;

  switch (shape) {
    case 'star':
      drawStar(ctx, 0, 0, 5, snowflake.size / 2, snowflake.size / 4);
      break;
    case 'dot':
      ctx.beginPath();
      ctx.arc(0, 0, snowflake.size / 4, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'circle':
    default:
      ctx.beginPath();
      ctx.arc(0, 0, snowflake.size / 2, 0, Math.PI * 2);
      ctx.fill();

      // Add sparkle effect
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -snowflake.size / 3);
      ctx.lineTo(0, snowflake.size / 3);
      ctx.moveTo(-snowflake.size / 3, 0);
      ctx.lineTo(snowflake.size / 3, 0);
      ctx.stroke();
      break;
  }
};

const Snowfall: React.FC<SnowfallProps> = ({
  snowflakeCount = 50,
  images = [],
  speed = { min: 1, max: 3 },
  wind = { min: -0.5, max: 0.5 },
  size = { min: 10, max: 30 },
  opacity = { min: 0.1, max: 0.8 },
  rotation = { enabled: true, speed: { min: -2, max: 2 } },
  colors = ['#ffffff'],
  className = '',
  style = {},
  zIndex = 1000,
  fps = 60,
  snowflakeShape = 'circle',
  fadeEdges = true,
  followMouse = false,
  gravity = 1,
  bounce = false,
  melt = false,
  accumulate = false,
}) => {
  // Refs for performance
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const loadedImagesRef = useRef<HTMLImageElement[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const accumulationRef = useRef<AccumulationPoint[]>([]);
  const animationStateRef = useRef<AnimationState>({
    isRunning: false,
    lastFrameTime: 0,
  });

  // State
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Memoized values for performance
  const frameInterval = useMemo(() => 1000 / fps, [fps]);

  const canvasStyle = useMemo(
    () => ({
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none' as const,
      zIndex: zIndex,
      ...style,
    }),
    [style, zIndex]
  );

  // Mouse tracking with useCallback for performance
  const handleMouseMove = useCallback((e: MouseEvent): void => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Mouse tracking
  useEffect(() => {
    if (!followMouse) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [followMouse, handleMouseMove]);

  // Optimized image loading with better error handling
  const loadImages = useCallback(async (): Promise<void> => {
    if (images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    try {
      const imagePromises = images.map((src) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          img.src = src;
        });
      });

      loadedImagesRef.current = await Promise.all(imagePromises);
      setImagesLoaded(true);
    } catch (error) {
      console.warn('Failed to load some snowflake images:', error);
      loadedImagesRef.current = []; // Clear any partially loaded images
      setImagesLoaded(true); // Continue with default shapes
    }
  }, [images]);

  // Load custom images
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  // Canvas resize handler with useCallback
  const updateCanvasSize = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // Initialize snowflakes with better performance
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create snowflakes using the utility function
    snowflakesRef.current = Array.from({ length: snowflakeCount }, () =>
      createSnowflake(
        canvas.width,
        canvas.height,
        speed,
        wind,
        size,
        opacity,
        rotation,
        colors,
        loadedImagesRef.current
      )
    );

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [
    imagesLoaded,
    snowflakeCount,
    speed,
    wind,
    size,
    opacity,
    rotation,
    colors,
    updateCanvasSize,
  ]);

  // Optimized animation loop with proper frame timing
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    animationStateRef.current.isRunning = true;

    const animate = (currentTime: number): void => {
      if (!animationStateRef.current.isRunning) return;

      // FPS control with more efficient timing
      if (
        currentTime - animationStateRef.current.lastFrameTime <
        frameInterval
      ) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      animationStateRef.current.lastFrameTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw accumulation layer
      if (accumulate) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        accumulationRef.current.forEach((acc: AccumulationPoint) => {
          ctx.beginPath();
          ctx.arc(acc.x, acc.y, acc.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      snowflakesRef.current.forEach((snowflake: Snowflake) => {
        if (snowflake.landed && accumulate) return;

        // Optimized mouse following effect
        if (followMouse) {
          const dx = mouseRef.current.x - snowflake.x;
          const dy = mouseRef.current.y - snowflake.y;
          const distance = calculateDistance(
            snowflake.x,
            snowflake.y,
            mouseRef.current.x,
            mouseRef.current.y
          );

          if (distance < MOUSE_INFLUENCE_DISTANCE) {
            const force =
              ((MOUSE_INFLUENCE_DISTANCE - distance) /
                MOUSE_INFLUENCE_DISTANCE) *
              0.001;
            snowflake.velX += dx * force;
            snowflake.velY += dy * force;
          }

          snowflake.velX *= FRICTION;
          snowflake.velY *= FRICTION;
        }

        // Update position
        snowflake.y += snowflake.speed * gravity + snowflake.velY;
        snowflake.x += snowflake.wind + snowflake.velX;
        snowflake.rotation += snowflake.rotationSpeed;

        // Optimized bounce effect
        if (bounce && snowflake.y > canvas.height - snowflake.size) {
          snowflake.y = canvas.height - snowflake.size;
          snowflake.speed *= -BOUNCE_DAMPING;
          if (Math.abs(snowflake.speed) < MIN_BOUNCE_SPEED) {
            snowflake.speed = 0;
            snowflake.landed = true;
          }
        }

        // Optimized melting effect
        if (melt && snowflake.y > canvas.height - 50) {
          snowflake.life -= MELTING_RATE;
          if (snowflake.life <= 0) {
            snowflake.y = -snowflake.size;
            snowflake.x = Math.random() * canvas.width;
            snowflake.life = 1;
          }
        }

        // Optimized accumulation effect
        if (accumulate && snowflake.y > canvas.height - snowflake.size) {
          accumulationRef.current.push({
            x: snowflake.x,
            y: canvas.height - snowflake.size / 2,
            size: snowflake.size / 2,
          });
          snowflake.landed = true;
          snowflake.y = -snowflake.size;
          snowflake.x = Math.random() * canvas.width;
        }

        // Reset snowflake if it goes off screen
        if (snowflake.y > canvas.height && !bounce && !accumulate) {
          snowflake.y = -snowflake.size;
          snowflake.x = Math.random() * canvas.width;
          snowflake.life = 1;
        }
        if (snowflake.x > canvas.width + snowflake.size) {
          snowflake.x = -snowflake.size;
        } else if (snowflake.x < -snowflake.size) {
          snowflake.x = canvas.width + snowflake.size;
        }

        // Optimized edge fading
        let edgeOpacity = snowflake.opacity;
        if (fadeEdges) {
          const leftFade = clamp(snowflake.x / EDGE_FADE_DISTANCE, 0, 1);
          const rightFade = clamp(
            (canvas.width - snowflake.x) / EDGE_FADE_DISTANCE,
            0,
            1
          );
          const topFade = clamp(snowflake.y / EDGE_FADE_DISTANCE, 0, 1);
          edgeOpacity *= Math.min(leftFade, rightFade, topFade);
        }

        // Draw snowflake with better performance
        ctx.save();
        ctx.globalAlpha = edgeOpacity * snowflake.life;
        ctx.translate(snowflake.x, snowflake.y);

        if (rotation.enabled) {
          ctx.rotate((snowflake.rotation * Math.PI) / 180);
        }

        if (snowflake.image) {
          // Draw custom image
          ctx.drawImage(
            snowflake.image,
            -snowflake.size / 2,
            -snowflake.size / 2,
            snowflake.size,
            snowflake.size
          );
        } else {
          // Draw default snowflake shape
          drawSnowflakeShape(ctx, snowflake, snowflakeShape);
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      animationStateRef.current.isRunning = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [
    imagesLoaded,
    frameInterval,
    accumulate,
    followMouse,
    bounce,
    melt,
    fadeEdges,
    gravity,
    rotation.enabled,
    snowflakeShape,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 ${className}`}
      style={canvasStyle}
    />
  );
};

export default Snowfall;
