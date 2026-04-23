import HeaderTolol from "./components/Header";

import {
    Circle,
    ChartNoAxesCombined,
    Dna,
    Code,
    Fan,
    CodeXml,
    Palette,
    Library,
    Layers2,
    PaintBucket,
    Radar,
    Sun,
    Moon,
    Sparkles,
    ShieldCheck,
    SquareTerminal,
    TrendingUpDown,
    MoonStar,
    WandSparkles,
} from "lucide-react";

const listYear = [
    {
        id: 1,
        title: <Code className="width-18px height-18px" />,
        icn: <Sparkles />,
        code: 'TypeScript Xml',
        desk: 'Best dan menjadi bahasa yang sering digunakan dalam kegabutan.'
    },
    {
        id: 2,
        title: <Code className="width-18px height-18px" />,
        icn: <MoonStar />,
        code: 'JavaScript Xml',
        desk: 'Bahasa yang menemani perjalanan menuju ga menuju kemana mana sih.'
    },
    {
        id: 3,
        title: <Code className="width-18px height-18px" />,
        icn: <SquareTerminal />,
        code: 'Shell Script',
        desk: 'Ga perlu dijelasin lah ya, pasif aktif inimah di Linux wkwkw.'
    }
];

const fokusBacotList = [
    {
        id: 1,
        name: 'Visual'
    },
    {
        id: 2,
        name: 'Creative'
    },
    {
        id: 3,
        name: 'Style'
    }
];

const lolList = [
    {
        id: 1,
        title: 'WorkFlow',
        icon_1: <TrendingUpDown />,
        icon_2: <ChartNoAxesCombined />,
        icon_3: <ShieldCheck />,
        name_1: 'Optimization',
        name_2: 'Security Self',
        name_3: 'Up Performance',
        desc_1: 'Optimisasi yang diusahakan',
        desc_2: 'Keamanan yang belum terjamin baik',
        desc_3: 'Sedikit peningkatan harapan'
    },
    {
        id: 2,
        title: 'FlowWork',
        icon_1: <Dna />,
        desc_1: 'Penempatan posisi yang Ideal dalam repetisi dibalik kata tiap kalimat yang menjadikan paragraf deskripsi ini berisi namun berulang.'
    }
];

export default function AlahBacot() {
    /* useState ama useEffect */

    /* ------------------ Pembatas biar sedikit bersih😏 ------------------ */

    return (
        <div>
            <HeaderTolol />
            <main>
                <section aria-labelledby="bacot-title" className="pad-bl-20px max-w-1210px margin-auto pad-top-48px pad-0-14px">
                    <div className="glow tolol-pink"></div>
                    <div className="glow tolol-purple"></div>
                    <div className="flex-mx-1024px-dir-clm jus-c-c align-itm-inherit gap-24px">
                        <div>
                            <div className="flex jus-c-l gap-10px pad-btm-10px">
                                <Palette />
                                <span>Experinece Style</span>
                            </div>
                            <div className="pad-btm-40px">
                                <h1 id="bacot-title" className="font-size-40px pad-btm-20px">Design Portfolio dengan memadukan <span className="glow-text">Ketololan</span> yang <span className="glow-text">Unik, Rapi</span> dan <span className="glow-text">Elegan</span></h1>
                                <p>Deskripsi ini mungkin membuat anda akan menyesal jika sampai membacanya sampai selesai,dikarenakan kata yang saya gunakan merepetisi sebuah kata menjadi berulang ulang,dan akhirnya yang anda dapat hanyalah tautologi dan tak menguntungkan anda.</p>
                            </div>
                            <div className="flex pad-btm-20px">
                                <div className="pad-10px br-op br-radius-12px">
                                    <h2 className="font-size-18px flex align-itm-c gap-10px"><CodeXml className="width-1px height-8px" /> Code</h2>
                                </div>
                            </div>
                            <div className="grid grid-temp-clm-r3 jus-c-c align-itm-inherit gap-20px">
                                {listYear.map((item) => (
                                    <div key={item.id} className="card-hover br-radius-12px">
                                        <div className="flex align-itm-c pad-btm-10px gap-10px">
                                            {item.title}
                                            <span className="font-size-12px color-p">Code</span>
                                        </div>
                                        <div className="icn-svg-18wh flex jus-c-l align-itm-c pad-btm-10px gap-10px">
                                            {item.icn}
                                            <h3 className="font-size-18px">{item.code}</h3>
                                        </div>
                                        <div>
                                            <p className="font-size-14px">{item.desk}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card-hover-dig-to-left width-100ps">
                            <div className="">
                                <div className="flex jus-c-sb align-itm-c gap-10px pad-btm-10px">
                                    <div className="icn-circle-svg flex gap-10px">
                                        <span className="bg-red-circle"></span>
                                        <span className="bg-yellow-circle"></span>
                                        <span className="bg-green-circle"></span>
                                    </div>
                                    <p className="font-size-12px">Art Design</p>
                                </div>
                                <div className="card grid jus-c-l">
                                    <h2 className="font-size-12px pad-btm-10px color-p">Fokus utama</h2>
                                    <div className="flex jus-c-c pad-btm-10px gap-10px">
                                        <h3 className="font-size-18px">Design sistem tuk gaya Tolol Modern</h3>
                                        <Layers2 />
                                    </div>
                                    <div className="flex-mx-500px-dir-clm jus-c-l align-itm-stretch gap-24px">
                                        {fokusBacotList.map((item) => (
                                            <div key={item.id} className="card-small-10-20px bg-dark-op">
                                                <h4>{item.name}</h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-temp-clm-r2 jus-c-c align-itm-inherit gap-10px pad-top-10px">
                                    {lolList.map((item) => (
                                        <div key={item.id} className="card">
                                            <h2 className="font-size-14px color-p pad-btm-10px">{item.title}</h2>
                                            <div className="icn-svg-18wh flex flex-direc-clm jus-c-sb">
                                                <h3 className="font-size-16px pad-btm-10px">{item.icon_1} {item.name_1}</h3>
                                                <p className="font-size-12px pad-btm-10px">{item.desc_1}</p>
                                                <h3 className="font-size-16px pad-btm-10px">{item.icon_2} {item.name_2}</h3>
                                                <p className="font-size-12px pad-btm-10px">{item.desc_2}</p>
                                                <h3 className="font-size-16px pad-btm-10px">{item.icon_3} {item.name_3}</h3>
                                                <p className="font-size-12px pad-btm-10px">{item.desc_3}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="collection-bacot" className="pad-bl-20px">
                    <div className="flex jus-c-c align-itm-c gap-10px max-width-1000">

                    </div>
                </section>

                <section aria-labelledby="style-bacot" className="pad-bl-20px">
                    <div className="flex jus-c-c align-itm-c gap-10px max-width-1000">

                    </div>
                </section>

                <section aria-labelledby="Experiments-bacot" className="pad-bl-20px">
                    <div className="flex jus-c-c align-itm-c gap-10px max-width-1000">

                    </div>
                </section>

                <footer aria-labelledby="footer-bacot" className="pad-bl-20px">
                    <div className="flex jus-c-c align-itm-c gap-10px max-width-1000">

                    </div>
                </footer>
            </main>
        </div >
    )
}
