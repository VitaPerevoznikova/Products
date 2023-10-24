import { Component } from 'react';
import css from './App.module.css';
import { Product } from './Products/Product';
import Section from './Section/Section';
import ProductForm from './ProductForm/ProductForm';
import { nanoid } from 'nanoid';
import Modal from './Modal/Modal';

const productsData = [
  {
    id: '1',
    title: 'Tacos With Lime M',
    price: 5.85,
    discount: 15,
  },
  {
    id: '2',
    title: 'Tacos With Lime XXL',
    price: 10.99,
    discount: 30,
  },
  {
    id: '3',
    title: 'Tacos With Lime XL',
    price: 6.99,
    discount: null,
  },
  {
    id: '4',
    title: 'Tacos S',
    price: 1.5,
    discount: null,
  },
  {
    id: '5',
    title: 'Tacos With Cheese',
    price: 3.4,
    discount: 0.2,
  },
];

export class App extends Component {
  state = {
    counterValue: 0,
    shoeMessage: false,
    page: 1,
    products: productsData,
    isOpenModal: false,
    modalData: null,
  };


  // Local Storeg 
  componentDidMount(){
    const stringifiedProducts = localStorage.getItem('products');
    const parsedProduct = JSON.parse(stringifiedProducts) ?? productsData;

    this.setState({product: parsedProduct});
  }

  componentDidUpdate(prevProps, prevState) {
   if(prevState.product !== this.state.products){
    const stringifiedProducts = JSON.stringify(this.state.products);
     localStorage.setItem('products', stringifiedProducts);
    console.log('Yes, update ');
   }
  }

  // Btn See details
  openModal = someDataModal => {
    this.setState({
      isOpenModal: true,
      modalData: someDataModal,
    });
  };
  closeModal = () => {
    this.setState({
      isOpenModal: false,
      modalData: false,
    });
  };

  // Counter
  handleIncrement = () => {
    // N 1

    this.setState({ counterValue: this.state.counterValue + 1 });

    // N 2
    // this.setState(state => {
    //   return {
    //     counterValue: state.counterValue + 1
    //   }
    // }
    // )
  };

  handleDecrement = () => {
    if (this.state.counterValue === 0) {
      alert('Please, stop');
      return;
    }
    this.setState({ counterValue: this.state.counterValue - 1 });
  };

  handleDeleteProduct = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  // Form
  handleAddProduct = productsData => {
    const hasDuplicates = this.state.products.some(
      product => product.title === productsData.title
    );

    if (hasDuplicates) {
      alert(`Oops, product with title '${productsData.title}' already exists.`);
      return;
    }
    const finalProduct = {
      ...productsData,
      id: nanoid(),
    };
    //  N 1
    this.setState({
      products: [...this.state.products, finalProduct],
    });
    // N 2
    // this.setState(prevState => ({
    //   products: [...prevState.products, finalProduct],
    // }))
  };

  render() {
    const sortedProducts = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );

    return (
      <div>
        <div className={css.containerForm}>
          <Section title="Product Form">
            <ProductForm handleAddProduct={this.handleAddProduct} />
          </Section>
        </div>
        <Section title="Product List">
          <div className={css.productList}>
            {sortedProducts.map(product => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  handleDeleteProduct={this.handleDeleteProduct}
                  openModal={this.openModal}
                />
              );
            })}
          </div>
        </Section>
        Counter
        <Section>
          <h1>Hello FSON89🥳</h1>

          <button onClick={this.handleDecrement}>Decrement</button>
          <b>Counter value: {this.state.counterValue}</b>
          <button onClick={this.handleIncrement}>Increment</button>

          {this.state.counterValue >= 5 && (
            <div>Congrats,you win discount 20% OFF - RT765</div>
          )}
        </Section>

        {this.state.isOpenModal && (
          <Modal 
          closeModal={this.closeModal} 
          modalData={this.state.modalData} />
        )}
      </div>
    );
  }
}
