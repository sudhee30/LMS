import { assets } from "../assets/assets/assets_frontend/assets";
import logo from "../assets/assets/assets_frontend/logooo.png"

function Footer(){
    return(
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/*Left*/}
                <div>
                    <img className="mb-5 w-40" src= {logo}></img>
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Your health is our priority—book appointments with trusted doctors anytime, anywhere. Experience seamless healthcare with just a few clicks!</p>
                </div>
                {/*centre*/}
                <div>
                    <p className="text-xl font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                {/*right*/}
                <div>
                    <p className="text-xl font-medium mb-5">Keep in touch!</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+91 8870080939</li>
                        <a href="mailto:sudheekshasenthilkumar@gmail.com">sudheekshasenthilkumar@gmail.com</a>
                    </ul>
                </div>


            </div>
            <div>
                {/*copyrights*/}
                <p className="py-5 text-small text-center">Copyrights 2024@Hello Doctor!-All rights reserved</p>
            </div>

        </div>
    )

}
export default Footer;