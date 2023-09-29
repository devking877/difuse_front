import { Avatar, Button, Card } from "flowbite-react"
import {BsPlayCircle} from 'react-icons/bs'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {SiOpensourceinitiative} from 'react-icons/si'
import {CgSearchLoading} from 'react-icons/cg'
import {PiBracketsCurlyBold} from 'react-icons/pi'
import {BsArrowsFullscreen} from 'react-icons/bs'


const data3=[
    {
        icon:<SiOpensourceinitiative/>,
        title:"Openness",
        description:"Thanks to the open code, you know exactly what the software does. The hardware schematics are publicly available online."
    },
    {
        icon:<CgSearchLoading/>,
        title:"Overview",
        description:"The source code is typically inspected by experts all over the world, which means that bugs are found and fixed quickly."
    },
    {
        icon:<PiBracketsCurlyBold/>,
        title:"Development",
        description:"OpenWrt software has been in development for a long time and is updated by a large community of developers."
    },
    {
        icon:<BsArrowsFullscreen/>,
        title:"Extensibility",
        description:"The repositories contain additional software that can expand your use of the device even further."
    }
];

const data5=[
    {
        icon:<SiOpensourceinitiative/>,
        title:"Openness",
        description:"Thanks to the open code, you know exactly what the software does. The hardware schematics are publicly available online."
    },
    {
        icon:<CgSearchLoading/>,
        title:"Overview",
        description:"The source code is typically inspected by experts all over the world, which means that bugs are found and fixed quickly."
    },
    {
        icon:<PiBracketsCurlyBold/>,
        title:"Development",
        description:"OpenWrt software has been in development for a long time and is updated by a large community of developers."
    },
    {
        icon:<BsArrowsFullscreen/>,
        title:"Extensibility",
        description:"The repositories contain additional software that can expand your use of the device even further."
    }
];

const data4=[
    {
        title:"Openness",
        description:"Thanks to the open code, you know exactly what the software does. The hardware schematics are publicly available online."
    },
    {
        imgUrl:"/graf_1.svg",
        title:"Overview",
        description:"The source code is typically inspected by experts all over the world, which means that bugs are found and fixed quickly."
    },
    {
        title:"Development",
        description:"OpenWrt software has been in development for a long time and is updated by a large community of developers."
    },
    {
        imgUrl:"/graf_2.svg",
        title:"Extensibility",
        description:"The repositories contain additional software that can expand your use of the device even further."
    }
];

const data6=[
    {
        imgUrl:"../dmsbg100.png",
        title:"No unnecessary LEDs",
        description:"If you're not a fan of blinking panels, you will appreciate that MOX has just one small LED and you can turn even that one off.",
    },
    {
        imgUrl:"../dmsbg100.png",
        title:"Not a single screw",
        description:"You can take the device apart and put it back again without any tools in 10 seconds.",
    },
    {
        imgUrl:"../dmsbg100.png",
        title:"Modules",
        description:"Design a device that meets your requirements and don't pay for anything you don't need",
    },
    {
        imgUrl:"../dmsbg100.png",
        title:"Modules",
        description:"Design a device that meets your requirements and don't pay for anything you don't need",
    }
];

export default function Dmsbg100() {
    return(
        <div className="flex flex-col items-center p-6 text-center gap-24">
            <section className="flex flex-row items-center">
                <div className="flex flex-col items-center">
                    <div className="font-sans font-black text-5xl">DMSBG-100</div>
                    <br/><br/>
                    <div className="text-5xl">High performance, secure, and reliable gateway for your network</div>
                    <br/><br/>
                    <a href="/contact"><Button>Learn more</Button></a>
                </div>
                <div><img src="../dmsbg100.png"></img></div>
            </section>
            <section className="flex flex-row items-center text-left text-2xl">
                <div><img src="../dmsbg100.png"></img></div>
                <div className="flex flex-col items-left gap-4" style={{paddingRight:"200px"}}>
                    <div>Home router is necessary to connect you to the internet but it is idle most of the time, just eating electricity. Why not use it for more tasks?</div>
                    <div>With powerful hardware, Turris Omnia Wi-Fi 6 can handle gigabit traffic and still be able to do much more. You can use it as a home server, NAS, printserver and it even has a virtual server built-in.</div>
                    <a><Button>TECHNICAL SPECIFICATION</Button></a>
                </div>
            </section>
            <section className="flex flex-col items-center">
                <div className="font-bold text-5xl">Open and secure software</div><br/><br/>
                <div className="flex flex-col md:flex-row gap-4 text-left">
                    {
                        data3.map((data, ind)=>{
                            return (
                                <Card key={ind}>
                                    {data.icon}
                                    <p className="font-bold">{data.title}</p>
                                    <p>{data.description}</p>
                                </Card>
                            )
                        })
                    }
                </div>
                <br/><br/>
                <a><Button>MORE ABOUT TURRIS OS</Button></a>
            </section>
            <section className="flex flex-col text-left items-center">
                <div className="font-extrabold text-5xl">Performance</div><br/>
                <div className="grid gap-4" style={{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}}>
                    {
                        data4.map((data, ind)=>{
                            return (
                                <Card key={ind}>
                                    <div className="h-1/2">
                                        <p className="font-bold">{data.title}</p>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="h-1/2"><img src={data.imgUrl}></img></div>
                                </Card>
                            )
                        })
                    }
                </div>
            </section>
            <section className="flex flex-col items-center">
                <div className="font-bold text-5xl">Hardware and features</div><br/><br/>
                <div className="flex flex-col md:flex-row text-left items-center">
                    <div className="grid gap-4" style={{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}}>
                        {
                            data5.map((data, ind)=>{
                                return (
                                    <Card key={ind}>
                                        {data.icon}
                                        <p className="font-bold">{data.title}</p>
                                        <p>{data.description}</p>
                                    </Card>
                                )
                            })
                        }
                    </div><br/>
                    <div><img src="/dmsbg100.png"></img></div>
                </div>
            </section>
            <section className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row gap-4 text-left">
                    {
                        data6.map((data, ind)=>{
                            return (
                                <Card key={ind}>
                                    <div><img src={data.imgUrl}></img></div>
                                    <p className="font-bold">{data.title}</p>
                                    <p>{data.description}</p>
                                </Card>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}