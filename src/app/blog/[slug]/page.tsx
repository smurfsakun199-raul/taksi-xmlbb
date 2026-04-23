export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: `blog ${params.slug}`,
        description: `Artikel ini adalah.... ${params.slug}`
    }
}

async function bacotPost(slug: string) {
    return {
        title: `bloglol ${slug}`,
        content: "Artikel ini adalah tentang kebacotan yang dibuat berulang sehingga percuma anda membacanya."
    }
}

export default async function Rumah(
    { params }: { params: { slug: string } }
) {
    const post = await bacotPost(params.slug)

    return (
        <main>
            <article>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </article>
        </main>
    )
}

