export default function Navbar() {
  return (
    <>
      <nav className=" bg-white">
        <div className="grid grid-cols-3 py-4 mx-6">
          <div></div>
          <div className="flex justify-center">
            <h1 className="text-lg font-semibold">My To Do List</h1>
          </div>
          <div className="flex justify-end">
            <img src="#" alt="Icon Theme " />
          </div>
        </div>
      </nav>
    </>
  );
}
