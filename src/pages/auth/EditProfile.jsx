import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';
import { BsCalendar4Event } from "react-icons/bs";

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  birthDate: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  bio: Yup.string().required('Required'),
});

export default function EditProfile() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen px-4">
      <div className="bg-gray-200 p-8 rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-left mb-6 font-suwannaphum">កែសម្រួលគណនី</h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            birthDate: '',
            phone: '',
            bio: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <img className="rounded-full w-32 h-32 text-white" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WQTIyI3gDR7pusOaPAIGJKzMZ9aUxcfsJQ&s" 
                    alt="image description"/>
                  </div>
                  <Field type="file" name="file" id="file" className="hidden"/>
                  <label htmlFor="file" className="bg-transparent cursor-pointer border font-suwannaphum border-green-500 text-gray-700 rounded-lg py-2 px-4">
                    ប្តូររូប
                  </label>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-suwannaphum">នាមខ្លួន</label>
                    <Field
                      type="text"
                      name="firstName"
                      className="mt-2 px-4 py-3 font-suwannaphum border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="បញ្ចូលនាមខ្លួនរបស់អ្នក"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 font-suwannaphum">នាមត្រកូល</label>
                    <Field
                      type="text"
                      name="lastName"
                      className="mt-2 px-4 py-3 font-suwannaphum border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="បញ្ចូលនាមត្រកូលរបស់អ្នក"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-gray-700 font-suwannaphum">ថ្ងៃ ខែ ឆ្នាំ</label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="birthDate"
                        className="mt-1 px-4 py-3 font-suwannaphum border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="បញ្ចូលថ្ងៃខែឆ្នាំកំណើតរបស់អ្នក"
                      />
                      <div className="absolute inset-y-0 right-0 top-2 flex items-center pr-3">
                        <BsCalendar4Event className="w-[25px] h-[25px] text-gray-400" />
                      </div>
                    </div>
                    <ErrorMessage name="birthDate" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-gray-700 font-suwannaphum">លេខទូរស័ព្ទ</label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="phone"
                        className="mt-1 px-4 py-3 font-suwannaphum border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="+855"
                      />
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-gray-700 font-suwannaphum">ជីវប្រវត្តិ</label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="bio"
                        className="mt-1 px-4 py-3 font-suwannaphum border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="បញ្ជូលជីវប្រវតិ្តរបស់អ្នក"
                      />
                    </div>
                    <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />
                  </div>

                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                  disabled={isSubmitting}
                >
                  រក្សាទុក
                </button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}