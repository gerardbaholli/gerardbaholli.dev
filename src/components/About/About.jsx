import "./About.css";
import { Paragraph, H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import LinkButton from "../LinkButton/LinkButton.jsx";

export default function About() {
    return (
        <div className="about-container">
            <H3 color={Text.paragraph1}>About</H3>
            <Paragraph color={Text.paragraph1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum tincidunt tellus et fringilla. Sed sed nibh odio. Mauris tristique ipsum eget lorem interdum, in tincidunt risus commodo. Morbi egestas faucibus diam sit amet pulvinar. Donec vehicula in felis in sagittis. Morbi eu eleifend massa. Maecenas ultrices enim quis massa rutrum gravida. Morbi eget sapien tortor.</Paragraph>
            <LinkButton href="/GerardBaholli-Curriculum-En.pdf" target="_blank" rel="noopener noreferrer">Curriculum</LinkButton>
            <LinkButton href="https://github.com/gerardbaholli" target="_blank">GitHub</LinkButton>
            <LinkButton href="https://www.linkedin.com/in/gerardbaholli/" target="_blank">LinkedIn</LinkButton>
            <LinkButton href="mailto:gerardbaholli@gmail.com">Contact me</LinkButton>
        </div>
    );
}
