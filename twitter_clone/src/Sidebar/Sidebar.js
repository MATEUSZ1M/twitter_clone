import React from 'react'
import './Sidebar.css'
//icons
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Sidebar() {
  return (
    <div className='sidebar'>
      {/* twiter icon */}
      <TwitterIcon />
      {/* sidebarOptions */}
      <SidebarOption Icon={HomeIcon} text={'Home'} />
      <SidebarOption Icon={SearchIcon} text={'Explore'} />
      <SidebarOption Icon={NotificationsIcon} text={'Notifications'}/>
      <SidebarOption Icon={MailOutlineIcon} text={'Messages'}/>
      <SidebarOption Icon={BookmarkBorderIcon} text={'Bookmarks'}/>
      <SidebarOption Icon={FormatListBulletedIcon} text={'Lists'}/>
      <SidebarOption Icon={PersonOutlineIcon} text={'Profile'}/>
      <SidebarOption Icon={MoreHorizIcon} text={'More'}/>git
    </div>
  )
}

export default Sidebar
