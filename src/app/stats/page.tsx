import { ChartPie } from "lucide-react";

export const metadata = {
    title: 'Stats PortFolio',
    description: 'Cara agar website mendapatkan performa penuh dan maksimal gimana? temukan hal menarik & eksplorasi website kami kuy!',
    keywords: ["spped website", "performa pada website", "desain website yang cepat dan estetik"]
}

export default function Stats() {
    return (
        <main className="max-w-1210px margin-auto">
            <section aria-labelledby="stats-bacot" className="pad-bl-20px pad-top-48px pad-0-14px">
                <div className="glow tolol-blue-old-btm-r-10-10ps"></div>
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 id="stats-bacot" className="font-size-3rem glow-text box-sdw-0-2-6px-dark-blue">Stats</h1>
                    <p className="font-size-14px pad-btm-10px">Statistik pada web ini bagaimana?</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
                <div className="flex jus-c-c align-itm-c gap-10px pad-top-10px pad-btm-10px">
                    <ChartPie />
                    <span>Stats in Project</span>
                </div>
                <div className="pad-btm-40px pos-rel">
                    <div className="glow tolol-blue-top-l-10-10ps"></div>
                    <h2 id="bacot-title" className="font-size-3-5rem txt-align-c pad-btm-20px">Statistik Website paling <span className="glow-text">Sampah</span> juga sangat biasa dan Tidak <span className="glow-text">Menarik</span></h2>
                    <p className="txt-align-c">Data analisis ini mungkin sangat tepat sehingga mungkin membuat anda tidak kembali pada website ini dikarenakan fakta yang menghilangkan harapan anda.</p>
                </div>
            </section>
        </main>
    )
}

