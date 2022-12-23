import Image from "next/image"
import luke from  "../../public/Luke.webp"

export default function Peoplecard ({name, image}) {
    return<>
        <div className="cardi-b">
             <h5>{name}</h5>
            <Image src={luke} width={200} height={300} alt="Luke"/>
            <div>
                <h5>Learn More</h5>
                <h5>Read Later</h5>
            </div>
        </div>
    </>
}