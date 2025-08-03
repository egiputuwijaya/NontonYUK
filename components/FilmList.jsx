export default function FilmList() {
  return (
    <div className="bg-black px-40 py-10">
      <div className="flex flex-col justify-center">
        <div
          className="border border-white py-2 rounded-3xl "
          style={{ backgroundColor: "#252525" }}
        >
          <form action="">
            <input
              type="text"
              placeholder="Search Film or Gendres"
              className="text-white text-xl px-8 focus:outline-none"
            />
          </form>
        </div>


        
      </div>
    </div>
  );
}
