export function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2" className="text-left pt-4 px-2">
                {category}
            </th>
        </tr>
    );
}