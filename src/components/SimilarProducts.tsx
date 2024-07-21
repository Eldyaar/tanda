import { Flex, Typography } from "antd"

import ProductCard from "./ProductCard"

import { productsData } from "../sampleData"



const SimilarProducts: React.FC = () => {
   return (
      <>
         <Typography.Title level={2} style={{ textAlign: 'left', fontSize: 24 }}>Похожие товары</Typography.Title>
         <Flex justify="space-between" wrap={true}>
            {productsData.map(product => (
               <ProductCard
                  id={product.id}
                  name={product.name}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  reviews={product.reviews}
               />
            ))}
         </Flex>
      </>
   )
}

export default SimilarProducts

/**
 * <List
      grid={{ column: 4 }}
      dataSource={productsData}
      renderItem={product => (
         <List.Item style={{ margin: 0, padding: 0 }}>
            <ProductCard
               key={product.id}
               id={product.id}
               name={product.name}
               img={product.img}
               title={product.title}
               price={product.price}
               reviews={product.reviews}
            />
         </List.Item>
      )}
   />


   <Row gutter={10}>
            {productsData.map(product => (
               <Col span={8} key={product.id}>
                  <ProductCard 
                     id={product.id}
                     name={product.name}
                     img={product.img}
                     title={product.title}
                     price={product.price}
                     reviews={product.reviews}
                  />
               </Col>
            ))}
         </Row>
 */