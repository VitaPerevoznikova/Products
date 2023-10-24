import css from './Product.module.css';

export const Product = ({
  id,
  title,
  price,
  discount,
  handleDeleteProduct,
  openModal,
}) => {
  const productBg = discount ? '#97e605' : '#f9bf04';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <img
        className={css.productImg}
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width="640"
      />
      <h2>{title}</h2>
      {discount ? (
        <h3 className={css.discountBage}>Discount: {discount}$</h3>
      ) : (
        <p className={css.apology}>
          Sorry, but discount on this type of product has expired!
        </p>
      )}
      <p>Price:{price}$</p>
      <button className={css.productAddToCartBtn} type="button">
        Add to cart
      </button>
      <button
        className={css.productAddToCartBtn}
        onClick={() => openModal({ title, price, discount })}
        type="button"
      >
        See the details
      </button>
      <button
        onClick={() => handleDeleteProduct(id)}
        className={css.productAddToCartBtn}
        type="button"
      >
        {' '}
        &times;
      </button>
    </div>
  );
};
