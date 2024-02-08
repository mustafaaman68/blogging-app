import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      {/* sidebar */}
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {/* yhnimg no chlri */}
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus molestiae quibusdam nihil placeat consectetur vel eligendi omnis enim rerum unde.</p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className='siderbarList'>
        <li className="sidebarListItem">
            Life
        </li>
        <li className="sidebarListItem">
            Music
        </li>
        <li className="sidebarListItem">
         Style
        </li>
        <li className="sidebarListItem">
            Sports
        </li>
        <li className="sidebarListItem">
            Cinema
        </li>
        <li className="sidebarListItem">
            Tech
        </li>
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fa-brands fa-instagram"></i>
    <i className="sidebarIcon fa-brands fa-facebook-f"></i>
    <i className="sidebarIcon fa-brands fa-pinterest"></i>
    <i className="sidebarIcon fa-brands fa-twitter"></i>

    </div>

    </div>

    </div>

  )
}
