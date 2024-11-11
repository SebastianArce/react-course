export default function Input({ onCancel }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm w-3/5 mx-auto">
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={onCancel}
          className="text-gray-700 hover:text-gray-500"
        >
          Cancel
        </button>
        <button className="text-white hover:text-green-700 bg-gray-700 px-6 py-2 rounded-md">
          Save
        </button>
      </div>
      <form action="#">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 mb-1 font-bold">
            TITLE
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-2 py-1 border-b focus:outline-none focus:border-gray-800 bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 mb-1 font-bold"
          >
            DESCRIPTION
          </label>
          <textarea
            id="description"
            className="w-full px-2 py-1 border-b focus:outline-none focus:border-gray-800 bg-gray-200"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="dueDate"
            className="block text-gray-600 mb-1 font-bold"
          >
            DUE DATE
          </label>
          <input
            type="date"
            id="dueDate"
            className="w-full px-2 py-1 border-b focus:outline-none focus:border-gray-800 bg-gray-200"
          />
        </div>
      </form>
    </div>
  );
}
