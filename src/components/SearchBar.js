export function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form className="mt-4 mb-2 flex flex-col gap-2 min-w-full">
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}
                className="border border-gray-200 rounded-lg p-2
                min-w-full"
            />
            <label className="flex gap-2">
                <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => onInStockOnlyChange(e.target.checked)}
                className="border border-gray-200 rounded-lg p-2" />

                <span>Only show products in stock</span>
            </label>
        </form>
    );
}