import Link from "next/link";

const posts = [
    { slug: "react", title: "React Dasar" },
    { slug: "nextjs", title: "Next.js Mantap" },
]

export default function BlogPage() {
    return (
        <main>
            <h1>Blog</h1>
            {posts.map((post) => (

                <Link href={`/blog${post.slug}`}>{post.title}</Link>
            ))}
        </main>
    )
}
