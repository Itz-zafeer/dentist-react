import React from 'react' 
import Card from './component/Card'
const CardData = [
  {
    title:"orthodontics",
    paragraph:"Orthodontics is a specialized dentistry branch that corrects misaligned teeth and jaws using advanced techniques and technology. It offers innovative solutions like braces, clear aligners, and retainers for crowded teeth and unique treatment goals.",
    image:"/images/services/cards/1.jpeg"
  },
  {
    title:"Restorative Dentistry",
    paragraph:"Restorative dentistry services restore function, health, and aesthetics of smiles for damaged, missing, or decayed teeth using advanced techniques and materials for durable, natural-looking results. ",
    image:"/images/services/cards/2.jpeg"
  },
  {
    title:"Oral Surgery",
    paragraph:"Oral Surgery services offer various surgical procedures to treat dental issues, including tooth extraction, wisdom teeth removal, bone grafting, and dental implants. Skilled surgeons use advanced technology and techniques, ensuring a comfortable and pain-free experience for patients.",
    image:"/images/services/cards/3.jpeg"
  },
  {
    title:"Emergency Dental Care",
    paragraph:"Our dental clinic prioritizes dental emergencies, offering reliable, immediate care. Our experienced dentists handle various issues, including severe tooth pain, broken teeth, and oral injuries. They prioritize prompt intervention and provide efficient treatment to restore oral health. ",
    image:"/images/services/cards/4.jpeg"
  },
]
const Index = () => {
  return (
    <section>
      <div>
        <div className='Container1440 lg:py-[6.25vw] sm:py-[9.75609756098vw] py-[15.3846153846vw]
         '>
          <h2 className='text62 DarkPurple capitalize'>
            our services
          </h2>
          <div className='flex items-center flex-wrap
               gap-y-[6.15384615385vw] sm:gap-[3.65853658537vw] lg:gap-[5.20833333333vw] lg:pt-[3.125vw] sm:pt-[4.87804878049vw] pt-[7.69230769231vw]'>
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
