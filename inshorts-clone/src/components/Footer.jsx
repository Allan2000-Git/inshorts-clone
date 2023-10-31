import { Container } from '@mui/material'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <>
            <div className="w-screen bg-[#323232] h-[150px] py-[20px]">
                <Container maxWidth="md">
                    <div className="flex justify-between items-end">
                        <div className="flex justify-between gap-4">
                            <div className="flex flex-col justify-between">
                                <img className="w-[160px]" src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="inshorts logo" />
                                <div className="text-right mt-[25px]">
                                    <p className="text-[#cfcfcf]">Inshorts <span className="text-[#808290]">Pre. Ltd.</span></p>
                                    <p className="text-[#808290]">&copy; COPYRIGHT {new Date().getFullYear}</p>
                                </div>
                            </div>
                            <div className="w-[1px] h-full bg-[#808290]">
                            </div>
                            <div className="flex flex-col justify-between">
                                <img className="w-[120px]" src="https://assets.inshorts.com/website_assets/images/contact_icon.png" alt="inshorts logo" />
                                <div className="text-left mt-[25px]">
                                    <p className="text-[#fff]">Terms & Conditions</p>
                                    <p className="text-[#fff]">Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 text-white">
                            <a href="https://www.facebook.com/inshortsapp" target="_blank"><FaFacebookF size={"25px"} /></a>
                            <a href="https://twitter.com/inshorts" target="_blank"><RiTwitterXFill size={"25px"} /></a>
                            <a href="https://www.linkedin.com/company/news-in-shorts" target="_blank"><FaLinkedinIn size={"25px"} /></a>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
