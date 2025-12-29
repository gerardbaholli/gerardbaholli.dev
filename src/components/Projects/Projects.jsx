import "./Projects.css";
import { Paragraph, H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import LinkButton from "../LinkButton/LinkButton.jsx";

export default function Projects() {
    return (
        <div className="projects-container">
            <H3 color={Text.paragraph1}>Projects</H3>

            <Paragraph color={Text.paragraph1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet congue turpis. Nullam tristique euismod tellus, quis tristique orci faucibus a. Donec odio ligula, mollis ut sem vitae, scelerisque rhoncus metus. Vivamus iaculis volutpat tortor, a condimentum metus efficitur id. Nulla hendrerit, justo vel congue placerat, erat massa scelerisque tellus, a suscipit turpis odio sed enim. Maecenas mi arcu, lobortis eu ornare sed, faucibus ut elit. Quisque pulvinar tellus a facilisis faucibus. Morbi mollis purus vitae malesuada molestie. Nullam tempor efficitur mi ut posuere. Sed eget nisl fermentum, congue purus quis, elementum metus. Maecenas ultrices mi eu libero fermentum mollis. In et rutrum libero, nec aliquet odio.</Paragraph>

            <Paragraph color={Text.paragraph1}>Suspendisse non ante pretium, viverra sapien sit amet, posuere lacus. Ut eu sem gravida, scelerisque diam quis, lacinia felis. Phasellus eget porttitor quam. Nullam tortor lacus, lobortis ac enim a, finibus rutrum ligula. Morbi feugiat neque mi. Proin dapibus facilisis ipsum non suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pellentesque dolor sit amet ipsum faucibus pretium.</Paragraph>

            <Paragraph color={Text.paragraph1}>Fusce mollis malesuada metus, id rutrum erat sagittis et. Integer quis pulvinar diam, vel sollicitudin lectus. Vivamus blandit orci vel consectetur sollicitudin. Curabitur eu nisi enim. Suspendisse potenti. Sed at pulvinar urna. In nec augue est. Morbi pellentesque finibus enim, sed consectetur mauris ullamcorper sed. Vivamus scelerisque interdum libero aliquet maximus. Vivamus bibendum dolor sed eros suscipit, fringilla fermentum ante rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Paragraph>

            <LinkButton href="/GerardBaholli-Curriculum-En.pdf" target="_blank" rel="noopener noreferrer">Curriculum</LinkButton>
            <LinkButton href="https://github.com/gerardbaholli" target="_blank">GitHub</LinkButton>
            <LinkButton href="https://www.linkedin.com/in/gerardbaholli/" target="_blank">LinkedIn</LinkButton>
            <LinkButton href="mailto:gerardbaholli@gmail.com">Contact me</LinkButton>
        </div>
    );
}
