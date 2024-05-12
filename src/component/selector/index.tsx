import InstituteSelector from './instituteSelector'
import MemberSelector from './memberSelector'

export interface SelectorProps {
  onClose: () => {},
  onSelect: (code: string, value: string) => {}
}

export {
  InstituteSelector,
  MemberSelector
}
