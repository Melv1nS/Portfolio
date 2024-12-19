'use client'
import { useEffect } from 'react'

export default function FontAwesomeScript() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://use.fontawesome.com/releases/v5.15.3/js/all.js'
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
