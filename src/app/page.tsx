import HeaderTolol from "./components/Header";

import {
    Compass,
    ChartNoAxesCombined,
    Dna,
    Code,
    CodeXml,
    Palette,
    Library,
    Layers,
    LayersPlus,
    Road,
    Sparkles,
    Star,
    ShieldCheck,
    SquareTerminal,
    Shuffle,
    Terminal,
    TrendingUpDown,
    MoonStar,
    WandSparkles,
} from "lucide-react";

const listYear = [
    {
        id: 1,
        title: <Shuffle className="width-18px height-18px" />,
        name: 'Flex',
        icn: <Sparkles />,
        code: 'TypeScript Xml',
        desk: 'Best dan menjadi bahasa yang sering digunakan dalam kegabutan.'
    },
    {
        id: 2,
        title: <Road className="width-18px height-18px" />,
        name: 'The Road',
        icn: <MoonStar />,
        code: 'JavaScript Xml',
        desk: 'Bahasa yang menemani perjalanan menuju ga menuju kemana mana sih.'
    },
    {
        id: 3,
        title: <Terminal className="width-18px height-18px" />,
        name: 'System Internal',
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
        icon: <TrendingUpDown />,
        name: 'Optimization',
        desc: 'Optimisasi yang diusahakan'
    },
    {
        id: 2,
        icon: <ShieldCheck />,
        name: 'Security Self',
        desc: 'Keamanan yang belum terjamin baik'
    },
    {
        id: 3,
        icon: <ChartNoAxesCombined />,
        name: 'Up Performance',
        desc: 'Sedikit peningkatan harapan'
    }
];

const roadLol = [
    {
        id: 1,
        years: 2026,
        month: 'April',
        title: 'Perjalanan menuju harapan yang tidak ada',
        desc: 'Mempertanyakan arti dari "Apakah harapan itu ada?'
    },
    {
        id: 2,
        years: 2062,
        month: 'Mei',
        title: 'Ujian yang tidak mengenal batas rasional',
        desc: 'Masa yang dimana "Mengenal apa itu harapan"'
    },
    {
        id: 3,
        years: 2099,
        month: 'November',
        title: 'Mengetahui Determinasi yang menyakitkan',
        desc: 'Kesadaran membuka jawaban terpendam.'
    },
];

const skorLol = 96;

const skillsBacot = [
    {
        id: 1,
        icn: '',
        skr: 12.4,
        skill: 'Fast UI',
        desc: 'Desain yang memberikan respon cepat mungkin.'
    },
    {
        id: 2,
        skr: 6.7,
        icn: '',
        skill: 'Optimization',
        desc: 'Penyederhanaan fleksibilitas yang tak diharapkan.'
    },
    {
        id: 3,
        skr: 3.1,
        icn: '',
        skill: 'Low Effects',
        desc: 'Kesan balik yang sangat lambat.'
    },
    {
        id: 4,
        skr: 99.3,
        icn: '',
        skill: 'Lol Skill',
        desc: 'Skill ga jelas,skip deskripsi Now!'
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
                    <div className="glow tolol-blue-old"></div>
                    <div className="flex-mx-1024px-dir-clm jus-c-c align-itm-inherit gap-24px">
                        <div className="pos-rel">
                            <div className="flex jus-c-l gap-10px pad-btm-10px">
                                <Palette />
                                <span>Experinece Style</span>
                            </div>
                            <div className="pad-btm-40px">
                                <div className="glow tolol-blue"></div>
                                <h1 id="bacot-title" className="font-size-40px pad-btm-20px">Design Portfolio dengan memadukan <span className="glow-text">Ketololan</span> yang <span className="glow-text">Unik, Rapi</span> dan <span className="glow-text">Elegan</span></h1>
                                <p>Deskripsi ini mungkin membuat anda akan menyesal jika sampai membacanya sampai selesai,dikarenakan kata yang saya gunakan merepetisi sebuah kata menjadi berulang ulang,dan akhirnya yang anda dapat hanyalah tautologi dan tak menguntungkan anda.</p>
                            </div>
                            <div className="flex pad-btm-20px">
                                <div className="pad-4-18px br-op br-radius-12px bg-blur-card">
                                    <h2 className="font-size-16px flex align-itm-c gap-10px"><Code /> Code</h2>
                                </div>
                            </div>
                            <div className="grid grid-temp-clm-r3 jus-c-c align-itm-inherit gap-20px">
                                {listYear.map((item) => (
                                    <div key={item.id} className="card-hover bg-blur-card br-radius-12px">
                                        <div className="flex align-itm-c pad-btm-10px gap-10px">
                                            {item.title}
                                            <span className="font-size-12px color-p">{item.name}</span>
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
                            <div className="glow tolol-noname"></div>
                        </div>

                        <div className="card-hover-dig-to-left bg-blur-card width-100ps">
                            <div className="">
                                <div className="flex jus-c-sb align-itm-c gap-10px pad-btm-10px">
                                    <div className="icn-circle-svg flex gap-10px">
                                        <span className="bg-blue-circle"></span>
                                        <span className="bg-cyan-circle"></span>
                                        <span className="bg-white-circle"></span>
                                    </div>
                                    <p className="font-size-12px">Art Design</p>
                                </div>
                                <div className="card flex flex-direc-clm jus-c-sb">
                                    <h2 className="font-size-12px pad-btm-10px color-p">Fokus utama</h2>
                                    <div className="flex jus-c-c pad-btm-10px gap-10px">
                                        <h3 className="font-size-18px">Design sistem tuk gaya Tolol Modern</h3>
                                        <Layers />
                                    </div>
                                    <div className="flex-mx-500px-dir-clm jus-c-sb align-itm-stretch gap-24px">
                                        {fokusBacotList.map((item) => (
                                            <div key={item.id} className="card-small-10-20px bg-dark-op">
                                                <h4>{item.name}</h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-temp-clm-r2 jus-c-c align-itm-inherit gap-10px pad-top-10px">
                                    <div className="card">
                                        <h2 className="font-size-14px color-p pad-btm-10px">WorkFlow</h2>
                                        {lolList.map((item) => (
                                            <div key={item.id} className="icn-svg-18wh flex flex-direc-clm jus-c-sb">
                                                <h3 className="font-size-16px pad-btm-10px flex align-itm-c gap-10px">{item.icon} {item.name}</h3>
                                                <p className="font-size-12px pad-btm-10px">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="card">
                                        <h2 className="font-size-14px color-p pad-btm-10px">FlowWork</h2>
                                        <div className="icn-svg-18wh flex flex-direc-clm jus-c-sb">
                                            <span className="font-size-16px pad-btm-10px"><Dna /></span>
                                            <p className="font-size-12px pad-btm-10px">Penempatan posisi yang Ideal dalam repetisi dibalik kata tiap kalimat yang menjadikan paragraf deskripsi ini berisi namun berulang.</p>                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="road-bacot" className="pad-bl-20px max-w-1210px margin-auto pad-top-48px pad-0-14px">
                    <div className="flex pad-btm-20px">
                        <div className="pad-4-18px br-op br-radius-12px bg-blur-card">
                            <h2 id="road-bacot" className="font-size-16px flex jus-c-c align-itm-c gap-10px"><Compass />Road</h2>
                        </div>
                    </div>
                    <div className="flex-mx-1024px-dir-clm jus-c-c align-itm-inherit gap-24px">
                        <div className="card bg-blur-card">
                            <h3 className="font-size-14px color-p pad-btm-20px">Portfolio</h3>
                            <h4 className="font-size-24px pad-btm-30px">Portfolio yang didesain agar anda bosan membaca setiap kalimatnya.</h4>
                            <p>Memvisualisasikan penempatan posisi yang adaptif serta fleksibel. Dengan mengimplementasikan cara ini,akan membuat anda menjadi bosan dengan harapan anda pada kami.</p>
                        </div>
                        <div className="flex-mx-764px-dir-clm gap-20px">
                            {roadLol.map((item) => (
                                <div key={item.id} className="card bg-blur-card">
                                    <div className="flex jus-c-sb align-itm-c pad-btm-10px gap-10px">
                                        <h3 className="font-size-14px color-p">{item.years}</h3>
                                        <span className="font-size-14px color-p">{item.month}</span>
                                    </div>
                                    <h4 className="font-size-16px pad-btm-20px">{item.title}</h4>
                                    <p className="font-size-12px">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="skill-bacot" className="pos-rel pad-bl-20px max-w-1210px margin-auto pad-top-48px pad-0-14px">
                    <div className="glow tolol-blue-old"></div>
                    <div className="flex pad-btm-20px">
                        <div className="pad-4-18px br-op br-radius-12px bg-blur-card">
                            <h2 id="skill-bacot" className="font-size-16px flex jus-c-c align-itm-c gap-10px"><LayersPlus />Skills</h2>
                        </div>
                    </div>
                    <div className="flex flex-direc-clm jus-c-c align-itm-c gap-24px">
                        <div className="skills-score flex jus-c-c gap-24px pad-btm-40px">
                            <div className="hover-after-effect pad-10px br-radius-50ps bg-blue-rd-c-at-0-0">
                                <strong className="font-size-40px flex jus-c-c align-itm-c br-op br-radius-50ps width-100px height-100px pad-10px bg-dark">{skorLol}</strong>
                            </div>
                            <div className="flex flex-direc-clm jus-c-c align-itm-inherit gap-10px">
                                {skillsBacot.map((item) => (
                                    <p key={item.id} className="font-size-14px">{item.skill} <strong className="font-size-16px">{item.skr}</strong></p>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-temp-clm-r4 jus-c-c gap-20px">
                            {skillsBacot.map((item) => (
                                <div key={item.id} className="card-hover bg-blur-card">
                                    <div className="flex jus-c-sb gap-20px pad-btm-20px">
                                        <h2 className="font-size-16px">{item.skill}</h2>
                                        <strong className="flex jus-c-c align-itm-c gap-10px font-size-14px"><Star className="width-18px height-18px" />{item.skr}</strong>
                                    </div>
                                    <h3 className="font-size-12px color-p">{item.desc}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/*<section aria-labelledby="skill-bacot" className="pad-bl-20px max-w-1210px margin-auto pad-top-48px pad-0-14px">
                    <div className="flex-mx-1024px-dir-clm jus-c-c align-itm-inherit gap-24px">

                    </div>
                </section>

                <footer aria-labelledby="skill-bacot" className="pad-bl-20px max-w-1210px margin-auto pad-top-48px pad-0-14px">
                    <div className="flex-mx-1024px-dir-clm jus-c-c align-itm-inherit gap-24px">

                    </div>
                </footer>*/}
            </main>
        </div >
    )
}
