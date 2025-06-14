import { Folder, User, UserPlus, Users } from 'lucide-react'
import { useRef, useState } from 'react'
import UserData from  '../../Data/Users.js'
import appointments from '../../Data/Appointments.js'
import PatientsData from '../../Data/PatientsData.js'
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';
import MedicalConditions from '../../Data/MedicalConditionData.js'
import PhysicalFindings from '../../Data/PhysicalFindingsData.js'




export default function Admin_Dashboard() {
   // Cards Data
  const card = [
    {Name: 'Appointment', Icon: <Folder size={30}/>, Count: 10},
    {Name: 'Recent Login', Icon: <User size={30}/>, Count: 1},
    {Name: 'Users', Icon: <Users size={30}/>, Count: 10},
    {Name: 'Patient', Icon: <UserPlus size={30}/>, Count: 10},
  ]
  
// PhysicalFindings Chart
    const data = {
      labels: PhysicalFindings.map(item => item.name),
      datasets: [
        {
          label: 'Physical Findings Values',
          data: PhysicalFindings.map(item => item.value),
          backgroundColor: 
            [
              'rgba(255, 99, 132, 0.5)',   // Red
              'rgba(54, 162, 235, 0.5)',   // Blue
              'rgba(255, 206, 86, 0.5)',   // Yellow
              'rgba(75, 192, 192, 0.5)',   // Teal
              'rgba(153, 102, 255, 0.5)',  // Purple
              'rgba(255, 159, 64, 0.5)',   // Orange
              'rgba(199, 199, 199, 0.5)',  // Grey
              'rgba(255, 99, 255, 0.5)',   // Pink
              'rgba(0, 204, 102, 0.5)',    // Green
              'rgba(0, 102, 204, 0.5)',    // Deep Blue
              'rgba(255, 153, 204, 0.5)',  // Light Pink
              'rgba(102, 255, 204, 0.5)',  // Aqua
              'rgba(204, 255, 102, 0.5)',  // Lime
              'rgba(255, 204, 102, 0.5)',  // Apricot
              'rgba(204, 102, 255, 0.5)',  // Lavender
              'rgba(255, 102, 102, 0.5)',  // Coral
              'rgba(102, 255, 102, 0.5)',  // Light Green
              'rgba(102, 204, 255, 0.5)',  // Sky Blue
              'rgba(255, 255, 102, 0.5)',  // Light Yellow
              'rgba(160, 160, 160, 0.5)'   // Medium Grey
            ]
        }
      ]
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          display: false
          }
        }
      }
    // PhysicalFindings Chart End

    // MedicalConditions Chart
        const data2 = {
              labels: MedicalConditions.map(item => item.name),
              datasets: [
                {
                  label: 'Medical Conditions',
                  data: MedicalConditions.map(item => item.value),
                  backgroundColor: 
                    [
                      'rgba(255, 99, 132, 0.5)',   // Red
                      'rgba(54, 162, 235, 0.5)',   // Blue
                      'rgba(255, 206, 86, 0.5)',   // Yellow
                      'rgba(75, 192, 192, 0.5)',   // Teal
                      'rgba(153, 102, 255, 0.5)',  // Purple
                      'rgba(255, 159, 64, 0.5)',   // Orange
                      'rgba(199, 199, 199, 0.5)',  // Grey
                      'rgba(255, 99, 255, 0.5)',   // Pink
                      'rgba(0, 204, 102, 0.5)',    // Green
                      'rgba(0, 102, 204, 0.5)',    // Deep Blue
                      'rgba(255, 153, 204, 0.5)',  // Light Pink
                      'rgba(102, 255, 204, 0.5)',  // Aqua
                      'rgba(204, 255, 102, 0.5)',  // Lime
                      'rgba(255, 204, 102, 0.5)',  // Apricot
                      'rgba(204, 102, 255, 0.5)',  // Lavender
                      'rgba(255, 102, 102, 0.5)',  // Coral
                      'rgba(102, 255, 102, 0.5)',  // Light Green
                      'rgba(102, 204, 255, 0.5)',  // Sky Blue
                      'rgba(255, 255, 102, 0.5)',  // Light Yellow
                      'rgba(160, 160, 160, 0.5)'   // Medium Grey
                    ]
                }
              ]
            };

            const options2 = {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true
                },
                x: {
                  display: false
                  }
                }
              }
    // Conditions Chart End

    // Calendar Data
  const week = [
    {Name: 'Sun'},
    {Name: 'Mon'},
    {Name: 'Tue'},
    {Name: 'Wed'},
    {Name: 'Thu'},
    {Name: 'Fri'},
    {Name: 'Sat'}
  ]
  const days = [
    {day: 1}, {day: 2}, {day: 3}, {day: 4}, {day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9}, {day: 10}, {day: 11}, {day: 12}, {day: 13}, {day: 14}, {day: 15}, {day: 16}, 
    {day: 17}, {day: 18}, {day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23}, {day: 24}, {day: 25}, {day: 26}, {day: 27}, {day: 28}, {day: 29}, {day: 30}, {day: 31},
  ]
  // Calendar Data End

  // Appointment Form
  const form = useRef();
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const onSubmit = (e) =>{
    e.preventDefault();
    form.current;
    if(e.target.title.value === ''){
      setError('Title is required!');
      return;
    }else if(e.target.date_start.value === '' || e.target.date_end.value === ''){
      setError('Date is required!');
      return;
    }else {
      setResult('Appointment created successfully!');
      setError('');
      form.current.reset();
    }
  }
   // Appointment Form End

  return (
    <div className="w-full overflow-y-auto">
      <div className='my-5'>
        <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Dashboard</h1>
        <div className='grid lg:grid-cols-4 grid-cols-2 justify-center gap-10 p-5'>
          {card.map((item,index) =>
          <a href={`#${item.Name}`} key={index} className='flex flex-col md:flex-row justify-center items-center gap-10 md:p-10 p-5 shadow-xl rounded-2xl fade-in-up'>
              <div>
                <p className='lg:text-4xl md:text-3xl text-2xl text-center text-[#227C67] font-bold'>{item.Count}</p>
                <p className='lg:text-2xl md:text-xl text-lg'>{item.Name}</p>
              </div>
              <div className='hidden md:block'>{item.Icon}</div>
          </a>
          )}
        </div>
      </div>

      {/************** Graphs *****************/}
      <div className='my-10'>
        <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Analytics</h1>
        <div className="px-4 md:px-5 lg:px-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center lg:justify-evenly fade-in-up">
          <div className="w-full max-w-lg lg:max-w-3xl p-4 shadow-lg rounded-2xl">
            <Bar data={data} options={options} />
          </div>
          <div className="w-full max-w-lg lg:max-w-3xl p-4 shadow-lg rounded-2xl">
            <Bar data={data2} options={options2} />
          </div>
        </div>
      </div>

      {/************** Appointments *****************/}
      <section id='Appointment' className='my-10'>
        <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Appointments</h1>
        <div className='grid lg:grid-cols-3 gap-10 p-5 fade-in-up'>
          {/* Calendar */}
          <div className='rounded-2xl shadow-2xl p-3 h-fit lg:h-full'>
            <div className='flex justify-between md:px-5 md:py-3 px-3 py-1 text-white bg-[#227C67] uppercase font-bold'>
              <h5>June</h5>
              <p> {new Date().getFullYear()} </p>
            </div>
            <div className='flex text-center'>
              {week.map((item,index) =>
              <p className='basis-1/7 md:p-3 p-1' key={index}>{item.Name}</p>
              )}
            </div>
            <div className='flex flex-wrap text-center'>
              {days.map((day,index) =>
              <p className='basis-1/7 md:p-2 p-1' key={index}>{day.day}</p>
              )}
            </div>
          </div>

          {/* Appointments / Events */}
          <div className='rounded-2xl shadow-2xl h-96 pr-1 overflow-y-auto'>
            <div className='flex justify-center px-5 py-2 text-white bg-[#227C67] rounded-t-2xl sticky top-0 uppercase font-bold'>
              <h5>Appointments / Events</h5>
            </div>
            <ul className='flex flex-col gap-5 mt-5'>
              {appointments.map((appoint,index) =>
              <li className='mx-5 flex flex-col md:flex-row justify-between font-medium border-b-gray-500 border-b-2' key={index}>
                  {appoint.title} 
                <span className='text-sm text-gray-600'>
                  {appoint.datefrom} - {appoint.dateto}
                </span>
              </li>
              )}
            </ul>
          </div>

        {/* Create Appointment / Event */}
          <div className='rounded-2xl shadow-2xl h-96 overflow-y-auto'>
              <h5 className='md:px-5 md:py-2 px-3 py-2 bg-[#227C67] text-center text-white uppercase font-bold rounded-t-2xl'>Create Appointment / Event</h5>
              <form ref={form} onSubmit={onSubmit} className='md:px-5 px-3 pb-2 md:pt-5 pt-3 flex flex-col gap-4 relative w-full'>
                {result && <p className='text-green-500 self-center absolute top-0'>{result}</p>}
                {error && <p className='text-red-500 self-center absolute top-0'>{error}</p>}
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-lg font-medium' htmlFor='title'>Title:</label>
                  <input type='text' name='title' id='title' placeholder='Title' className='px-5 md:py-2 py-1.5 bg-slate-200 rounded-2xl w-full'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-lg font-medium' htmlFor='date_start'>Start Date:</label>
                  <input type='date' name='date_start' id='date_start' placeholder='Start Date' className='px-5 md:py-2 py-1.5 bg-slate-200 rounded-2xl w-full'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-lg font-medium' htmlFor='date_end'>End Date:</label>
                  <input type='date' name='date_end' id='date_end' placeholder='End Date' className='px-5 md:py-2 py-1.5 bg-slate-200 rounded-2xl w-full'/>
                </div>
                <button className='py-2 bg-[#227C67] text-white font-bold rounded-3xl md:w-40 w-30 cursor-pointer self-center'>Create</button>
              </form>
          </div>
        </div>
      </section>

      {/************** Recent Logins *****************/}
      <section id='Recent Login' className='my-5'>
        <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Recent <span className='text-black'>Logins</span></h1> 
        <div className='overflow-auto md:mx-10 mx-2 my-10 shadow-lg rounded-2xl max-h-[600px] fade-in-up'>
          <table className='w-full whitespace-nowrap min-w-[600px] text-center'>
            <thead className='bg-[#227C67] text-white sticky top-0'>
              <tr>
                <th className='md:p-5 p-2 text-xl rounded-tl-2xl'>Name</th>
                <th className='md:p-5 p-2 text-xl'>Role</th>
                <th className='md:p-5 p-2 text-xl'>Time In</th>
                <th className='md:p-5 p-2 text-xl rounded-tr-2xl'>Time Out</th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((user,index)=>
              <tr key={index} className='hover:bg-gray-200 border-b border-gray-300'>
                <td className='md:p-3 p-1.5 text-lg'>{user.name}</td>
                <td className='md:p-3 p-1.5 text-lg'>{user.role}</td>
                <td className='md:p-3 p-1.5 text-lg'>{user.timeIn}</td>
                <td className='md:p-3 p-1.5 text-lg'>{user.timeOut}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/************** User Validation *****************/}
      <section id='Users' className='my-20'>
        <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">User <span className='text-black'>Validation</span></h1> 
        <div className='overflow-auto md:mx-10 mx-2 my-10 shadow-lg rounded-2xl max-h-[600px] fade-in-up'>
          <table className='w-full whitespace-nowrap min-w-[600px] text-center'>
            <thead className='bg-[#227C67] text-white sticky top-0'>
              <tr>
                <th className='md:p-5 p-2 text-xl rounded-tl-2xl'>Name</th>
                <th className='md:p-5 p-2 text-xl'>Contact</th>
                <th className='md:p-5 p-2 text-xl'>Role</th>
                <th className='md:p-5 p-2 text-xl'>Status</th>
                <th className='md:p-5 p-2 text-xl rounded-tr-2xl'>Validation</th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((user,index)=>
              <tr key={index} className={`hover:bg-gray-200 border-b border-gray-300 ${user.status === 'approved' ? 'hidden' : ''}`}>
                <td className='md:p-3 p-1.5 text-lg'>{user.name}</td>
                <td className='md:p-3 p-1.5 text-lg'>{user.contact}</td>
                <td className='md:p-3 p-1.5 text-lg'>{user.role}</td>
                <td className='md:p-3 p-1.5 text-lg'>
                  <span className={`md:px-3 md:py-2 px-2 py-2 rounded-xl text-sm text-white ${user.status === 'approved' ? '' : 'bg-yellow-500'}`}>
                    {user.status}
                  </span>
                </td>
                <td className='md:p-3 p-1.5 text-lg flex md:gap-5 gap-2 justify-center'>
                  <button className='md:px-3 md:py-2 px-2 py-1 text-sm bg-[#227C67] hover:bg-[#549686] rounded-xl text-white cursor-pointer'> Accept </button>
                  <button className='md:px-3 md:py-2 px-2 py-1 text-sm bg-red-500 hover:bg-[#549686] rounded-xl text-white cursor-pointer'> Decline </button>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/************** Recent Patients *****************/}
      <section id='Patient' className='my-20'>
        <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Recent <span className='text-black'>Patients</span></h1> 
        <div className='overflow-auto md:mx-10 mx-2 my-10 shadow-lg rounded-2xl max-h-[600px] fade-in-up'>
          <table className='w-full whitespace-nowrap min-w-[600px] text-center'>
            <thead className='bg-[#227C67] text-white sticky top-0'>
              <tr>
                <th className='md:p-5 p-2 text-xl rounded-tl-2xl'>Name</th>
                <th className='md:p-5 p-2 text-xl'>Age</th>
                <th className='md:p-5 p-2 text-xl'>Gender</th>
                <th className='md:p-5 p-2 text-xl'>Address</th>
                <th className='md:p-5 p-2 text-xl rounded-tr-2xl'>Contact</th>
              </tr>
            </thead>
            <tbody>
              {PatientsData.map((patient,index)=>
              <tr key={index} className='hover:bg-gray-200 border-b border-gray-300'>
                <td className='md:p-3 p-1.5 text-lg'>{patient.name}</td>
                <td className='md:p-3 p-1.5 text-lg'>{patient.age}</td>
                <td className='md:p-3 p-1.5 text-lg'>{patient.gender}</td>
                <td className='md:p-3 p-1.5 text-lg'>{patient.address}</td>
                <td className='md:p-3 p-1.5 text-lg'>{patient.contact}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
