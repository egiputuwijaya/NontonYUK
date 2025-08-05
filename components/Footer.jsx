export default function Footer() {
  return (
    <div className="py-10" style={{ backgroundColor: "#222831" }}>
      <div className="flex flex-row justify-around px-10 gap-10 md:gap-0 md:px-40">
        <div className="hidden md:block">
          <div className="flex flex-col max-w-md ">
            <h1 className="text-2xl font-semibold">
              Nonton<span className="text-red-700">Yuk</span>
            </h1>
            <p>
              Discover handpicked movie recommendations based on your mood,
              genre preferences, and trending titles no more scrolling
              endlessly.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">MENU</h1>
          <a href="" className="hover:text-red-700">
            HOME
          </a>
          <a href="" className="hover:text-red-700">
            GENDRE
          </a>
          <a href="" className="hover:text-red-700">
            ABOUT
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">GENDRES</h1>
          <a href="" className="hover:text-red-700">
            ACTION
          </a>
          <a href="" className="hover:text-red-700">
            ROMANCE
          </a>
          <a href="" className="hover:text-red-700">
            REAL LIFE
          </a>
          <a href="" className="hover:text-red-700">
            K-DRAMA
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">CONTACT</h1>
          <a href="" className="hover:text-red-700">
            FACEBOOK
          </a>
          <a href="" className="hover:text-red-700">
            INSTAGRAM
          </a>
          <a href="" className="hover:text-red-700">
            EMAIL
          </a>
          <a href="" className="hover:text-red-700">
            TIKTOK
          </a>
        </div>
      </div>
      <div className="block md:hidden py-5 px-5 ">
        <h1 className="text-2xl font-semibold text-center">
          Nonton<span className="text-red-700">Yuk</span>
        </h1>
        <p className="text-center text-xm">
          Discover handpicked movie recommendations based on your mood, genre
          preferences, and trending titles no more scrolling endlessly.
        </p>
      </div>
    </div>
  );
}
