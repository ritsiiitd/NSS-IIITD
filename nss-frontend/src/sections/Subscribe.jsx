import React from 'react'

const Subscribe = () => {
  return (
    <div className="flex w-full max-w-[1573px] flex-col items-stretch mt-24 mb-20 max-md:max-w-full max-md:my-10">
    <div className='flex flex-row justify-center'>
      <div className="text-black text-center text-[200%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Our Latest &nbsp;
      </div>
      
      <div className="text-black text-center text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Blog&nbsp;
      </div>
      <div className="text-black text-center text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Posts&nbsp;
      </div>
      <div className="text-center text-red-500 text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        .
      </div>
    </div>
    <div className="text-black text-center text-lg font-medium leading-6 self-center max-w-[922px] mt-9 max-md:max-w-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure facere magnam voluptas officiis provident aut pariatur temporibus nemo error iusto beatae voluptate doloremque saepe itaque iste, perferendis exercitationem! Modi!
      <br />
    </div>
    <div className="mt-16 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full mx-auto pb-12 rounded-md max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              srcSet="data:image/jpeg;base64,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"
              className="aspect-[1.68] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
            <div className="flex flex-col items-stretch mt-9 pl-7 pr-16 max-md:max-w-full max-md:px-5">
              <div className="text-black text-2xl font-semibold leading-7">
                The culture of hookah
              </div>
              <div className="text-zinc-600 text-lg font-medium leading-5 max-w-[421px] mt-11 max-md:mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente ratione delectus libero ipsum voluptate officia doloremque totam esse, minus itaque nobis iusto, ex tenetur. Officia maxime consequuntur est vitae.
              </div>
              <div className="flex items-stretch justify-between gap-5 mt-24 max-md:mr-1 max-md:mt-10">
                <div className="text-zinc-500 text-sm font-medium leading-4">
                  May 20th 2020
                </div>
                <div className="text-neutral-700 text-sm font-bold leading-4">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full mx-auto pb-12 rounded-md max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              srcSet="data:image/jpeg;base64,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"
              className="aspect-[1.68] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
            <div className="flex flex-col items-stretch mt-9 pl-7 pr-16 max-md:max-w-full max-md:px-5">
              <div className="text-black text-2xl font-semibold leading-7">
                Tools, Resources, and Education
              </div>
              <div className="text-zinc-600 text-lg font-medium leading-5 max-w-[421px] mt-10 max-md:mt-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum animi quod non laborum numquam adipisci facere porro illo amet nemo commodi error voluptatem ad natus quibusdam soluta, repudiandae dolore unde.
              </div>
              <div className="flex items-stretch justify-between gap-5 mt-24 max-md:mr-1 max-md:mt-10">
                <div className="text-zinc-500 text-sm font-medium leading-4">
                  May 20th 2020
                </div>
                <div className="text-neutral-700 text-sm font-bold leading-4">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full mx-auto pb-12 rounded-md max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              srcSet="data:image/jpeg;base64,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"
              className="aspect-[1.68] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
            <div className="flex flex-col items-stretch mt-9 pl-7 pr-16 max-md:max-w-full max-md:px-5">
              <div className="text-black text-2xl font-semibold leading-7">
                Few Words From Director’s Desk
              </div>
              <div className="text-zinc-600 text-lg font-medium leading-5 max-w-[421px] mt-11 max-md:mt-10">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </div>
              <div className="flex items-stretch justify-between gap-5 mt-24 max-md:mr-1 max-md:mt-10">
                <div className="text-zinc-500 text-sm font-medium leading-4">
                  May 20th 2020
                </div>
                <div className="text-neutral-700 text-sm font-bold leading-4">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Subscribe