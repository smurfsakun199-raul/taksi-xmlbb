import { Metadata } from "next"
import Contact from "@/app/components/Contact";


export const metadata: Metadata = {
    title: 'Contact Pelawak',
    description: 'Bagaimana agar dapat menghubungi kontak pada website? ',
    keywords: ["WhatsApp kontak", "portfolio estetik", "portfolio sederhana", "Apa itu portfolio?", "contoh website yang keren", "10 contoh website tercepat", "Bagaimana mencapai skor 100% pada website?"],
}

export default function ContactPage() {
    return <Contact />
}

