import { useEffect, useState } from "react";

const TitleList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch(
        `https://api.github.com/repos/KRKBHEET/writemind/contents/public/posts`,
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
  }, []);

  //get content
  //https://raw.githubusercontent.com/KRKBHEET/writemind/main/public/posts/hello.md

  return (
    <ul className="bord">
      {posts.map((post, index) => {
        const idx = index;

        return (
            <li>
              <a href={`/${post.name}`}>{post.name}</a>
            </li>
        );
      })}
    </ul>
  );
};

export default TitleList;
