import React, { useState } from "react";
import img from "../../assets/img/Skill_Reading.png";
import Levelcard from "../../components/Levelcard";
import { GrAssistListening } from "react-icons/gr";
import { ReactTyped } from "react-typed";
import listening from "../../assets/img/Listening.png";
import { useParams } from "react-router-dom";
import skillListening from "../../assets/img/Listening2.png";
import skillWritting from "../../assets/img/writting.png";
import skillSpeaking from "../../assets/img/speaking.jpg";
import skillReading from "../../assets/img/Reading.png";
import {
  fetchSkillByName,
  selectSkillByName,
} from "../../redux/features/skill/skillSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContenSkillLevel from "../../components/common/ContenSkillLevel";
export default function SkillLevel() {
  const param = useParams();
  console.log("param", param.skill_name);
  console.log("param", param);
  const skill = useSelector(selectSkillByName);
  const skillSet = new Set();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSkillByName(param?.skill_name));
  }, []);
  console.log("skills", skill);
  return (
    <>
      <div className="relative w-[100%] mx-auto">
        {skill.map((skill, index) => {
          const isUnique = !skillSet.has(skill.skill_name); // Check if skill name is in Set
          if (isUnique) {
            skillSet.add(skill.skill_name); // Add unique skill name to Set
            return (
              <>
                <ContenSkillLevel
                  skill_name={skill.skill_name ?? "No_Name"}
                  img={skill.thumbnail ?? "No_Image"}
                  description={skill.description ?? "No_Description"}
                />
              </>
            );
          }
        })}
      </div>
      <div className="">
        <section className="font-bold text-[32px] text-second flex items-center gap-4 justify-center mt-10 h-10">
          <GrAssistListening />
          <ReactTyped
            strings={["កម្រិតនៃការស្តាប់"]}
            typeSpeed={200}
            loop
            backSpeed={20}
            showCursor={false}
          />
        </section>
      </div>
      <section className="">
        <div className="mt-10 lg:w-[70%] md:[80%] w-[90%]  mx-auto grid  gap-10 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 mb-10">
          {skill.map((skill, index) => {
            return (
              <Levelcard
                key={index}
                skill_level={skill.skill_level ?? "No skill_level"}
                skill_name={skill.skill_name ?? "No skill_name"}
                image={skill.thumbnail}
                title={"កម្រិត" + skill.skill_level}
                dis={skill.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
