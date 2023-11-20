import React from 'react'

const About = () => {
  return (
    <div className="bg-white flex flex-col items-stretch px-20 max-md:px-5">
      <div className="ml-5 mr-4 mt-20 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-1.5 max-md:max-w-full max-md:mt-10">
              <div className="justify-center text-black text-base font-medium leading-6 uppercase max-md:max-w-full">
                Who we are
              </div>
              <div className="justify-center text-black text-7xl font-semibold leading-[86px] whitespace-nowrap mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
      About us
    </div>
              <div className="justify-center text-black text-lg font-medium leading-6 mt-9 max-md:max-w-full">
                Welcome to the National Hookah Community Association
                &quot;NHCA&quot;. We are a diverse alliance of businesses from
                all ends of the Hookah experience, from manufacturers and
                importers of molasses, pipes and accessories to distributors,
                Hookah lounges and Hookah/shisha retail stores.
                <br />
                <br />
                If you are a Hookah business, please join us and help us defend
                and protect your business, our culture and community.
                <br />
                <br />
                If you are an interested member of the public, welcome. Please
                enjoy learning about Hookah and its unique culture and practice.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7b68b3f-4f4d-4153-9290-627e9556a089?apiKey=4859d0a663c849e9a0d08dc27c002b3b&"
              className="aspect-[1.51] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="text-white text-center text-lg font-semibold leading-10 justify-center items-center bg-black w-[164px] max-w-full ml-5 mt-12 mb-20 px-5 py-1 rounded-[200px] self-start max-md:ml-2.5 max-md:my-10">
        Read more
      </div>
    </div>
  )
}

export default About