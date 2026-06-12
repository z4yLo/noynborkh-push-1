"use client"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative bg-[#111111] py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#1B1412]/30 to-[#111111]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
              Бидний тухай
            </span>
            <h2 className="mb-8 text-balance text-4xl font-bold leading-tight text-[#E8D9B5] sm:text-5xl">
              Интерьер-ийн шилдэг шийдэл Чанарын баталгаа {" "}
              <span className="text-gradient-gold">2014</span>-оос
            </h2>
            <div className="space-y-6 text-pretty text-[#E8D9B5]/70">
              <p className="text-lg leading-relaxed">
                Ноён Борх ХХК-нь металл боловсруулалт, ган бүтээцийн салбарт үйл ажиллагаа явуулж Монгол дархны ур чадварыг орчин үеийн интерьертэй хослуулан чанартай, шинэлэг бүтээгдэхүүн үйлдвэрлэдэг.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: "12+", label: "Жил" },
                { value: "60+", label: "Төсөл" },
                { value: "10+", label: "Ажилтан" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="border-l border-[#C8A46B]/30 pl-4"
                >
                  <div className="text-gradient-gold text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Decorative Frame */}
              <div className="absolute -left-4 -top-4 h-32 w-32 border-l-2 border-t-2 border-[#C8A46B]/30" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 border-b-2 border-r-2 border-[#C8A46B]/30" />

              {/* Image */}
              <Image
                src="https://res.cloudinary.com/dnf4kmkrx/image/upload/Gerchilgee-Borkh"
                alt="Ноён Борх үйлдвэр"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass absolute -bottom-6 -left-6 p-6"
            >
              <div className="text-xs font-light uppercase tracking-wider text-[#C8A46B]">
                Монгол улс бүртгэлийн гэрчилгээ
              </div>
              <div className="mt-1 text-2xl font-bold text-[#E8D9B5]">
                2014 оны  03.03
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
