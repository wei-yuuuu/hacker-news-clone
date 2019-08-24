export const LINKS_PER_PAGE = 9

export const getDomain = url => {
  return url.replace(/^https?:\/\//i, '')
}

export const EMAIL_REGEX = new RegExp(
  '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$',
  'i'
)

export const URL_REGEX = new RegExp('^(ftp|http|https)://[^ "]+$')
