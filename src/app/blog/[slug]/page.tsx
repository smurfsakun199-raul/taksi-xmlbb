import { posts } from "@/src/data/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return {
        title: `Blog ${slug}`,
        description: 'Gimana biar website terlihat sangat cepat dan estetik? Lihat contoh desain website kami & temukan referensi serta inspirasi kamu disini,yuk gas!',
        keywords: ["portfolio estetik", "Website lucu dan ngakak", "bagaimana portfolio yang estetik?", "website dengan skor 100& pada semua aspek", "contoh website terkeren"]
    }
}

function getPost(slug: string) {
    return posts.find((prop) => prop.slug === slug);
}

export default async function RumahBadut({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPost(slug)
    if (!post) return notFound()
    return (
        <main>
            <article className="flex flex-direc-clm jus-c-c align-itm-c">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </article>
        </main>
    )
}