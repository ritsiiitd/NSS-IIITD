import React, { useEffect, useState } from 'react'

// const faqs = [
//   {
//     id: 1,
//     question: 'How can I contribute to your cause?',
//     answer: 'You can contribute by volunteering your time, making a donation, or participating in our awareness campaigns. Visit our "Get Involved" section for more details.',
//   },
//   {
//     id: 2,
//     question: 'What is the impact of blood donation?',
//     answer: 'Blood donation saves lives by providing a crucial resource for medical treatments, surgeries, and emergencies. One donation can make a significant difference.',
//   },
//   {
//     id: 3,
//     question: 'How can I apply for educational support programs?',
//     answer: 'Check our "Scholarships" page for information on available educational support programs. Follow the application guidelines and submit your application online.',
//   },
//   {
//     id: 4,
//     question: 'What health services do you provide?',
//     answer: 'We offer a range of health services, including preventive care, vaccinations, and community health programs. Explore our "Health Services" section for more details.',
//   },
//   // Add more FAQs as needed
// ];


const FAQs = () => {
  const [FAQ, setFAQ] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/faqs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setFAQ(result.data);
        } else {
          console.error('Failed to fetch faqs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFAQs();
  }, []);

  const [expandedId, setExpandedId] = useState(null);

  const handleQuestionClick = (_id) => {
    setExpandedId(_id === expandedId ? null : _id);
  };

  return (
    <div className="flex w-[1080px] max-w-full flex-col mt-24 mb-28 max-md:my-10">
      <div className='flex felx-row'>
        <div className="text-black text-center text-[50px] font-semibold leading-[57px] font-palanquin self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            FAQs&nbsp;
        </div>
        <div className="text-center text-red-500 text-[400%] font-semibold leading-[57px] font-pala self-center max-w-[922px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            .
        </div>
      </div>
      <div className="text-black text-center text-lg font-medium leading-6 self-center max-w-[922px] font-palanquin mt-9 max-md:max-w-full">
        Frequently asked questions about NSS IIITD
      </div>
      
      <div>
      {FAQ.map((faq) => (
        <div key={faq._id} className="items-stretch self-stretch flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        {expandedId === faq._id && (<div className="bg-black flex w-[3px] shrink-0 h-[150px] flex-col rounded-xl" ></div>)}
        {expandedId != faq._id && (<div className="bg-black flex w-[3px] shrink-0 h-8 flex-col rounded-xl" />)}
        <div className="items-stretch flex grow basis-[0%] flex-col self-start max-md:max-w-full">
        <div key={faq._id}>
          <div onClick={() => handleQuestionClick(faq._id)} className="text-black font-palanquin text-xl font-semibold leading-6 max-md:max-w-full">
            {faq.question}
            <br />
          </div>
          {expandedId === faq._id && (
            <div className="text-zinc-800 font-palanquin text-lg leading-8 mt-8 max-md:max-w-full">
           {faq.answer}
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