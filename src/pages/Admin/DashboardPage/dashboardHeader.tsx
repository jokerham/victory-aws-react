import { useEffect, useState }  from 'react'
import { getCurrentUser } from '@aws-amplify/auth'
import { generateClient } from '@aws-amplify/api'
//import { dashboardHeaderCounts } from 'graphql/queries'

import 'configureAmplify'

export default function DashboardHeader() {
  const [username, setUsername] = useState('')
  const [memberCount, setMemberCount] = useState(0)
  const [instituteCount, setInstituteCount] = useState(0)
  const [tournamentCount, setTournamentCount] = useState(0)
  const today = new Date();
  const client = generateClient()
  
  const getUserData = async () => {
    const user = await getCurrentUser()
    if (user !== undefined)
      setUsername(user.username)
  }

  const getCountInfo = async() => {
    // try {
    //   const result: any = await client.graphql({
    //     query: dashboardHeaderCounts,
    //     authMode: 'userPool'
    //   })
    //   const counts = result.data.dashboardHeaderCounts
    //   setMemberCount(counts[0])
    //   setInstituteCount(counts[1])
    //   setTournamentCount(counts[2])
    // } catch (error) {
    //   console.log(error)
    // }
  }
  
  useEffect(() => {
    getUserData()
    getCountInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="main-header">
      <div className="main-header__intro-wrapper">
        <div className="main-header__welcome">
          <div className="main-header__welcome-title text-light"><strong>{username}</strong>님 안녕하세요.</div>
          <div className="main-header__welcome-subtitle text-light">오늘은 {today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일 입니다.</div>
        </div>
        <div className="quickview">
          <div className="quickview__item">
            <div className="quickview__item-total">{memberCount}</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light">단체수</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">{instituteCount}</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light">회원수</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">{tournamentCount}</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light">대회수</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
