'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import messages from "@/messages.json"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { TextRevealCard } from "@/components/ui/text-reveal-card"

const Home = () => {
// 
  return (
  <>
      {/* <main className='flex-grow flex flex-col items-center justify-center'>
       <section className='text-center mb-8 md:mb-12'>
        <h1 className='text-4xl md:text-4xl mt-10 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>
        <p className='mt-3 md:mt-4 text-base md:text-lg '>Explore Anony-Expert - Where your identity remains a secret.</p>


      </section>
      <Carousel 
      plugins={[Autoplay({delay: 2000})]}
      className="w-full max-w-xs">
      <CarouselContent>
        {
          messages.map((message, index) => (
            <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader className="text-center items-center">
                  {message.title}
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-lg font-semibold">{message.content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <MacbookScroll />

    </main>
    <footer className="text-center p-4 md:p-6">
    &#169; 2024 AnonyExpert. All rights reserved
    </footer> */}

    {/* <main className=" flex flex-col justify-center align-center ">
    <TextRevealCard
    text="Feeling like your sexual concerns are beyond help?"
    revealText="Discover the lasting solutions we offer."
     />
    <MacbookScroll />
    </main> */}

{/* <main className="flex flex-col items-center justify-center min-h-screen p-4">
  <div className="w-full max-w-4xl"> 
    <TextRevealCard
      text="Feeling like your sexual concerns are beyond help?"
      revealText="Discover the lasting solutions we offer."
    />
  </div>
  <MacbookScroll />
</main> */}


{/* best */}

{/* <main className="flex flex-col min-h-screen">
  <div className="flex justify-center align-center">
    <TextRevealCard
      text="Feeling like your sexual concerns are beyond help?"
      revealText="Discover the lasting solutions we offer."
      className=" justify-center align-center" // Ensure full height and width
    />
  </div>
  <div className="w-full h-screen">
    <MacbookScroll  /> 
  </div>
</main> */}


{/* <main className="flex flex-col min-h-screen">
  <div className=" flex justify-center items-center mt-10">
    <TextRevealCard
      text="Your sexual problems have no solution!"
      revealText="Discover the lasting solutions we offer."
      className="w-full max-w-4xl p-8 text-white text-base"
    />
  </div>
  <div className="w-full h-screen">
    <MacbookScroll  />
  </div>
</main> */}


<main className="flex flex-col min-h-screen">
  <div className="flex-grow flex flex-col justify-center items-center sm:p-8 md:p-20 bg-black">
    <TextRevealCard
      text=" Worried about sexual problems ?"
      revealText="We've got the permanent solution."
      className="w-full max-w-4xl text-base text-white"
    />
     <h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

     <p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>
  </div>
  <div >
    <MacbookScroll />
  </div>

  <div>
  <h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

<p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>

<h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

     <p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>

     <h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

     <p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>

     <h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

     <p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>

     <h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

     <p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>

     <h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

     <p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>

     <h1 className='text-4xl text-white md:text-4xl mt-20 font-bold '>Get the best Advice from our Product Experts, Anonymously.</h1>

     <p className='mt-3 md:mt-8 text-base md:text-lg text-white'>Explore Anony-Expert - Where your identity remains a secret.</p>
  </div>
</main>




    
  </>

  )
}

export default Home