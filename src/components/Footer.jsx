import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center gap-4 py-4 bg-blue-900 text-gray-200 font-bold">
            <a href="https://hakanyucel.com/" className="transition-all hover:text-white" target="_blank" rel="noreferrer">Hakan Yücel</a>
            <a href="https://www.instagram.com/hakannyucel/" className="transition-all hover:text-white" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
            <a href="https://github.com/hakannyucel" className="transition-all hover:text-white" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <a href="https://linkedin.com/in/hakannyucel" className="transition-all hover:text-white" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
        </footer>
    )
}

export default Footer;