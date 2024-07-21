import { useState } from "react"
import { Flex, Image, Typography, Space, Rate, Button } from "antd"
import { UserOutlined } from '@ant-design/icons'

import { useGetProductDataQuery } from "../store/api"

import CharacteristicsInfoModal from "./CharacteristicsInfoModal"

import productImage from '../assets/images/product.png'



const ProductDetailInfo: React.FC = () => {
   const [modal, setModal] = useState<boolean>(false)
   const { data } = useGetProductDataQuery()

   return (
      <>
         <Flex gap={20} justify="space-between">
            <Flex gap={20}>
               <Flex vertical align="center" justify="space-between">
                  <div className="w-[82px] h-[116px] rounded-[4px] bg-[#F5F5F5] flex items-center justify-center">
                     <Image style={{ borderRadius: '3px' }} width={66} height={94} src={productImage} />
                  </div>
                  <div className="w-[82px] h-[116px] rounded-[4px] bg-[#F5F5F5] flex items-center justify-center">
                     <Image style={{ borderRadius: '3px' }} width={66} height={94} src={productImage} />
                  </div>
                  <div className="w-[82px] h-[116px] rounded-[4px] bg-[#F5F5F5] flex items-center justify-center">
                     <Image style={{ borderRadius: '3px' }} width={66} height={94} src={productImage} />
                  </div>
                  <div className="w-[82px] h-[116px] rounded-[4px] bg-[#F5F5F5] flex items-center justify-center">
                     <Image style={{ borderRadius: '3px' }} width={66} height={94} src={productImage} />
                  </div>
               </Flex>
               <div className="w-[386px] h-[500px] rounded-[16px] bg-[#F5F5F5] flex items-center justify-center">
                  <Image style={{ borderRadius: '6px' }} width={323} height={460} src={productImage} />
               </div>
            </Flex>

            <div className="flex flex-col w-[367px] h-full justify-between">
               <Space>
                  <Typography.Title level={3} style={{ fontWeight: 700, fontSize: 24, textAlign: 'left' }}>{data?.barcode?.category.name}</Typography.Title></Space>
               <Space>
                  <div className="w-[24px] h-[24px] rounded-full bg-[#DEDEDE] flex items-center justify-center">
                     <UserOutlined className="text-gray-600" />
                  </div>
                  <Typography.Text className="font-medium">{data?.barcode?.title}</Typography.Text>
               </Space>
               <Space style={{ marginBottom: 10 }}><Typography.Text className="text-[#757575] font-medium">Бренд</Typography.Text></Space>
               <Space>
                  <Rate disabled count={1} defaultValue={1} /><span className="font-medium">4.9</span>
                  <Typography.Text underline className="text-[#757575]">60 отзывов</Typography.Text>
               </Space>
               <Space style={{ marginTop: 15 }}>
                  <Typography.Title level={3} style={{ fontSize: 18 }}>Описание</Typography.Title>
               </Space>
               <Typography.Text style={{ textAlign: 'left' }}>{data?.barcode?.description}</Typography.Text>
               <Space style={{ marginTop: 50 }}>
                  <Typography.Text onClick={() => setModal(true)} underline className="font-medium cursor-pointer">Смотреть характеристики</Typography.Text>
               </Space>
            </div>

            <div className='h-[180px] flex flex-col gap-[10px] px-3 py-4 rounded-[16px] border border-gray-200 ml-6'>
               <Space>
                  <Typography.Text style={{ color: '#1E90FF', fontSize: 24, fontWeight: 700 }}>32500 сом</Typography.Text>
                  <Typography.Text style={{ color: '#757575', fontSize: 20 }} delete>35000 сом</Typography.Text>
               </Space>
               <Button type="primary" className="rounded-[16px] py-4 font-medium">Купить сейчас</Button>
               <Button type="primary" className="rounded-[16px] py-4 text-[#1E90FF] font-medium bg-[#E9F4FF] hover:bg-[#E9F4FF]">Оформить в кредит</Button>
            </div>
         </Flex >

         <CharacteristicsInfoModal modal={modal} setModal={setModal} />

      </>
   )
}

export default ProductDetailInfo