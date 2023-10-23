// vendors
import { Link, useLoaderData } from "react-router-dom";

export const loaderData = async ({ params }: any) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if(!response.ok) throw new Error(response.statusText);
  const post = await response.json();
  return { post };
}

const BlogDetails = () => {
  const { post }: any = useLoaderData();

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className="d-flex justify-content-between pb-5">
        <Link to={`/blog/${post.id - 1}`} className="btn btn-outline-primary">Back</Link>
        <Link to={`/blog/${post.id + 1}`} className="btn btn-outline-primary">Forward</Link>
      </div>

      <Link to="/blog">Back to blog</Link>
    </>
  )
}

export default BlogDetails;