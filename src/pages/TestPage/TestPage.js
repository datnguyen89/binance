import React, { useEffect } from 'react'
import { TestPageWrapper } from './TestPageStyled'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { Button, Col, Row } from 'antd'
import { productListState } from '../../recoil/productState'
import { addToCart, cartState, cartTotalSelector } from '../../recoil/cartState'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import testStore from '../../stores/testStore'
import {
  filterExecutionTypeState,
  listExecutionTypeState,
  listExecutionTypeStateFiltered, myMultipliedState, myNumberState,
} from '../../recoil/testState'
import { PAGES } from '../../constant'

const TestPage = props => {
  // region props, hook, state =================
  const navigate = useNavigate()
  let [urlSearchParams] = useSearchParams()
  const location = useLocation()
  let urlParams = useParams()
  const productList = useRecoilValue(productListState)
  const [cart, setCart] = useRecoilState(cartState)
  const resetCard = useResetRecoilState(cartState)
  const total = useRecoilValue(cartTotalSelector)
  const listExecutionType = useRecoilValue(listExecutionTypeState)
  const [filter, setFilter] = useRecoilState(filterExecutionTypeState)
  const resetFilter = useResetRecoilState(filterExecutionTypeState)
  const resetListExecutionType = useResetRecoilState(listExecutionTypeState)

  const number = useRecoilValue(myNumberState)
  const multipliedNumber = useRecoilValue(myMultipliedState(100))

  const {
    listNumberOfExecutionZero,
    listNumberOfExecutionAvailable,
  } = useRecoilValue(listExecutionTypeStateFiltered)
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
  const handleClickFilter = () => {
    let newFilter = { ...filter }
    newFilter.Status = -2
    setFilter(newFilter)
    testStore.getListExecutionTypeGrouped()
  }

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================
  useEffect(() => {
    // http://localhost:3009/test?id=123
    console.log('urlSearchParams', urlSearchParams.get('id'))
  }, [urlSearchParams])
  useEffect(() => {
    // http://localhost:3009/test?id=123
    console.log('location', location)
  }, [location])
  useEffect(() => {
    // http://localhost:3009/test?id=123
    console.log('urlParams', urlParams)
  }, [urlParams])

  useEffect(() => {
    testStore.getUserProfile()
    testStore.getListExecutionTypeGrouped()
    testStore.getCommonProperty()
  }, [])
  useEffect(() => {
    return () => {
      resetFilter()
      resetListExecutionType()
    }
  }, [])

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
      <Button onClick={() => resetCard()}>Reset</Button>
      <ul>
        {
          cart.map(item =>
            <li key={item.id}>
              {item.product.title} - {item.quantity}
            </li>,
          )
        }
      </ul>
      <div>
        {
          JSON.stringify(filter)
        }
      </div>
      <Button onClick={() => navigate(PAGES.TEST_CLONE)}>Go to test clone</Button>
      <Button onClick={handleClickFilter}>Chua duyet</Button>
      <div>
        {
          JSON.stringify(listExecutionType)
        }
      </div>
      <br />
      <div>
        {
          JSON.stringify(listNumberOfExecutionZero)
        }
      </div>
      <br />
      <div>
        {
          JSON.stringify(listNumberOfExecutionAvailable)
        }
      </div>
      <div>{number}</div>
      <div>{multipliedNumber}</div>
    </TestPageWrapper>
  )
}

TestPage.propTypes = {}

export default TestPage