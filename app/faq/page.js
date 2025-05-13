import React from 'react'
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
                  <div className="grid divide-neutral-200">
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
                          No, you do not need any prior trading experience to join
                          the classes. Our program is designed to accommodate
                          beginners as well as those with some trading background.
                          We start with the basics and gradually move to advanced
                          strategies, ensuring everyone can follow along and benefit
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
                          All classes are recorded, so you can catch up at your
                          convenience
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
                          Yes, you will learn fund management for the long term. Our
                          program covers essential strategies and techniques for
                          effectively managing and growing your investments over an
                          extended period.
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
                          Yes, there is a community forum and chat group for
                          participants. These platforms allow you to interact with
                          fellow students, share insights, ask questions, and engage
                          in discussions outside of class. It&apos;s a great way to
                          build connections and learn from the experiences of others
                          in the program.
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
                            How is the class material structured? Will there be
                            additional resources provided?
                          </span>
                        </summary>
                        <p className="text-tertiary pl-10 md:pl-12 sm:text-lg text-base mt-2 group-open:animate-fadeIn">
                          The class material is structured in a step-by-step format,
                          starting with foundational concepts and progressing to
                          advanced strategies. Additionally, you will have access to
                          PDFs that provide comprehensive information and support
                          your learning throughout the course
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default FAQ