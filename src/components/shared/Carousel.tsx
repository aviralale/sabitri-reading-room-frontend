import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { PanInfo, AnimationProps } from "framer-motion";

export interface CarouselItem {
  image: string;
  alt: string;
  id: number;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number | string;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1641309663967-8f1f318fc65e",
    alt: "Studying Image",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1641309663967-8f1f318fc65e",
    alt: "Studying Image",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1641309663967-8f1f318fc65e",
    alt: "Studying Image",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 } as const;

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = "100%",
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className = "",
}: CarouselProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerPadding = 16;
  const [itemWidth, setItemWidth] = useState<number>(
    300 - containerPadding * 2
  );
  const [trackItemOffset, setTrackItemOffset] = useState<number>(
    itemWidth + GAP
  );

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  // Handle resize to make the carousel responsive
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        const newItemWidth = newWidth - containerPadding * 2;
        setItemWidth(newItemWidth);
        setTrackItemOffset(newItemWidth + GAP);
      }
    };

    // Initial size calculation
    updateDimensions();

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [containerPadding]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1; // Animate to clone.
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 aspect-square ${className}  rounded-2xl `}
      style={{
        width: typeof baseWidth === "number" ? `${baseWidth}px` : baseWidth,
      }}
    >
      {/* Carousel Container */}
      <motion.div
        className="flex h-full"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition as AnimationProps["transition"]}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={`item-${item.id}-${index}`}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? "items-center justify-center text-center bg-[#060606] border-0"
                  : "items-start justify-between bg-[#111] border border-gray-700 rounded-xl overflow-hidden"
              } h-full shadow-2xl cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition as AnimationProps["transition"]}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Image {index + 1}</h3>
                  <p className="text-sm opacity-80">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {items.map((item, index) => (
            <motion.button
              key={`indicator-${item.id}-${index}`}
              className={`h-2 w-12 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex % items.length === index
                  ? "bg-white"
                  : "bg-white/30"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1 : 0.8,
                width: currentIndex % items.length === index ? 24 : 12,
              }}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
