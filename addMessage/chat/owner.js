import { setMessageO } from "./variableChat.js";


function setAttri(i){
  let owner = `<yt-live-chat-text-message-renderer
  class="style-scope yt-live-chat-item-list-renderer"
  whole-message-clickable=""
  id="123"
  has-inline-action-buttons="3"
  author-is-owner=""
  author-type="owner"
  ><yt-img-shadow
    id="author-photo"
    class="no-transition style-scope yt-live-chat-text-message-renderer"
    height="24"
    width="24"
    style="background-color: transparent"
    loaded=""
  >
    <img
      id="img"
      draggable="false"
      class="style-scope yt-img-shadow"
      alt=""
      src="https://yt4.ggpht.com/1KqRN-uj2pOiaJqesu3o_rc2ogQmVc4RnjIf-1zTxO2OmYLPJrYbmP5K1pW6ngX9WTEXI20Q=s32-c-k-c0x00ffffff-no-rj"
      width="24"
      height="24"
  /></yt-img-shadow>
  <div id="content" class="style-scope yt-live-chat-text-message-renderer">
    <span
      id="timestamp"
      class="style-scope yt-live-chat-text-message-renderer"
      >11:32 AM</span
    >
    <yt-live-chat-author-chip
      class="style-scope yt-live-chat-text-message-renderer"
      is-highlighted=""
    >
      <span
        id="prepend-chat-badges"
        class="style-scope yt-live-chat-author-chip"
      ></span
      ><span
        id="author-name"
        dir="auto"
        class="owner style-scope yt-live-chat-author-chip"
        >Nama owner yang sangat panjang euy<span
          id="chip-badges"
          class="style-scope yt-live-chat-author-chip"
        ></span
      ></span>
      <span
        id="chat-badges"
        class="style-scope yt-live-chat-author-chip"
      ></span> </yt-live-chat-author-chip
    >​<span
      id="message"
      dir="auto"
      class="style-scope yt-live-chat-text-message-renderer"
      >${setMessageO[i]}</span
    ><span
      id="deleted-state"
      class="style-scope yt-live-chat-text-message-renderer"
    ></span>
    <a
      id="show-original"
      href="#"
      class="style-scope yt-live-chat-text-message-renderer"
    ></a>
  </div>
  <div id="menu" class="style-scope yt-live-chat-text-message-renderer">
    <yt-icon-button
      id="menu-button"
      class="style-scope yt-live-chat-text-message-renderer"
    >
      <button
        id="button"
        class="style-scope yt-icon-button"
        aria-label="Tindakan chat"
      >
        <yt-icon
          icon="more_vert"
          class="style-scope yt-live-chat-text-message-renderer"
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
    </yt-icon-button>
  </div>
  <div
    id="inline-action-button-container"
    class="style-scope yt-live-chat-text-message-renderer"
    aria-hidden="true"
  >
    <div
      id="inline-action-buttons"
      class="style-scope yt-live-chat-text-message-renderer"
    >
      <yt-button-renderer
        class="style-scope yt-live-chat-text-message-renderer style-default size-default"
        is-icon-button=""
        has-no-text=""
      >
        <a
          class="yt-simple-endpoint style-scope yt-button-renderer"
          tabindex="-1"
        >
          <yt-icon-button
            id="button"
            class="style-scope yt-button-renderer style-default size-default"
          >
            <button
              id="button"
              class="style-scope yt-icon-button"
              aria-label="Hapus"
            >
              <yt-icon class="style-scope yt-button-renderer"
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
                          d="M11 17H9V8h2v9zm4-9h-2v9h2V8zm4-4v1h-1v16H6V5H5V4h4V3h6v1h4zm-2 1H7v15h10V5z"
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
        </a>
      </yt-button-renderer>
      <yt-button-renderer
        class="style-scope yt-live-chat-text-message-renderer style-default size-default"
        is-icon-button=""
        has-no-text=""
      >
        <a
          class="yt-simple-endpoint style-scope yt-button-renderer"
          tabindex="-1"
        >
          <yt-icon-button
            id="button"
            class="style-scope yt-button-renderer style-default size-default"
          >
            <button
              id="button"
              class="style-scope yt-icon-button"
              aria-label="Masukkan pengguna dalam waktu tunggu"
            >
              <yt-icon class="style-scope yt-button-renderer"
                ><yt-icon-shape class="style-scope yt-icon"
                  ><icon-shape class="yt-spec-icon-shape"
                    ><div
                      style="width: 100%; height: 100%; fill: currentcolor"
                    >
                      <svg
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
                          d="M18 3h1V2H5v1h1v5.21L9.79 12 6 15.79V21H5v1h14v-1h-1v-5.21L14.21 12 18 8.21Zm-5.21 9L17 16.21V21H7v-4.79L11.21 12 7 7.79V3h10v4.79ZM12 16l4 4H8ZM9 7h6l-3 3Z"
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
        </a>
      </yt-button-renderer>
      <yt-button-renderer
        class="style-scope yt-live-chat-text-message-renderer style-default size-default"
        is-icon-button=""
        has-no-text=""
      >
        <a
          class="yt-simple-endpoint style-scope yt-button-renderer"
          tabindex="-1"
        >
          <yt-icon-button
            id="button"
            class="style-scope yt-button-renderer style-default size-default"
          >
            <button
              id="button"
              class="style-scope yt-icon-button"
              aria-label="Sembunyikan pengguna di channel ini"
            >
              <yt-icon class="style-scope yt-button-renderer"
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
                        <g>
                          <path
                            d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm7 11H5v-2h14v2z"
                          ></path>
                        </g>
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
        </a>
      </yt-button-renderer>
    </div></div
></yt-live-chat-text-message-renderer>`;
return owner
}



let indexMesage = 0;
export function ownerChat(){
  if (indexMesage != (setMessageO.length-1)){
    indexMesage += 1;
  }else{
    indexMesage = 0;
  }
  return setAttri(indexMesage)
}



