import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { BsChevronLeft } from "react-icons/bs";

export default function NewPassword() {
  return (
    <section className="flex flex-col items-center justify-center xl:w-9/12 mx-auto min-h-screen p-4 bg-white">
      <div className="flex justify-center items-center flex-col lg:flex-row w-full h-[550px] lg:w-4/5 bg-gray-100 rounded-tr-[100px] rounded-bl-[100px]  overflow-hidden">
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-gray-100 p-5">
          <img
            src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
            alt="English Club Logo"
            className="w-3/4"
          />
        </div>

        <div className="w-full lg:w-1/2 p-10">
          <Formik>
            {({ isSubmitting, setSubmitting }) => {
              return (
                <Form className="space-y-5">
                  <h2 className="text-4xl font-suwannaphum font-bold text-center text-blues mb-5">
                    លេខសម្ងាត់ថ្មី
                  </h2>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      លេខសម្ងាត់
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="បញ្ជូលលេខសម្ងាត់របស់អ្នក"
                      required
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="text-red-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 font-suwannaphum text-xl font-medium text-blues"
                    >
                      បញ្ជាក់លេខសម្ងាត់
                    </label>
                    <Field
                      type="confirm_password"
                      id="confirm_password"
                      name="confirm_password"
                      className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="បញ្ជាក់លេខសម្ងាត់របស់អ្នក"
                      required
                    />
                    <ErrorMessage
                      component="div"
                      name="confirm_password"
                      className="text-red-700"
                    />
                  </div>

                  <div className="flex justify-end mt-5">
                    <button
                      type="submit"
                      className="w-full px-5 py-3 -mt-1 font-suwannaphum text-lg font-medium text-white bg-blue-900 rounded-lg hover:bg-primary hover:text-blues focus:ring-4 focus:outline-none focus:ring-blue-100"
                    >
                      ចូលប្រើប្រាស់
                    </button>
                  </div>

                  <div className="flex justify-end font-suwannaphum hover:text-blues hover:underline">
                      <BsChevronLeft className="-mt-1" /> 
                      <a href="/verify-email" className="-mt-2">
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