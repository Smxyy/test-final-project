
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { fetchCreateUser } from '../../redux/features/user/userSlice';

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: ""
};

const validationSchema = Yup.object({
  userame: Yup.string().required("name is required"),
  email: Yup.string().email("email is invalid").required("email is required"),
  password: Yup.string()
  .matches(
    strongPasswordRegex, 
    "password must contain one uppercase, one lowercase, one special character, number and must at least 8 characters")
  .required("password is required"),
  confirm_password: Yup.string()
  .oneOf([Yup.ref("password"), null], "confirm password must match")
  .required("confirm password is required")
});

export default function Register() {

  const dispatch = useDispatch();

  return (
    <section className="flex flex-col items-center justify-center xl:w-9/12 mx-auto min-h-screen p-4 bg-white">
      <div className="flex justify-center items-center flex-col p-6 lg:flex-row w-full lg:w-4/5 bg-gray-100 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
        <div className="w-full lg:w-1/2 p-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(value) =>{
              console.log(value);
              // dispatch(fetchCreateUser(value));
            }}
          >
            {({ isSubmitting, setSubmitting }) => {
              return(
                <Form className="space-y-5">
                  
                  <h2 className="text-4xl font-bold font-suwannaphum text-center text-blues mb-5">
                    បង្កើតគណនីថ្មី
                  </h2>

                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      ឈ្មោះ
                    </label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="បញ្ជូលឈ្មោះរបស់អ្នក"
                      required
                    />
                    <ErrorMessage
                      component="div"
                      name="username"
                      className="text-red-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
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

                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      បញ្ជាក់លេខសំងាត់
                    </label>
                    <Field
                      type="password"
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
                      className="w-full px-5 py-3 mt-1 font-suwannaphum text-lg font-medium text-white bg-blue-900 rounded-lg hover:bg-primary hover:text-blues focus:ring-4 focus:outline-none focus:ring-blue-100"
                    >
                      បង្កើតគណនី
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-gray-100 p-5">
          <img src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png" alt="English Club Logo" className="w-3/4"/>
        </div>
      </div>
    </section>
  )
}
