import Logo from "../../public/Logo.png"
import Image from "next/image";
import Discord from '../../public/Discord.png'
import Github from '../../public/Github.png'
import LinkedIn from '../../public/LinkedIn.png'
import Twitter from '../../public/Twitter.png'

export default function HeroLeft() {
    return (
        <div className="p-7 h-full">
            <div className="flex flex-col justify-between h-full">
                <div >
                    <Image src={Logo} alt="Logo Image" className=""  width={80} />
                </div>
                <div>
                    <h1 className="font-bold text-[72px] --font-roboto-mono text-center text-[#fff]">BASE</h1>
                </div>
                <div className="flex gap-6">
                    <Image src={Github} alt="Logo Image"  height={44} />
                    <Image src={Twitter} alt="Logo Image"  height={42} />
                    <Image src={LinkedIn} alt="Logo Image"  height={44} />
                    <Image src={Discord} alt="Logo Image" 
                     height={44} />
                </div>
            </div>
        </div>
    )
}