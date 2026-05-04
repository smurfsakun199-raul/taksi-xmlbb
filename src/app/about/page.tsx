import { Metadata } from "next";
import About from "@/app/about/AboutPage";

export const metadata: Metadata = {
    title: 'About Portfolio',
    description: 'Ga Mau tau tentang website cepat dan sangat ga jelas kami ? ikuti info kami selanjutnya tuk mendapatkan inspirasi.',
    keywords: ['cara website cepat', 'boost performa website', 'cek performa website', 'statistik website cepat dan stabil', 'website dengan kecepatan tinggi'],
};

export default function AboutPage() {
    return <About />
}