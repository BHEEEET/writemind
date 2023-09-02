import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Template = () => {
  const router = useRouter();
  const { title } = router.query;
  const [content, setContent] = useState("");

  //filter the first rendered 'title' from 'router.query' that is 'undefined'
  if (!title) {
    return;
  }

  // Fetch content directly from the GitHub repo
  const getContent = async () => {
    const response = fetch(
      `https://raw.githubusercontent.com/KRKBHEET/writemind/main/public/scrolls/${title}`
    )
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
      });
  };
  getContent();
  console.log(title);

  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
};

export default Template;
