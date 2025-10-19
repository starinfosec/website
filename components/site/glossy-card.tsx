"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { ReactNode } from "react"

export function GlossyCard({
  title,
  description,
  imageSrc,
  alt,
  children,
}: {
  title: string
  description?: string
  imageSrc?: string
  alt?: string
  children?: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.45 }}
      className="glass-card rounded-2xl p-6"
    >
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-xl">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt || title}
            width={640}
            height={360}
            className="w-full h-40 object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold heading-blue mb-2">{title}</h3>
      {description && <p className="opacity-85 text-sm mb-3">{description}</p>}
      {children}
    </motion.div>
  )
}
