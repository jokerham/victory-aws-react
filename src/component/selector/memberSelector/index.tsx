import { useState } from "react"
import { generateClient } from '@aws-amplify/api'
import { listMembers } from 'graphql/queries'
import { IoClose, IoSearch } from "react-icons/io5"
import { Member } from "API"
import { SelectorProps } from ".."

const MemberSelector: React.FC<SelectorProps> = (props) => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [members, setMembers] = useState<Member[]>([]);
  const { onClose, onSelect } = props

  const searchHandler = async() => {
    const client = generateClient();
    const response = await client.graphql({
      query: listMembers,
      variables: { filter: { name: { contains: searchCriteria }}}
    })
    const members = response.data.listMembers.items
    members.sort((a, b) => {
      return (a.name).localeCompare(b.name)
    })
    setMembers(members);
  }

  const selectHandler = (member: Member) => {
    onSelect(member.id, member.name);
    onClose();
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <span className="modal__header__title">단체 선택</span>
          <IoClose className="modal__header__button" onClick={onClose}/>
        </div>
        <div className="modal__body">
          <div>
            <input type="text" value={searchCriteria} onChange={(e) => setSearchCriteria(e.target.value)} />
            <IoSearch onClick={searchHandler} />
          </div>
          <ul>
            {members.map(member => (
              <li key={member.id} onClick={() => selectHandler(member)}>
                {member.name}
              </li>              
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MemberSelector