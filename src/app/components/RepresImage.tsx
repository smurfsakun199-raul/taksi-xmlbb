import Image from "next/image";

export default function SectionImage() {
    return (
        <section>
            <div className="pad-10px">
                <Image
                    src="/wallhome.jpg"
                    alt="HomePage Preview Portfolio"
                    width={1920}
                    height={1080}
                    priority
                    quality={75}
                />
            </div>
        </section>
    )
}
