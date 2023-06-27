import {ProductCategoryRow} from './ProductCategoryRow';
import {ProductRow} from './ProductRow';
import {Th} from './Th';

export function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (filterText && product.name.indexOf(filterText) === -1 ) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }

        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );

        lastCategory = product.category;
    });
    return (
        <table className="table min-w-full">
            <thead className="bg-gray-200 border-b rounded-lg">
                <tr>
                    <Th title="Name" />
                    <Th title="Price" />
                </tr>
            </thead>

            <tbody>{rows}</tbody>
        </table>
    );
}