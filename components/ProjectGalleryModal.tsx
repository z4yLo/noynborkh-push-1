"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

interface Project {
  title: string
  category: string
  images: string[]
}

interface ProjectGalleryModalProps {
  project: Project | null
  activeIndex: number
  setActiveIndex: (index: number) => void
  onClose: () => void
}

export function ProjectGalleryModal({
  project,
  activeIndex,
  setActiveIndex,
  onClose,
}: ProjectGalleryModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })

  const handlePrev = () => {
    if (!project) return
    setIsZoomed(false)
    setActiveIndex((activeIndex - 1 + project.images.length) % project.images.length)
  }

  const handleNext = () => {
    if (!project) return
    setIsZoomed(false)
    setActiveIndex((activeIndex + 1) % project.images.length)
  }

  const handleThumbnailClick = (index: number) => {
    setIsZoomed(false)
    setActiveIndex(index)
  }

  // Зураг дээр mouse хөдлөхөд zoom байрлал тооцох
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPos({ x, y })
  }

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      setIsZoomed(false)
    } else {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setZoomPos({ x, y })
      setIsZoomed(true)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return
      if (e.key === "ArrowLeft") {
        setIsZoomed(false)
        setActiveIndex((activeIndex - 1 + project.images.length) % project.images.length)
      } else if (e.key === "ArrowRight") {
        setIsZoomed(false)
        setActiveIndex((activeIndex + 1) % project.images.length)
      } else if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false)
        } else {
          onClose()
        }
      }
    }

    if (project) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, activeIndex, isZoomed, onClose, setActiveIndex])

  // Зураг солигдоход zoom цэвэрлэх
  useEffect(() => {
    setIsZoomed(false)
  }, [activeIndex])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#0D0D0D]/95 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="border-b border-[#2B1B17] px-8 py-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="mb-2 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
                  {project.category}
                </span>
                <h2 className="text-xl font-semibold text-[#E8D9B5]">{project.title}</h2>
              </div>
              <div className="flex items-center gap-3">
                {/* Zoom товч */}
                <button
                  onClick={() => setIsZoomed((z) => !z)}
                  title={isZoomed ? "Жижигрүүлэх" : "Томруулах"}
                  className={`border p-2 transition-all ${
                    isZoomed
                      ? "border-[#C8A46B] text-[#C8A46B]"
                      : "border-[#2B1B17] text-[#E8D9B5]/60 hover:border-[#C8A46B]/40 hover:text-[#C8A46B]"
                  }`}
                >
                  {isZoomed ? (
                    <ZoomOut className="h-5 w-5" />
                  ) : (
                    <ZoomIn className="h-5 w-5" />
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="border border-[#2B1B17] p-2 text-[#E8D9B5]/60 transition-all hover:border-[#C8A46B]/40 hover:text-[#C8A46B]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Image Area */}
          <div className="flex flex-1 items-center justify-center px-8 overflow-hidden">
            <div className="relative aspect-[16/10] w-full max-w-5xl max-h-[65vh]">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full overflow-hidden"
                onClick={handleImageClick}
                onMouseMove={handleMouseMove}
                style={{
                  cursor: isZoomed ? "zoom-out" : "zoom-in",
                }}
              >
                <Image
                  src={project.images[activeIndex]}
                  alt={`${project.title} - ${activeIndex + 1}`}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-300 ease-out select-none"
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                          transform: "scale(2.5)",
                        }
                      : {
                          transform: "scale(1)",
                        }
                  }
                  draggable={false}
                />

                {/* Zoom заавар — zoom болоогүй үед харуулна */}
                {!isZoomed && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-sm bg-[#111111]/70 px-3 py-1.5 text-xs text-[#E8D9B5]/50 backdrop-blur-sm pointer-events-none">
                    <ZoomIn className="h-3 w-3" />
                    Дарж томруулах
                  </div>
                )}
              </motion.div>

              {/* Prev Button — zoom үед нуух */}
              {!isZoomed && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 border border-[#2B1B17] bg-[#111111]/80 p-3 text-[#E8D9B5]/60 transition-all hover:border-[#C8A46B]/40 hover:text-[#C8A46B]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Next Button — zoom үед нуух */}
              {!isZoomed && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 border border-[#2B1B17] bg-[#111111]/80 p-3 text-[#E8D9B5]/60 transition-all hover:border-[#C8A46B]/40 hover:text-[#C8A46B]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}

              {/* Counter */}
              <div className="absolute right-4 top-4 border border-[#2B1B17] bg-[#111111]/80 px-3 py-1 text-xs text-[#E8D9B5]/40 pointer-events-none">
                {activeIndex + 1} / {project.images.length}
              </div>

              {/* Zoom горимд гарах заавар */}
              {isZoomed && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-sm bg-[#111111]/70 px-3 py-1.5 text-xs text-[#C8A46B]/70 backdrop-blur-sm pointer-events-none">
                  <ZoomOut className="h-3 w-3" />
                  Дарж жижигрүүлэх · Esc
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Strip — zoom үед нуух */}
          {!isZoomed && (
            <div className="border-t border-[#2B1B17] px-8 py-5">
              <div className="flex justify-center gap-3 overflow-x-auto">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative h-11 w-16 flex-shrink-0 border-2 transition-all duration-200 md:h-16 md:w-24 ${
                      index === activeIndex
                        ? "border-[#C8A46B]"
                        : "border-[#2B1B17] opacity-60 hover:border-[#C8A46B]/40 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}