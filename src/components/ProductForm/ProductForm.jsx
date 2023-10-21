import React, { Component } from 'react';
import css from './ProductForm.module.css';

export default class ProductForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const title = event.currentTarget.elements.title.value;
    const price = event.currentTarget.elements.price.value;
    const hasDiscount = event.currentTarget.elements.hasDiscount.checked;
    const discount = event.currentTarget.elements.discount.value;

    const productsData = {
      title,
      price: Number.parseFloat(price),
      discount: hasDiscount ? Number.parseFloat(discount) : null,
    };

    this.props.handleAddProduct(productsData);

    // console.log("Submit",productData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Title</p>
          <input type="text" name="title" />
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Prise:</p>
          <input type="text" name="price" />
        </label>
        <label className={css.formLabel}>
          <input type="checkbox" name="hasDiscount" />
          Has discount?
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Discount:</p>
          <input type="text" name="discount" />
        </label>
        <button className={css.formButton} type="submit">
          Add product
        </button>
      </form>
    );
  }
}
