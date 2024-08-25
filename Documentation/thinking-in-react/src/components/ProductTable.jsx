import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";


export default function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategory
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  