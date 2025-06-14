import Cert1 from '../../assets/cert1.png'
import Cert2 from '../../assets/cert2.png'
import Cert3 from '../../assets/cert3.png'
import Cert4 from '../../assets/cert4.png'

export default function User_Issuance() {

    const issuance =[
        {name: "Individual Treatment Record (ITR)", file: Cert1},
        {name: "Health Record", file: Cert4},
        {name: "Antepartum Record", file: Cert2},
        {name: "Prenatal Record", file: Cert3}
    ]

  return (
    <div className="w-full">
        <div className="p-10 flex flex-col gap-10 text-center">
          <h1 className="lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Issuance</h1>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-10 fade-in-up'>
            {issuance.map((item,index) =>  
              <div key={index} className='flex flex-col justify-center items-center gap-5'>
                <h2 className='text-2xl font-medium'>{item.name}</h2>
                <div className='shadow-xl p-5 rounded-xl'>
                  <a href={item.file} target='_blank' rel='noopener noreferrer' download className='cursor-pointer'>
                    <img src={item.file} alt="Certificate" className='w-96 h-96 object-contain'/>
                  </a>
                </div>
              </div>
              )}
          </div>
        </div> 
    </div>
  )
}
