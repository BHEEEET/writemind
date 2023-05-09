const TitleList = () => {
  fetch(`https://api.github.com/repos/KRKBHEET/writemind/contents/public/posts`, {
    'headers': {
      'Authorization': process.env.GITHUB_ACCES_TOKEN
    }
  })
    .then((response) => response.json())
    .then((GitPosts) => {
      console.log(GitPosts)

    });


    return (
      <>
      <ul>
        <li><a href="/">{}</a></li>
      </ul>
      </>
    );
  };
  
  export default TitleList;