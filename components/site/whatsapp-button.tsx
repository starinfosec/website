"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  const whatsappNumber = "+918669361239" 
  const whatsappMessage = "Hello StarInfoSec, I'd like to know more about your services."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 glass-button-primary p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}
