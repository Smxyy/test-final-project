import React, { useState } from "react";
import Lessoncard from "../../components/common/cards/Lessoncard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSkillNameLevel,
  selectNameLevel,
} from "../../redux/skillnamelevel/skillnamelevel";
import { fetchExerciseDetail, selectExerciseDetail } from "../../redux/exercisedetaill/exercisedetail.js";
import { useEffect } from "react";
import Listening from "../../assets/img/Listening.png";
import { getSharedVariable, setSharedVariable } from "./SkillExcersice.js";
export default function SkillExercise() {
  const [selectedUUID, setSelectedUUID] = useState(null);
  const param = useParams();
  console.log(param);
  console.log("param", param.skill_name);
  const skill_level = param["skill_level-skill_name"];
  const skillNameLevels = useSelector(selectNameLevel);
  const exerciseDetail = useSelector(selectExerciseDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSkillNameLevel(skill_level));
  }, []);
  console.log("skillNameLevel", skillNameLevels);
  useEffect(() => {
    if (selectedUUID) {
      dispatch(fetchExerciseDetail(selectedUUID));
    }
  }, [dispatch, selectedUUID]);

  const handleSetSharedVariable = (ex_uuid) => {
    console.log("Setting shared variable to:", ex_uuid);
    setSharedVariable(ex_uuid);
    console.log("id_se:", getSharedVariable());
    setSelectedUUID(ex_uuid);
  };
  return (
    <div className="w-full">
      <section className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center  ">
        <div className=" md:max-w-[486px]  relative overflow-hidden">
          {skillNameLevels.map((v) => {
            console.log("v", v.skill_name);
            return (
              <img
                className="object-cover rounded-lg"
                src={v.thumbnail}
                alt="Picture"
              />
            );
          })}
        </div>
        <div className="m-5 md:m-20">
          {skillNameLevels.map((v) => {
            return (
              <>
                <div>
                  <h1 className="text-blue-950 text-3xl font-bold  ">
                    {v.skill_level}
                  </h1>
                </div>
                <div className="w-[320px] max-w-[] text-lg mt-5">
                  <p className="text-blue-900">{v.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <div>
        <h1 className="font-bold text-3xl text-center my-5 text-primary">
          សូមធ្វើការជ្រើសរើសមេរៀន
        </h1>
      </div>
      {/* <div className="mx-auto my-10 justify-center items-center grid grid-cols-1 md:grid-cols-2  gap-10 w-[320px] md:w-[768px]">
        {skillNameLevels.map((selectNameLevel) => {
          return selectNameLevel.exercises.map((excersice, index) => {
            
            const updateState = () => {
              setSharedVariable(excersice.ex_uuid);
              console.log("k", getSharedVariable());
            };
            updateState();

// setSharedVariable(excersice.ex_uuid);
// console.log("value:",getSharedVariable());

{console.log("id",excersice.ex_uuid)}
            return (
              <Lessoncard
                pic={excersice.thumbnail}
                title={excersice.title}
                des={excersice.description}
              />
            );
          });
        })}
      </div>
    </div> */}
    <div className="mx-auto my-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-10 w-[320px] md:w-[768px]">
        {skillNameLevels.map((selectNameLevel) =>
          selectNameLevel.exercises.map((exercise) => (
            <Lessoncard
              key={exercise.ex_uuid}
              pic={exercise.thumbnail}
              title={exercise.title}
              des={exercise.description}
              uuid={exercise.ex_uuid}
              onClick={handleSetSharedVariable}
            />
          ))
        )}
      </div>
      {selectedUUID && exerciseDetail && (
        <LessonDetail exercise={exerciseDetail} />
      )}
    </div>
  );
}
// export const updateState = () => {getSharedVariable()};
