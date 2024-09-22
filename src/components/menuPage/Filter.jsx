export default function Filter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
