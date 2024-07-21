import { Typography, Space, Rate, Carousel, Button, Flex } from "antd"

import ReviewsCard from "./ReviewsCard"

import { reviewsData } from "../sampleData"

import editIcon from '../assets/icons/Frame (1).png'


const Reviews: React.FC = () => {
   const carouselSettings = {
      arrows: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
   }

   return (
      <div className="my-12 w-full flex flex-col items-start">
         <Typography.Title level={2} style={{ textAlign: 'left', fontSize: 24 }} underline>Отзывы</Typography.Title>
         <Flex justify="space-between" align="center" style={{ marginTop: 10, marginBottom: 15, width: '100%' }}>
            <Space>
               <span className="font-medium text-lg">4.9</span><Rate count={5} defaultValue={5} />
               <Typography.Text className="text-[#757575] text-lg pl-2">60 отзывов</Typography.Text>
            </Space>
            <Space className="cursor-pointer">
               <div><img src={editIcon} alt='edit-icon' /></div>
               <Typography.Text className="text-[16px] font-medium hover:underline">Написать отзыв</Typography.Text>
            </Space>
         </Flex>

         <div style={{ width: '100%', overflow: 'hidden' }}>
            <Carousel {...carouselSettings} dots={false}>
               {reviewsData.map(review => (
                  <ReviewsCard key={review.id} id={review.id} name={review.name} date={review.date} review_text={review.review_text} />
               ))}
            </Carousel>
         </div>
         <Button className="bg-[#E9F4FF] rounded-[16px] border-none text-[#1E90FF] mt-6 px-8">Смотреть все отзывы</Button>
      </div>
   )
}

export default Reviews