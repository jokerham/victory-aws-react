import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthUser, getCurrentUser, signOut } from '@aws-amplify/auth'
import { FaSignOutAlt } from 'react-icons/fa';
import { useAddEventListeners, toggleClass } from 'services/uihelper'
import 'configureAmplify'

export default function LayoutHeader() {
  const [user, setUser] = useState<null | AuthUser>(null)
  const navigate = useNavigate()

  async function getUser() {
    const user = await getCurrentUser()
    setUser(user)
  }

  useEffect(() => {
    getUser()
  }, [])
    
  async function logoutHandler(e: Event) {
    await signOut();
    navigate('/')
  }

  function userDropdownHandler(e: Event) {
    toggleClass(
      document.querySelector('.header__avatar > .dropdown') as HTMLElement,
      'dropdown--active',
    );
  }

  useAddEventListeners([
    { class: '#logout', event: 'click', handler: logoutHandler },
    { class: '.header__avatar', event: 'click', handler: userDropdownHandler },
  ]);

  return (
    <header className="header">
      <i className="fas fa-bars header__menu"></i>
      <div className="header__search">
        <input className="header__input" placeholder="Search..." />
      </div>
      <div className="header__avatar">
        <div className="dropdown">
          <ul className="dropdown__list">
            <li className="dropdown__list-item" id="logout">
              <span className="dropdown__icon"><FaSignOutAlt /></span>
              <span className="dropdown__title">log out</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
