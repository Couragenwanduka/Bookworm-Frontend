import BodyText from "../Text/BodyText"
const CardDiv = ({className, image, headerText ,text}) => {
    return(
        <section className={`${className} bg-[#27373A] w-80 h-72 flex flex-col justify-center items-center rounded-2xl`}>
             <div>
                <img src={image} alt="Image"/>
             </div>
             <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="font-inter text-white text-[20px]">{headerText}</h1>
               <BodyText content={text} className={' w-9/12 text-center text-[16px]'}/>
             </div>
        </section>
    )
}

export default CardDiv
