export const metadata = {
    title: 'Project Web',
    description: 'Bagaimana cara membuat website yang cepat dan keren? yuk lihat projek yang kami buat dan temukan inspirasi buat projek kamu!',
    keyword: ["cara buat projek website", "optimisasi website agar cepat", "cara style yang bagus buat website"]
}

const listProjek = [
    {
        id: 1,
        pers: '13%',
        title: 'Tujuan',
        name: 'Menentukan tujuan website',
        desc: 'Faktor utama dalam aktifitas ialah Memiliki Tujuan. 13% orang megikuti arus tanpa tujuan.'
    },
    {
        id: 2,
        pers: '72%',
        title: 'Niat',
        name: 'Aktifitas diawali dengan Niat',
        desc: 'Niat juga alasan projek yang dibuat jadi nyata. Data rata rata 72% saat aktifitas memiliki niat.'
    },
    {
        id: 3,
        pers: '31.5%',
        title: 'Doa',
        name: 'Doa sebagai fondasi projek',
        desc: 'Selain Niat,doa merupakan faktor terpenting. 31.5% berdoa tuk melakukan aktifitas mungkin.'
    },
    {
        id: 4,
        pers: '9.2%',
        title: 'Aksi',
        name: 'Aksi tuk melangkah',
        desc: 'Tanpa Aksi,Tujuan,niat dan doa akan sia sia. Rata rata 9.2% beraksi dan berani ambil resiko.'
    },
    {
        id: 5,
        pers: '94.9%',
        title: 'Mimpi',
        name: 'Kenyataan yang sangat ironi',
        desc: 'Bangun dari tidur yang indah memimpikan website yang bagus tanpa Ngapa ngapain, itulah 94.9% orang saat ini.'
    }
];

export default function Projects() {
    return (
        <main className="max-w-1210px margin-auto">
            <section aria-labelledby="project-bacot" className="pad-bl-20px pad-top-48px pad-0-14px">
                <div className="glow tolol-blue-old"></div>
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 id="project-bacot" className="font-size-40px glow-text box-sdw-0-2-6px">Projects</h1>
                    <p className="font-size-14px pad-btm-10px">Bagaimana cara tuk membuat website?</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
                <div className="grid grid-temp-clm-r4 jus-c-c align-itm-inherit pad-top-48px pad-btm-20px gap-48px">
                    {listProjek.map((item) => (
                        <div key={item.id} className="pad-20-20px">
                            <div className="flex jus-c-sb align-itm-c pad-btm-20px">
                                <h2 className="font-size-16px color-p">{item.title}</h2>
                                <span>{item.pers}</span>
                            </div>
                            <h3 className="font-size-20px pad-btm-10px">{item.name}</h3>
                            <p className="font-size-14px">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="horiz-effect-right"></div>
            </section>
            <section aria-labelledby="kesimpulan-projek-bacot" className="pad-bl-20px pad-top-48px pad-0-14px">
                <div className="flex jus-c-c align-itm-c">
                    <h2 id="kesimpulan-projek-bacot" className="font-size-24px">Kesimpulan</h2>
                </div>

            </section>
        </main>
    )
}
