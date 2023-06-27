export function ProductRow({ product }) {
    const name = product.stocked
                ? product.name
                : <span className="text-red-500">{product.name}</span>
    return (
        <tr>
            <td className="px-2">{name}</td>
            <td className="px-2">{product.price}</td>
        </tr>
    );
}