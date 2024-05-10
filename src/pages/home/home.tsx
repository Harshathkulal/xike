const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center m-4 gap-2">
        <p className="font-medium">Lifestyle Running Shoes</p>
        <h1 className="text-5xl font-extrabold">EXTRA-ORDINARY</h1>
        <p className="font-medium text-gray-800 mt-6">
          Meet the latest collection of retro running inspired shoes.The
          unlikely heroes of your easiest styling hack.
        </p>
        <div className="flex gap-2 mt-4">
          <a
            href="/shoe"
            className="rounded-full bg-black text-white font-medium px-4 p-1.5 hover:bg-gray-700"
          >
            Buy It
          </a>
          <a
            href="/shoe"
            className="rounded-full bg-black text-white font-medium px-4 p-1.5 hover:bg-gray-700"
          >
            Style It
          </a>
        </div>
      </div>

      <div className="flex justify-center w-screen m-2">
        <div className="flex overflow-x-auto gap-6 p-4">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_598,c_limit/023cd51d-143f-4242-8845-4f52eaa89cc6/nike-just-do-it.jpg"
            alt="Image 1"
            className="w-64 h-64 object-cover rounded-lg"
          />
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_598,c_limit/73c4a613-c354-4bd5-9df8-e0cc7705c467/nike-just-do-it.jpg"
            alt="Image 2"
            className="w-64 h-64 object-cover rounded-lg"
          />
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_598,c_limit/2d16fd38-f931-4ea7-8e9f-e39322c50186/nike-just-do-it.jpg"
            alt="Image 3"
            className="w-64 h-64 object-cover rounded-lg"
          />
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_598,c_limit/618f306d-5c1a-4b42-8b0a-77650c1928de/nike-just-do-it.jpg"
            alt="Image 4"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center m-4 gap-2">
          <p className="font-medium">Just In</p>
          <h1 className="text-5xl font-extrabold">AIR MAX ON</h1>
          <p className="font-medium text-gray-800 mt-6">
            Step into the unreal Worlds of Sneakers.
          </p>
          <div className="flex gap-2 mt-4">
            <a
              href="/shoe"
              className="rounded-full bg-black text-white font-medium px-4 p-1.5 hover:bg-gray-700"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
