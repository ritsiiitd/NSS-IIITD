import React, { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'What is Lorem Ipsum?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    question: 'Why do we use it?',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  // Add more FAQs as needed
];

const FAQs = () => {

  const [expandedId, setExpandedId] = useState(null);

  const handleQuestionClick = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div className="flex w-[1080px] max-w-full flex-col mt-24 mb-28 max-md:my-10">
      <div className='flex felx-row'>
        <div className="text-black text-center text-[50px] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            FAQs&nbsp;
        </div>
        <div className="text-center text-red-500 text-[400%] font-semibold leading-[57px] self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            .
        </div>
      </div>
      <div className="text-black text-center text-lg font-medium leading-6 self-center max-w-[922px] mt-9 max-md:max-w-full">
        Frequently asked questions about NSS IIITD
      </div>
      
      <div>
      {faqs.map((faq) => (
        <div key={faq.id} className="items-stretch self-stretch flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        {expandedId === faq.id && (<div className="bg-black flex w-[3px] shrink-0 h-[351px] flex-col rounded-xl" ></div>)}
        {expandedId != faq.id && (<div className="bg-black flex w-[3px] shrink-0 h-8 flex-col rounded-xl" />)}
        <div className="items-stretch flex grow basis-[0%] flex-col self-start max-md:max-w-full">
        <div key={faq.id}>
          <div onClick={() => handleQuestionClick(faq.id)} className="text-black text-xl font-semibold leading-6 max-md:max-w-full">
            Is enjoying hookah the same as smoking cigarettes?
            <br />
          </div>
          {expandedId === faq.id && (
            <div className="text-zinc-800 text-lg leading-6 mt-8 max-md:max-w-full">
            No. All tobacco products have risks but comparing hookah to
            cigarettes is erroneous and misleading.
            <br />
            Hookah is heated at a temperature that is four times cooler than a
            burning cigarette and creates an aerosol that is 75% water (60%) and
            glycerol (15%). By contrast, cigarette smoke is 75% tar, carbon
            monoxide, and nicotine .
            <br />
            Most people enjoy hookah in moderation, far less often than typical
            smokers light up a cigarette. In the United States, for example, 90%
            of people who enjoy hookah do so no more than once per month. In
            comparison, the average American cigarette smoker will smoke 14
            cigarettes per day.
            <br />
            Hookah takes time to prepare and cannot be transported easily or
            used “on the go.” Hookah is a unique cultural and social experience,
            whose history, ingredients, and use make it incomparable to other
            tobacco products characterized by high frequency use.
          </div>
          )}
        </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  )
}


export default FAQs