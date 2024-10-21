import { createElement } from 'react'

export const config = {
  timeZone: 'Asia/Hong_Kong',
  defaultTranslationValues: {
    br: () => createElement('br', null),
    strong: (children) =>
      createElement('strong', { className: 'font-bold' }, children),
  },
}
