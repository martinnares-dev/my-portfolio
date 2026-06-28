import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div>
      <a href="https://github.com/" target="_blank">
        <FaGithub />
      </a>

      <a href="https://facebook.com/" target="_blank">
        <FaFacebook />
      </a>

      <a href="https://linkedin.com/" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
}

export default SocialLinks;