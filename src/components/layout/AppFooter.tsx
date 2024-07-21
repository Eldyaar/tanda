import { Layout, Flex, Space, Typography } from "antd"
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'


import logo from '../../assets/images/LOGO.png'

const footerStyle: React.CSSProperties = {
   textAlign: 'center',
   color: '#000',
   padding: '40px 0',
   backgroundColor: '#F5F5F5',
}


const AppFooter: React.FC = () => {
   return (
      <Layout.Footer style={footerStyle}>
         <div className="Container">
            <Flex className="w-full" justify="space-between" align="flex-start">
               <Flex vertical gap={24}>
                  <div>
                     <img src={logo} alt="logo" />
                  </div>
                  <Flex gap={16}>
                     <InstagramOutlined className="text-[30px]" />
                     <WhatsAppOutlined className="text-[30px]" />
                  </Flex>
               </Flex>
               <Flex vertical gap={12}>
                  <Space className="text-left"><Typography.Text className="font-bold text-[20px]">Компания</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">О нас</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">Способы оплаты</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">Доставка</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">Политика конфиденциальности</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">Персональные данные</Typography.Text></Space>
               </Flex>
               <Flex vertical gap={12}>
                  <Space className="text-left"><Typography.Text className="font-bold text-[20px]">Партнерам</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">Продавайте на UNO</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">Курьерам</Typography.Text></Space>
               </Flex>
               <Flex vertical gap={12}>
                  <Space className="text-left"><Typography.Text className="font-bold text-[20px]">Контакты</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">unokg@gmail.com</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">+996 700 000 000</Typography.Text></Space>
                  <Space className="text-left"><Typography.Text className="text-[18px]">+996 500 000 000</Typography.Text></Space>
               </Flex>
            </Flex>
         </div>
      </Layout.Footer>
   )
}

export default AppFooter
