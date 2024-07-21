import { Modal, Divider, Row, Col, Button, Typography } from 'antd'

interface ICharacteristicsInfoModalProps {
   modal: boolean
   setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CharacteristicsInfoModal: React.FC<ICharacteristicsInfoModalProps> = ({ modal, setModal }) => {
   return (
      <Modal
         title="Характеристики"
         open={modal}
         onCancel={() => setModal(false)}
         footer={[
            <div key="footer" style={{ display: 'flex', justifyContent: 'center', gap: 30, alignItems: 'center', width: '100%' }}>
               <Typography.Text style={{ color: '#1E90FF', fontSize: 22, fontWeight: 700, textAlign: 'center' }}>32500 сом</Typography.Text>,
               <Button type="primary">
                  В корзину
               </Button>,
            </div>
         ]}
      >
         <Divider style={{ borderWidth: '1px' }} />
         <Row style={{ width: '100%', marginBottom: 10 }}>
            <Col span={12}>
               <Typography.Text style={{ color: '#757575' }}>Способ установки</Typography.Text>
            </Col>
            <Col span={12}>
               <Typography.Text>Способ установки</Typography.Text>
            </Col>
         </Row>
         <Row style={{ width: '100%', marginBottom: 10 }}>
            <Col span={12}>
               <Typography.Text style={{ color: '#757575' }}>Напряжение</Typography.Text>
            </Col>
            <Col span={12}>
               <Typography.Text>Напряжение</Typography.Text>
            </Col>
         </Row>
         <Row style={{ width: '100%', marginBottom: 10 }}>
            <Col span={12}>
               <Typography.Text style={{ color: '#757575' }}>Цвет</Typography.Text>
            </Col>
            <Col span={12}>
               <Typography.Text>Цвет</Typography.Text>
            </Col>
         </Row>
         <Row style={{ width: '100%', marginBottom: 10 }}>
            <Col span={12}>
               <Typography.Text style={{ color: '#757575' }}>Материал</Typography.Text>
            </Col>
            <Col span={12}>
               <Typography.Text>Материал</Typography.Text>
            </Col>
         </Row>
         <Row style={{ width: '100%', marginBottom: 10 }}>
            <Col span={12}>
               <Typography.Text style={{ color: '#757575' }}>Управление</Typography.Text>
            </Col>
            <Col span={12}>
               <Typography.Text>Управление</Typography.Text>
            </Col>
         </Row>
         <Divider style={{ borderWidth: '1px', marginTop: '100px' }} />

      </Modal>
   )
}

export default CharacteristicsInfoModal
