import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineLinkedin } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { SlNotebook } from "react-icons/sl"
import { socialLinks } from "../utils/data"

export default function Socials() {
  return (
    <div className="socials">
      {socialLinks.map(link => {
        return (
          <a href={link.url} target="_blank" >{link.name}</a>
        )
      })}
      {/* <a href="https://www.linkedin.com/in/jessicavaughn619/" target="_blank"><AiOutlineLinkedin /></a>
      <a href="https://github.com/jessicavaughn619" target="_blank"><AiOutlineGithub /></a>
      <a href="https://dev.to/jvaughn619" target="_blank"><SlNotebook /></a>
      <a href="https://www.facebook.com/jessica.vaughn619/" target="_blank"><AiOutlineFacebook /></a>
      <a href="https://www.instagram.com/jessicavaughn619/" target="_blank"><AiOutlineInstagram /></a> */}
    </div>
  )
}