import { Layout, Menu } from "antd"
import { MenuOutlined } from '@ant-design/icons'

import AppBreadcrumb from "../AppBreadcrumb"
import ProductDetailInfo from "../ProductDetailInfo"
import SimilarProducts from "../SimilarProducts"
import Reviews from "../Reviews"

import { TMenuItem } from "../../models/models"

const contentStyle: React.CSSProperties = {
   textAlign: 'center',
   minHeight: 'calc(100vh - 60px)',
   backgroundColor: '#fff',
   padding: 0,
}


const AppContent: React.FC = () => {
   const items: TMenuItem[] = [
      {
         key: '1',
         label: 'Все категории',
         icon: <MenuOutlined />,
      },
      {
         key: '2',
         label: 'Стать продавцом',
      },
      {
         key: '3',
         label: 'О нас',
      },
      {
         key: '4',
         label: 'Курьерам',
      },
      {
         key: '5',
         label: 'Контакты',
      },
      {
         key: '6',
         label: 'Доставка',
      },
   ]

   return (
      <Layout.Content style={contentStyle}>
         <div className="Container">
            <div className="flex flex-col w-full pb-[200px]">
               <Menu style={{ borderBottom: 'none' }} mode="horizontal" items={items} />
               <AppBreadcrumb />
               <ProductDetailInfo />
               <Reviews />
               <SimilarProducts />
            </div>
         </div>
      </Layout.Content>
   )
}

export default AppContent
