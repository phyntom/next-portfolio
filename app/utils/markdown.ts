
import MarkdownIt from 'markdown-it';
import sanitizeHtml from "sanitize-html";

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

export function renderMarkdown(markdown: string):string {
    const rawHtml = md.render(markdown);
    
          const cleanHtml = sanitizeHtml(rawHtml, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            allowedAttributes: {
              ...sanitizeHtml.defaults.allowedAttributes,
              img: ["src", "alt"]
            }
          });
    return cleanHtml;

}

