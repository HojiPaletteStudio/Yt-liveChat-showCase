import { nameChannel, setName2, setName3
 } from "./variableGift.js";

import {domImg, setMemberImg, setViewerImg, setMemberName} from "../../script.js";



function setAtr(rname, rname2, rname3){
   let gift1 = `    <ytd-sponsorships-live-chat-gift-purchase-announcement-renderer
      class="style-scope yt-live-chat-item-list-renderer"
      whole-message-clickable=""
      id="123"
      ><ytd-sponsorships-live-chat-header-renderer
        id="header"
        class="style-scope ytd-sponsorships-live-chat-gift-purchase-announcement-renderer"
        whole-message-clickable=""
      >
        <div
          id="header"
          class="style-scope ytd-sponsorships-live-chat-header-renderer"
        >
          <div
            id="content"
            class="style-scope ytd-sponsorships-live-chat-header-renderer"
          >
            <yt-img-shadow
              id="author-photo"
              height="40"
              width="40"
              class="style-scope ytd-sponsorships-live-chat-header-renderer no-transition"
              style="background-color: transparent"
              loaded=""
            >
              <img
                id="img"
                draggable="false"
                class="style-scope yt-img-shadow"
                alt=""
                height="40"
                width="40"
                src="${rimg}"
            /></yt-img-shadow>
            <dom-if
              restamp=""
              class="style-scope ytd-sponsorships-live-chat-header-renderer"
              ><template is="dom-if"></template
            ></dom-if>
            <dom-if
              class="style-scope ytd-sponsorships-live-chat-header-renderer"
              ><template is="dom-if"></template
            ></dom-if>
            <div
              id="header-content"
              class="style-scope ytd-sponsorships-live-chat-header-renderer"
            >
              <div
                id="header-content-primary-column"
                class="style-scope ytd-sponsorships-live-chat-header-renderer"
              >
                <div
                  id="header-content-inner-column"
                  class="style-scope ytd-sponsorships-live-chat-header-renderer"
                >
                  <yt-live-chat-author-chip
                    single-line=""
                    class="style-scope ytd-sponsorships-live-chat-header-renderer"
                  >
                    <span
                      id="prepend-chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                    ></span
                    ><span
                      id="author-name"
                      dir="auto"
                      class="member single-line style-scope yt-live-chat-author-chip"
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
                        aria-label="Pelanggan baru"
                        type="member"
                        shared-tooltip-text="Pelanggan baru"
                      >
                        <div
                          id="image"
                          class="style-scope yt-live-chat-author-badge-renderer"
                        >
                          <img
                            src="${domImg}"
                            class="style-scope yt-live-chat-author-badge-renderer"
                            alt="Pelanggan baru"
                          /></div
                      ></yt-live-chat-author-badge-renderer>
                    </span>
                  </yt-live-chat-author-chip>
                  <dom-if
                    restamp=""
                    class="style-scope ytd-sponsorships-live-chat-header-renderer"
                    ><template is="dom-if"></template
                  ></dom-if>
                  <div
                    id="primary-text"
                    class="style-scope ytd-sponsorships-live-chat-header-renderer"
                  >
                    Gifted 2 ${nameChannel} Memberships
                  </div>
                </div>
                <div
                  id="secondary-text"
                  class="style-scope ytd-sponsorships-live-chat-header-renderer"
                ></div>
              </div>
              <div
                id="header-content-deleted-state"
                class="style-scope ytd-sponsorships-live-chat-header-renderer"
                hidden=""
              >
                <div
                  id="deleted-primary-text"
                  class="style-scope ytd-sponsorships-live-chat-header-renderer"
                ></div>
              </div>
            </div>
          </div>
          <yt-img-shadow
            class="rhs-image style-scope ytd-sponsorships-live-chat-header-renderer no-transition"
            height="104"
            width="104"
            style="background-color: transparent"
            loaded=""
          >
            <img
              id="img"
              draggable="false"
              class="style-scope yt-img-shadow"
              alt=""
              height="104"
              width="104"
              src="https://www.gstatic.com/youtube/img/sponsorships/sponsorships_gift_purchase_announcement_artwork.png"
          /></yt-img-shadow>
          <dom-if
            restamp=""
            class="style-scope ytd-sponsorships-live-chat-header-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <div
            id="menu"
            class="style-scope ytd-sponsorships-live-chat-header-renderer"
          >
            <yt-icon-button
              id="menu-button"
              class="style-scope ytd-sponsorships-live-chat-header-renderer"
            >
              <button
                id="button"
                class="style-scope yt-icon-button"
                aria-label="Tindakan chat"
              >
                <yt-icon
                  icon="more_vert"
                  class="style-scope ytd-sponsorships-live-chat-header-renderer"
                  ><yt-icon-shape class="style-scope yt-icon"
                    ><icon-shape class="yt-spec-icon-shape">
                      <div
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
          </div></div></ytd-sponsorships-live-chat-header-renderer
    ></ytd-sponsorships-live-chat-gift-purchase-announcement-renderer>
    <ytd-sponsorships-live-chat-gift-redemption-announcement-renderer
      class="style-scope yt-live-chat-item-list-renderer"
      ><yt-img-shadow
        id="author-photo"
        height="24"
        width="24"
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer no-transition"
        style="background-color: transparent"
        loaded=""
      >
        <img
          id="img"
          draggable="false"
          class="style-scope yt-img-shadow"
          alt=""
          src="${rimg2}"
          width="24"
          height="24"
      /></yt-img-shadow>
      <dom-if
        restamp=""
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        ><template is="dom-if"></template
      ></dom-if>
      <dom-if
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        ><template is="dom-if"></template>
        <div></div
      ></dom-if>
      <div
        id="content"
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
      >
        <span
          id="timestamp"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          7:42 PM
        </span>
        <yt-live-chat-author-chip
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          <span
            id="prepend-chat-badges"
            class="style-scope yt-live-chat-author-chip"
          ></span
          ><span
            id="author-name"
            dir="auto"
            class="style-scope yt-live-chat-author-chip"
            >${rname2}<span
              id="chip-badges"
              class="style-scope yt-live-chat-author-chip"
            ></span
          ></span>
          <span
            id="chat-badges"
            class="style-scope yt-live-chat-author-chip"
          ></span>
        </yt-live-chat-author-chip>
        <dom-if
          restamp=""
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
          ><template is="dom-if"></template
        ></dom-if>
        <yt-formatted-string
          id="message"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
          ><span dir="auto" class="italic style-scope yt-formatted-string"
            >was gifted a memberships by </span
          ><span
            dir="auto"
            class="bold italic style-scope yt-formatted-string"
            style-target="bold"
            >${rname}</span
          ></yt-formatted-string
        >
        <yt-icon
          id="gift-icon"
          default-to-filled="true"
          icon="gift"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          <yt-icon-shape class="style-scope yt-icon">
            <icon-shape class="yt-spec-icon-shape">
              <div style="width: 100%; height: 100%; fill: currentcolor">
                <svg
                  height="24"
                  style="
                    pointer-events: none;
                    display: block;
                    width: 100%;
                    height: 100%;
                  "
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path
                    d="M19.28 3.61c-.96-.81-2.51-.81-3.47 0-.68.58-1.47 2.66-1.81 3.64-.34-.98-1.13-3.06-1.81-3.64-.96-.81-2.51-.81-3.47 0-.96.81-.96 2.13 0 2.94.62.53 2.7 1.12 3.94 1.45H5v6h8V8h2v6h4V8h-3.66c1.24-.32 3.32-.92 3.94-1.45.96-.81.96-2.13 0-2.94zM9.43 5.89c-.58-.43-.58-1.13 0-1.57.29-.21.67-.32 1.05-.32s.76.11 1.04.32c.39.29 1.02 1.57 1.48 2.68-1.48-.35-3.18-.82-3.57-1.11zm9.14 0c-.39.29-2.09.76-3.57 1.11.46-1.11 1.09-2.39 1.48-2.68.29-.21.67-.32 1.04-.32.38 0 .76.11 1.04.32.58.44.58 1.14.01 1.57zM5 16h8v5H5v-5zm10 0h4v5h-4v-5z"
                  ></path>
                </svg></div
            ></icon-shape>
          </yt-icon-shape>
        </yt-icon>
        <div
          id="deleted-message"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
          hidden=""
        ></div>
      </div>
      <div
        id="menu"
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
      >
        <yt-icon-button
          id="menu-button"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          <button
            id="button"
            class="style-scope yt-icon-button"
            aria-label="Tindakan chat"
          >
            <yt-icon
              icon="more_vert"
              class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
              ><yt-icon-shape class="style-scope yt-icon"
                ><icon-shape class="yt-spec-icon-shape"
                  ><div style="width: 100%; height: 100%; fill: currentcolor">
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
        </yt-icon-button></div
    ></ytd-sponsorships-live-chat-gift-redemption-announcement-renderer>
    <ytd-sponsorships-live-chat-gift-redemption-announcement-renderer
      class="style-scope yt-live-chat-item-list-renderer"
      ><yt-img-shadow
        id="author-photo"
        height="24"
        width="24"
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer no-transition"
        style="background-color: transparent"
        loaded=""
      >
        <img
          id="img"
          draggable="false"
          class="style-scope yt-img-shadow"
          alt=""
          src="${rimg3}"
          width="24"
          height="24"
      /></yt-img-shadow>
      <dom-if
        restamp=""
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        ><template is="dom-if"></template
      ></dom-if>
      <dom-if
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        ><template is="dom-if"></template>
        <div></div
      ></dom-if>
      <div
        id="content"
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
      >
        <span
          id="timestamp"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          7:42 PM
        </span>
        <yt-live-chat-author-chip
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          <span
            id="prepend-chat-badges"
            class="style-scope yt-live-chat-author-chip"
          ></span
          ><span
            id="author-name"
            dir="auto"
            class="style-scope yt-live-chat-author-chip"
            >${rname3}<span
              id="chip-badges"
              class="style-scope yt-live-chat-author-chip"
            ></span
          ></span>
          <span
            id="chat-badges"
            class="style-scope yt-live-chat-author-chip"
          ></span>
        </yt-live-chat-author-chip>
        <dom-if
          restamp=""
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
          ><template is="dom-if"></template
        ></dom-if>
        <yt-formatted-string
          id="message"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
          ><span dir="auto" class="italic style-scope yt-formatted-string"
            >was gifted a memberships by </span
          ><span
            dir="auto"
            class="bold italic style-scope yt-formatted-string"
            style-target="bold"
            >${rname}</span
          ></yt-formatted-string
        >
        <yt-icon
          id="gift-icon"
          default-to-filled="true"
          icon="gift"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          <yt-icon-shape class="style-scope yt-icon">
            <icon-shape class="yt-spec-icon-shape">
              <div style="width: 100%; height: 100%; fill: currentcolor">
                <svg
                  height="24"
                  style="
                    pointer-events: none;
                    display: block;
                    width: 100%;
                    height: 100%;
                  "
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path
                    d="M19.28 3.61c-.96-.81-2.51-.81-3.47 0-.68.58-1.47 2.66-1.81 3.64-.34-.98-1.13-3.06-1.81-3.64-.96-.81-2.51-.81-3.47 0-.96.81-.96 2.13 0 2.94.62.53 2.7 1.12 3.94 1.45H5v6h8V8h2v6h4V8h-3.66c1.24-.32 3.32-.92 3.94-1.45.96-.81.96-2.13 0-2.94zM9.43 5.89c-.58-.43-.58-1.13 0-1.57.29-.21.67-.32 1.05-.32s.76.11 1.04.32c.39.29 1.02 1.57 1.48 2.68-1.48-.35-3.18-.82-3.57-1.11zm9.14 0c-.39.29-2.09.76-3.57 1.11.46-1.11 1.09-2.39 1.48-2.68.29-.21.67-.32 1.04-.32.38 0 .76.11 1.04.32.58.44.58 1.14.01 1.57zM5 16h8v5H5v-5zm10 0h4v5h-4v-5z"
                  ></path>
                </svg></div
            ></icon-shape>
          </yt-icon-shape>
        </yt-icon>
        <div
          id="deleted-message"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
          hidden=""
        ></div>
      </div>
      <div
        id="menu"
        class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
      >
        <yt-icon-button
          id="menu-button"
          class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
        >
          <button
            id="button"
            class="style-scope yt-icon-button"
            aria-label="Tindakan chat"
          >
            <yt-icon
              icon="more_vert"
              class="style-scope ytd-sponsorships-live-chat-gift-redemption-announcement-renderer"
              ><yt-icon-shape class="style-scope yt-icon"
                ><icon-shape class="yt-spec-icon-shape"
                  ><div style="width: 100%; height: 100%; fill: currentcolor">
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
        </yt-icon-button></div
    ></ytd-sponsorships-live-chat-gift-redemption-announcement-renderer>`;

    return gift1
}

let rimg;
let rimg2;
let rimg3;

function rName(){
  let i = Math.floor(Math.random() * setMemberName.length);
  rimg = setMemberImg[i]
  return setMemberName[i]
}

function rName2(){
  let i = Math.floor(Math.random() * setName2.length);
  rimg2 = setViewerImg[i+4]
  return setName2[i]
}

function rName3(){
  let i = Math.floor(Math.random() * setName3.length);
  rimg3 = setViewerImg[i+8]
  return setName3[i]
}




export function setGift(){
   let rname = rName()
   let rname2 = rName2()
   let rname3 = rName3()
   return setAtr(rname, rname2, rname3)
}