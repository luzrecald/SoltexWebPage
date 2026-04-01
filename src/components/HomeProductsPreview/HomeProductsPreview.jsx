import { motion as Motion } from "framer-motion";
import ProductItem from "../ProductItem/ProductItem";
import { PRODUCTS } from "../../data/productsData";
import "./HomeProductsPreview.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/**
 * Purpose:
 * Acts as the homepage teaser for "Catálogo" / "Productos", giving visitors a
 * fast scan of the offer and pushing them into product-detail pages.
 */
export default function HomeProductsPreview() {
  return (
    <section
      className="products-preview"
      aria-labelledby="products-preview-title"
    >
      <div className="products-preview__inner">
        <header className="products-preview__header">
          <span className="products-preview__kicker">Catálogo</span>
          <h2
            id="products-preview-title"
            className="products-preview__title-force"
          >
            Productos
          </h2>
        </header>

        <Motion.div
          className="products-preview__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PRODUCTS.map((product) => (
            <Motion.article
              key={product.id}
              className="products-preview__item"
              variants={cardVariants}
            >
              <ProductItem
                product={product}
                variant="preview"
                meta={
                  product.materials?.length
                    ? product.materials.join(" · ")
                    : "Terminación textil"
                }
                mediaStyle={{
                  "--pos": product.cardPosition || "center center",
                }}
              />
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
