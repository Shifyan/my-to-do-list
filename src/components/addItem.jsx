export default function AddItem() {
  return (
    <>
      <div className="flex justify-center">
        <label htmlFor="add-item" className="me-2">
          Tambah List :
        </label>
        <input
          type="text"
          name="add-item"
          className="border rounded-md w-60 h-18 border-gray-200 hover:border-gray-500"
        />
        <button
          type="submit"
          className="ms-5 p-3 bg-white hover:bg-gray-300 transition-colors duration-500 rounded"
        >
          Tambah
        </button>
      </div>
    </>
  );
}
