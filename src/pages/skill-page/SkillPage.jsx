import React from "react";
import Skillcard from "../../components/Skillcard";
import image from "../../assets/img/skills.gif";
import imgicon from "../../assets/img/pencil.png";
import imgicon1 from "../../assets/img/Book.png";
import imgicon3 from "../../assets/img/logo-page-listening.png";
import skillListening from "../../assets/img/Listening2.png";
import skillWritting from "../../assets/img/writting.png";
import skillSpeaking from "../../assets/img/speaking.jpg";
import skillReading from "../../assets/img/Reading.png";
import { BsPatchCheck } from "react-icons/bs";

import {
  fetchSkillByName,
  fetchSkills,
  selectAllSkills,
  selectSkillByName,
} from "../../redux/features/skill/skillSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function SkillPage() {
  const img = [skillListening, skillReading, skillWritting, , skillSpeaking];
  const skillSet = new Set(); // Initialize outside map
  const skills = useSelector(selectAllSkills);
  console.log("skills", skills);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
  }, []);
  return (
    <>
      <section className="flex lg:flex-row flex-col  items-center gap-x-40 lg:justify-center w-[100%] px-5 max-md:px-10   lg:px-0  mx-auto">
        <div className="lg:mt-20 mt-10">
          <h1 className="text-blues text-3xl  font-bold ">
            ជំនាញក្នុងការរៀនភាសាអង់គ្លេស
          </h1>
          <p className="text-blues text-xl my-5 font-suwannaphum">
            អនុវត្តជំនាញ
            <span className="text-second"> អាន សរសេរ ស្ដាប់ និយាយ​ </span>
            នៅកម្រិតរបស់អ្នក
          </p>
          <div className="flex items-center gap-2 mb-5">
            <BsPatchCheck className="md:text-2xl max-sm:text-lg  text-second" />
            <h2 className="md:text-2xl max-sm:text-xl text-blues font-bold ">
              វិធីបង្កើនជំនាញភាសាអង់គ្លេសរបស់អ្នក
            </h2>
          </div>
          <div className="lg:w-80  mx-auto md:text-[18px]  leading-9 ">
            <p className="text-grays">
              ដើម្បីបង្កើតវាក្យសព្ទរបស់អ្នក
              និងអភិវឌ្ឍជំនាញទំនាក់ទំនងភាសាអង់គ្លេសរបស់អ្នក ការអនុវត្ត
              និងការសិក្សាគឺចាំបាច់ណាស់។ ការធ្វើការតាមរយៈសកម្មភាពអនុវត្ត
              និងការត្រួតពិនិត្យជាប្រចាំនូវភាសាថ្មីដែលអ្នកបានរៀន
              អាចជួយអ្នកបង្កើនល្បឿនចំណេះដឹង
              និងការយល់ដឹងអំពីភាសាអង់គ្លេសរបស់អ្នក។
            </p>
          </div>
        </div>
        <div className="max-w-full md:max-w-[486px] sm:min-h-[243px] relative overflow-hidden">
          <img
            className="object-cover rounded-lg"
            src={image}
            alt="Kids reading"
          />
        </div>
      </section>
      <div className="absolute lg:right-[5rem] right-[1rem] opacity-80 md:flex hidden ">
        <img
          src={imgicon}
          alt=""
          className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[90px] h-[90px] object-cover"
        />
      </div>
      <div className="absolute lg:left-[5rem] left-[1rem] opacity-8 mb-60 md:flex hidden ">
        <img
          src={imgicon1}
          alt=""
          className="w-[150px] h-[150px] object-cover"
        />
      </div>
      <div className="absolute left-[5rem] lg:flex hidden opacity-8 mt-40">
        <img
          src={imgicon3}
          alt=""
          className="w-[150px] h-[200px] object-cover"
        />
      </div>
      <section className="mt-20 ">
        <h1 className="text-center  md:text-3xl max-sm:text-xl font-bold text-blues ">
          ជ្រើសរើសជំនាញដែលអ្នកចង់អនុវត្ត
        </h1>
        <p className="leading-9 lg:w-1/2 px-5 max-md:px-10 lg:px-0 h-full mx-auto mt-5 text-[18px]  text-grays">
          មេរៀនសិក្សាដោយខ្លួនឯងនៅក្នុងផ្នែកទាំងនេះត្រូវបានសរសេរ និងរៀបចំដោយ
          <span className="text-second"> កម្រិតភាសាអង់គ្លេស </span>
          ដោយផ្អែកលើក្របខ័ណ្ឌអឺរ៉ុបទូទៅនៃឯកសារយោងសម្រាប់ភាសា (CEFR) ។
          មានប្រភេទផ្សេងគ្នានៃអត្ថបទ ការថតសំឡេង និងវីដេអូជាមួយនឹងលំហាត់អន្តរកម្ម
          និងសន្លឹកកិច្ចការដែលអនុវត្តជំនាញដែលអ្នកត្រូវការ។
          ជ្រើសរើសជំនាញដែលអ្នកចង់អនុវត្តនៅថ្ងៃនេះ
          និងបង្កើនភាសាអង់គ្លេសរបស់អ្នកក្នុងល្បឿនផ្ទាល់ខ្លួនរបស់អ្នក
          នៅពេលណាដែលវាងាយស្រួលសម្រាប់អ្នក។
        </p>
      </section>
      <section className="flex flex-col justify-center items-center my-10 lg:px-0  px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-y-16">
          {/* const skillSet = new Set(); */}
          {skills.map((skill, index) => {
            const isUnique = !skillSet.has(skill.skill_name); // Check if skill name is in Set
            if (isUnique) {
              skillSet.add(skill.skill_name); // Add unique skill name to Set
              return (
                <>
                  <Skillcard
                    key={index} // Essential for performance optimization
                    photo={img[index % img.length]}
                    // photo={skill.thumbnail}
                    skill_name={skill.skill_name}
                    des={skill.description}
                    // ... other props
                  />
                </>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}
