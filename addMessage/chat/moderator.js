import { messageMod as message} from "./variableChat.js";
// let message = "messageMod";

export const moderator = `    <yt-live-chat-text-message-renderer
      class="style-scope yt-live-chat-item-list-renderer"
      whole-message-clickable=""
      id="123"
      author-type="moderator"
      menu-visible=""
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
          src="https://yt3.ggpht.com/1KqRN-uj2pOiaJqesu3o_rc2ogQmVc4RnjIf-1zTxO2OmYLPJrYbmP5K1pW6ngX9WTEXI20Q=s88-c-k-c0x00ffffff-no-rj-mo"
          width="24"
          height="24"
      /></yt-img-shadow>
      <div id="content" class="style-scope yt-live-chat-text-message-renderer">
        <span
          id="timestamp"
          class="style-scope yt-live-chat-text-message-renderer"
          >2:43 PM</span
        >
        <yt-live-chat-author-chip
          class="style-scope yt-live-chat-text-message-renderer"
        >
          <span
            id="prepend-chat-badges"
            class="style-scope yt-live-chat-author-chip"
          ></span
          ><span
            id="author-name"
            dir="auto"
            class="moderator style-scope yt-live-chat-author-chip"
            >Lorem Ipsum<span
              id="chip-badges"
              class="style-scope yt-live-chat-author-chip"
            ></span
          ></span>
          <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
            <yt-live-chat-author-badge-renderer
              class="style-scope yt-live-chat-author-chip"
              aria-label="Moderator"
              type="moderator"
              shared-tooltip-text="Moderator"
            >
              <div
                id="image"
                class="style-scope yt-live-chat-author-badge-renderer"
              >
                <yt-icon class="style-scope yt-live-chat-author-badge-renderer">
                  <yt-icon-shape class="style-scope yt-icon">
                    <icon-shape class="yt-spec-icon-shape">
                      <div
                        style="width: 100%; height: 100%; fill: currentcolor"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          focusable="false"
                          style="
                            pointer-events: none;
                            display: block;
                            width: 100%;
                            height: 100%;
                          "
                        >
                          <path
                            d="M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z"
                          ></path>
                        </svg></div
                    ></icon-shape>
                  </yt-icon-shape>
                </yt-icon>
              </div>
              <tp-yt-paper-tooltip
                class="style-scope yt-live-chat-author-badge-renderer"
                role="tooltip"
                tabindex="-1"
                style="
                  --paper-tooltip-delay-in: 0ms;
                  inset: -51.4px auto auto 184.133px;
                "
              >
                <div
                  id="tooltip"
                  class="style-scope tp-yt-paper-tooltip hidden"
                  style-target="tooltip"
                >
                  Moderator
                </div></tp-yt-paper-tooltip
              >
            </yt-live-chat-author-badge-renderer>
          </span> </yt-live-chat-author-chip
        >​<span
          id="message"
          dir="auto"
          class="style-scope yt-live-chat-text-message-renderer"
          >${message}<span
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
        ></div></div
    ></yt-live-chat-text-message-renderer>`;