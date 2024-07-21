import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="relative  lg:left-[95px]  w-full justify-between lg:w-[1164px] h-auto lg:h-[290px] mx-auto flex flex-col lg:flex-row lg:items-center">
          <div className="lg:absolute left-0 lg:left-[95px] top-[5px] text-violet-950  font-bold font-suwannaphum lg:flex-1">
            ទំនាក់ទំនងមកពួកយើង
          </div>
          <div className="relative max-w-screen-2xl  lg:w-auto flex-1 flex justify-center lg:justify-end">
            <div className="flex w-full  lg:w-[580px] h-auto lg:h-[290px]">
              <img
                className="w-[500px]  h-full object-cover mx-auto justify-between"
                src="../src/assets/contactUs.jpg"
                alt="Contact Us"
              />
            </div>
          </div>
          <div className="flex flex-col lg:absolute left-0 top-[145px] w-full lg:w-auto lg:left-[95px] lg:top-auto lg:mt-0 lg:flex-1">
            <span className="text-zinc-800 text-3xl font-normal font-suwannaphum">
              សួស្ដី! សូមស្វាគមន៍មកកាន់
            </span>
            <span className="text-orange-500 text-lg font-normal font-suwannaphum">
              គេហទំព័រ
            </span>
            <span className="text-zinc-800 text-lg font-normal font-suwannaphum">
              របស់យើងមិនថាអ្នកមាន
            </span>
            <span className="text-orange-500 text-lg font-normal font-suwannaphum">
              ចម្ងល់
            </span>
            <span className="text-zinc-800 text-lg font-normal font-suwannaphum">
              ឬត្រូវការការណែនាំដែលទាក់ទងទៅនឹងសំណួរផ្សេងៗ សូមចូលទៅកាន់
            </span>
            <span className="text-orange-500 text-lg font-normal font-suwannaphum">
              ប្រអប់សារ
            </span>
            <span className="text-zinc-800 text-lg font-normal font-suwannaphum">
              ដើម្បីផ្ញើសារមកកាន់ក្រុមការងាររបស់យើងអាចជួយដោះស្រាយជូន។
            </span>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex  flex-col lg:flex-row justify-between mx-auto w-full lg:w-10/12 gap-10 lg:gap-10 mt-7">
          <img
            className="w-full lg:w-[503px] h-[409px] lg:left-auto object-cover"
            src="../src/assets/Logo_contactUs.jpg"
            alt="Logo Contact Us"
          />
          <div className="w-full lg:w-[1352px] mt-10 lg:mt-0">
            <form className="flex flex-col gap-4 max-w-full">
              <div>
                <div className="mb-2 block font-suwannaphum">
                  <Label htmlFor="name" value="ឈ្មោះ" />
                </div>
                <TextInput
                  className="bg-white font-suwannaphum"
                  id="name"
                  type="text"
                  placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block font-suwannaphum">
                  <Label htmlFor="phone" value="លេខទូរស័ព្ទ" />
                </div>
                <TextInput
                  className="bg-white font-suwannaphum"
                  id="phone"
                  type="tel"
                  placeholder="បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block font-suwannaphum">
                  <Label htmlFor="email" value="អុីមែល" />
                </div>
                <TextInput
                  className="bg-white font-suwannaphum"
                  id="email"
                  type="email"
                  placeholder="បញ្ចូលអុីមែលរបស់អ្នក"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block font-suwannaphum">
                  <Label htmlFor="message" value="ផ្ញើរសារ" />
                </div>
                <TextInput
                  className="bg-white font-suwannaphum"
                  id="message"
                  type="text"
                  placeholder="បញ្ចូលសារបស់អ្នក"
                  required
                />
              </div>
              <Button
                className="w-full lg:w-20 mb-16 font-suwannaphum mx-auto"
                type="submit"
              >
                បញ្ចូន
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
