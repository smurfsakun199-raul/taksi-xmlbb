'use client';
import Reveal from "@/app/hooks/Reveal";

export default function Contact() {

    // Reveal Tag
    Reveal();

    return (
        <main className="max-w-1210px margin-auto">
            <section aria-labelledby="project-bacot" className="reveal pad-bl-20px pad-top-48px pad-0-14px">
                <div className="glow tolol-blue-old"></div>
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 id="project-bacot" className="font-size-3rem glow-text box-sdw-0-2-6px-dark-blue">Contact</h1>
                    <p className="font-size-14px pad-btm-10px">Apa yang perlu dilakukan tuk menghubungi kontak website?</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
            </section>
        </main>
    )
}
