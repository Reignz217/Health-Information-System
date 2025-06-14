import { useState } from "react"
import Button from "../../Components/Button";
import { Link } from "react-router-dom";


export default function Admin_Edit_Patient() {

  const [image, setImage] = useState();

  const handleImage = (e) => {
    const file = (e.target.files[0]);
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }
  }

  const PhysicalFindings = [
        ["EYES (pterygiums?)", "EXTREMITY ABNORMALITY"],
        ["EAR DRUMS / HEARING", "REFLEX ABNOMALITY"],
        ["NOSE", "SKIN ABNORMALITY"],
        ["THROAT/MOUTH", "HERNIA"],
        ["NECK", "BACK ABNORMALITY"],
        ["HEART MURMURS/RYTHM", "VARICOSE VEINS/VASCULAR SYSTEM"],
        ["LUNGS AND CHEST", "DEFORMITIES/LIMITATION OF MOTION"],
        ["ABDOMEN ORGAN ENLARGEMENT", "FOOT ABNORMALITY/BUNIONS"],
        ["PSYCHIATRIC BEHAVIOR", "SCARS ON BACK/KNEES/ELSEWHERE"],
        ["None"]
    ];

  const Conditions = [
        ["Epilepsy/Seizures/Fainting", "Rheumatic Fever/Typhoid Fever"],
        ["Sever Headaches", "Malaria"],
        ["Heart Problem", "Allergies to any food or any other substances"],
        ["High or Low Blood Pressure", "Elbow, Ankle or Foot Pain/Injury"],
        ["Chest Pain/Shortness of Breath", "Shoulder or Hip Pain/Injury"],
        ["Asthma/Hay Fever/Allergies", "Amputations / Prosthetics"],
        ["Tuberculosis", "Arthritis / Hand or Wrist Problems or Pain"],
        ["Frequent Colds/Sore Throat", "Sprains/Dislocations/Fractures"],
        ["Pneumonia/Influenza/Bronchitis", "Sciatica/Scoliosis/Rheumatism"],
        ["Lung Problems or Disease", "Bone or Joint Injury or Problems"],
        ["Abdominal Pain/Ulcer/Stomach Problems", "Degenerative Condition/Disease of the Back"],
        ["Heptitis/Gallbladder Stones/Liver Stones", "Neck Muscles/Joints"],
        ["Kidney Stones/Kidney Problems or Disease", "Knee Problems/Leg Injury/Varicose Veins or Leg Swelling"],
        ["Diabetes/Thyroid Disease/Other Endocrine", "Muscular Weakness"],
        ["Rashes/Skin Problems or Disease", "Neck or Back Pain/Injury"],
        ["Head Injury/Stroke/Concussion", "Drug useage/Excessive drinking/Failed drug test"],
        ["Vision/Eye Problems or Disease", "Hospitalization/Surgical Operation/Serioes Injury-illness"],
        ["Nose Throat Problems or Disease", "Psychiatric illness/Counselling/Mental Disorder(s)"],
        ["Ear Problems or Deafness", "Have you ever been signed off sick/repatriated from ship"],
        ["None"]
    ];


  return (
    <div className="w-full overflow-y-auto">
      {/* Personal Record */}
      <div className="flex flex-col gap-5 py-5 lg:px-20 md:px-10 px-3">
          <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Patient <span className="text-black">Record</span> </h1>
          <div className="flex justify-end gap-5 fade-in-right">
            <Link to="/view_patient" className="flex">
              <Button name="Back"/>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 md:justify-evenly lg:p-10 p-5 shadow-lg rounded-2xl fade-in-up">
              <div className="flex flex-col md:gap-5 gap-2 items-center">
                <img src={image || '/Default.jpg'} alt="Profile Pic" className="md:w-60 w-50 shadow-lg object-cover aspect-square"></img>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="image">Upload Image:</label>
                  <input type="file" accept="image/*" onChange={handleImage} id="image" name="image" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg cursor-pointer"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Birth Reference No.</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Household No.</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Line No.</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Family No.</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Blood Type:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
              </div>
              <div className="flex flex-col md:gap-5 gap-2 items-center">
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Lastname/Surname:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Givenname:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Middlename:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Date of Birth:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Age:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Place of Birth:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 items-center">
                  <label className="text-lg font-medium md:w-42 w-full" htmlFor="name">Address:</label>
                  <input type="text" className="lg:px-5 lg:py-3 px-3 py-2 md:w-96 w-full bg-slate-200 rounded-lg"/>
                </div>
                <div className="flex flex-col md:flex-row w-full md:gap-8 gap-2 items-center">
                  <div className="flex flex-col md:flex-row w-full md:gap-5 gap-2 items-center">
                    <label className="text-lg font-medium md:w-22 w-full" htmlFor="name">Nationality:</label>
                    <input type="text" className="px-3 py-2 md:w-42 w-full bg-slate-200 rounded-lg"/>
                  </div>
                  <div className="flex flex-col md:flex-row w-full md:gap-0 gap-2 items-center">
                    <label className="text-lg font-medium md:w-22 w-full" htmlFor="name">Religion:</label>
                    <input type="text" className="px-3 py-2 md:w-42 w-full bg-slate-200 rounded-lg"/>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:gap-8 gap-2 items-center">
                    <div className="flex flex-col md:flex-row w-full md:gap-5 gap-2 items-center">
                      <label className="text-lg font-medium md:w-22 w-full" htmlFor="name">Gender:</label>
                      <div className="flex gap-3 items-center">
                        <input type="radio" value="Male" className="cursor-pointer"/>
                        <label className="text-lg font-medium" htmlFor="name">Male</label>
                        <input type="radio" value="Female" className="cursor-pointer"/>
                        <label className="text-lg font-medium" htmlFor="name">Female</label>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 items-center">
                      <label className="text-lg font-medium md:w-22 w-full" htmlFor="name">Height:</label>
                      <input type="text" className="px-3 py-2 md:w-40 w-full bg-slate-200 rounded-lg"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:gap-6 gap-2 items-center">
                    <div className="flex flex-col md:flex-row w-full md:gap-5 gap-2 items-center">
                      <label className="text-lg font-medium md:w-24 w-full" htmlFor="name">Civil Status:</label>
                      <div className="flex gap-2 items-center">
                        <input type="radio" value="Male" className="cursor-pointer"/>
                        <label className="text-lg font-medium" htmlFor="name">Single</label>
                        <input type="radio" value="Female" className="cursor-pointer"/>
                        <label className="text-lg font-medium" htmlFor="name">Married</label>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 items-center">
                      <label className="text-lg font-medium md:w-22 w-full" htmlFor="name">Weight:</label>
                      <input type="text" className="px-3 py-2 md:w-40 w-full bg-slate-200 rounded-lg"/>
                    </div>
                </div>
              </div>
          </div>
      </div>
      {/* Medical History */}
      <div className="py-5 lg:px-20 md:px-10 px-3">
        <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left"> Medical <span className="text-black">History</span></h1>
          <div className="flex flex-col gap-10 shadow-lg md:p-10 p-5 rounded-2xl fade-in-up">
            <h4 className="lg:text-3xl md:text-xl text-lg text-center font-bold tracking-widest uppercase fade-in-left">
              <em>HAVE YOU EVER HAD, DO YOU NOW HAVE, OR EVER DECLARE THAT YOU HAVE/HAD ANY OF THE FOLLOWING CONDITIONS?</em>
            </h4>
            <div className="flex flex-col gap-5 overflow-auto">
                  {PhysicalFindings.map((pair, index) => (
                      <div key={index} className="flex flex-col md:flex-row gap-5 md:items-center md:w-fit lg:w-full">
                          {pair.map((label, i) => (
                              <div key={i} className="flex gap-5 items-center md:w-86 lg:w-full">
                                <input type="checkbox" className="lg:w-5 lg:h-5 cursor-pointer" />
                                <label className="font-medium lg:text-2xl text-lg text-wrap uppercase whitespace-nowrap">{label}</label>
                              </div>
                          ))}
                      </div>
                  ))}
            </div>
          </div>
      </div>
      <div className="py-5 lg:px-20 md:px-10 px-3">
      <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left"> Medical <span className="text-black">History</span></h1>
        <div className="flex flex-col gap-10 shadow-lg p-10 rounded-2xl fade-in-up">
          <h4 className="lg:text-3xl text-xl text-center font-bold tracking-widest uppercase fade-in-left">
            <em>HAVE YOU EVER HAD, DO YOU NOW HAVE, OR EVER DECLARE THAT YOU HAVE/HAD ANY OF THE FOLLOWING CONDITIONS?</em>
          </h4>
          <div className="flex flex-col gap-5 overflow-auto">
                {Conditions.map((Condition, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-5 md:items-center md:w-fit lg:w-full">
                        {Condition.map((option, i) => (
                            <div key={i} className="flex gap-5 items-center">
                              <input type="checkbox" className="lg:w-5 lg:h-5 cursor-pointer" />
                              <label className="font-medium text-lg text-wrap uppercase whitespace-nowrap md:w-120">{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
          </div>
        </div>
      </div>
      <div className="py-5 lg:px-20 md:px-10 px-3">
          <div className="flex flex-col gap-10 justify-center shadow-lg md:p-10 p-3 rounded-2xl fade-in-up">
            <h4 className="lg:text-3xl text-xl text-center font-bold tracking-widest uppercase"><em> Other/Specific Condition </em> </h4>
            <textarea className="w-full md:h-40 bg-slate-200 p-5 rounded-lg"/>
          </div>
      </div>
      <div className="flex justify-end pb-10 md:pr-20 pr-5">
        <Button name="Save"/>
      </div>
    </div>
  )
}
