import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share
        <br className="" />
        <span className="orange_gradient text-center">AI-Powered prompts</span>
      </h1>
      <p className="desc text-center">
        PromptGPT is an open-source AI prompting tool for mordern world to
        discover, create and share creative prompts
      </p>

      {/* {feed} */}
      <Feed/>
    </section>
  );
};

export default Home;
