import Image from "next/image"

export default function Profile(){
    return(
        <div className="grid grid-cols-3 m-10">
            <div className="flex flex-col items-center w-72 bg-lapis-lazuli rounded-lg">
                <Image className="mt-5 border rounded-full"
                        src="https://stbc.blob.core.windows.net/portfolio-hub/JuanVasquez-Pic.jpeg"
                        alt="Juan Vasquez"
                        width={200}
                        height={200}/>
                <h1 className="text-2xl font-bold italic mt-2">Juan Vasquez</h1>
                <h3 className="font-bold text-sm">Software Developer</h3>
                <p className="mt-12 mb-5">Short biography will go here....</p>
                <div className="flex flex-col justify-center items-start h-52 w-52 bg-prussian-blue m-4 rounded-xl">
                    <h2 className="text-white mb-3 ml-3 mr-3">Age: 28</h2>
                    <h2 className="text-white m-3">Location: Tennessee</h2>
                    <h2 className="text-white m-3">LinkedIn: Url to linkedIn</h2>
                    <h2 className="text-white mt-3 mr-3 ml-3">Github: Url to Github</h2>
                </div>
            </div>
        </div>
    )
}