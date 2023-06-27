import FilterableProductTable from './components/FilterableProductTable';

export default function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  return (
    <main className='m-10'>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Filterable Product Table
      </h1>

      <FilterableProductTable products={PRODUCTS} />
    </main>
  )
}