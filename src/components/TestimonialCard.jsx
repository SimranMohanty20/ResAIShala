  import React from 'react';
  import sundar from '../assets/sundar.jpg';
  import Nick from '../assets/Nick.jpg';
  import steven from '../assets/steven.jpg';
  import jeff from '../assets/jeff.jpg';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  const TestimonialCard = () => {
    return (
      <div>
        <div className='h-[70vh] md:h-[45vh] flex ml-auto mr-auto justify-center items-center bg-background'>
          <div className=' max-w-[1100px] w-full px-0 py-[30] my-auto'>
            <div className="test  mx-0 my-auto">
              <div className="body">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                >
                  <SwiperSlide className=''>
                    <div className="wrapper flex flex-col sm:flex-row sm:px-[30px] sm:py-[60px] items-center gap-[60px] px-0 py-[30px] ">
                      <div className="thumbnail w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] relative">
                        <img className='w-[150px] h-[200px] rounded-xl border-2 border-gray-300 object-cover' src={sundar} alt="Sundar Pichai" />
                      </div>
                      <div className="side relative pt-[15px] flex flex-col items-end">
                        <p className='fira-sans-semibold text-[22px] mb-[30px] leading-2 px-10 sm:px-0'>" Artificial intelligence will have a more profound impact on humanity than fire, electricity and the internet "</p>
                        <div className="name relative">
                          <h4 className='fira-sans-semibold text-[22px] text-primary'>Sundar Pichai</h4>
                          <p className='fira-sans-medium text-[12px] text-right'>CEO, Google (Alphabet)</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="wrapper flex flex-col sm:flex-row sm:px-[30px] sm:py-[60px] items-center gap-[60px] px-0 py-[30px] ">
                      <div className="thumbnail w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] relative">
                        <img className='w-[150px] h-[200px] rounded-xl border-2 border-gray-300 object-cover' src={Nick} alt="Nick Bostrman" />
                      </div>
                      <div className="side relative pt-[15px] flex flex-col items-end">
                        <p className='fira-sans-semibold text-[22px] mb-[30px] leading-2 px-10 sm:px-0'>" Machine Intelligence Is the last Invention that humanity will ever need to make "</p>
                        <div className="name relative">
                          <h4 className='fira-sans-semibold text-[22px] text-primary'>Nick Bostrom</h4>
                          <p className='fira-sans-medium text-[12px] text-right'>Philosopher</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="wrapper flex flex-col sm:flex-row sm:px-[30px] sm:py-[60px] items-center gap-[60px] px-0 py-[30px] ">
                      <div className="thumbnail w-[150px] sm:w-[300px] h-[150px] sm:h-[200px] relative">
                        <img className='w-[150px] h-[200px] rounded-xl border-2 border-gray-300 object-cover' src={steven} alt="steven hawkins" />
                      </div>
                      <div className="side relative pt-[15px] flex flex-col items-end">
                        <p className='fira-sans-semibold text-[22px] mb-[30px] leading-2 px-10 sm:px-0'>" Success in creating Al would be the biggest event in human history. Unfortunately, it might also be the last, unless we learn how to avoid the risks "</p>
                        <div className="name relative">
                          <h4 className='fira-sans-semibold text-[22px] text-primary'>Steven Hawkins</h4>
                          <p className='fira-sans-medium text-[12px] text-right'>Physicist and Cosmologist</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="wrapper flex flex-col sm:flex-row sm:px-[30px] sm:py-[60px] items-center gap-[60px] px-0 py-[30px] ">
                      <div className="thumbnail w-[150px] sm:w-[400px] h-[150px] sm:h-[200px] relative">
                        <img className='w-[150px] h-[200px] rounded-xl border-2 border-gray-300 object-cover' src={jeff} alt="Jeff Bezos" />
                      </div>
                      <div className="side relative pt-[15px] flex flex-col items-end">
                        <p className='fira-sans-semibold text-[22px] mb-[30px] leading-2 px-10 sm:px-0'>" We're at the beginning ofa golden age of AI and Recent advancements have already led to invention that previously lived in the realm
                        of science fiction — and we've only scratched the surface of what's possible "</p>
                        <div className="name relative">
                          <h4 className='fira-sans-semibold text-[22px] text-primary'>Jeff Bezos</h4>
                          <p className='fira-sans-medium text-[12px] text-right'>American businessman</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Add more SwiperSlide components for additional testimonials */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default TestimonialCard;
