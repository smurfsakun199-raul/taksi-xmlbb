/*import Wallpaper from "@/src/app/components/RepresImage";*/
import HomePage from "@/app/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'HomePage Portfolio',
    description: 'Gimana biar website terlihat sangat cepat dan estetik? Lihat contoh desain website kami & temukan referensi serta inspirasi kamu disini,yuk gas!',
    keywords: ["portfolio estetik", "Website lucu dan ngakak", "bagaimana portfolio yang estetik?", "website dengan skor 100& pada semua aspek", "contoh website terkeren"]
}

export default function AlahBacot() {
    return <HomePage />
}
