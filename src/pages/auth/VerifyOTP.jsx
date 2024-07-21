import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { BsChevronLeft } from "react-icons/bs";

export default function VerifyOTP() {
  return (
    <section className="flex flex-col items-center justify-center xl:w-9/12 mx-auto min-h-screen p-4 bg-white">
      <div className="flex flex-col items-center justify-center lg:flex-row w-full h-[550px] lg:w-4/5 bg-gray-100 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-gray-100 p-5">
          <img
            src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
            alt="English Club Logo"
            className="w-3/4"
          />
        </div>

        <div className="w-full lg:w-1/2 p-1 md:p-10">
          <Formik>
            {({ isSubmitting, setSubmitting }) => {
              return (
                <Form className="space-y-4 w-10/12">
                  <h2 className="text-2xl font-suwannaphum md:text-4xl font-bold text-center text-blues mb-5">
                    សូមបំពេល OTP ប្រាំមួយខ្ទង់
                  </h2>

                  <div className="flex flex-col py-3 font-suwannaphum">
                    <div className="flex justify-between space-x-2 md:space-x-4">
                      <Field
                        type="text"
                        maxLength="1"
                        className="w-14 h-14 md:w-16 md:h-16 text-xl md:text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blues"
                      />
                      <Field
                        type="text"
                        maxLength="1"
                        className="w-14 h-14 md:w-16 md:h-16 text-xl md:text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blues"
                      />
                      <Field
                        type="text"
                        maxLength="1"
                        className="w-14 h-14 md:w-16 md:h-16 text-xl md:text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blues"
                      />
                      <Field
                        type="text"
                        maxLength="1"
                        className="w-14 h-14 md:w-16 md:h-16 text-xl md:text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blues"
                      />
                      <Field
                        type="text"
                        maxLength="1"
                        className="w-14 h-14 md:w-16 md:h-16 text-xl md:text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blues"
                      />
                      <Field
                        type="text"
                        maxLength="1"
                        className="w-14 h-14 md:w-16 md:h-16 text-xl md:text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blues"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-5">
                    <button
                      type="submit"
                      className="w-full px-5 py-3 font-suwannaphum text-sm md:text-lg font-medium text-white bg-blue-900 rounded-lg hover:bg-primary hover:text-blues focus:ring-4 focus:outline-none focus:ring-blue-100"
                    >
                      ផ្ទៀងផ្ទាត់ OTP
                    </button>
                  </div>
                  {/* <a href="#" className="text-purple-600 mt-2 text-sm md:text-base">
                    សូមសាកល្បងម្តងទៀត
                  </a> */}
                  <div className="flex justify-end font-suwannaphum hover:text-blues hover:underline">
                        <BsChevronLeft className="-mt-1" /> 
                        <a href="/forgot-password" className="-mt-2">
                            ត្រឡប់ទៅចូលប្រើប្រាស់
                        </a>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
}