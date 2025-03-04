export type BreadcrumbProps = {
  links: { label: string; link: string; icon?: React.ReactNode }[]
  separator?: React.ReactNode
  maxItems?: number
  linkRouter: any // Link from react router or next.js
}
