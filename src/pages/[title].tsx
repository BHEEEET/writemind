import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Template = () => {
  const router = useRouter();
  const { title } = router.query;
  const [content, setContent] = useState("");

  const link = `https://raw.githubusercontent.com/KRKBHEET/writemind/main/public/posts/${title}`;
  console.log(router.query)

  console.log(link)

  useEffect(() => {
    // Fetch content directly from the GitHub repo
    fetch(link)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setContent(data);
      });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
};

export default Template;
