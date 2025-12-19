import Experience from "./Experience"
import MarkdownViewer from "./MarkdownViewer"

export function ExperienceSection() {
    return (
        <Experience>
            <MarkdownViewer src="/data/experience.md" />
        </Experience>
    )
}