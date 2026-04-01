import { Link } from "react-router-dom";

const VARIANT_CLASSES = {
  preview: {
    link: "products-preview__link",
    media: "products-preview__media",
    body: "products-preview__content",
    title: "products-preview__name",
    meta: "products-preview__meta",
    cta: "products-preview__cta",
  },
  catalog: {
    link: "pg-productCard",
    media: "pg-productCard__media",
    body: "pg-productCard__body",
    title: "pg-productCard__title",
    meta: "pg-productCard__meta",
    cta: "pg-productCard__cta",
  },
};

const DEFAULT_PRODUCT_IMAGE = "/product1.productsData.webp";

export default function ProductItem({
  product,
  variant = "preview",
  meta,
  mediaStyle,
}) {
  const classes = VARIANT_CLASSES[variant];
  const imageSrc = product.image || product.gallery?.[0] || DEFAULT_PRODUCT_IMAGE;

  return (
    <Link to={`/productos/${product.id}`} className={classes.link}>
      <div className={classes.media}>
        <img
          src={imageSrc}
          alt={product.title}
          loading="lazy"
          style={mediaStyle}
        />
      </div>

      <div className={classes.body}>
        <h3 className={classes.title}>{product.title}</h3>

        {meta ? <p className={classes.meta}>{meta}</p> : null}

        <span className={classes.cta}>Ver producto</span>
      </div>
    </Link>
  );
}
