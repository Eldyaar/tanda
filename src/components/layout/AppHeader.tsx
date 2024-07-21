import { Layout, Input, Flex } from "antd"
import { SearchOutlined } from '@ant-design/icons'

import HeaderButton from "../HeaderButton"

import logo from '../../assets/images/LOGO.png'
import userLogo from '../../assets/icons/user.png'
import basketLogo from '../../assets/icons/basket.png'


const headerStyle: React.CSSProperties = {
   width: '100%',
   textAlign: 'center',
   color: '#000',
   height: 72,
   backgroundColor: '#F5F5F5',
   display: 'flex',
   alignItems: 'center',
   padding: 0,
}


const AppHeader: React.FC = () => {

   return (
      <Layout.Header style={headerStyle}>
         <div className='Container'>
            <div>
               <img src={logo} alt="logo" className='mobile:h-[36px] tablet:h-[39px] laptop:h-[48px]' />
            </div>
            <Input
               size="small"
               placeholder="Искать на UNO"
               prefix={<SearchOutlined className="text-[20px] text-gray-400" />}
               style={{ height: 40, width: 600, padding: '0 15px', borderRadius: 16, border: 'none' }}
            />
            <Flex justify="space-between" align="center" gap={24}>
               <HeaderButton label="Войти" icon={userLogo} link="login" />
               <HeaderButton label="Корзина" icon={basketLogo} link="login" />
            </Flex>
         </div>
      </Layout.Header>
   )
}

export default AppHeader