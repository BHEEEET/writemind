import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Template = () => {
  const router = useRouter();
  const { title } = router.query;
  const [content, setContent] = useState("");

  useEffect(() => {
  let link;
  while(link = null){
   link = `https://raw.githubusercontent.com/KRKBHEET/writemind/main/public/scrolls/${title}`;
  }
  console.log(router.query)

  console.log(link)

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
