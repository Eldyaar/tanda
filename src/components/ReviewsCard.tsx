import { Card, Typography, Rate, Space, Flex } from "antd"

import { IReview } from "../models/models"



const ReviewsCard: React.FC<IReview> = ({ name, review_text, date }) => {
   return (
      <Card style={{ width: 387, height: 250, borderRadius: 16, backgroundColor: '#F5F5F5', position: 'relative' }}>
         <Flex justify="space-between" align="center">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <Flex vertical align="start">
               <Typography.Text style={{ fontWeight: 700, color: '#181818' }}>{name}</Typography.Text>
               <Typography.Text style={{ color: '#757575' }}>{date}</Typography.Text>
            </Flex>
            <Rate disabled allowHalf count={5} defaultValue={4} style={{ fontSize: 14, alignSelf: 'flex-start' }} />
         </Flex>
         <Space style={{ textAlign: 'left', marginTop: 8 }}>
            <Typography.Text>{review_text}</Typography.Text>
         </Space>
         <Space style={{ position: 'absolute', bottom: 20, right: 20 }}>
            <Typography.Text underline style={{ cursor: 'pointer', color: '#757575' }}>Пожаловаться на отзыв</Typography.Text>
         </Space>
      </Card>
   )
}

export default ReviewsCard
