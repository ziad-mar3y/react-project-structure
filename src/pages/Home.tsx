import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/post.sapi";

function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
      {data?.map((post) => (
        <article className="flex h-full flex-col rounded-lg border p-4 shadow-sm" key={post.id}>
          <h3 className="mb-2 min-h-14 text-lg font-semibold">{post.title}</h3>
          <p className="min-h-24 text-sm leading-6 text-gray-600">{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default Home;
