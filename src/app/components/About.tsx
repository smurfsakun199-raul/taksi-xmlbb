'use client';
import { RefreshCwOff } from "lucide-react";
import Reveal from "../hooks/Reveal";

export default function About() {

    // Reveal Tag
    Reveal();

    return (
        <main className="max-w-1210px margin-auto">
            <section aria-labelledby="About-bacot" className="reveal pad-bl-20px pad-top-48px pad-0-14px">
                <div className="glow tolol-blue-old"></div>
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 id="project-bacot" className="font-size-3rem glow-text box-sdw-0-2-6px-dark-blue">About</h1>
                    <p className="font-size-14px pad-btm-10px">Apakah ada info tentang Author Tolol ini?</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
                <div className="pos-rel sec-visible flex flex-direc-clm jus-c-c align-itm-inherit pad-top-10px gap-24px">
                    <div className="glow-w400-h100px tolol-blue-old-top-r-0-10ps"></div>
                    <div className="pos-rel pad-btm-20px">
                        <div className="flex jus-c-c gap-10px pad-btm-10px">
                            <RefreshCwOff />
                            <span>Error Author</span>
                        </div>
                        <div className="pad-btm-40px">
                            <div className="glow-w400-h100px tolol-blue-top-l-10-10ps"></div>
                            <h2 id="bacot-title" className="font-size-3-5rem txt-align-c pad-btm-20px">Detail info tentang Author tidak ditemukan</h2>
                            <p className="txt-align-c">Tidak ada deskripsi spesifik.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}