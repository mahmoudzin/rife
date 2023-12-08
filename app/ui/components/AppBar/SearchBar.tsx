export default function SearchBar() {
  return (
    <div className="min-w-full lg:min-w-[200px]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none bg-transparent dark:text-white focus:border-primary"
      />
    </div>
  );
}
