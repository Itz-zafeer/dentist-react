import React from 'react' 
import Card from './component/Card'
const CardData = [
  {
    title:"orthodontics",
    paragraph:"Orthodontics is a specialized branch of dentistry that focuses on the correction of misaligned teeth and jaws. Using advanced techniques and state-of-the-art technology, we provide innovative orthodontic solutions such as braces, clear aligners, and retainers. Whether you are dealing with crowded teeth, gaps, overbite, underbite, or crossbite, our experienced orthodontists can develop a personalized treatment plan to address your unique needs and goals.",
    image:"../../src/assets/images/services/cards/1.jpeg"
  },
  {
    title:"Restorative Dentistry",
    paragraph:"We provide exceptional restorative dentistry services to help restore the function, health, and aesthetics of your smile. Whether you have a damaged tooth, missing teeth, or decayed teeth, our highly skilled dentists offer a wide range of restorative treatments to meet your needs. From dental fillings and dental crowns to dental bridges and dental implants, we utilize the latest techniques and materials to ensure durable and natural-looking results. ",
    image:"../../src/assets/images/services/cards/2.jpeg"
  },
  {
    title:"Oral Surgery",
    paragraph:"Our dental clinic offers comprehensive oral surgery services to address a variety of complex dental needs. Our skilled and experienced oral surgeons perform a range of surgical procedures, including tooth extractions, dental implant placements, jaw surgeries, and treatment of oral diseases and injuries. From wisdom tooth removal to corrective jaw surgery, we are equipped to handle diverse oral surgical procedures with precision and care. Our team of dedicated professionals will ensure that you receive personalized care and support before, during, and after your oral surgery procedure.",
    image:"../../src/assets/images/services/cards/3.jpeg"
  },
  {
    title:"Emergency Dental Care",
    paragraph:"At our dental clinic, we prioritize your dental emergencies and offer reliable and immediate care to address your urgent needs. Our experienced emergency dentists are equipped to handle a range of dental emergencies, from severe tooth pain and broken teeth to knocked-out teeth and oral injuries. We understand the importance of prompt intervention in emergencies and strive to provide efficient and effective treatment to alleviate your pain and restore your oral health. Our compassionate staff is committed to creating a comfortable and supportive environment during your emergency visit. ",
    image:"../../src/assets/images/services/cards/4.jpeg"
  },
]
const Index = () => {
  return (
    <section>
      <div>
        <div className='Container1440 lg:py-[6.25vw] sm:py-[9.75609756098vw]'>
          <h2 className='text62 DarkPurple capitalize'>
            our services
          </h2>
          <div className='flex items-center flex-wrap
                gap-[5.85365853659vw] lg:gap-[5.20833333333vw] lg:pt-[3.125vw] sm:pt-[3.65853658537vw]'>
                {
                  CardData.map((CardDat,index)=>(
                    <Card
                    CardImg={CardDat.image}
                    title={CardDat.title}
                    paragraph={CardDat.paragraph}
                    key={index}
                     />
                  ))
                }
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
