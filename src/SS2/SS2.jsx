import React from 'react'
import './SS2.module.css'

function SS2() {
  return (
    <div id='App'>

      <div className='Header'>
        <div>
          <i className='HeaderIcon'></i>
          <div className='HeaderAttribute'>Message</div>
        </div>
        <div className='Interact'>
          <input type="text" className='SearchBar' placeholder='Search' />
          <i className='Noti'></i>
          <i className='User'></i>
        </div>
      </div>

      <div className='Sidebar'>
        <div className='NavBtn'></div>
        <div className='NavIcon'>

        </div>
      </div>

      <div className='Content'>
        <div className='Chats'>
          <div className='ChatHeader'>
            <div>
              <p>Chats</p>
            </div>
            <div className='ChatBtns'>
              <button className='ChatBtn'>Search</button>
              <button className='ChatBtn'>Plus</button>
            </div>
            <div className='ChatStatus'>
              <button className='ChatStatusBtn'>Open</button>
              <button className='ChatStatusBtn'>Done</button>
              <button className='ChatStatusBtn'>Unread</button>
            </div>
          </div>
          <div className='Conversations'>

          </div>
          <div className='ChatFooter'>
            <input type="text" className='FeedbackSection' placeholder='Submit Feedback' />
          </div>
        </div>

        <div className='MainSection'>
          <div className="ChatName"></div>
          <div className='ChatNoti'></div>
          <div className="ChatContent"></div>
          <div className='ChatInteract'>
            <button className="shareFile">Share Files</button>
            <input type="text" placeholder='Write a message...' className="WriteMessage" />
            <button className="SendMessage">Send</button>
          </div>
        </div>

        <div className='ChatDetails'>
          <div className='SubNav'>
            <div className='ChatMembers'>
              <div className="Members"></div>
              <div className="Admin"></div>
            </div>
            <div className='ShareFiles'>
              <div className="Media"></div>
              <div className="Files"></div>
              <div className="Links"></div>
            </div>
          </div>

          <div className='ChatCustomize'></div>
          <div className="Policy"></div>
        </div>
      </div>

    </div>
  );
}

export default SS2