const Experience = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-2xl font-bold mb-10 underline underline-offset-8">
        Experience
      </h1>

      <div className="flex flex-col px-5 md:px-20">
        <h4 className="text-lg mb-2 underline underline-offset-8">
          HeadStarter AI
        </h4>

        <p className="text-sm font-light text-gray-400 mb-5">
          July 2024 - Present
        </p>
        <p className="text-gray-200 font-light">
          Developed 5+ AI apps using Next.js, OpenAI, Pinecone, and Stripe API.
          Aiming for Accepted PR from an open source community.
        </p>
      </div>
    </div>
  );
};

export default Experience;
