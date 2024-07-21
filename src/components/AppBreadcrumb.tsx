import { useState } from "react";
import { Breadcrumb } from "antd"

const AppBreadcrumb: React.FC = () => {
   const [activeKey, setActiveKey] = useState<string>('3')

   const items = [
      {
         title: (
            <a
               href="#"
               style={{ color: activeKey === '1' ? '#1E90FF' : 'inherit' }}
               onClick={() => setActiveKey('1')}
            >
               Главная
            </a>
         ),
      },
      {
         title: (
            <a
               href="#"
               style={{ color: activeKey === '2' ? '#1E90FF' : 'inherit' }}
               onClick={() => setActiveKey('2')}
            >
               Бытовая техника
            </a>
         ),
      },
      {
         title: (
            <a
               href="#"
               style={{ color: activeKey === '3' ? '#1E90FF' : 'inherit' }}
               onClick={() => setActiveKey('3')}
            >
               Кондиционеры
            </a>
         ),
      },
   ]

   return <Breadcrumb style={{ marginBottom: 32 }} items={items} />
}

export default AppBreadcrumb
