import { posts } from "@/src/data/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return {
        title: `blogTolol ${slug}`,
        description: `Artikel tolol ni mah ${slug}`
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