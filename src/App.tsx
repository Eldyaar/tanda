import { Layout, Spin, Result } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { useGetProductDataQuery } from './store/api'

import AppHeader from './components/layout/AppHeader'
import AppContent from './components/layout/AppContent'
import AppFooter from './components/layout/AppFooter'


const App: React.FC = () => {
  const { isLoading, error } = useGetProductDataQuery()

  if (isLoading) {
    return (
      <Spin
        fullscreen
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 48,
              top: '20px'
            }}
            spin
          />
        }
      />
    )
  }

  if (error) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    )
  }

  return (
    <Layout>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
  )
}

export default App
