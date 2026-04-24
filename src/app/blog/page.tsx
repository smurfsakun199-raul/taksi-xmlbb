import Link from "next/link";

const posts = [
    { id: 1, slug: "react", title: "React Dasar" },
    { id: 2, slug: "nextjs", title: "Next.js Mantap" },
]

export default function BlogPage() {
    return (
        <main>
            <h1>Blog</h1>
            {posts.map((post) => (
                <Link key={post.id} href={`/blog${post.slug}`}>{post.title}</Link>
            ))}
        </main>
    )
}
