import { useState } from "react"
import { generateClient } from '@aws-amplify/api'
import { listInstitutes } from 'graphql/queries'
import { IoClose, IoSearch } from "react-icons/io5"
import { Institute } from "API"
import { SelectorProps } from ".."

const InstituteSelector: React.FC<SelectorProps> = (props) => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const { onClose, onSelect } = props

  const searchHandler = async() => {
    const client = generateClient();
    const response = await client.graphql({
      query: listInstitutes,
      variables: { filter: { title: { contains: searchCriteria }}}
    })
    const institutes = response.data.listInstitutes.items
    institutes.sort((a, b) => {
      const titleComparison = a.title.localeCompare(b.title)
      if (titleComparison !== 0) {
        return titleComparison
      }
      return (a.location??"").localeCompare(b.location??"")
    })
    setInstitutes(institutes)
  }

  const selectHandler = (institute: Institute) => {
    onSelect(institute.id, institute.title)
    onClose()
  }

  const onCloseClick = () => {
    onClose()
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <span className="modal__header__title">단체 선택</span>
          <IoClose className="modal__header__button" onClick={onCloseClick}/>
        </div>
        <div className="modal__body">
          <div>
            <input type="text" value={searchCriteria} onChange={(e) => setSearchCriteria(e.target.value)} />
            <IoSearch onClick={searchHandler} />
          </div>
          <ul>
            {institutes.map(institute => (
              <li key={institute.id} onClick={() => selectHandler(institute)}>
                {institute.title} ({institute.location})
              </li>              
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InstituteSelector