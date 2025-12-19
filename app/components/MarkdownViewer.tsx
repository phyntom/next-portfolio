import fs from 'fs'
import path from 'path'
import { renderMarkdown } from 'utils/markdown'

type Props = {
  src: string
}

export default function MarkdownViewer({ src }: Props) {
  const filePath = path.join(process.cwd(), 'public', src)
  const markdown = fs.readFileSync(filePath, 'utf-8')
  const html = renderMarkdown(markdown)

  return (
    <article
      className="prose max-w-4xl font-work-sans"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}