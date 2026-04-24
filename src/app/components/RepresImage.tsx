import Image from "next/image";

export default function SectionImage() {
    return (
        <section>
            <div className="">
                <Image
                    src="/darkMode.png"
                    alt="HomePage Preview Portfolio"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    )
}
