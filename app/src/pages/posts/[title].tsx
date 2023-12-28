import { useRouter } from "next/router";
import { useState } from "react";
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm";

const Template = () => {
  const router = useRouter();
  //get the title from the hyperlink in the browser
  const { title } = router.query;
  const [content, setContent] = useState("");

  //filter the first rendered 'title' from 'router.query' (/posts/[title]) that is 'undefined'
  if (!title) {
    return;
  }

  // Fetch content directly from the GitHub repo
  fetch(
    `https://raw.githubusercontent.com/bheeeet/writemind/main/app/public/scrolls/${title}`
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      setContent(data);
    });


  return (
    <div>
      <h1>{title}</h1>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
    
  );
};

export default Template;
