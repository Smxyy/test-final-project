import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center xl:w-9/12 mx-auto min-h-screen p-4 bg-white">
      <div className="flex justify-center items-center flex-col lg:flex-row w-full h-[550px] lg:w-4/5 bg-gray-100 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
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
                  <h2 className="text-4xl font-bold font-suwannaphum text-center text-blues mb-5">
                    ចូលប្រើប្រាស់គណនីរបស់អ្នក
                  </h2>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-suwannaphum text-xl font-medium text-blues"
                    >
                      អុីមែល
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="បញ្ជូលអុីមែលរបស់អ្នក"
                      required
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="text-red-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      លេខសំងាត់
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

                  <div className="flex justify-between items-center font-suwannaphum">
                    <a href="/forgot-password" className="-mt-3 hover:text-blues hover:underline">
                      ភ្លេចលេខសម្ងាត់
                    </a>
                    <a href="/register" className="-mt-3 hover:text-blues hover:underline">
                      បង្កើតគណនីថ្មី
                    </a>
                  </div>

                  <div className="flex justify-end mt-5 font-suwannaphum">
                    <button
                      type="submit"
                      className="w-full px-5 py-3 -mt-1 text-lg bg-blue-900 font-medium text-white rounded-lg hover:bg-primary hover:text-blues focus:ring-4 focus:outline-none focus:ring-blue-100"
                    >
                      ចូលប្រើប្រាស់
                    </button>
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
