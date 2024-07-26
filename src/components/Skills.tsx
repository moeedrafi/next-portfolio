const Skills = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-10 underline underline-offset-8">
        Skills
      </h1>

      <div className="flex flex-col gap-5">
        <div className="flex items-center flex-col gap-3">
          <h4 className="text-lg font-semibold text-center">Languages</h4>
          <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-1">
            <p className="text-sm">JavaScript TypeScript</p>
            <p className="text-sm">ReactJS NextJS</p>
            <p className="text-sm">React Native</p>
          </div>
        </div>

        <hr />

        <div className="flex flex-col items-center gap-3">
          <h4 className="text-lg font-semibold">Libraries</h4>
          <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-1">
            <p className="text-sm">React Hook Form Zod</p>
            <p className="text-sm">React Query</p>
            <p className="text-sm">TailwindCSS Framer Motion</p>
            <p className="text-sm">Material UI Bootstrap</p>
          </div>
        </div>

        <hr />

        <div className="flex flex-col items-center gap-3">
          <h4 className="text-lg font-semibold">Tools</h4>
          <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-1">
            <p className="text-sm">Node NPM Yarn</p>
            <p className="text-sm">Vite Git</p>
            <p className="text-sm">Supabase Firebase</p>
          </div>
        </div>

        <hr />

        <div className="flex flex-col items-center gap-3">
          <h4 className="text-lg font-semibold">Soft Skills</h4>
          <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-1">
            <p className="text-sm">Problem Solving</p>
            <p className="text-sm">Decision Making</p>
            <p className="text-sm">Excellent Communication</p>
            <p className="text-sm">Team Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
