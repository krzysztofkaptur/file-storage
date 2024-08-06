import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function bytesToSize(bytes: number) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'n/a'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  if (i === 0) return `${bytes} ${sizes[i]})`
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}

export function formatDate(dateStr: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  return new Date(dateStr).toLocaleDateString('en-US', options)
}

export function downloadFile(name: string, url: string) {
  const link = document.createElement('a')
  link.setAttribute('download', name)
  link.href = url
  document.body.appendChild(link)
  link.click()
  link.remove()
}
