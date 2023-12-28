import { useEffect, useState } from "react";

const TitleList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //get titles from /posts in the github repo
    fetch(
      `https://api.github.com/repos/bheeeet/writemind/app/contents/public/scrolls`,
      {
        headers: {
          Authorization: process.env.GITHUB_ACCES_TOKEN,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });

    //get content directly from the github repo
    //https://raw.githubusercontent.com/bheeeet/writemind/main/public/posts/hello.md
    fetch(
      `https://raw.githubusercontent.com/bheeeet/writemind/main/app/public/scrolls/hello.md`
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <ul className="bord">
      {posts.map((post, index) => {
        const idx = index;

        return (
          <li>
            <a
              href={`/posts/${post.name}`}
            >
              {post.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TitleList;
