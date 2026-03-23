function Input({ label, textarea }) {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className=" w-full p-1 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      ) : (
        <input
          type="text"
          className="w-full p-1 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}

export default Input;
