export function normalizeHref(rawValue: string) {
  const value = rawValue.trim()

  if (!value) return ''

  if (/^(https?:\/\/|mailto:|tel:)/i.test(value)) {
    return value
  }

  return `http://${value}`
}

export function isValidHref(href: string) {
  if (/^(mailto:|tel:)/i.test(href)) {
    return true
  }

  try {
    const parsedUrl = new URL(href)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
}
