import React from 'react'
import { TestPageWrapper } from './TestPageStyled'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button, Col, Row } from 'antd'
import { productListState } from '../../recoil/productState'
import { addToCart, cartState, cartTotalSelector } from '../../recoil/cartState'

const TestPage = props => {
  // region props, hook, state =================
  const productList = useRecoilValue(productListState)
  const [cart, setCart] = useRecoilState(cartState)
  const total = useRecoilValue(cartTotalSelector)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product)
    setCart(newCart)
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion
  return (
    <TestPageWrapper>
      <h1>ProductList</h1>
      {
        productList.map(product =>
          <Row align={'middle'} key={product.id}>
            <Col span={4}>
              {product.title} - {product.price} VND
            </Col>
            <Col span={4}>
              <Button
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>,
        )
      }
      <h1>CartList: {total} VND</h1>
      <ul>
        {
          cart.map(item =>
            <li key={item.id}>
              {item.product.title} - {item.quantity}
            </li>,
          )
        }
      </ul>

    </TestPageWrapper>
  )
}

TestPage.propTypes = {}

export default TestPage