// vendors
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export const loaderBlog = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { posts }
}

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { posts }: any = useLoaderData();

  const handleChange = (e: any) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }

  // if (loading) return <div className="text-center">Loading...</div>
  // if (error) return <div className="text-center">Error</div>

  return (
    <>
      <h1>Blog</h1>
      <input type="text" value={searchParams.get("filter") || ""} onChange={handleChange} className="form-control my-3" placeholder="Search..." />
      { 
        posts.filter((item: any) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = item.title.toLowerCase();
          return name.includes(filter.toLowerCase());
        }).map((post: any, index: number) => (
            <Link to={`/blog/${post.id}`} className="card mb-3 link-underline link-underline-opacity-0" key={post.id}>
              <div className="card-body">
                <h5 className="card-title">{index + 1}. {post.title}</h5>
                <p className="card-text thumbnail-text">{post.body}</p>
              </div>
            </Link>
          )
        )
      }
    </>
  )
}

export default Blog