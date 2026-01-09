"use client";

import {
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  CheckCircle,
  Building2,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Specialist() {
  const { t } = useLanguage();
  const [activeDoctor, setActiveDoctor] = useState(0);
  const [direction, setDirection] = useState(0);

  const doctors = [
    {
      id: 1,
      name: t("specialist.doctors.0.name"),
      credentials: t("specialist.doctors.0.credentials"),
      currentRole: t("specialist.doctors.0.currentRole"),
      description: t("specialist.doctors.0.description"),
      experience: t("specialist.doctors.0.experience"),
      patients: t("specialist.doctors.0.patients"),
      education: [
        t("specialist.doctors.0.education.0"),
        t("specialist.doctors.0.education.1"),
      ],
    },
    {
      id: 2,
      name: t("specialist.doctors.1.name"),
      credentials: t("specialist.doctors.1.credentials"),
      currentRole: t("specialist.doctors.1.currentRole"),
      description: t("specialist.doctors.1.description"),
      experience: t("specialist.doctors.1.experience"),
      patients: t("specialist.doctors.1.patients"),
      education: [
        t("specialist.doctors.1.education.0"),
        t("specialist.doctors.1.education.1"),
      ],
    },
    {
      id: 3,
      name: t("specialist.doctors.2.name"),
      credentials: t("specialist.doctors.2.credentials"),
      currentRole: t("specialist.doctors.2.currentRole"),
      description: t("specialist.doctors.2.description"),
      experience: t("specialist.doctors.2.experience"),
      patients: t("specialist.doctors.2.patients"),
      education: [
        t("specialist.doctors.2.education.0"),
        t("specialist.doctors.2.education.1"),
      ],
    },
  ];

  const handlePrevious = () => {
    setDirection(-1);
    setActiveDoctor((prev) =>
      prev === 0 ? doctors.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveDoctor((prev) =>
      prev === doctors.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeDoctor ? 1 : -1);
    setActiveDoctor(index);
  };

  const currentDoctor = doctors[activeDoctor];

  // Specialization areas
  const specializationAreas = [
    t("specialist.specializations.0"),
    t("specialist.specializations.1"),
    t("specialist.specializations.2"),
    t("specialist.specializations.3"),
    t("specialist.specializations.4"),
    t("specialist.specializations.5"),
    t("specialist.specializations.6"),
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.92,
      y: 20,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.92,
      y: -20,
    }),
  };

  return (
    <section
      id="specialist"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[#4A9D5F] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3 font-semibold">
            {t("specialist.badge")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C6B8E] mb-3 sm:mb-4 px-4">
            {t("specialist.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            {t("specialist.subtitle")}
          </p>
        </div>

        {/* Specialist Card with Animation */}
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeDoctor}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                  mass: 0.8,
                },
                opacity: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                  mass: 0.8,
                },
                y: {
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                  mass: 0.8,
                },
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Doctor Photo */}
                <div className="relative h-[280px] sm:h-[320px] lg:h-auto bg-gradient-to-br from-[#E8F4F8] to-[#D4EBF0] overflow-hidden">
                  <Image
                    src="/doctor.jpeg"
                    alt={currentDoctor.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={activeDoctor === 0}
                  />
                  {/* Professional Badge Overlay */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-10">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4A9D5F]" />
                      <span className="text-xs text-gray-700 font-medium">
                        {t("specialist.licensed")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Professional Information */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                  {/* Name & Title */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2C6B8E] mb-1">
                      {currentDoctor.name}
                    </h3>
                    <p className="text-[#4A9D5F] font-semibold mb-2 text-sm sm:text-base">
                      {currentDoctor.credentials}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                      <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{currentDoctor.currentRole}</span>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {currentDoctor.description}
                    </p>
                  </div>

                  {/* Key Credentials */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#2C6B8E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-[#2C6B8E]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5 font-semibold">
                          {t("specialist.experienceLabel")}
                        </p>
                        <p className="text-gray-900 text-sm font-medium">
                          {currentDoctor.experience}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#4A9D5F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-[#4A9D5F]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5 font-semibold">
                          {t("specialist.patientsLabel")}
                        </p>
                        <p className="text-gray-900 text-sm font-medium">
                          {currentDoctor.patients}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-[#2C6B8E]" />
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                        {t("specialist.educationLabel")}
                      </p>
                    </div>
                    <div className="space-y-2">
                      {currentDoctor.education.map((edu, index) => (
                        <p
                          key={index}
                          className="text-gray-700 text-xs leading-relaxed pl-6"
                        >
                          • {edu}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-semibold">
                      {t("specialist.specializationsLabel")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {specializationAreas.map((spec, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-gradient-to-r from-[#E8F4F8] to-[#E0F2E9] text-[#2C6B8E] text-xs rounded-full border border-[#2C6B8E]/10 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="max-w-5xl mx-auto mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white border-2 border-[#2C6B8E] text-[#2C6B8E] hover:bg-[#2C6B8E] hover:text-white transition-all shadow-md hover:shadow-lg font-semibold text-sm sm:text-base min-h-[48px]"
            aria-label={t("specialist.previous")}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">{t("specialist.previous")}</span>
          </button>

          {/* Doctor Indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all min-h-[12px] ${
                  index === activeDoctor
                    ? "w-10 sm:w-12 h-2.5 sm:h-3 bg-[#4A9D5F] rounded-full shadow-md"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
                aria-label={`${t("specialist.doctor")} ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#4A9D5F] text-white hover:bg-[#3d8550] transition-all shadow-md hover:shadow-lg font-semibold text-sm sm:text-base min-h-[48px]"
            aria-label={t("specialist.next")}
          >
            <span className="hidden sm:inline">{t("specialist.next")}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
