import self from '../../assets/self2.jpg'
import baseball from '../../assets/baseball.png'
import friendship from '../../assets/friendship.png'
import controller from '../../assets/game-controller.png'
import weightlift from '../../assets/weightlift.png'
import Icons from './Icons'

const About = () => {
  const icons = [baseball, friendship, controller, weightlift]
  const individualIcon = icons.map((icon, index) => (
    <div key={index} className='hover:bg-[#1d819b] p-4 rounded-full transition-all duration-300 max-[600px]:p-2'>
      <img src={icon} className='w-20 max-xl:w-16'/>
    </div>
  ))
  return (
    <>
    <span className="anchor" id="about"></span>
    <section className='min-h-screen w-screen flex items-center justify-center flex-col'>
      <h2 id='about' className='sectionHead' data-aos="fade-up" data-aos-once="true">About Me</h2>
      <div className="w-3/4 bg-black shadow-lg shadow-black h-max rounded-[30px] bg-opacity-75 grid overflow-hidden cssGrid py-[50px] max-[1150px]:grid-cols-1 " data-aos="fade-up" data-aos-once="true">
        <div className='flex justify-center items-center w-full h-full'>
          <img src={self} className='h-auto rounded-[35px] w-4/5 border-[6px] border-[#1d819b] object-contain max-[1150px]:w-3/5 max-[815px]:w-4/5' alt="" />
        </div>
        <div className='w-full h-4/5 flex items-center justify-center text-white flex-col mt-4'>
          <p className='text-[1.4vw] w-5/6 max-xl:w-11/12 max-[1150px]:w-4/5 max-[1150px]:text-xl text-center max-[600px]:text-sm'>
            Hello! My name is Justin Ferber. I am currently a junior enrolled at Stevens Institute of Technology with a major in Computer Engineering and a minor in Software Engineering. 
            Since I have grown up around technology my whole life, I have become quite interested in it and have a desire to continue these interests after graduation. 
            Some of my hobbies include sports, video games, working-out, and hanging out with friends.
          </p>
          <div className='flex w-4/5 justify-between mt-5'>
            {individualIcon}
          </div>
        </div>
      </div>
      <h2 className='sectionHead m-16' data-aos="fade-up" data-aos-once="true">Skills</h2>
      <div className="w-3/4 bg-black shadow-lg shadow-black h-max rounded-[30px] bg-opacity-75 flex overflow-hidden pl-[50px] pt-[50px] pb-[26px] pr-[24px] flex-wrap justify-center items-center" data-aos="fade-up" data-aos-once="true">
        <Icons />
      </div>
    </section>
    </>
  )
}

export default About