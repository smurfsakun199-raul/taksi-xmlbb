'use client';
import Reveal from "../hooks/Reveal";

export default function About() {

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
            </section>
        </main>
    )
}

