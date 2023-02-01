import Head from "next/head"
import Link from "next/link";
import posts from "./posts.json";

const blog=() => {
return (
    <>
    <Head>
<title>My blogs - create and manage all posts</title>
    </Head>
<main>
<h1>My blog</h1>
<p>Create, Find and manage all your blog post here</p>
<Link href="#">Create new post</Link>
<h2>All posts</h2>
<p>Below are the posts that you created</p>
<ul>
{
Object.entries(posts).map((post,index) => {
return <li key={index}><Link href="/blog/[id]" as={"/blog/"+post[0]}>{post[1].title}</Link></li>
})}
</ul>
</main>
</>
)

};



export default blog;