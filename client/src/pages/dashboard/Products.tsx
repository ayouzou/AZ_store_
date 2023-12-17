import { useState } from 'react';
import Layout from '../../components/layouts/Layout'
import ProductList from '../../components/widgets/products/ProductList';
import CreateProduct from '../../components/widgets/products/CreateProduct';


const Products = () => {
  const [isCreateProductOpen, setIsCreateProductOpen] = useState(false);
  const openCreateProduct = () => {
    setIsCreateProductOpen(true);
  };
  const closeCreateProduct = () => {
    setIsCreateProductOpen(false);
  };
  return (
    <Layout>
      <button onClick={openCreateProduct} className='p-3 rounded-md text-white m-2 bg-slate-500'>New Product</button>
      <div>
        {isCreateProductOpen ? (<CreateProduct onClose={closeCreateProduct} />) : <ProductList />}
      </div>
    </Layout>
  )
}

export default Products