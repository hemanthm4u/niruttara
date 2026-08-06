import type { ReactNode } from 'react'

type IconName = 'leaf' | 'cow' | 'honey' | 'cycle' | 'tractor' | 'heart'

const paths: Record<IconName, ReactNode> = {
  leaf: (
    <>
      <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11Z" />
      <path d="M12 21V10" />
      <path d="M12 14c2-1.5 3.5-3 4-5" />
    </>
  ),
  cow: (
    <>
      <ellipse cx="12" cy="14" rx="7" ry="4.5" />
      <circle cx="8.5" cy="10" r="2.2" />
      <path d="M10.5 9.2c.7-.8 1.6-1.2 2.5-1.2" />
      <path d="M7.2 18.2v1.6M12 18.5v1.8M16.8 18.2v1.6" />
      <path d="M6.2 9.2l-1.4-1.6M8.2 8l-.2-1.8" />
    </>
  ),
  honey: (
    <>
      <path d="M8 10h8l1.5 3.5H6.5L8 10Z" />
      <path d="M7 13.5h10v5.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5.5Z" />
      <path d="M10 8.5c0-1.5 1-2.5 2-2.5s2 1 2 2.5" />
    </>
  ),
  cycle: (
    <>
      <path d="M4.5 12a7.5 7.5 0 0 1 12.4-5.7" />
      <path d="M19.5 12a7.5 7.5 0 0 1-12.4 5.7" />
      <path d="M16 4.8h3.2V8" />
      <path d="M8 19.2H4.8V16" />
    </>
  ),
  tractor: (
    <>
      <circle cx="7.5" cy="16.5" r="2.5" />
      <circle cx="17" cy="16" r="3.2" />
      <path d="M4 12.5h7l2 4h6.5" />
      <path d="M9.5 12.5V8.5h4.2l2.3 4" />
      <path d="M5.5 12.5V10H8" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8.2a3.8 3.8 0 0 1 7 2.6C19 15.6 12 20 12 20Z" />
  ),
}

export function OutlineIcon({
  name,
  className = '',
}: {
  name: IconName
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
