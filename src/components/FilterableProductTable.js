import {SearchBar} from "./SearchBar";
import {ProductTable} from './ProductTable'
import { useState } from "react";

export default function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className="flex flex-col gap-4 justify-between items-start">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}