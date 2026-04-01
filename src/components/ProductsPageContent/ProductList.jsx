import ProductItem from "../ProductItem/ProductItem";
import { PRODUCTS } from "../../data/productsData";

export default function ProductList() {
  return (
    <section
      className="pg-products"
      id="productos-lista"
      aria-labelledby="pg-products-title"
    >
      <div className="pg-container">
        <div className="pg-products__top pg-products__top--simple">
          <div>
            <span className="pg-kicker">Catálogo</span>
            <h1 id="pg-products-title" className="pg-sectionTitle">
              Productos
            </h1>
          </div>
        </div>

        <div className="pg-products__grid">
          {PRODUCTS.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              variant="catalog"
              meta={
                product.materials?.length
                  ? product.materials.join(" · ")
                  : "Terminación textil"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
