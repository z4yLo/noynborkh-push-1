"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + project.images.length) % project.images.length)
      } else if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % project.images.length)
      } else if (e.key === "Escape") {
        onClose()
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
  }, [project, onClose, setActiveIndex])

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
              <button
                onClick={onClose}
                className="border border-[#2B1B17] p-2 text-[#E8D9B5]/60 transition-all hover:border-[#C8A46B]/40 hover:text-[#C8A46B]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Image Area */}
          <div className="flex flex-1 items-center justify-center px-8">
            <div className="relative aspect-[16/10] w-full max-w-5xl max-h-[65vh]">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full"
              >
                <Image
                  src={project.images[activeIndex]}
                  alt={`${project.title} - ${activeIndex + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </motion.div>

              {/* Prev Button */}
              <button
                onClick={() =>
                  setActiveIndex((i) => (i - 1 + project.images.length) % project.images.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 border border-[#2B1B17] bg-[#111111]/80 p-3 text-[#E8D9B5]/60 transition-all hover:border-[#C8A46B]/40 hover:text-[#C8A46B]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setActiveIndex((i) => (i + 1) % project.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 border border-[#2B1B17] bg-[#111111]/80 p-3 text-[#E8D9B5]/60 transition-all hover:border-[#C8A46B]/40 hover:text-[#C8A46B]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Counter */}
              <div className="absolute right-4 top-4 border border-[#2B1B17] bg-[#111111]/80 px-3 py-1 text-xs text-[#E8D9B5]/40">
                {activeIndex + 1} / {project.images.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="border-t border-[#2B1B17] px-8 py-5">
            <div className="flex justify-center gap-3 overflow-x-auto">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
