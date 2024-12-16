import Image from "next/image"

export default function Profile(){
    return(
        <div className="grid grid-cols-3 m-10">
            <div className="flex flex-col items-center bg-lapis-lazuli">
                <Image className="mt-2 border rounded-full"
                        src="https://stbc.blob.core.windows.net/portfolio-hub/JuanVasquez-Pic.jpeg"
                        alt="Juan Vasquez"
                        width={200}
                        height={200}/>
                <h1 className="text-2xl font-bold italic mt-2">Juan Vasquez</h1>
                <h3 className="font-bold text-sm">Software Developer</h3>
            </div>
        </div>
    )
}