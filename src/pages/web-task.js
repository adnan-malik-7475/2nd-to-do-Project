import React ,{useState} from "react";
import { Navbar } from "../components/sidebar";
import { TaskModal } from "../components/modal";
import { Button } from "../components/button";
export default function Task() {
  const [arr, setArr] = useState([
    {
      heading: "Submit my resume",
      dueDate: " Today, 17:00",
    },
    {
      heading: "Complete the test",
      dueDate: " Tommorrow, 10:00",
    },
    {
      heading: "Meeting with Jack",
      dueDate: " 24feb, 15:00",
    },
    {
      heading: "By a chocolate for Mom",
      dueDate: " 24 feb, 11:00",
    },
    {
      heading: "Facetime with Dad",
      dueDate: " 24feb, 17:00",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (taskData) => {
    setArr((prevArr) => [...prevArr, taskData]);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="absolute top-[3rem] left-[19.06rem] leading-[1.13rem] ">
      <button className="font-bold" onClick={openModal}>
        + Add new task
      </button>
      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveTask}
      />
        <p className="mt-[2rem] font-bold ">Incomplete</p>
        <div class="border border-none  ">
          <table class="table-auto ">
            <tbody>
              {arr.map((item, index) => (
                <tr key={index}>
                  <div className="flex ">
                  <input type="checkbox"  ></input>
                  <td class="border border-none  pt-4 pl-1  font-medium text-dimgray ">
                    {item.heading}
                    <p className="text-gray-400 text-xs "> { `⏰${item.dueDate}`}</p>
                  </td></div>
                </tr>

              ))}

              

            </tbody>
          </table>

          <table className="mt-4">
            <tbody>
              <h2 className="font-bold">Completed</h2>
              <tr>
               <td className="flex mt-[13px]">
                <input type="checkbox"checked id="checked-checkbox" className="mr-1 " ></input>
                <h1>Respond to Jane Email</h1>
               </td>

              </tr>
              <tr>
               <td className="flex mt-[13px]">
                <input type="checkbox"checked id="checked-checkbox" className="mr-1" ></input>
                <h1>Rescheduled Weekly Meeting</h1>
               </td>

              </tr>
              <tr>
               <td className="flex mt-[13px]">
                <input type="checkbox"checked id="checked-checkbox" className="mr-1" ></input>
                <h1>Service My Bike</h1>
               </td>

              </tr>
              <tr>
               <td className="flex mt-[13px]">
                <input type="checkbox"checked id="checked-checkbox" className="mr-1" ></input>
                <h1>Recheck the agreement documents</h1>
               </td>

              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
     
     
      <div className="absolute top-[2.19rem] left-[55.69rem] rounded-lg bg-whiteshadow md:shadow-lg
       w-[22.5rem] h-[7.63rem] overflow-hidden text-[0.75rem] rounded-lg">
        <b className="absolute top-[1.13rem] left-[1.56rem] text-[1.13rem]">
          Submit my resume
        </b>
        <div className="absolute top-[3rem] left-[1.56rem] text-[1rem] text-dimgray">
          Send my resume to DigitalTolk


          
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[calc(50%_-_43px)] right-[1.06rem] w-[3.25rem] h-[3.25rem] overflow-hidden border rounded-lg "
        >
          
          <g filter="url(#filter0_d_0_1)">
            <rect
              x="-305"
              y="-32"
              width="360"
              height="122"
              rx="10"
              fill="white"
            />
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M26.4444 38H-2.44444C-8.82889 38 -14 32.8289 -14 26.4444V-2.44444C-14 -8.82889 -8.82889 -14 -2.44444 -14H26.4444C32.8289 -14 38 -8.82889 38 -2.44444V26.4444C38 32.8289 32.8289 38 26.4444 38Z"
                fill="#FABB18"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6V12L16 14"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
           
           
          </defs>
        </svg>
        <div className="absolute top-[5.56rem] left-[0rem] rounded-t-none rounded-b-3xs bg-whitesmoke w-[22.5rem] h-[2.06rem] bg-gray-200" />
        <button className="absolute top-[6.13rem] left-[12.88rem] font-light">
          Skip
        </button>
       
      
        <button className="absolute top-[6.13rem] left-[15.69rem] font-bold">
          Remind me later
        </button>
        
      </div>
      
    </>
  );
}