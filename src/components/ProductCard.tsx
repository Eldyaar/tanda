import { Card, Space, Typography, Image, Flex, Rate, Button } from "antd"

import { IProduct } from "../models/models"


const ProductCard: React.FC<IProduct> = ({ name, title, reviews, price, img }) => {
   return (
      <Card style={{ width: 300, borderRadius: 16, border: 'none' }}>
         <div className="bg-[#F5F5F5] px-[30px] py-[20px] rounded-[16px]">
            <Image preview={false} width='100%' height={329} src={img} />
         </div>
         <Flex vertical gap={8} className="mt-[16px]">
            <Space className="w-full text-left">
               <Typography.Text className="font-medium text-[16px]">{name}</Typography.Text>
            </Space>
            <Space className="w-full text-left">
               <Typography.Text className="text-[#949494] text-[16px]">{title}</Typography.Text>
            </Space>
            <Space>
               <Rate disabled allowHalf count={5} defaultValue={reviews} className="text-[14px]" />
               <span className="text-[14px] text-[#030303] font-medium">{reviews} отзывов</span>
            </Space>
            <Space>
               <Typography.Text className="text-[18px] font-bold">{price} сом</Typography.Text>
            </Space>
            <Button type="primary" className="rounded-[16px] w-full text-white py-4 mt-[5px]">Купить сейчас</Button>
         </Flex>
      </Card>
   )
}

export default ProductCard
