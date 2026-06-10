"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: [
    { label: "Бидний тухай", href: "#about" },
    { label: "Манай баг", href: "#" },
    { label: "Ажлын байр", href: "#" },
    { label: "Мэдээ", href: "#" },
  ],
  services: [
    { label: "Ган бүтээц", href: "#services" },
    { label: "Металл боловсруулалт", href: "#services" },
    { label: "Аж үйлдвэрийн барилга", href: "#services" },
    { label: "Фасадны шийдэл", href: "#services" },
  ],
  resources: [
    { label: "Төслүүд", href: "#projects" },
    { label: "Гэрчилгээ", href: "#" },
    { label: "Түгээмэл асуулт", href: "#" },
    { label: "Дэмжлэг", href: "#contact" },
  ],
}

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=tg8MFB48Pew",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111111" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative bg-[#111111] pt-20">
      {/* Top Border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A46B]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dnf4kmkrx/image/upload/noynborkh_jejga4"
                    alt="Ноён Борх ХХК лого"
                    width={64}
                    height={64}
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-wider text-[#E8D9B5]">
                    НОЁН БОРХ ХХК
                  </div>
                  <div className="text-xs font-light tracking-wider text-[#C8A46B]">
                    Металл боловсруулалт
                  </div>
                </div>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#E8D9B5]/50">
              Монголын тэргүүлэх дээд зэрэглэлийн ган боловсруулалт ба аж үйлдвэрийн 
              барилгын компани, 2014 оноос хойш шилдэг чанарыг хүргэж байна.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-[#2B1B17] bg-[#1B1412] text-[#E8D9B5]/50 transition-all hover:border-[#C8A46B]/30 hover:text-[#C8A46B]"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#C8A46B]">
              Компани
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#E8D9B5]/50 transition-colors hover:text-[#E8D9B5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#C8A46B]">
              Үйлчилгээ
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#E8D9B5]/50 transition-colors hover:text-[#E8D9B5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#C8A46B]">
              Нөөц
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#E8D9B5]/50 transition-colors hover:text-[#E8D9B5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2B1B17] py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="text-xs text-[#E8D9B5]/40">
              © {new Date().getFullYear()} Ноён Борх ХХК. Бүх эрх хуулиар хамгаалагдсан.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-[#E8D9B5]/40 transition-colors hover:text-[#E8D9B5]">
                Нууцлалын бодлого
              </Link>
              <Link href="#" className="text-xs text-[#E8D9B5]/40 transition-colors hover:text-[#E8D9B5]">
                Үйлчилгээний нөхцөл
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}