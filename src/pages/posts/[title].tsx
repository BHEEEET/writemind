import { useRouter } from "next/router";
import { useState } from "react";
import * as fs from "fs";

const Template = () => {
  const router = useRouter();
  //get the title from the hyperlink in the browser
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
  const file = fs.readFile("public/scrolls/hello.md", "utf-8", function(err, data){
    console.log(data)
  });

  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
};

export default Template;
