import Head from "next/head";
import posts from "../posts.json";

const post=(props) => {
if(props.post!==undefined)
{
return(
    <>
<Head>
    <title>post - Blogging boy</title>
</Head>
<main>
    <h1>{props.post.title}</h1>
<p>{props.post.content}</p>
</main>
</>
)
}
};

post.getInitialProps=({query}) => {
return {post:posts[query.id]}
};

export default post;
