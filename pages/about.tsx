import { Card, Button, Avatar } from "flowbite-react";

const data1=[
    {
        imgUrl:"/dmsbg100.png",
        name:"Janette Lynch",
        role:"Senior Director"
    },
    {
        imgUrl:"/dmsbg100.png",
        name:"Janette Lynch",
        role:"Senior Director"
    },
    {
        imgUrl:"../dmsbg100.png",
        name:"Janette Lynch",
        role:"Senior Director"
    },
];

export default function About() {
    return (
        <div className="flex flex-col items-center p-6 text-center">
            <div className="font-extrabold text-5xl">About</div>
            <br/>
            <div className="font-bold text-gray-700">We are a small passionate team.</div>
            <br/><br/>
            <div className="flex flex-col text-left w-1/2 gap-4">
                <div className="font-bold text-5xl">Empowering the world with Astro.</div>
                <div>We are a multi-cultural team from around the world! We come from diverse backgrounds, bringing different personalities, experiences and skills to the job. This is what makes our team so special.</div>
                <br/>
                <section className="flex flex-col md:flex-row justify-between gap-4">
                    {
                        data1.map((data, ind)=>{
                            return(
                                <Card key={ind}>
                                    <Avatar img={data.imgUrl} size="2xl"/>
                                    <div className="flex flex-col items-center">
                                        <p className="text-3xl font-bold">{data.name}</p>
                                        <p className="text-gray-500">{data.role}</p><br/>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}