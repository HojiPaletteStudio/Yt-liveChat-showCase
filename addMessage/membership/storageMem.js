

import { domName} from "./variableMem.js"
// import { setImg } from "./variableMem.js";
import {domImg, setMemberImg, setMemberName} from "../../script.js";
import { setMessageM } from "../chat/variableChat.js";

function setAtr(rname,rmessage){
    let mem1 =`    <yt-live-chat-membership-item-renderer
          class="style-scope yt-live-chat-membership-item-renderer"
          whole-message-clickable=""
          id="123"
          has-primary-header-text=""
          ><div id="card" class="style-scope yt-live-chat-membership-item-renderer">
            <div
              id="header"
              class="style-scope yt-live-chat-membership-item-renderer"
            >
              <yt-img-shadow
                id="author-photo"
                height="40"
                width="40"
                class="style-scope yt-live-chat-membership-item-renderer no-transition"
                style="background-color: transparent"
                loaded=""
              >
                <img
                  id="img"
                  draggable="false"
                  class="style-scope yt-img-shadow"
                  alt=""
                  src="${rImg}"
                  width="40"
                  height="40"
              /></yt-img-shadow>
              <dom-if
                restamp=""
                class="style-scope yt-live-chat-membership-item-renderer"
                ><template is="dom-if"></template
              ></dom-if>
              <dom-if class="style-scope yt-live-chat-membership-item-renderer"
                ><template is="dom-if"></template
              ></dom-if>
              <div
                id="header-content"
                class="style-scope yt-live-chat-membership-item-renderer"
              >
                <div
                  id="header-content-primary-column"
                  class="style-scope yt-live-chat-membership-item-renderer"
                >
                  <div
                    id="header-content-inner-column"
                    class="style-scope yt-live-chat-membership-item-renderer"
                  >
                    <yt-live-chat-author-chip
                      class="style-scope yt-live-chat-membership-item-renderer"
                    >
                      <span
                        id="prepend-chat-badges"
                        class="style-scope yt-live-chat-author-chip"
                      ></span
                      ><span
                        id="author-name"
                        dir="auto"
                        class="member style-scope yt-live-chat-author-chip"
                        >${rname}<span
                          id="chip-badges"
                          class="style-scope yt-live-chat-author-chip"
                        ></span
                      ></span>
                      <span
                        id="chat-badges"
                        class="style-scope yt-live-chat-author-chip"
                      >
                        <yt-live-chat-author-badge-renderer
                          class="style-scope yt-live-chat-author-chip"
                          aria-label="Pelanggan (1 tahun)"
                          type="member"
                          shared-tooltip-text="Pelanggan (1 tahun)"
                        >
                          <div
                            id="image"
                            class="style-scope yt-live-chat-author-badge-renderer"
                          >
                            <img
                              src="${domImg}"
                              class="style-scope yt-live-chat-author-badge-renderer"
                              alt="Pelanggan (1 tahun)"
                            /></div
                        ></yt-live-chat-author-badge-renderer>
                      </span>
                    </yt-live-chat-author-chip>
                    <dom-if
                      restamp=""
                      class="style-scope yt-live-chat-membership-item-renderer"
                      ><template is="dom-if"></template
                    ></dom-if>
                    <div
                      id="header-primary-text"
                      class="style-scope yt-live-chat-membership-item-renderer"
                    >
                      Member for ${Math.floor((Math.random() *9) + 1) } months
                    </div>
                  </div>
                  <div
                    id="header-subtext"
                    class="style-scope yt-live-chat-membership-item-renderer"
                  >
                    ${domName}
                  </div>
                </div>
                <div
                  id="timestamp"
                  class="style-scope yt-live-chat-membership-item-renderer"
                >
                  2:27 PM
                </div>
              </div>
              <div
                id="menu"
                class="style-scope yt-live-chat-membership-item-renderer"
              >
                <yt-icon-button
                  id="menu-button"
                  class="style-scope yt-live-chat-membership-item-renderer"
                >
                  <button
                    id="button"
                    class="style-scope yt-icon-button"
                    aria-label="Tindakan chat"
                  >
                    <yt-icon
                      icon="more_vert"
                      class="style-scope yt-live-chat-membership-item-renderer"
                      ><yt-icon-shape class="style-scope yt-icon"
                        ><icon-shape class="yt-spec-icon-shape"
                          ><div
                            style="width: 100%; height: 100%; fill: currentcolor"
                          >
                            <svg
                              enable-background="new 0 0 24 24"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              focusable="false"
                              style="
                                pointer-events: none;
                                display: block;
                                width: 100%;
                                height: 100%;
                              "
                            >
                              <path
                                d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
                              ></path>
                            </svg></div></icon-shape></yt-icon-shape
                    ></yt-icon>
                  </button>
                  <yt-interaction
                    id="interaction"
                    class="circular style-scope yt-icon-button"
                  >
                    <div class="stroke style-scope yt-interaction"></div>
                    <div class="fill style-scope yt-interaction"></div
                  ></yt-interaction>
                </yt-icon-button>
              </div>
            </div>
            <div
              id="content"
              class="style-scope yt-live-chat-membership-item-renderer"
            >
              <div
                id="message"
                dir="auto"
                class="style-scope yt-live-chat-membership-item-renderer"
              >
                ${rmessage}
              </div>
              <div
                id="input-container"
                class="style-scope yt-live-chat-membership-item-renderer"
              >
                <dom-if class="style-scope yt-live-chat-membership-item-renderer"
                  ><template is="dom-if"></template
                ></dom-if>
              </div>
              <yt-formatted-string
                id="deleted-state"
                class="style-scope yt-live-chat-membership-item-renderer"
                is-empty=""
              >
                <yt-attributed-string
                  class="style-scope yt-formatted-string"
                ></yt-attributed-string>
              </yt-formatted-string>
            </div>
          </div>
          <div
            id="footer-button"
            class="style-scope yt-live-chat-membership-item-renderer"
            hidden=""
          ></div>
          <div
            id="inline-action-button-container"
            class="style-scope yt-live-chat-membership-item-renderer"
            aria-hidden="true"
          >
            <div
              id="inline-action-buttons"
              class="style-scope yt-live-chat-membership-item-renderer"
            ></div></div
        ></yt-live-chat-membership-item-renderer>`;
    
    let mem2 =`    <yt-live-chat-membership-item-renderer
          class="style-scope yt-live-chat-item-list-renderer"
          show-only-header=""
          id="123"
          ><div id="card" class="style-scope yt-live-chat-membership-item-renderer">
            <div
              id="header"
              class="style-scope yt-live-chat-membership-item-renderer"
            >
              <yt-img-shadow
                id="author-photo"
                height="40"
                width="40"
                class="style-scope yt-live-chat-membership-item-renderer no-transition"
                style="background-color: transparent"
                loaded=""
              >
                <img
                  id="img"
                  class="style-scope yt-img-shadow"
                  alt=""
                  height="40"
                  width="40"
                  src="${rImg}"
              /></yt-img-shadow>
              <dom-if
                restamp=""
                class="style-scope yt-live-chat-membership-item-renderer"
                ><template is="dom-if"></template
              ></dom-if>
              <dom-if class="style-scope yt-live-chat-membership-item-renderer"
                ><template is="dom-if"></template
              ></dom-if>
              <div
                id="header-content"
                class="style-scope yt-live-chat-membership-item-renderer"
              >
                <div
                  id="header-content-primary-column"
                  class="style-scope yt-live-chat-membership-item-renderer"
                >
                  <div
                    id="header-content-inner-column"
                    class="style-scope yt-live-chat-membership-item-renderer"
                  >
                    <yt-live-chat-author-chip
                      class="style-scope yt-live-chat-membership-item-renderer"
                    >
                      <span
                        id="author-name"
                        dir="auto"
                        class="member style-scope yt-live-chat-author-chip"
                        >${rname}<span
                          id="chip-badges"
                          class="style-scope yt-live-chat-author-chip"
                        ></span></span
                      ><span
                        id="chat-badges"
                        class="style-scope yt-live-chat-author-chip"
                      >
                        <yt-live-chat-author-badge-renderer
                          class="style-scope yt-live-chat-author-chip"
                          aria-label="New member"
                          type="member"
                          shared-tooltip-text="New member"
                        >
                          <div
                            id="image"
                            class="style-scope yt-live-chat-author-badge-renderer"
                          >
                            <img
                              src="${domImg}"
                              class="style-scope yt-live-chat-author-badge-renderer"
                              alt="New member"
                            /></div
                        ></yt-live-chat-author-badge-renderer> </span
                    ></yt-live-chat-author-chip>
                    <dom-if
                      restamp=""
                      class="style-scope yt-live-chat-membership-item-renderer"
                      ><template is="dom-if"></template
                    ></dom-if>
                    <div
                      id="header-primary-text"
                      class="style-scope yt-live-chat-membership-item-renderer"
                    ></div>
                  </div>
                  <div
                    id="header-subtext"
                    class="style-scope yt-live-chat-membership-item-renderer"
                  >
                    Welcome to Membership!
                  </div>
                </div>
                <div
                  id="timestamp"
                  class="style-scope yt-live-chat-membership-item-renderer"
                >
                  11:44 AM
                </div>
              </div>
            </div>
            <div
              id="content"
              class="style-scope yt-live-chat-membership-item-renderer"
            >
              <div
                id="message"
                dir="auto"
                class="style-scope yt-live-chat-membership-item-renderer"
              ></div>
              <div
                id="input-container"
                class="style-scope yt-live-chat-membership-item-renderer"
              >
                <dom-if class="style-scope yt-live-chat-membership-item-renderer"
                  ><template is="dom-if"></template
                ></dom-if>
              </div>
              <yt-formatted-string
                id="deleted-state"
                class="style-scope yt-live-chat-membership-item-renderer"
              >
              </yt-formatted-string>
            </div></div
        ></yt-live-chat-membership-item-renderer>`;
        
        return [mem1,mem2]
    
    }
    
    


let rImg;
let rmessage;
let indexMesage = 0;
let indexName = 0;


function ranMessage() {
  
  if (indexMesage != (setMessageM.length-1)){
    indexMesage += 1;
  }else{
    indexMesage = 0;
  }
  return setMessageM[indexMesage];
}

function rName(){
  if (indexName != (setMemberName.length-1)){
    indexName += 1;
  }else{
    indexName = 0;
  }
  rImg = setMemberImg[indexName]
  return setMemberName[indexName]
}


export function setMem(){
    let rname = rName();
    let rmessage = ranMessage();
    return setAtr(rname, rmessage);
}



