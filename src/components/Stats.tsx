const Stats = () => {
  return (
    <div className="stats-container md:mt-20 mt-14 md:h-96 h-80 flex-col flex items-center justify-center">
      <div className="flex md:gap-32 gap-8 px-2">
        <div className="flex flex-col items-center md:gap-3 gap-1">
          <h1 className="text-white font-bold md:text-5xl text-3xl">232</h1>
          <p className="md:text-gray-300 text-white md:font-bold">Clients</p>
        </div>
        <div className="flex flex-col items-center md:gap-3 gap-1">
          <h1 className="text-white font-bold md:text-5xl text-3xl">521</h1>
          <p className="md:text-gray-300 text-white md:font-bold">Projects</p>
        </div>
        <div className="flex flex-col items-center md:gap-3 gap-1">
          <h1 className="text-white font-bold md:text-5xl text-3xl">1453</h1>
          <p className="md:text-gray-300 text-white md:font-bold">
            Hours Of Support
          </p>
        </div>
        <div className="flex flex-col items-center md:gap-3 gap-1">
          <h1 className="text-white font-bold md:text-5xl text-3xl">32</h1>
          <p className="md:text-gray-300 text-white md:font-bold">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
