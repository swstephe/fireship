import { useState, useEffect } from 'react'
import './Main.css';
import ReactMarkdown from 'react-markdown'
import main_md from './main.md'

export default function Main() {
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    fetch(main_md)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  })
  return (
    <main>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </main>
  );
}