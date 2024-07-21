import React from "react";
import { FaGithub, FaTelegram, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import action from "../../assets/action.jpg";
import action1 from "../../assets/action1.jpg";
import action2 from "../../assets/action2.jpg";
import action3 from "../../assets/action3.jpg";
import action4 from "../../assets/img/action4.jpg";
export default function AboutUs() {
  AOS.init();
  return (
    <section>
      <div>
        <img
          className="  lg:left-[95px]  w-full justify-between lg:w-[1164px] h-auto lg:h-[290px] mx-auto flex flex-col lg:flex-row lg:items-center "
          src="src\assets\Group1.png"
          alt=""
        />
      </div>

      <section className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="max-w-full md:max-w-[486px] sm:min-h-[243px] relative overflow-hidden  w-[400px] mt-16 ml-20">
          <img
            className="object-cover"
            src="src\assets\pic main.png"
            alt="Business mission"
          />
        </div>

        <div className="m-5 md:m-20">
          <h1 className="text-blue-950 text-3xl font-bold mt-10 m-t ml-3 ">
            ការរៀនភាសាអង់គ្លេស
            <span className="text-orange-500">តាមអ៊ីនធឺណិត</span>
            <span>គ្មានដែនកំណត់</span>
            <span className=" mt-3">
              <br />
              នៅ
            </span>
            <span className="text-green-500">ចុងម្រាមដៃរបស់អ្នក</span>
          </h1>

          <div className="mt-5 space-y-2  text-grays ">
            <p>EnglishClub </p>
            <p>
              ត្រូវបានបង្កើតឡើងដោយនិស្សិតកម្ពុជាមួយក្រុមដែលកំពុងសិក្សានៅមជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ{" "}
            </p>
            <p>
              និងបច្ចេកវិទ្យាកម្រិតខ្ពស់ (CSTAD)។
              វាត្រូវបានសរសេរជាចម្បងជាភាសាខ្មែរនៃអត្ថបទរបស់យើង
            </p>
            <p>
              ប៉ុន្តែលំហាត់ពួកយើងសរសេរជាភាសាអង់គ្លេស។
              ប៉ុន្តែយើងមានទំព័រអំពីប្រភេទផ្សេងៗនៃមេរៀន។
            </p>
            <p>EnglishClub រៀនដោយឥតគិតថ្លៃ។ </p>
            <p>
              {" "}
              EnglishClub គឺជាក្លឹបរបស់អ្នក។
              សូមប្រើវាតាមមធ្យោបាយណាមួយដែលអ្នកចង់រៀនភាសាអង់គ្លេស។{" "}
            </p>
            <p>
              សូម​កុំ​ភ្ញាក់​ផ្អើល​ប្រសិន​បើ​អ្នក​ឃើញ​ពាក្យ​ដែល​អ្នក​គិត​ថា​អក្ខរាវិរុទ្ធ​ខុស។​
              សូម​ផ្តល់​យោបល់​មក​ខ្ញុំ​នៅ​ពាក្យ​
            </p>
            <p>ដែល​ខុស​នោះ​</p>
            <p>សូមសំណាងល្អទាំងអស់គ្នា!!</p>
          </div>
        </div>
      </section>

      <section className="flex md:flex-row gap-5 justify-center flex-col ">
        <div className="m-20">
          <h1 className="text-blue-950 text-3xl font-bold mt-10 justify-center items-center md:text-center  ">
            បេសកកម្មចម្បង
          </h1>
          <div className="mt-5 space-y-2  text-grays">
            <p>
              EnglishClubបានផ្តលនៅមូលដ្ធានគ្រឹះសម្រាប់សិក្សានៅភាសាអង់គ្លេសដោយឥតគិតថ្លៃ
            </p>
            <p>
              ដូចជាវេយ្យាករណ៏ ការអាន ការស្តាប់
              និងមានអ្វីជាច្រើនទៀតនៅលើគេហទំព័ររបស់យើង។
            </p>
          </div>
        </div>
        <div className="max-w-full md:max-w-[486px] sm:min-h-[243px] overflow-hidden">
          <img
            className="object-cover rounded-lg"
            src="src\assets\Business mission.gif"
            alt="Kids reading"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="max-w-full md:max-w-[486px] sm:min-h-[243px] relative overflow-hidden">
          <img
            data-aos="fade-up"
            className="object-cover rounded-lg"
            src="src\assets\Vision board.gif"
            alt="Business mission"
          />
        </div>
        <div className="m-5 md:m-20">
          <h1
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className=" text-blue-950   text-3xl font-bold mt-10 text-center  md:text-center "
          >
            គោលបំណងរបស់យើង
          </h1>
          <div className="mt-5 space-y-2  text-grays ">
            <p>គេហទំព័របស់យើងបង្កើតមកដើម្បីងាយស្រួលក្នុងការរៀនភាសារអង់គ្លេស</p>
            <p>ជួយកាត់បន្ថយការចំណាយប្រាក់និងផលវេលា</p>
            <p>ជួយសម្រួលដល់សិស្សនិស្សិតដែលខ្លះខាតថវិកានៅទីដាចស្រយាល</p>
            <p>ជួយសម្រួលក្នុងការរៀនសូត្រដល់ក្មេងៗ</p>
          </div>
        </div>
      </section>

      <p
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="text-center mt-20 text-3xl font-bold   text-blue-950 "
      >
        អ្នកណែនាំរបស់យើង
      </p>
      <section className="flex items-center  bg-white-200 mt-20 justify-center  gap-28   lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto flex-col lg:flex-row lg:items-center ">
        <div className="max-w-xs  text-white rounded-2xl overflow-hidden relative p-4 bg-slate-100 transition-colors duration-200 transform  group">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Reksmey.PNG"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Mom Reksmey
            </h2>
            <p className="text-sm text-gray-600 font-Inter">
              Instructor - Leader, Data Analysist
            </p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              reksmey@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="#" className="text-green-500">
              <FaGithub />
            </a>
            <a href="#" className="text-green-500">
              <FaFacebook />
            </a>

            <a href="#" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  text-white rounded-2xl overflow-hidden relative p-4  bg-slate-100">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\teachersokpheng.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Kim Chansokpheng
            </h2>
            <p className="text-sm text-gray-600 font-Inter">
              Instructor - Cyber security
            </p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              sokpheng@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="#" className="text-green-500">
              <FaGithub />
            </a>
            <a href="#" className="text-green-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <p className="text-center mt-24 text-3xl font-bold text-blue-950">
        ក្រុមរបស់ពួកយើង
      </p>

      <section className="flex items-center  bg-white-200 mt-20 justify-center gap-28  lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto  flex-col lg:flex-row lg:items-center ">
        <div className="max-w-xs text-white rounded-2xl overflow-hidden relative p-4  bg-slate-100 ">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\DEAP Sokreaksmey.JPG"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Deap Sokreaksmey
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/Smxyy" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/sokreaksmey.deap?mibextid=JRoKGi"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Smxyy" className=" text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Huon Kanha.JPG"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Huon Kanha
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/Huonkanha" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/KanhaKanhaIT?mibextid=ZbWKwL"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Kanha_Kanha0" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Huon Sreylen.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Huon Sreylen
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/SreylenHuon" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/ii.ly.71?mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/HuonSreylen" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-white-200  justify-center gap-28 mt-12   lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto  flex-col lg:flex-row lg:items-center">
        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4 ">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABNVBMVEXL4v////++2Ps2Xn3/3c5KgKr/y75AcJMrTWb0+//igIbk9v/dY27K4f+71vvO5f/S6f9Pc5IxWnpkhKElSWJbdo/k+v9AeqXa4fL/4dH1///C2/z/28vie4H1+f/X6f/00c7r8/7z3tq30fCqx+nv9v//0MEAQV/s/v8wZ43d7P8fVHhAcZQ8aIo7eKXYw77twrh5hpbcV2M3V3JNaoTRvbm5rq+mo6eYmqKEgYrm4Ofo197T3/b63dN5l7T48e+LsNOOo7RjkrmRtNbJ3uviiY/il57jvMOuwM6sdIPGeoTh6O6FYHeOqcZJaYOjvNe4oaDPr6pLYHKhkJN3eYN+iZfRx8r66uRzjqSmuMZ/lql4ocfryM3msbjdbnni09yVsMTioKZ5aoCYcIGudYNkZn/QY28qmTvyAAARvElEQVR4nM3d+18axxYA8EWCiIqrC0oiiqX4BvJ+WFNpNCSlNZomvbk1SZPY9Lb//59wZ3dZmMeZx5mdhZzP/eF+xLh8e86cmVmWXS+XeZR2moeHW365Xp+pz4RRr5fLnr912Gw2Stkf3svyjzeaROaVia0e2+hYimKm7B82G40M30RWQoILbSRZSYRQgTmUzpS3mlkpsxA2mlsebaOjDCoj54x3mIXSuXDnUKrTIEPmzFbT9dB0KoyTp9Jple5T6VBozBsOS1kmZ8iwbLp7W66EjUNNbaLKlaTS33H0ztwImz6ap0MuLdUPnQxJB8IG6S1WPG0iZ7YcjMjUwsaWZfqMjEte6mJNKUzvi0JunFlK23VSCR35PGUeiTFVHlMIS858WqOXYjzaCw9d+jTGpaWtiQubafqn1KhI48zhRIUNPwNfGKpSrdsNRyuh8wIdh3I4WpWqhXAniwKljKpSbU5CeJipz9Ok0Uev5LDCjBM4NKpGYzNbYeYJ1BLRoxElzKyFiqFsqqj5HyOcSIUmoUojquEghBOqUBPiEmL6NxduTRboqSvV/H2b/mZpckPQjGg8GA2FjUkOwXEoB6PhIs5MuDMNnpbYdCdsTiWBWqJZvzERThHogGggtAT6/rJx+Ko/lJKoF9pMg77v119f9CorungQxmXvtcqYcgmnFVoAfb91sdIOwshrYo5EtVrde/DalqjNok6IB/r+dkVPo4SRcu8qK6JGiB+Dyy1z31hIjKvLir+agqgWWgAvED5aOFftKYgpsqgU7mCBfrnSRvgY4Vy1ZVuoTVthAw2sr2ASyAsrqjq1XsAphCWkjwAvkUBGODdXV/11xTJ8RrUMVwjxuwk0kBXuqaYMDdFGiN4P+hU0kBVWL5RCy/2i9BX0REi6KBrICVXd1LNtqDIhvo22LICc8EottGuoEmED6SMptKhRvtNUWxqiaijOSM4VS4ToLuO3cBMhLHzwuqzeaVh0G1iIX43apZATkkU42WmsXpTlqVTVKbzPAIXoQeh5VqNQEEZIstXolWV5xA9FUKhu2lD4No0UFA7LVbqCQ9cpJLTYEi5jl2tq4Vx1TkpUJdE3E1rUqFe38smFc9W8qzoFhHif57+2S6FcqJj+VXW6ZCK0Oi9jOQwVwrkH0vehEor9VBCit0xhLPfcC+XrcFydCkJ8H81IqFjDofopL7Q7OWo536uF8g0xagnOCy3P/mYhXJWXk7LZlJRCy09BJy3ENBtWaNVmpiFUJrGhENp+zgsKg3Zbe2Yxouzt7VWrOKEyiZ5caJtCSNjOHz1+/ORe0FYiCe/BD7+9efP72z2cUNlsdqRC64/qBWEQPL5xK4wbj44uw1yKTvKzdvvt729md3fJ/3bfzFUxQmWdejKhdQoFYZA/uXUjDqI8eXR072FctMMg/zf/8N7RoxOiG8bu3QdVjNA4ibTQ/moLQXgnASbKGyd3Hj1+cnT07t27o6Mnjx/dOYl+OjuO3buoHKpG4kwZFtqnkBcGRwxwxKQj/uEsTfx9DyNUJrEBClNcMMPn8AQQgkELZ++icmi6UfRcpJATBqumQFa4+7aKERrOiWNhmou6OOE9S+F/UELDhc1YaO9zJvwBJzQ7ezoSprqkZDpCs0+GR0KrfeGUhUb7xESYps9MTWg06yfCdNdWcsJ3ExIaTRiJMN2FXZzwiaXwtz2k0OS0m+egz/DC9h074exdrNDknJTnokhZIWLC54TMhGgiVC5OPVqI/7hQLgwC4zUbLyTrtipOqJwSG5Qw7fWVlLB9aV6jgnD27tu9KkZoUKaeiyIlwvYwLo8QGRSFs7Nktz+MhyZTtL5MvdQrtij+eycOsutD+CDh7uzdYdwx+c+uX7l5LorUK3/P7PrSCMfxndGRtWXqpd1WDIVYmonQ6F2phFsjYUrfVIXKMk2E6dakUWQiNDqy9mSG52IYfrPCw6HQwTeapifUzheei2E4VaFuIHpOhuE0hbqB6Ln5Ssy3KmxGQhffnJyiUDcjeinP0HwDQtVALEdCB8BvVlgvEaGLRuMdZyB8anhsTavx3Hz37scMhD+6EDaJ0M1XtI83XAtNU6hb1XiuvqN9fMPG6ACoO6foOWmlYfg3j/H9RtJjnn4xLdEw1M3Uc9JKk0ATYSDyqOp1m5fyXDAb6JaatkC1wqWc52SySOKmE+GxS2HDs7kiWC7EdhtQeBN5VPV04Tn9Kjp6WgSFmC4TxQSF3okD4S76qCrhoef2nizYZuqilWp2F46FyGa64aKV6oRbLoHYZgoKsY1Gc6rGsdBzIMQfVLmo8Vwt2oaBG4i7TobhZIU/omZESIgvUvUe2K3PQ84XTuaKSQsxyxpoGH5xLJxxLsQkEShSmxROWojY7TtK4aSF5kkEitQqhRMXGo9EoEgtGqk3eaHpnAik8Du7A6p7qeP5MAqzOgVSaHm8yQuNtolACu1qVLemcbwujcNkKIopxJ69GMUUhAZThgjE75qSUDUa3/H+cBQ6olij39uPFwXQ+Q54HJq9sJBC+wzqhJndFFGZRadAzXma7G77qNjvC0DbLhqF5myi0/OlbPiyqZ8fhN+hzx8yoRE6PefNBzwYeWCqCvV0H5G6/dyCD7BQOeDuRqoS9TRCx5898QEJdznfjRtphbrPnrJYtiUBCHd5X7bCsrvPgMEQhBsCz4FQVaS+s8/x4eCFSQJ3d+nJMqVQ+zl+lvdBNjsFnqWw6ep6GklMX9hwdU2UJCYi1F4TlWUznbqw7OzaRElMRKgq0i1n15dKYurCprNrhCUxCaHBNcLZtRrf6NTpxs1UncDgOu+sVjXL9d7gRE/cOBn06pq7eqpCBfTdfd9CDOLLr5ZK+lOnt0ql1by90ej7FhkMROILgvZgvVTSftmrUVoftANro/beEW6+98RF5MvnL0skGhrgT+EvXQb5oN1rqZ8CgRfOuPvuGutr9fLhV0qD01z47n9SDcWNCJg7jX4/6OnusguEKoXj7665PFcTjr/4K7Pt/npJQ9z4I/qV9X58i15Sq9g8Gn7/0FmZ+n6rN7olVBADFcSNP4a/sT76NySPPsaoLVJH3wMe+pYpXz64yg3ff+kPCfEk+YXc1fifBag86m+I5ea73KKPFOn7JIcy4q3R6+vv6e/zBxVjo/F3udN+Hz/ycU/uSIZhFNDMvzF+ORmIaKPBLWrc3FMhfDIJf+u59k6JCnFajNvoMHa4u4EH7YpRX1UBmXsqpLz/jt96nhdvOUcDSw2eyABLJeFfB/nnpOdoEom4L4b1eWGflOfzs8KB+A5XS2xI2ugwVsX/QgeFs2ekWFVIxL1N7CZ9cvTWs0KtVih0ReHVOmtg5oyNE/bVdeDWkt1C+KeftTw5UgXk70+DX5v6fnn7WeE24ZEoisIPnJAhnnCvrX8QhcXoLxPkx+0yjETdYwh5tsZfLm9/jLIXR00UnuY4BTVn3OJfitdtbIz+eCFE1oHmirpPFKbXDHkFOoQyDU75HI6JXJeBhV3m79cKZ9tlDml2O2H0/dp8v/78rMbywjARrsdEEVhaF4XCEWq3z54zV8cg79dm1GvCeQHiAUmEhPHMP1xua4Rd6CC12tnz0brV8IlzmPsm+v62hAckERaSmZ+fJyRVKjsMQW7HRsObXyLufblMfLLjFoR2CnSamMi30VjI99Ki4ki1wna43lHVKMUyvn+pXz+7rTiqkERxtojL8fufoJ8Ls4X6ULWzlm9x/1JlEpe31ccUkijM+LHkz8XPx8AL/IyvSmEc2yqh5B60qq3+8jNVgUJJFFZtEeTT/cXFxacAkVu16Q9W+6hIoew+wvIk+h8NgGw7DS5F3/rLELh4/0+R2GWEYCNlo9M9MxmFhvfz9k0yyJdpWwA2XkRAQvwkENndk75Ia8XiwUfJhKi4n7ckicvPjYDclNjuc8DjzSGQEF+us0Z2B2yQw06xWOw+A4mqe7LDSfS3zYBcM20PWODTRSruz5do4v6A2wHrDkVSGBK3QaHqvvrgwqZs5it02DcZXK/RwJ/vLzJBt9SdtWtusujojhUJi50lAKh8NgK0EzbrMuL2IviwvzDylf7igExLXdgXNk/qY8YpJEkEhiL/MB3tM0r8llWNEuHK/kJCHPUYplIT4sLC/gr/r9V1WkxCrFPtM0qEfaL/0Q5IiEQ4JD4FgIufh6+S39oHHqCgOFZnJCye8UnUPmdGmPYNUyi+Q9JMF5JY40dhGMdro9f70IP3pMeqjYHFAy6JS8JDV3XPezKcCsXzNGEzHRPWhHF4/2fqVb6VRiGdMqgUFovsSDR53hO3FfaNMiiexAir9Hp/YRybHPDlGLiwD5zDkCeRARY7bA4Bjvgjuk4N+0wHeoNBhRKunQuDkBIC5xLz0imDAbK9xvC5a/TKxjdbzsDCLq1Y+0LX6X1qEJKAilwm7HBCagVu+uw8up8um3VSsErzQZ8hfhoT6UEoazSSOZEDMt3U+PmHVJ2Wz4yEUCslwveMY+3lZhIv2Rf4Fc0wwCPxwOKKska1zyGtmwGBM8Kh8IpuNQsLL+aTeMH8fP8KFIIbDCGFxU5LNterhKNnybYMhXCZsgPxeHMk3OSGISiEilQEFotJqynDFM3zgE2XbOCESM/54axPCZlxCA9DaDqsAcBRM8U9DzgZisZCyYxIQdb+ooR/0S/AwxA6MgBMVjXYZzonS3BjIZjEoEKnap4OOrngQ9ugFEI1Oswh/rncw1nRXAi20zY8DLmBCBapKTAW2jxbPe42CCHUTqmlKT0MmYEIL0qBRgoDY6HkidUaYQmXQyiJ4S44gbxkqnQ8I4q7XziFUJcZCRtyhkIYNlSMEFy6jYtxkxFujosU+mfigk0GjITClslQSBoqRgg1m3Z/DRqG1EBcg+YKoM3IgEQobaN6Ya6JEkL7/KRM2WFIDUSwSBFAIlQCNcLcTc2nMWwAdboCD0NqIIqnaIAalQOLB301QSPMvUYRxTpNljXNeT6a0gWNWKOSNhoBrzUCnRBJFMv0dB8ahqOBCG3vnQL1QhxRXLytgMNwPBDFtAtDX1WiWqCBEEcU5v24mwrDcD7eIwKdVJjrVRl8r3/7BsLcAEMUrliIuqk4DOOBKHZSYRCqgAODd28izPUxRCGJRLj2lC9SksSnJIn7QgqFokgJNBPm+phpkReStak4DOOBKK5Jub8lXcmEoZkmUMLcecHcyHWb8FyGOAzjGXGf3zhxR1EBO+dmb91QmGvorsSggu82fX5ROkwimQy53+S6jGoIrigW21bCXO7CnMh9GHy9/wUUftnndvdcl1EBe8bv21yImTXYaxZW1z6Bwk9rq6rrE1LOEhbCXN98MLJJ7EPDkAxEbjJk/oKDHoMXYgYjk8QPIHB+np0MjRNYMewxFkJEpbINVSJkfoepj1Qr0VRCUqmGRnonFfwCAn8JJEBFhR50MBVqI8w1THsqTfwH7DQPqd+gt4SqBH6QnPd1KAzXcGYNh5oWg18B4a9UCumJUOHT7XYdCXO5azMjRfwKrNq+gkBVAk9t3qyVMHdu1lSpafGFIHwxfnE8EapGYMUigdZCsqOSXw4NEYO/hR3w34EIlCfwwGwj4VCYKxmV6oj4UD5VjIDKAjVdhroTklK9MMhjQgz+J5sqEqByFYqa450JSVft6YdjQnzInS99yAJrigK9SuFLKSTGM22tdsEJI5kqYqCywaTypRaSWu3parULzPqb/1BAVX9JU5+OhMR4rVnJdcUkDlPYVfs616l9ToRkJTdQF2tM/EoJvyZAqe/goDKw7p90OBHmwsZ6W4GMieMk/jpcjCp8pw7SF4UrYS7srAUpMiQG4yR+jYpUyite2U7vQDgU5nI7AymySy/d4gWbJHnF3sBV+qJwKiRR6l8QJKDshkmM2unm51cBDDw46Jz20dsjTbgWhnFOUlkTchkS5zc3Py8u/huNQR530HGcvGFkIQzjvH9xVrjNZJMQX0WXJ74iXbTD4iqnmejCyEoYRum8/zpy3r4dgQjx38Uohd0YFtk+XPfPnUwLkshSOIxGfzB4f9qrrHS6+VdRClcqld7p9WCQLW0Y/wc/mDa0n02PDAAAAABJRU5ErkJggg=="
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Sophy Phorn
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/phornsophy" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/sophy.phorn.39?mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Phy_yyyy" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Buthna.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Pheng Bunath
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/BunathPheng" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100027603155423&mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/pheng_bunath" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Chheam Bunthoeun.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Chheam Bunthoeun
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/B-T565" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/pamak.love.100/"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/chheam_Bunthoeun" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-white-200 fade-up  justify-center gap-28 mt-12  lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto  flex-col lg:flex-row lg:items-center">
        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Noev Chanmakara
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a
              href="https://github.com/noevchanmakara126"
              className="text-green-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/jr.makara10?mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/makaraJr10" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Lorn Yuhan.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Lorn Yuhan
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/yuhanlorn" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/lorn.yuhan.5?mibextid=ZbWKwL"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Mycodeiserror404" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\LOEUNG LINA.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Loeung Lina
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="#" className="text-green-500">
              <FaGithub />
            </a>
            <a href="#" className="text-green-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <p className="text-center mt-20 text-3xl font-bold text-blue-950 ">
        មជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាកម្រិតខ្ពស់ - CSTAD
      </p>
      <div className="  flex justify-center items-center container mx-auto py-8 mt-20 ">
        <img
          className="lg:left-[95px] rounded justify-between lg:w-[1164px] h-auto lg:h-[290px] mx-auto flex flex-col lg:flex-row lg:items-center"
          src="src\assets\GroupTeamschool.png"
          alt=""
        />
      </div>
      <div className=" grid grid-cols-1 mb-20 md:grid-cols-3 gap-3  ml-24 lg:left-[95px] justify-between lg:w-[1164px] lg:h-[290px] mx-auto lg:flex-row lg:items-center  ">
        <img className="rounded-lg" src={action} alt="" />
        <img className=" rounded-lg" src={action1} alt="" />
        <img className="rounded-lg" src={action4} alt="" />
      </div>
    </section>
  );
}
