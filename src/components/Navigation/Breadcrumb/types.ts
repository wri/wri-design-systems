export type BreadcrumbProps = {
  /** Array of breadcrumb links, each with a label, target link, and optional leading icon */
  links: { label: string; link: string; icon?: React.ReactNode }[]
  /** Custom separator node between breadcrumb items. Defaults to `ChevronDownIcon` */
  separator?: React.ReactNode
  /** Maximum number of links shown before collapsing into first, ellipsis, and last. Defaults to `99` */
  maxItems?: number
  /** Link component from react router or next.js used to render navigable links */
  linkRouter: any // Link from react router or next.js
  /** Size of the breadcrumb text and spacing. Defaults to `'default'` */
  size?: 'small' | 'default'
}
