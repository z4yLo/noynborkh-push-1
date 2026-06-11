"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Хаяг",
    value: "Улаанбаатар, Монгол\n",
  },
  {
    icon: Phone,
    label: "Утас",
    value: "+976 88870322 \n+976 95900099",
  },
  {
    icon: Mail,
    label: "Имэйл",
    value: "noynborkhweb@gmail.com\nerdenebat0377@gmail.com",
  },
  {
    icon: Clock,
    label: "Ажлын цаг",
    value: "Даваа - Баасан: 09:00 - 19:00\nБямба: 09:00 - 19:00",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative bg-[#0D0D0D] py-32">
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
            Холбогдох
          </span>
          <h2 className="text-balance text-4xl font-bold text-[#E8D9B5] sm:text-5xl">
            Холбоо барих
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[#E8D9B5]/60">
            Төслөө ярилцахад бэлэн үү? Манай баг таны аж үйлдвэрийн
            хэрэгцээнд тохирсон шийдлийг олоход туслахад бэлэн.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              action="https://formspree.io/f/mnjroreq"
              method="POST"
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50">
                    Бүтэн нэр
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-[#2B1B17] bg-[#111111] px-4 py-3 text-[#E8D9B5] placeholder-[#E8D9B5]/30 transition-colors focus:border-[#C8A46B]/50 focus:outline-none"
                    placeholder="Таны нэр"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50">
                    Имэйл хаяг
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-[#2B1B17] bg-[#111111] px-4 py-3 text-[#E8D9B5] placeholder-[#E8D9B5]/30 transition-colors focus:border-[#C8A46B]/50 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50">
                  Утасны дугаар
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-[#2B1B17] bg-[#111111] px-4 py-3 text-[#E8D9B5] placeholder-[#E8D9B5]/30 transition-colors focus:border-[#C8A46B]/50 focus:outline-none"
                  placeholder="+976 ..."
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50">
                  Сонирхож буй үйлчилгээ
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-[#2B1B17] bg-[#111111] px-4 py-3 text-[#E8D9B5] transition-colors focus:border-[#C8A46B]/50 focus:outline-none"
                >
                  <option value="">Үйлчилгээ сонгох</option>
                  <option value="steel-structures">Барилгын төмөр хийц</option>
                  <option value="metal-furniture">Металл тавилга үйлдвэрлэл</option>
                  <option value="stage-systems">Тайз, арга хэмжээний хийц</option>
                  <option value="decorative-metal">Чимэглэлийн металл хийц</option>
                  <option value="other">Бусад үйлчилгээ</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50">
                  Төслийн дэлгэрэнгүй
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none border border-[#2B1B17] bg-[#111111] px-4 py-3 text-[#E8D9B5] placeholder-[#E8D9B5]/30 transition-colors focus:border-[#C8A46B]/50 focus:outline-none"
                  placeholder="Төслийнхөө талаар бидэнд хэлнэ үү..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8A46B] py-4 text-sm font-medium uppercase tracking-wider text-[#111111] transition-all hover:bg-[#E8D9B5]"
              >
                Мессеж илгээх
              </button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="self-start"
          >
            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="border border-[#2B1B17] bg-[#111111] p-5 transition-all hover:border-[#C8A46B]/30"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center border border-[#C8A46B]/20 bg-[#C8A46B]/5">
                    <info.icon className="h-4 w-4 text-[#C8A46B]" />
                  </div>
                  <div className="mb-1 text-xs font-light uppercase tracking-wider text-[#C8A46B]">
                    {info.label}
                  </div>
                  <div className="whitespace-pre-line text-sm text-[#E8D9B5]/70">
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative mt-4 overflow-hidden border border-[#2B1B17]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171249.31296027614!2d106.77225755!3d47.90717805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692be44af8b23%3A0x1ce8af3f9b81b6f1!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2s!4v1718000000000"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Байршлын газрын зураг"
                className="grayscale invert hue-rotate-180 brightness-75 contrast-110 saturate-50"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 border-t border-[#2B1B17] bg-[#0D0D0D]/85 px-3 py-1.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A46B]" />
                <span className="text-[11px] tracking-wide text-[#E8D9B5]/50">
                  Улаанбаатар, Монгол Улс
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
