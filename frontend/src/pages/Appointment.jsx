import React from "react";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets/assets_frontend/assets";

function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = () => {
    setDocSlots([]);
    let today = new Date();
    let slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      slots.push({
        day: daysOfWeek[currentDate.getDay()],
        date: currentDate.getDate(),
      });
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="/"
            ></img>
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* Doctor Info */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-600">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon}></img>
            </p>
            <div className="flex items-center gap-2 text-2xl font-medium text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon}></img>
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className="text-lg font-semibold">Booking Slots</p>
          <div className="flex gap-4 mt-4">
            {docSlots.map((slot, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer px-4 py-2 rounded-lg border ${
                  selectedDateIndex === index
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setSelectedDateIndex(index)}
              >
                <p className="font-bold">{slot.day}</p>
                <p>{slot.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Appointment;
