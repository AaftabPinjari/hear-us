import Head from 'next/head'

const Question = ({ ques, info }) => {
  return (



    <div class="p-4 lg:w-1/3">
      <div class="h-full  bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

        <h1 class="title-font sm:text-2xl text-xl font-medium text-[#2C5282] mb-3">{ques}</h1>
        <p class="leading-relaxed  mb-3">{info}</p>


      </div>
    </div>




  );
};

function FAQ() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <section class="text-gray-600 body-font pt-5 bg-[#E5E7EB]">
        <h1 className="title-font text-center  sm:text-5xl text-4xl mb-1 font-medium text-[#2C5282]">FAQ</h1>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Question
              ques=" What is Hear Us ?"
              info=" HearUS is an online emotional support system which provides trained
          listeners so that you can share your problems and issues without being
          judged.You can also get consultation from licensed psychologists."
            />
            <Question
              ques=" Who are the listeners?"
              info=" Listeners are trained volunteers under the supervision of Psychologists , majorly someone who belongs to this field."
            />
            <Question
              ques="Can I become a listener?"
              info=" Yes, anyone who wants to help others can volunteer as a listener by just filling out a form."
            />
            <Question
              ques=" How do I book a session?"
              info=" (i) Click on the ‘Book Now’ button.
(ii) Fill out the form
(iii) Choose the duration for the session
(iv) Click on ‘Pay Now’."
            />
            <Question
              ques=" Is there any other way of booking a session or to connect to a listener?"
              info=" Yes, you can book a session or connect to a listener using WhatsApp by clicking on the Whatsapp button."
            />
            <Question
              ques="What are the charges ?"
              info="Its totally free of cost if you want to connect to a listener. Online counselling sessions with licensed psychologists are paid."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
