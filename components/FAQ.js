import React from "react";
import { GoPlus } from "react-icons/go";

const FAQ = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="w-[85%] mx-auto py-12">
        <div
          className="md:text-4xl text-2xl font-bold mb-4 text-primary flex items-center justify-center"
          data-aos="flip-down"
        >
          Frequently Asked Questions
        </div>
          <div className="flex flex-col items-start justify-start max-w-full w-full">
            <div className="max-w-screen-xl px-5 2xl:px-10 py-4">
              <div className="grid divide-neutral-200 text-primary text-justify">
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        {" "}
                        Do I need any prior trading experience to join the
                        classes?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      No, you do not need any prior trading experience to join the classes. Our comprehensive program is specifically designed to accommodate complete beginners as well as those with some trading background. We start with fundamental concepts like understanding the stock market, how exchanges work, and basic terminology. As the course progresses, we gradually introduce more advanced strategies including technical analysis, fundamental analysis, risk management, and portfolio diversification. Our instructors ensure that everyone can follow along regardless of their starting point. We provide additional support materials, practice sessions, and one-on-one guidance to help beginners catch up quickly. Many of our most successful students started with zero knowledge, proving that dedication and proper guidance are more important than prior experience.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>What if I miss a class?</span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      All our live classes are recorded in high quality and made available to enrolled students within 24 hours. This means if you miss a class due to work commitments, personal emergencies, or any other reason, you can access the complete recording at your convenience. The recordings include all visual presentations, screen shares, and instructor explanations exactly as they were delivered live. Additionally, you can pause, rewind, and rewatch any section as many times as needed to fully understand the concepts. This flexibility ensures that you never fall behind in your learning journey. Many students find it helpful to watch recordings multiple times to reinforce their understanding of complex topics. You'll also have access to all course materials, slides, and supplementary resources through our online learning platform.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        Will there be any assignments or practical exercises?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Yes, there will be assignments and practical exercises
                      throughout the course. These are designed to reinforce the
                      concepts taught in class and provide hands-on experience.
                      You&apos;ll have opportunities to apply what you&apos;ve
                      learned in real-world scenarios, which will help solidify
                      your understanding and improve your trading skills.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        Will I learn the fund management for long term?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Yes, long-term fund management is a core component of our curriculum. Our program covers comprehensive strategies and techniques for effectively managing and growing your investments over extended periods. You'll learn about asset allocation strategies, portfolio rebalancing, risk-adjusted returns, and how to build wealth systematically over time. We teach you how to identify fundamentally strong companies, understand market cycles, and make investment decisions that align with long-term financial goals. The course includes practical exercises where you'll create and manage a virtual portfolio, track performance, and learn from real-world case studies. We also cover retirement planning, tax-efficient investing, and how to adjust your strategy as your financial situation evolves. Our instructors share their personal experiences and proven methodologies that have helped thousands of students build substantial wealth through disciplined long-term investing.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        {" "}
                        Is there a community forum or chat group for
                        participants?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Yes, we maintain an active community forum and dedicated chat groups for all participants. These platforms serve as valuable learning spaces where you can interact with fellow students, share trading insights, ask questions, and engage in meaningful discussions outside of scheduled class hours. Our instructors regularly participate in these forums to answer questions and provide guidance. The community is a great way to build professional connections, learn from others' experiences, discuss market trends, share trading strategies, and get support during your learning journey. Many students form study groups, share market analysis, and collaborate on practice exercises through these platforms. The community remains active even after course completion, allowing you to continue learning and networking with fellow traders. This collaborative environment significantly enhances the learning experience and helps you stay motivated throughout your trading journey.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        How is the class material structured?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Our class material follows a carefully structured, step-by-step format designed to build your knowledge progressively. We begin with foundational concepts including market basics, terminology, and how the Indian stock market operates. Each module builds upon the previous one, ensuring you have a solid understanding before moving forward. The curriculum progresses from basic concepts to intermediate topics like chart reading and fundamental analysis, then advances to sophisticated strategies including options trading, risk management, and portfolio optimization. Each session includes theoretical learning, practical demonstrations, and hands-on exercises. We provide comprehensive study materials, video tutorials, case studies, and real-time market analysis. Regular assessments help track your progress, and our instructors are always available to clarify doubts. This structured approach ensures that even complex topics become manageable and understandable.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        Will there be
                        additional resources provided?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Yes, enrolled students receive extensive additional resources to support their learning journey. You'll have access to comprehensive PDF study guides covering all course topics, downloadable worksheets for practice, reference charts and templates, and detailed case studies analyzing real market scenarios. We also provide access to our exclusive resource library containing trading calculators, market analysis tools, research reports, and recommended reading lists. Additionally, you'll receive regular market updates, weekly newsletters with trading insights, and access to our online community forum where you can interact with instructors and fellow students. These resources are designed to complement live classes and provide you with materials you can refer to even after completing the course. Many students find these resources invaluable for ongoing learning and reference.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        What is the duration of the course?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Our comprehensive stock market courses are designed with flexible duration options to accommodate different learning needs and schedules. The basic course typically spans 6-8 weeks with weekly live sessions, while advanced programs may extend to 12-16 weeks. Each session lasts approximately 2-3 hours, providing in-depth coverage of topics without overwhelming students. The course duration includes live classes, practical exercises, assignments, and assessment periods. We understand that everyone learns at their own pace, so we provide extended access to course materials and recordings even after the official course completion. This allows you to review concepts, catch up on missed sessions, and continue learning at your convenience. Our instructors are committed to ensuring you fully understand each concept before moving forward.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        Do you provide certificates upon course completion?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Yes, we provide recognized certificates upon successful completion of our courses. To earn your certificate, you need to attend at least 80% of live sessions, complete all assignments, and pass the final assessment with a minimum score. Our certificates are valuable credentials that demonstrate your commitment to learning and can enhance your professional profile. The certificate includes your name, course title, completion date, and is signed by our lead instructors. Many of our students have used these certificates to showcase their trading education to employers, clients, or when applying for advanced trading positions. Additionally, we provide letters of recommendation for outstanding students who excel in the course. The certificate serves as proof of your dedication to professional development in stock market trading and investment.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        Can I get personalized guidance from instructors?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Absolutely! We believe in personalized learning and provide multiple avenues for one-on-one guidance. During live classes, instructors actively answer questions and provide clarifications. We also offer dedicated Q&A sessions where you can ask specific questions about your trading journey. For more in-depth guidance, we provide optional one-on-one mentoring sessions where instructors review your trading strategies, analyze your portfolio, and provide personalized recommendations. Our instructors are accessible through email, community forums, and scheduled office hours. Many students find these personalized interactions invaluable for understanding complex concepts and developing their unique trading style. We're committed to your success and ensure that every student receives the attention and guidance they need to excel in their trading journey.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        What makes your course different from others?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Our courses stand out through several unique features. First, our instructors are active traders with years of real-world experience, not just theoretical knowledge. They share actual trading strategies, real market scenarios, and lessons learned from their own trading journeys. Second, we emphasize practical application with hands-on exercises, live market analysis, and real-time trading simulations. Third, we provide comprehensive support including community forums, one-on-one mentoring, and lifetime access to course materials. Fourth, our curriculum is constantly updated to reflect current market conditions and latest trading techniques. Finally, we focus on building a strong foundation while also teaching advanced strategies, ensuring students are well-prepared for both short-term trading and long-term investing. Our proven track record of successful students speaks to the effectiveness of our teaching methodology.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        Is there ongoing support after course completion?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Yes, we provide comprehensive ongoing support even after you complete the course. All students retain lifetime access to course materials, recordings, and resources through our online platform. You can revisit any lesson, review concepts, and access updated materials as they become available. Our community forum remains active, allowing you to continue interacting with instructors and fellow traders. We also offer advanced workshops, webinars, and refresher courses for alumni at discounted rates. Many students participate in our monthly market analysis sessions where instructors share current market insights and trading opportunities. Additionally, we provide regular newsletters with market updates, trading tips, and educational content. This ongoing support ensures that your learning continues and you stay updated with evolving market conditions and trading strategies. Our commitment to your success extends well beyond course completion.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        What equipment or software do I need for the course?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Our courses are designed to be accessible with minimal technical requirements. You'll need a computer or laptop with a stable internet connection for live classes and accessing course materials. A smartphone or tablet can also work for viewing recordings and accessing resources. We use popular, free trading platforms and charting tools that we'll guide you through setting up. No expensive software purchases are required. For the best experience, we recommend using a desktop or laptop with a good screen size for viewing charts and analysis. We provide detailed setup instructions before the course begins, and our technical support team helps with any installation or configuration issues. All necessary tools and platforms are either free or have free versions that are sufficient for learning. We ensure that technical barriers don't prevent anyone from accessing quality trading education.
                    </p>
                  </details>
                </div>
                <div className="py-3">
                  <details className="group">
                    <summary className="flex justify-start items-center font-medium text-lg sm:text-xl cursor-pointer list-none">
                      <span className="transition pr-4 group-open:rotate-45">
                        <GoPlus />
                      </span>
                      <span>
                        How do I enroll in a course?
                      </span>
                    </summary>
                    <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                      Enrolling in our courses is simple and straightforward. You can visit our website's courses section, browse available programs, and select the course that best fits your needs and experience level. Click on the course you're interested in to view detailed curriculum, schedule, pricing, and instructor information. Once you've selected a course, click the enrollment button and follow the registration process. You'll need to provide basic information and complete the payment through our secure payment gateway. After successful enrollment, you'll receive a confirmation email with course details, access credentials, and pre-course preparation materials. We also offer flexible payment options and early-bird discounts for advance registrations. If you have any questions during enrollment, our support team is available via phone, email, or live chat to assist you. We're here to make your enrollment process as smooth as possible.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default FAQ;
