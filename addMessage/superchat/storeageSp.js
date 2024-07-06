
import { amount} from "./variableSuperchat.js"
import {domImg, setMemberImg, setMemberName} from "../../script.js";
import { setMessageM } from "../chat/variableChat.js";

function setAtr(rname){
let sp1 =`    <yt-live-chat-paid-message-renderer
      class="style-scope yt-live-chat-item-list-renderer"
      modern=""
      id="123"
      whole-message-clickable=""
      style="
        --yt-live-chat-paid-message-primary-color: rgba(30, 136, 229, 1);
        --yt-live-chat-paid-message-secondary-color: rgba(21, 101, 192, 1);
        --yt-live-chat-paid-message-header-color: rgba(255, 255, 255, 1);
        --yt-live-chat-paid-message-timestamp-color: rgba(
          255,
          255,
          255,
          0.5019607843137255
        );
        --yt-live-chat-paid-message-color: rgba(255, 255, 255, 1);
        --yt-live-chat-disable-highlight-message-author-name-color: rgba(
          255,
          255,
          255,
          0.7019607843137254
        );
        --yt-live-chat-text-input-background-color: rgba(
          0,
          0,
          0,
          0.18823529411764706
        );
      "
      allow-animations=""
      ><div id="card" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
          <yt-img-shadow
            id="author-photo"
            class="style-scope yt-live-chat-paid-message-renderer no-transition"
            style="background-color: transparent"
            loaded=""
            ><style is-scoped="">
              yt-img-shadow {
                display: inline-block;
                opacity: 0;
                transition: opacity 0.2s;
                flex: none;
              }
              yt-img-shadow.no-transition {
                opacity: 1;
                transition: none;
              }
              yt-img-shadow.with-placeholder {
                background-color: var(
                  --yt-img-shadow-placeholder-color,
                  transparent
                );
                min-height: var(--yt-img-shadow-min-height, unset);
                min-width: var(--yt-img-shadow-min-width, unset);
              }
              yt-img-shadow[loaded] {
                opacity: 1;
              }
              yt-img-shadow.empty img.yt-img-shadow {
                visibility: hidden;
              }
              yt-img-shadow[fit-height] img.yt-img-shadow {
                height: 100%;
                width: auto;
              }
              yt-img-shadow[fit-width] img.yt-img-shadow {
                height: auto;
                width: 100%;
              }
              yt-img-shadow[fit] img.yt-img-shadow,
              yt-img-shadow[object-fit="FILL"] img.yt-img-shadow {
                width: 100%;
                height: 100%;
              }
              yt-img-shadow[rounded-container] img.yt-img-shadow {
                border-radius: 8px;
              }
              yt-img-shadow[object-fit="COVER"] img.yt-img-shadow {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              yt-img-shadow[object-fit="CONTAIN"] img.yt-img-shadow {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
              yt-img-shadow[object-position="LEFT"] img.yt-img-shadow {
                object-position: left;
              }
              img.yt-img-shadow {
                display: block;
                margin-left: var(--yt-img-margin-left, auto);
                margin-right: var(--yt-img-margin-right, auto);
                max-height: var(--yt-img-max-height, none);
                max-width: var(--yt-img-max-width, 100%);
                border-radius: var(--yt-img-border-radius, none);
              }</style
            ><img
              id="img"
              draggable="false"
              class="style-scope yt-img-shadow"
              alt=""
              width="32"
              height="32"
              src="${rImg}" /></yt-img-shadow
          ><dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template></dom-if
          ><dom-if class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template></dom-if
          ><dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <div
            id="header-content"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="header-content-primary-column"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="single-line"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <div
                  id="author-name-chip"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-live-chat-author-chip
                    disable-highlighting=""
                    single-line=""
                    class="style-scope yt-live-chat-paid-message-renderer"
                    ><span
                      id="prepend-chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                    ></span
                    ><span
                      id="author-name"
                      dir="auto"
                      class="member single-line style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip"
                      >${rname}<span
                        id="chip-badges"
                        class="style-scope yt-live-chat-author-chip"
                      ></span></span
                    ><span
                      id="chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                      ><yt-live-chat-author-badge-renderer
                        class="style-scope yt-live-chat-author-chip"
                        aria-label="Pelanggan (2 tahun)"
                        type="member"
                        shared-tooltip-text="Pelanggan (2 tahun)"
                        ><div
                          id="image"
                          class="style-scope yt-live-chat-author-badge-renderer"
                        >
                          <img
                            src="${domImg}"
                            class="style-scope yt-live-chat-author-badge-renderer"
                            alt="Pelanggan (2 tahun)"
                          /></div></yt-live-chat-author-badge-renderer></span
                  ></yt-live-chat-author-chip>
                </div>
                <div
                  id="purchase-amount-column"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-img-shadow
                    id="currency-img"
                    height="16"
                    width="16"
                    class="style-scope yt-live-chat-paid-message-renderer no-transition"
                    hidden=""
                    ><style is-scoped="">
                      yt-img-shadow {
                        display: inline-block;
                        opacity: 0;
                        transition: opacity 0.2s;
                        flex: none;
                      }
                      yt-img-shadow.no-transition {
                        opacity: 1;
                        transition: none;
                      }
                      yt-img-shadow.with-placeholder {
                        background-color: var(
                          --yt-img-shadow-placeholder-color,
                          transparent
                        );
                        min-height: var(--yt-img-shadow-min-height, unset);
                        min-width: var(--yt-img-shadow-min-width, unset);
                      }
                      yt-img-shadow[loaded] {
                        opacity: 1;
                      }
                      yt-img-shadow.empty img.yt-img-shadow {
                        visibility: hidden;
                      }
                      yt-img-shadow[fit-height] img.yt-img-shadow {
                        height: 100%;
                        width: auto;
                      }
                      yt-img-shadow[fit-width] img.yt-img-shadow {
                        height: auto;
                        width: 100%;
                      }
                      yt-img-shadow[fit] img.yt-img-shadow,
                      yt-img-shadow[object-fit="FILL"] img.yt-img-shadow {
                        width: 100%;
                        height: 100%;
                      }
                      yt-img-shadow[rounded-container] img.yt-img-shadow {
                        border-radius: 8px;
                      }
                      yt-img-shadow[object-fit="COVER"] img.yt-img-shadow {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      }
                      yt-img-shadow[object-fit="CONTAIN"] img.yt-img-shadow {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                      }
                      yt-img-shadow[object-position="LEFT"] img.yt-img-shadow {
                        object-position: left;
                      }
                      img.yt-img-shadow {
                        display: block;
                        margin-left: var(--yt-img-margin-left, auto);
                        margin-right: var(--yt-img-margin-right, auto);
                        max-height: var(--yt-img-max-height, none);
                        max-width: var(--yt-img-max-width, 100%);
                        border-radius: var(--yt-img-border-radius, none);
                      }</style
                    ><img
                      id="img"
                      draggable="false"
                      class="style-scope yt-img-shadow"
                      alt=""
                      height="16"
                      width="16"
                  /></yt-img-shadow>
                  <div
                    id="purchase-amount"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-formatted-string
                      class="style-scope yt-live-chat-paid-message-renderer"
                      >${amount[0]}</yt-formatted-string
                    >
                  </div>
                </div>
              </div>
            </div>
            <span
              id="timestamp"
              class="style-scope yt-live-chat-paid-message-renderer"
              >3:13 PM</span
            >
            <div
              id="gradient-container"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="gradient"
                class="style-scope yt-live-chat-paid-message-renderer"
              ></div>
            </div>
            <div
              id="menu"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <yt-icon-button
                id="menu-button"
                class="style-scope yt-live-chat-paid-message-renderer"
                role="button"
                ><style is-scoped="">
                  yt-icon-button {
                    display: inline-block;
                    position: relative;
                    width: 24px;
                    height: 24px;
                    box-sizing: border-box;
                    font-size: 0;
                  }
                  button.yt-icon-button {
                    vertical-align: middle;
                    color: inherit;
                    outline: 0;
                    background: 0 0;
                    margin: 0;
                    border: none;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    line-height: 0;
                    cursor: pointer;
                    -webkit-tap-highlight-color: transparent;
                    -webkit-tap-highlight-color: transparent;
                  }
                  button.yt-icon-button > yt-icon {
                    width: var(--yt-icon-button-icon-width, 100%);
                    height: var(--yt-icon-button-icon-height, 100%);
                  }
                  button.yt-icon-button[disabled] {
                    pointer-events: none;
                    cursor: auto;
                  }</style
                ><button
                  id="button"
                  class="style-scope yt-icon-button"
                  aria-label="Tindakan chat"
                >
                  <yt-icon
                    icon="more_vert"
                    class="style-scope yt-live-chat-paid-message-renderer"
                    ><yt-icon-shape class="style-scope yt-icon"
                      ><icon-shape class="yt-spec-icon-shape"
                        ><div
                          style="
                            width: 100%;
                            height: 100%;
                            display: block;
                            fill: currentcolor;
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            focusable="false"
                            style="
                              pointer-events: none;
                              display: inherit;
                              width: 100%;
                              height: 100%;
                            "
                          >
                            <path
                              d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
                            ></path>
                          </svg></div></icon-shape></yt-icon-shape
                  ></yt-icon></button
                ><yt-interaction
                  id="interaction"
                  class="circular style-scope yt-icon-button"
                  ><style is-scoped="">
                    yt-interaction {
                      pointer-events: none;
                      display: inline-block;
                      position: absolute;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                    }
                    .fill.yt-interaction {
                      will-change: opacity;
                      background-color: var(--yt-spec-touch-response);
                      opacity: 0;
                      position: absolute;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                    }
                    yt-interaction.down .fill.yt-interaction {
                      opacity: 0.1;
                    }
                    yt-interaction[is-overlay] .fill.yt-interaction {
                      background-color: var(
                        --yt-spec-static-overlay-text-primary
                      );
                    }
                    .stroke.yt-interaction {
                      will-change: opacity;
                      border: 1px solid var(--yt-spec-touch-response);
                      opacity: 0;
                      position: absolute;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                    }
                    yt-interaction.circular .fill.yt-interaction,
                    yt-interaction.circular .stroke.yt-interaction {
                      border-radius: 50%;
                    }
                    yt-interaction.extended {
                      margin: -4px;
                    }
                    yt-interaction.extended .fill.yt-interaction,
                    yt-interaction.extended .stroke.yt-interaction {
                      border-radius: 4px;
                    }
                    yt-interaction.rounded-large .fill.yt-interaction,
                    yt-interaction.rounded-large .stroke.yt-interaction {
                      border-radius: 12px;
                    }
                    yt-interaction[focused] .fill.yt-interaction {
                      opacity: 0.1;
                    }
                  </style>
                  <div class="stroke style-scope yt-interaction"></div>
                  <div
                    class="fill style-scope yt-interaction"
                  ></div></yt-interaction
              ></yt-icon-button>
            </div>
            <div
              id="creator-heart-button"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <yt-live-chat-creator-heart-view-model
                class="style-scope yt-live-chat-paid-message-renderer"
                ><yt-icon-button
                  id="creator-heart-button"
                  class="style-scope yt-live-chat-creator-heart-view-model"
                  role="button"
                  hidden=""
                  ><style is-scoped="">
                    yt-icon-button {
                      display: inline-block;
                      position: relative;
                      width: 24px;
                      height: 24px;
                      box-sizing: border-box;
                      font-size: 0;
                    }
                    button.yt-icon-button {
                      vertical-align: middle;
                      color: inherit;
                      outline: 0;
                      background: 0 0;
                      margin: 0;
                      border: none;
                      padding: 0;
                      width: 100%;
                      height: 100%;
                      line-height: 0;
                      cursor: pointer;
                      -webkit-tap-highlight-color: transparent;
                      -webkit-tap-highlight-color: transparent;
                    }
                    button.yt-icon-button > yt-icon {
                      width: var(--yt-icon-button-icon-width, 100%);
                      height: var(--yt-icon-button-icon-height, 100%);
                    }
                    button.yt-icon-button[disabled] {
                      pointer-events: none;
                      cursor: auto;
                    }</style
                  ><button
                    id="button"
                    class="style-scope yt-icon-button"
                    aria-label="Hati"
                  >
                    <dom-if
                      class="style-scope yt-live-chat-creator-heart-view-model"
                      ><template is="dom-if"></template></dom-if
                    ><dom-if
                      class="style-scope yt-live-chat-creator-heart-view-model"
                      ><template is="dom-if"></template
                    ></dom-if></button
                  ><yt-interaction
                    id="interaction"
                    class="circular style-scope yt-icon-button"
                    ><style is-scoped="">
                      yt-interaction {
                        pointer-events: none;
                        display: inline-block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                      }
                      .fill.yt-interaction {
                        will-change: opacity;
                        background-color: var(--yt-spec-touch-response);
                        opacity: 0;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                      }
                      yt-interaction.down .fill.yt-interaction {
                        opacity: 0.1;
                      }
                      yt-interaction[is-overlay] .fill.yt-interaction {
                        background-color: var(
                          --yt-spec-static-overlay-text-primary
                        );
                      }
                      .stroke.yt-interaction {
                        will-change: opacity;
                        border: 1px solid var(--yt-spec-touch-response);
                        opacity: 0;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                      }
                      yt-interaction.circular .fill.yt-interaction,
                      yt-interaction.circular .stroke.yt-interaction {
                        border-radius: 50%;
                      }
                      yt-interaction.extended {
                        margin: -4px;
                      }
                      yt-interaction.extended .fill.yt-interaction,
                      yt-interaction.extended .stroke.yt-interaction {
                        border-radius: 4px;
                      }
                      yt-interaction.rounded-large .fill.yt-interaction,
                      yt-interaction.rounded-large .stroke.yt-interaction {
                        border-radius: 12px;
                      }
                      yt-interaction[focused] .fill.yt-interaction {
                        opacity: 0.1;
                      }
                    </style>
                    <div class="stroke style-scope yt-interaction"></div>
                    <div
                      class="fill style-scope yt-interaction"
                    ></div></yt-interaction></yt-icon-button
              ></yt-live-chat-creator-heart-view-model>
            </div>
          </div>
        </div>
        <div
          id="content"
          class="style-scope yt-live-chat-paid-message-renderer"
        >
          <div
            id="message"
            dir="auto"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
          <div
            id="input-container"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <dom-if class="style-scope yt-live-chat-paid-message-renderer"
              ><template is="dom-if"></template
            ></dom-if>
          </div>
          <yt-formatted-string
            id="deleted-state"
            class="style-scope yt-live-chat-paid-message-renderer"
            is-empty='function(){var e=Sa.apply(0,arguments);a.loggingStatus.currentExternalCall=b;a.loggingStatus.bypassProxyController=!0;var g,k=(null!=(g=a.is)?g:a.tagName).toLowerCase();Ax(k,b,"PROPERTY_ACCESS_CALL_EXTERNAL");var m;g=null==(m=null!=c?c:d[b])?void 0:m.call.apply(m,[d].concat(la(e)));a.loggingStatus.currentExternalCall=void 0;a.loggingStatus.bypassProxyController=!1;return g}'
            ><style is-scoped="">
              yt-formatted-string[is-empty]:not(.use-shadow) {
                display: none;
              }
              yt-formatted-string span.yt-formatted-string:empty {
                display: none;
              }
              yt-formatted-string[dir="auto"] {
                text-align: right;
              }
              .bold.yt-formatted-string {
                font-weight: var(--yt-formatted-string-bold-font-weight, 500);
              }
              .bold.strikethrough.yt-formatted-string {
                font-weight: var(
                  --yt-formatted-string-bold-font-weight,
                  var(--yt-formatted-string-strikethrough-font-weight, 500)
                );
              }
              .bold.yt-formatted-string:not(a) {
                color: var(--yt-formatted-string-bold-color, inherit);
              }
              .deemphasize.yt-formatted-string {
                color: var(
                  --yt-formatted-string-deemphasize-color,
                  var(--yt-spec-text-secondary)
                );
              }
              .italic.yt-formatted-string {
                font-style: italic;
              }
              .error-underline.yt-formatted-string {
                padding-bottom: 2px;
              }
              yt-formatted-string:not([is-dark-theme])
                .error-underline.yt-formatted-string {
                background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bGluZSB4MT0iMCIgeDI9IjIiIHkxPSIxIiB5Mj0iMyIgc3Ryb2tlPSIjRkYwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIvPgogIDxsaW5lIHgxPSIyIiB4Mj0iNCIgeTE9IjMiIHkyPSIwIiBzdHJva2U9IiNGRjAwMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=)
                  bottom repeat-x;
              }
              yt-formatted-string[is-dark-theme]
                .error-underline.yt-formatted-string {
                background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bGluZSB4MT0iMCIgeDI9IjIiIHkxPSIxIiB5Mj0iMyIgc3Ryb2tlPSIjRkY0RTQ1IiBzdHJva2Utd2lkdGg9IjAuNSIvPgogIDxsaW5lIHgxPSIyIiB4Mj0iNCIgeTE9IjMiIHkyPSIwIiBzdHJva2U9IiNGRjRFNDUiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=)
                  bottom repeat-x;
              }
              .strikethrough.yt-formatted-string {
                text-decoration: line-through;
                font-family: var(
                  --yt-formatted-string-strikethrough-font-family
                );
                font-size: var(--yt-formatted-string-strikethrough-font-size);
                font-weight: var(
                  --yt-formatted-string-strikethrough-font-weight
                );
                line-height: var(
                  --yt-formatted-string-strikethrough-line-height
                );
              }
              .bracket.yt-formatted-string {
                padding: 2px;
                border-top: solid var(--yt-spec-themed-green) 2px;
                border-bottom: solid var(--yt-spec-themed-green) 2px;
                background: linear-gradient(
                    135deg,
                    var(--yt-spec-themed-green) 3px,
                    rgba(0, 0, 0, 0) 3px
                  ),
                  linear-gradient(
                    315deg,
                    var(--yt-spec-themed-green) 3px,
                    rgba(0, 0, 0, 0) 3px
                  );
              }
              yt-formatted-string > .emoji,
              yt-formatted-string > .small-emoji {
                margin: 0 2px 3px;
                vertical-align: middle;
              }
              yt-formatted-string > .emoji {
                width: var(--yt-formatted-string-emoji-size, 24px);
                height: var(--yt-formatted-string-emoji-size, 24px);
              }
              yt-formatted-string > .emoji.small-emoji {
                width: var(--yt-formatted-string-small-emoji-size, 16px);
                height: var(--yt-formatted-string-small-emoji-size, 16px);
              }
              a.yt-formatted-string {
                color: var(--yt-spec-call-to-action);
              }
              a.yt-simple-endpoint.yt-formatted-string {
                color: var(--yt-endpoint-color, var(--yt-spec-call-to-action));
                display: var(--yt-endpoint-display, inline-block);
                -webkit-text-decoration: var(
                  --yt-endpoint-text-regular-decoration,
                  none
                );
                text-decoration: var(
                  --yt-endpoint-text-regular-decoration,
                  none
                );
                word-wrap: var(--yt-endpoint-word-wrap, none);
                word-break: var(--yt-endpoint-word-break, none);
              }
              a.yt-simple-endpoint.yt-formatted-string:visited {
                color: var(
                  --yt-endpoint-visited-color,
                  var(--yt-spec-call-to-action)
                );
              }
              a.yt-simple-endpoint.yt-formatted-string:hover {
                color: var(
                  --yt-endpoint-hover-color,
                  var(--yt-spec-call-to-action)
                );
                -webkit-text-decoration: var(
                  --yt-endpoint-text-decoration,
                  none
                );
                text-decoration: var(--yt-endpoint-text-decoration, none);
              }
              a.yt-simple-endpoint.yt-formatted-string.yt-formatted-string:focus-visible {
                outline-offset: 0;
              }
              yt-formatted-string[has-link-only_]:not([force-default-style])
                a.yt-simple-endpoint.yt-formatted-string {
                color: var(--yt-endpoint-color, var(--yt-spec-text-primary));
              }
              yt-formatted-string[has-link-only_]:not([force-default-style])
                a.yt-simple-endpoint.yt-formatted-string:visited {
                color: var(
                  --yt-endpoint-visited-color,
                  var(--yt-spec-text-primary)
                );
              }
              yt-formatted-string[has-link-only_]:not([force-default-style])
                a.yt-simple-endpoint.yt-formatted-string:hover {
                color: var(
                  --yt-endpoint-hover-color,
                  var(--yt-spec-text-primary)
                );
              }
              #contenteditable-root.yt-formatted-string
                a.yt-simple-endpoint.yt-formatted-string,
              yt-formatted-string[contenteditable]
                a.yt-simple-endpoint.yt-formatted-string {
                background: var(
                  --yt-formatted-string-contenteditable-endpoint-background
                );
                border-radius: var(
                  --yt-formatted-string-contenteditable-endpoint-border-radius
                );
                color: var(
                  --yt-formatted-string-contenteditable-endpoint-color,
                  var(--yt-endpoint-color, var(--yt-spec-call-to-action))
                );
                cursor: var(
                  --yt-formatted-string-contenteditable-endpoint-cursor
                );
                max-width: var(
                  --yt-formatted-string-contenteditable-endpoint-max-width
                );
                overflow: var(
                  --yt-formatted-string-contenteditable-endpoint-overflow
                );
                pointer-events: var(
                  --yt-formatted-string-contenteditable-endpoint-pointer-events
                );
                text-overflow: var(
                  --yt-formatted-string-contenteditable-endpoint-text-overflow
                );
                vertical-align: var(
                  --yt-formatted-string-contenteditable-endpoint-vertical-align
                );
                white-space: var(
                  --yt-formatted-string-contenteditable-endpoint-white-space
                );
              }
              yt-formatted-string[split-lines] {
                white-space: pre-wrap;
              }
              yt-formatted-string[ellipsis-truncate-styling].complex-string {
                white-space: pre;
                display: flex;
                flex-direction: row;
              }
              yt-formatted-string[dir="auto"][ellipsis-truncate-styling].complex-string {
                display: inline-block;
              }
              yt-formatted-string[dir="auto"][ellipsis-truncate-styling].complex-string
                > .yt-formatted-string:not(style) {
                display: inline;
              }
              yt-formatted-string[ellipsis-truncate-styling] {
                display: block;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              yt-formatted-string[ellipsis-truncate-styling]
                a.yt-formatted-string {
                display: block;
                margin-right: -0.1em;
                padding-right: 0.1em;
                white-space: pre;
              }
              yt-formatted-string[ellipsis-truncate-styling]
                a.yt-formatted-string:last-child,
              yt-formatted-string[ellipsis-truncate-styling]
                span.yt-formatted-string:last-child {
                overflow: hidden;
                text-overflow: ellipsis;
              }
              yt-formatted-string::-webkit-scrollbar-thumb {
                height: 56px;
                background: var(--yt-spec-icon-disabled);
              }
              yt-formatted-string::-webkit-scrollbar {
                width: var(--ytd-scrollbar-width);
              }
              #contenteditable-root.yt-formatted-string
                .emoji.yt-formatted-string {
                height: var(--yt-formatted-string-contenteditable-emoji-height);
                margin: var(--yt-formatted-string-contenteditable-emoji-margin);
                padding-right: var(
                  --yt-formatted-string-contenteditable-emoji-padding-right
                );
                vertical-align: var(
                  --yt-formatted-string-contenteditable-emoji-vertical-align
                );
                width: var(--yt-formatted-string-contenteditable-emoji-width);
              }
              #contenteditable-root.yt-formatted-string
                .small-emoji.yt-formatted-string {
                height: var(
                  --yt-formatted-string-contenteditable-small-emoji-height
                );
                margin: var(
                  --yt-formatted-string-contenteditable-small-emoji-margin
                );
                padding-right: var(
                  --yt-formatted-string-contenteditable-small-emoji-padding-right
                );
                vertical-align: var(
                  --yt-formatted-string-contenteditable-small-emoji-vertical-align
                );
                width: var(
                  --yt-formatted-string-contenteditable-small-emoji-width
                );
              }
              #contenteditable-root.yt-formatted-string {
                outline: var(
                  --yt-formatted-string-contenteditable-root-style-outline
                );
                max-height: var(
                  --yt-formatted-string-contenteditable-root-style-max-height
                );
                overflow: var(
                  --yt-formatted-string-contenteditable-root-style-overflow
                );
                display: var(
                  --yt-formatted-string-contenteditable-root-style-display,
                  block
                );
                -ms-scroll-chaining: var(
                  --yt-formatted-string-contenteditable-root-style-overscroll-behavior
                );
                overscroll-behavior: var(
                  --yt-formatted-string-contenteditable-root-style-overscroll-behavior
                );
              }
              #contenteditable-root.yt-formatted-string[aria-label]:empty:before {
                color: var(
                  --contenteditable-root-style-placeholder-with-aria-color
                );
                content: var(
                  --contenteditable-root-style-placeholder-with-aria-content
                );
                cursor: var(
                  --contenteditable-root-style-placeholder-with-aria-cursor
                );
              }</style
            ><yt-attributed-string
              class="style-scope yt-formatted-string"
            ></yt-attributed-string
          ></yt-formatted-string>
          <div
            id="footer"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
          <div
            id="action-buttons"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="like-button"
              class="action-button style-scope yt-live-chat-paid-message-renderer"
            >
              <yt-live-chat-like-button-view-model
                class="style-scope yt-live-chat-paid-message-renderer"
                ><yt-toggle-button-view-model
                  class="style-scope yt-live-chat-like-button-view-model"
                  ><toggle-button-view-model
                    ><button-view-model class="yt-spec-button-view-model"
                      ><button
                        class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-xs yt-spec-button-shape-next--icon-leading"
                        style="
                          color: #fff;
                          background-color: rgba(255, 255, 255, 0.1);
                        "
                        aria-pressed="false"
                        title=""
                      >
                        <div
                          class="yt-spec-button-shape-next__icon"
                          aria-hidden="true"
                        >
                          <yt-icon style="width: 16px; height: 16px"
                            ><yt-icon-shape class="style-scope yt-icon"
                              ><icon-shape class="yt-spec-icon-shape"
                                ><div
                                  style="
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                    fill: currentcolor;
                                  "
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    width="16"
                                    focusable="false"
                                    style="
                                      pointer-events: none;
                                      display: inherit;
                                      width: 100%;
                                      height: 100%;
                                    "
                                  >
                                    <path
                                      d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"
                                    ></path>
                                  </svg></div></icon-shape></yt-icon-shape
                          ></yt-icon>
                        </div>
                        <div
                          class="yt-spec-button-shape-next__button-text-content"
                        >
                          7
                        </div>
                        <yt-touch-feedback-shape style="border-radius: inherit"
                          ><div
                            class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
                            aria-hidden="true"
                          >
                            <div
                              class="yt-spec-touch-feedback-shape__stroke"
                              style=""
                            ></div>
                            <div
                              class="yt-spec-touch-feedback-shape__fill"
                              style=""
                            ></div></div
                        ></yt-touch-feedback-shape></button></button-view-model></toggle-button-view-model></yt-toggle-button-view-model
              ></yt-live-chat-like-button-view-model>
            </div>
            <div
              id="reply-button"
              class="action-button style-scope yt-live-chat-paid-message-renderer"
            ></div>
            <div
              id="buy-button"
              class="action-button style-scope yt-live-chat-paid-message-renderer"
            ></div>
          </div>
        </div>
      </div>
      <div
        id="lower-bumper"
        class="style-scope yt-live-chat-paid-message-renderer"
      ></div>
      <div
        id="lower-buy-button"
        class="style-scope yt-live-chat-paid-message-renderer"
        hidden=""
      ></div>
      <div
        id="inline-action-button-container"
        class="style-scope yt-live-chat-paid-message-renderer"
        aria-hidden="true"
      >
        <div
          id="inline-action-buttons"
          class="style-scope yt-live-chat-paid-message-renderer"
        ></div></div
    ></yt-live-chat-paid-message-renderer>`;

 let sp2 =`    <yt-live-chat-paid-message-renderer class="style-scope yt-live-chat-paid-message-renderer" modern="" id="123"
        is-v2-style=""
        style="--yt-live-chat-paid-message-primary-color: rgba(0,229,255,1); --yt-live-chat-paid-message-secondary-color: rgba(0,184,212,1); --yt-live-chat-paid-message-header-color: rgba(0,0,0,1); --yt-live-chat-paid-message-timestamp-color: rgba(0,0,0,0.5019607843137255); --yt-live-chat-paid-message-color: rgba(0,0,0,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(0,0,0,0.7019607843137254);"
        allow-animations="">
        <div id="card" class="style-scope yt-live-chat-paid-message-renderer">
            <div id="header" class="style-scope yt-live-chat-paid-message-renderer"><yt-img-shadow id="author-photo"
                    class="style-scope yt-live-chat-paid-message-renderer no-transition"
                    style="background-color:transparent" loaded="">
                    <style is-scoped="">
                        yt-img-shadow {
                            display: inline-block;
                            opacity: 0;
                            transition: opacity .2s;
                            flex: none
                        }

                        yt-img-shadow.no-transition {
                            opacity: 1;
                            transition: none
                        }

                        yt-img-shadow.with-placeholder {
                            background-color: var(--yt-img-shadow-placeholder-color, transparent);
                            min-height: var(--yt-img-shadow-min-height, unset);
                            min-width: var(--yt-img-shadow-min-width, unset)
                        }

                        yt-img-shadow[loaded] {
                            opacity: 1
                        }

                        yt-img-shadow.empty img.yt-img-shadow {
                            visibility: hidden
                        }

                        yt-img-shadow[fit-height] img.yt-img-shadow {
                            height: 100%;
                            width: auto
                        }

                        yt-img-shadow[fit-width] img.yt-img-shadow {
                            height: auto;
                            width: 100%
                        }

                        yt-img-shadow[fit] img.yt-img-shadow,
                        yt-img-shadow[object-fit=FILL] img.yt-img-shadow {
                            width: 100%;
                            height: 100%
                        }

                        yt-img-shadow[rounded-container] img.yt-img-shadow {
                            border-radius: 8px
                        }

                        yt-img-shadow[object-fit=COVER] img.yt-img-shadow {
                            width: 100%;
                            height: 100%;
                            object-fit: cover
                        }

                        yt-img-shadow[object-fit=CONTAIN] img.yt-img-shadow {
                            width: 100%;
                            height: 100%;
                            object-fit: contain
                        }

                        yt-img-shadow[object-position=LEFT] img.yt-img-shadow {
                            object-position: left
                        }

                        img.yt-img-shadow {
                            display: block;
                            margin-left: var(--yt-img-margin-left, auto);
                            margin-right: var(--yt-img-margin-right, auto);
                            max-height: var(--yt-img-max-height, none);
                            max-width: var(--yt-img-max-width, 100%);
                            border-radius: var(--yt-img-border-radius, none)
                        }
                    </style><img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" width="32"
                        height="32"
                        src="${rImg}">
                </yt-img-shadow><dom-if restamp="" class="style-scope yt-live-chat-paid-message-renderer"><template
                        is="dom-if"></template></dom-if><dom-if
                    class="style-scope yt-live-chat-paid-message-renderer"><template
                        is="dom-if"></template></dom-if><dom-if restamp=""
                    class="style-scope yt-live-chat-paid-message-renderer"><template is="dom-if"></template></dom-if>
                <div id="header-content" class="style-scope yt-live-chat-paid-message-renderer">
                    <div id="header-content-primary-column" class="style-scope yt-live-chat-paid-message-renderer">
                        <div id="single-line" class="style-scope yt-live-chat-paid-message-renderer">
                            <div id="author-name-chip" class="style-scope yt-live-chat-paid-message-renderer">
                                <yt-live-chat-author-chip disable-highlighting="" single-line=""
                                    class="style-scope yt-live-chat-paid-message-renderer"><span
                                        id="prepend-chat-badges"
                                        class="style-scope yt-live-chat-author-chip"></span><span id="author-name"
                                        dir="auto"
                                        class="member single-line style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip">${rname}<span id="chip-badges"
                                            class="style-scope yt-live-chat-author-chip"></span></span><span
                                        id="chat-badges"
                                        class="style-scope yt-live-chat-author-chip"><yt-live-chat-author-badge-renderer
                                            class="style-scope yt-live-chat-author-chip"
                                            aria-label="Pelanggan (2 tahun)" type="member"
                                            shared-tooltip-text="Pelanggan (2 tahun)">
                                            <div id="image" class="style-scope yt-live-chat-author-badge-renderer"><img
                                                    src="${domImg}"
                                                    class="style-scope yt-live-chat-author-badge-renderer"
                                                    alt="Pelanggan (2 tahun)"></div>
                                        </yt-live-chat-author-badge-renderer></span></yt-live-chat-author-chip></div>
                            <div id="purchase-amount-column" class="style-scope yt-live-chat-paid-message-renderer">
                                <yt-img-shadow id="currency-img" height="16" width="16"
                                    class="style-scope yt-live-chat-paid-message-renderer no-transition" hidden="">
                                    <style is-scoped="">
                                        yt-img-shadow {
                                            display: inline-block;
                                            opacity: 0;
                                            transition: opacity .2s;
                                            flex: none
                                        }

                                        yt-img-shadow.no-transition {
                                            opacity: 1;
                                            transition: none
                                        }

                                        yt-img-shadow.with-placeholder {
                                            background-color: var(--yt-img-shadow-placeholder-color, transparent);
                                            min-height: var(--yt-img-shadow-min-height, unset);
                                            min-width: var(--yt-img-shadow-min-width, unset)
                                        }

                                        yt-img-shadow[loaded] {
                                            opacity: 1
                                        }

                                        yt-img-shadow.empty img.yt-img-shadow {
                                            visibility: hidden
                                        }

                                        yt-img-shadow[fit-height] img.yt-img-shadow {
                                            height: 100%;
                                            width: auto
                                        }

                                        yt-img-shadow[fit-width] img.yt-img-shadow {
                                            height: auto;
                                            width: 100%
                                        }

                                        yt-img-shadow[fit] img.yt-img-shadow,
                                        yt-img-shadow[object-fit=FILL] img.yt-img-shadow {
                                            width: 100%;
                                            height: 100%
                                        }

                                        yt-img-shadow[rounded-container] img.yt-img-shadow {
                                            border-radius: 8px
                                        }

                                        yt-img-shadow[object-fit=COVER] img.yt-img-shadow {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover
                                        }

                                        yt-img-shadow[object-fit=CONTAIN] img.yt-img-shadow {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: contain
                                        }

                                        yt-img-shadow[object-position=LEFT] img.yt-img-shadow {
                                            object-position: left
                                        }

                                        img.yt-img-shadow {
                                            display: block;
                                            margin-left: var(--yt-img-margin-left, auto);
                                            margin-right: var(--yt-img-margin-right, auto);
                                            max-height: var(--yt-img-max-height, none);
                                            max-width: var(--yt-img-max-width, 100%);
                                            border-radius: var(--yt-img-border-radius, none)
                                        }
                                    </style><img id="img" draggable="false" class="style-scope yt-img-shadow" alt=""
                                        height="16" width="16">
                                </yt-img-shadow>
                                <div id="purchase-amount" class="style-scope yt-live-chat-paid-message-renderer">
                                    <yt-formatted-string class="style-scope yt-live-chat-paid-message-renderer">
                                    ${amount[1]}</yt-formatted-string></div>
                            </div>
                        </div>
                    </div><span id="timestamp" class="style-scope yt-live-chat-paid-message-renderer">4:45 PM</span>
                    <div id="gradient-container" class="style-scope yt-live-chat-paid-message-renderer">
                        <div id="gradient" class="style-scope yt-live-chat-paid-message-renderer"></div>
                    </div>
                    <div id="menu" class="style-scope yt-live-chat-paid-message-renderer"><yt-icon-button
                            id="menu-button" class="style-scope yt-live-chat-paid-message-renderer" role="button">
                            <style is-scoped="">
                                yt-icon-button {
                                    display: inline-block;
                                    position: relative;
                                    width: 24px;
                                    height: 24px;
                                    box-sizing: border-box;
                                    font-size: 0
                                }

                                button.yt-icon-button {
                                    vertical-align: middle;
                                    color: inherit;
                                    outline: 0;
                                    background: 0 0;
                                    margin: 0;
                                    border: none;
                                    padding: 0;
                                    width: 100%;
                                    height: 100%;
                                    line-height: 0;
                                    cursor: pointer;
                                    -webkit-tap-highlight-color: transparent;
                                    -webkit-tap-highlight-color: transparent
                                }

                                button.yt-icon-button>yt-icon {
                                    width: var(--yt-icon-button-icon-width, 100%);
                                    height: var(--yt-icon-button-icon-height, 100%)
                                }

                                button.yt-icon-button[disabled] {
                                    pointer-events: none;
                                    cursor: auto
                                }
                            </style><button id="button" class="style-scope yt-icon-button"
                                aria-label="Tindakan chat"><yt-icon icon="more_vert"
                                    class="style-scope yt-live-chat-paid-message-renderer"><yt-icon-shape
                                        class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
                                            <div style="width:100%;height:100%;display:block;fill:currentcolor"><svg
                                                    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                                    height="24" viewBox="0 0 24 24" width="24" focusable="false"
                                                    style="pointer-events:none;display:inherit;width:100%;height:100%">
                                                    <path
                                                        d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                                                    </path>
                                                </svg></div>
                                        </icon-shape></yt-icon-shape></yt-icon></button><yt-interaction id="interaction"
                                class="circular style-scope yt-icon-button">
                                <style is-scoped="">
                                    yt-interaction {
                                        pointer-events: none;
                                        display: inline-block;
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        left: 0
                                    }

                                    .fill.yt-interaction {
                                        will-change: opacity;
                                        background-color: var(--yt-spec-touch-response);
                                        opacity: 0;
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        left: 0
                                    }

                                    yt-interaction.down .fill.yt-interaction {
                                        opacity: .1
                                    }

                                    yt-interaction[is-overlay] .fill.yt-interaction {
                                        background-color: var(--yt-spec-static-overlay-text-primary)
                                    }

                                    .stroke.yt-interaction {
                                        will-change: opacity;
                                        border: 1px solid var(--yt-spec-touch-response);
                                        opacity: 0;
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        left: 0
                                    }

                                    yt-interaction.circular .fill.yt-interaction,
                                    yt-interaction.circular .stroke.yt-interaction {
                                        border-radius: 50%
                                    }

                                    yt-interaction.extended {
                                        margin: -4px
                                    }

                                    yt-interaction.extended .fill.yt-interaction,
                                    yt-interaction.extended .stroke.yt-interaction {
                                        border-radius: 4px
                                    }

                                    yt-interaction.rounded-large .fill.yt-interaction,
                                    yt-interaction.rounded-large .stroke.yt-interaction {
                                        border-radius: 12px
                                    }

                                    yt-interaction[focused] .fill.yt-interaction {
                                        opacity: .1
                                    }
                                </style>
                                <div class="stroke style-scope yt-interaction"></div>
                                <div class="fill style-scope yt-interaction"></div>
                            </yt-interaction>
                        </yt-icon-button></div>
                    <div id="creator-heart-button" class="style-scope yt-live-chat-paid-message-renderer">
                        <yt-live-chat-creator-heart-view-model
                            class="style-scope yt-live-chat-paid-message-renderer"><yt-icon-button
                                id="creator-heart-button" class="style-scope yt-live-chat-creator-heart-view-model"
                                role="button" hidden="">
                                <style is-scoped="">
                                    yt-icon-button {
                                        display: inline-block;
                                        position: relative;
                                        width: 24px;
                                        height: 24px;
                                        box-sizing: border-box;
                                        font-size: 0
                                    }

                                    button.yt-icon-button {
                                        vertical-align: middle;
                                        color: inherit;
                                        outline: 0;
                                        background: 0 0;
                                        margin: 0;
                                        border: none;
                                        padding: 0;
                                        width: 100%;
                                        height: 100%;
                                        line-height: 0;
                                        cursor: pointer;
                                        -webkit-tap-highlight-color: transparent;
                                        -webkit-tap-highlight-color: transparent
                                    }

                                    button.yt-icon-button>yt-icon {
                                        width: var(--yt-icon-button-icon-width, 100%);
                                        height: var(--yt-icon-button-icon-height, 100%)
                                    }

                                    button.yt-icon-button[disabled] {
                                        pointer-events: none;
                                        cursor: auto
                                    }
                                </style><button id="button" class="style-scope yt-icon-button" aria-label="Hati"><dom-if
                                        class="style-scope yt-live-chat-creator-heart-view-model"><template
                                            is="dom-if"></template></dom-if><dom-if
                                        class="style-scope yt-live-chat-creator-heart-view-model"><template
                                            is="dom-if"></template></dom-if></button><yt-interaction id="interaction"
                                    class="circular style-scope yt-icon-button">
                                    <style is-scoped="">
                                        yt-interaction {
                                            pointer-events: none;
                                            display: inline-block;
                                            position: absolute;
                                            top: 0;
                                            right: 0;
                                            bottom: 0;
                                            left: 0
                                        }

                                        .fill.yt-interaction {
                                            will-change: opacity;
                                            background-color: var(--yt-spec-touch-response);
                                            opacity: 0;
                                            position: absolute;
                                            top: 0;
                                            right: 0;
                                            bottom: 0;
                                            left: 0
                                        }

                                        yt-interaction.down .fill.yt-interaction {
                                            opacity: .1
                                        }

                                        yt-interaction[is-overlay] .fill.yt-interaction {
                                            background-color: var(--yt-spec-static-overlay-text-primary)
                                        }

                                        .stroke.yt-interaction {
                                            will-change: opacity;
                                            border: 1px solid var(--yt-spec-touch-response);
                                            opacity: 0;
                                            position: absolute;
                                            top: 0;
                                            right: 0;
                                            bottom: 0;
                                            left: 0
                                        }

                                        yt-interaction.circular .fill.yt-interaction,
                                        yt-interaction.circular .stroke.yt-interaction {
                                            border-radius: 50%
                                        }

                                        yt-interaction.extended {
                                            margin: -4px
                                        }

                                        yt-interaction.extended .fill.yt-interaction,
                                        yt-interaction.extended .stroke.yt-interaction {
                                            border-radius: 4px
                                        }

                                        yt-interaction.rounded-large .fill.yt-interaction,
                                        yt-interaction.rounded-large .stroke.yt-interaction {
                                            border-radius: 12px
                                        }

                                        yt-interaction[focused] .fill.yt-interaction {
                                            opacity: .1
                                        }
                                    </style>
                                    <div class="stroke style-scope yt-interaction"></div>
                                    <div class="fill style-scope yt-interaction"></div>
                                </yt-interaction>
                            </yt-icon-button></yt-live-chat-creator-heart-view-model></div>
                </div>
            </div>
            <div id="content" class="style-scope yt-live-chat-paid-message-renderer">
                <div id="message" dir="auto" class="style-scope yt-live-chat-paid-message-renderer">
                 ${rmessage}
                        </div>
                <div id="input-container" class="style-scope yt-live-chat-paid-message-renderer"><dom-if
                        class="style-scope yt-live-chat-paid-message-renderer"><template
                            is="dom-if"></template></dom-if></div><yt-formatted-string id="deleted-state"
                    class="style-scope yt-live-chat-paid-message-renderer"
                    is-empty="function(){var e=Sa.apply(0,arguments);a.loggingStatus.currentExternalCall=b;a.loggingStatus.bypassProxyController=!0;var g,k=(null!=(g=a.is)?g:a.tagName).toLowerCase();Ax(k,b,"
                    property_access_call_external");var="" m;g="null==(m=null!=c?c:d[b])?void"
                    0:m.call.apply(m,[d].concat(la(e)));a.loggingstatus.currentexternalcall="void"
                    0;a.loggingstatus.bypassproxycontroller="!1;return" g}"="">
                    <style is-scoped="">
                        yt-formatted-string[is-empty]:not(.use-shadow) {
                            display: none
                        }

                        yt-formatted-string span.yt-formatted-string:empty {
                            display: none
                        }

                        yt-formatted-string[dir=auto] {
                            text-align: right
                        }

                        .bold.yt-formatted-string {
                            font-weight: var(--yt-formatted-string-bold-font-weight, 500)
                        }

                        .bold.strikethrough.yt-formatted-string {
                            font-weight: var(--yt-formatted-string-bold-font-weight, var(--yt-formatted-string-strikethrough-font-weight, 500))
                        }

                        .bold.yt-formatted-string:not(a) {
                            color: var(--yt-formatted-string-bold-color, inherit)
                        }

                        .deemphasize.yt-formatted-string {
                            color: var(--yt-formatted-string-deemphasize-color, var(--yt-spec-text-secondary))
                        }

                        .italic.yt-formatted-string {
                            font-style: italic
                        }

                        .error-underline.yt-formatted-string {
                            padding-bottom: 2px
                        }

                        yt-formatted-string:not([is-dark-theme]) .error-underline.yt-formatted-string {
                            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bGluZSB4MT0iMCIgeDI9IjIiIHkxPSIxIiB5Mj0iMyIgc3Ryb2tlPSIjRkYwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIvPgogIDxsaW5lIHgxPSIyIiB4Mj0iNCIgeTE9IjMiIHkyPSIwIiBzdHJva2U9IiNGRjAwMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=) bottom repeat-x
                        }

                        yt-formatted-string[is-dark-theme] .error-underline.yt-formatted-string {
                            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bGluZSB4MT0iMCIgeDI9IjIiIHkxPSIxIiB5Mj0iMyIgc3Ryb2tlPSIjRkY0RTQ1IiBzdHJva2Utd2lkdGg9IjAuNSIvPgogIDxsaW5lIHgxPSIyIiB4Mj0iNCIgeTE9IjMiIHkyPSIwIiBzdHJva2U9IiNGRjRFNDUiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=) bottom repeat-x
                        }

                        .strikethrough.yt-formatted-string {
                            text-decoration: line-through;
                            font-family: var(--yt-formatted-string-strikethrough-font-family);
                            font-size: var(--yt-formatted-string-strikethrough-font-size);
                            font-weight: var(--yt-formatted-string-strikethrough-font-weight);
                            line-height: var(--yt-formatted-string-strikethrough-line-height)
                        }

                        .bracket.yt-formatted-string {
                            padding: 2px;
                            border-top: solid var(--yt-spec-themed-green) 2px;
                            border-bottom: solid var(--yt-spec-themed-green) 2px;
                            background: linear-gradient(135deg, var(--yt-spec-themed-green) 3px, rgba(0, 0, 0, 0) 3px), linear-gradient(315deg, var(--yt-spec-themed-green) 3px, rgba(0, 0, 0, 0) 3px)
                        }

                        yt-formatted-string>.emoji,
                        yt-formatted-string>.small-emoji {
                            margin: 0 2px 3px;
                            vertical-align: middle
                        }

                        yt-formatted-string>.emoji {
                            width: var(--yt-formatted-string-emoji-size, 24px);
                            height: var(--yt-formatted-string-emoji-size, 24px)
                        }

                        yt-formatted-string>.emoji.small-emoji {
                            width: var(--yt-formatted-string-small-emoji-size, 16px);
                            height: var(--yt-formatted-string-small-emoji-size, 16px)
                        }

                        a.yt-formatted-string {
                            color: var(--yt-spec-call-to-action)
                        }

                        a.yt-simple-endpoint.yt-formatted-string {
                            color: var(--yt-endpoint-color, var(--yt-spec-call-to-action));
                            display: var(--yt-endpoint-display, inline-block);
                            -webkit-text-decoration: var(--yt-endpoint-text-regular-decoration, none);
                            text-decoration: var(--yt-endpoint-text-regular-decoration, none);
                            word-wrap: var(--yt-endpoint-word-wrap, none);
                            word-break: var(--yt-endpoint-word-break, none)
                        }

                        a.yt-simple-endpoint.yt-formatted-string:visited {
                            color: var(--yt-endpoint-visited-color, var(--yt-spec-call-to-action))
                        }

                        a.yt-simple-endpoint.yt-formatted-string:hover {
                            color: var(--yt-endpoint-hover-color, var(--yt-spec-call-to-action));
                            -webkit-text-decoration: var(--yt-endpoint-text-decoration, none);
                            text-decoration: var(--yt-endpoint-text-decoration, none)
                        }

                        a.yt-simple-endpoint.yt-formatted-string.yt-formatted-string:focus-visible {
                            outline-offset: 0
                        }

                        yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string {
                            color: var(--yt-endpoint-color, var(--yt-spec-text-primary))
                        }

                        yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:visited {
                            color: var(--yt-endpoint-visited-color, var(--yt-spec-text-primary))
                        }

                        yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover {
                            color: var(--yt-endpoint-hover-color, var(--yt-spec-text-primary))
                        }

                        #contenteditable-root.yt-formatted-string a.yt-simple-endpoint.yt-formatted-string,
                        yt-formatted-string[contenteditable] a.yt-simple-endpoint.yt-formatted-string {
                            background: var(--yt-formatted-string-contenteditable-endpoint-background);
                            border-radius: var(--yt-formatted-string-contenteditable-endpoint-border-radius);
                            color: var(--yt-formatted-string-contenteditable-endpoint-color, var(--yt-endpoint-color, var(--yt-spec-call-to-action)));
                            cursor: var(--yt-formatted-string-contenteditable-endpoint-cursor);
                            max-width: var(--yt-formatted-string-contenteditable-endpoint-max-width);
                            overflow: var(--yt-formatted-string-contenteditable-endpoint-overflow);
                            pointer-events: var(--yt-formatted-string-contenteditable-endpoint-pointer-events);
                            text-overflow: var(--yt-formatted-string-contenteditable-endpoint-text-overflow);
                            vertical-align: var(--yt-formatted-string-contenteditable-endpoint-vertical-align);
                            white-space: var(--yt-formatted-string-contenteditable-endpoint-white-space)
                        }

                        yt-formatted-string[split-lines] {
                            white-space: pre-wrap
                        }

                        yt-formatted-string[ellipsis-truncate-styling].complex-string {
                            white-space: pre;
                            display: flex;
                            flex-direction: row
                        }

                        yt-formatted-string[dir=auto][ellipsis-truncate-styling].complex-string {
                            display: inline-block
                        }

                        yt-formatted-string[dir=auto][ellipsis-truncate-styling].complex-string>.yt-formatted-string:not(style) {
                            display: inline
                        }

                        yt-formatted-string[ellipsis-truncate-styling] {
                            display: block;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap
                        }

                        yt-formatted-string[ellipsis-truncate-styling] a.yt-formatted-string {
                            display: block;
                            margin-right: -.1em;
                            padding-right: .1em;
                            white-space: pre
                        }

                        yt-formatted-string[ellipsis-truncate-styling] a.yt-formatted-string:last-child,
                        yt-formatted-string[ellipsis-truncate-styling] span.yt-formatted-string:last-child {
                            overflow: hidden;
                            text-overflow: ellipsis
                        }

                        yt-formatted-string::-webkit-scrollbar-thumb {
                            height: 56px;
                            background: var(--yt-spec-icon-disabled)
                        }

                        yt-formatted-string::-webkit-scrollbar {
                            width: var(--ytd-scrollbar-width)
                        }

                        #contenteditable-root.yt-formatted-string .emoji.yt-formatted-string {
                            height: var(--yt-formatted-string-contenteditable-emoji-height);
                            margin: var(--yt-formatted-string-contenteditable-emoji-margin);
                            padding-right: var(--yt-formatted-string-contenteditable-emoji-padding-right);
                            vertical-align: var(--yt-formatted-string-contenteditable-emoji-vertical-align);
                            width: var(--yt-formatted-string-contenteditable-emoji-width)
                        }

                        #contenteditable-root.yt-formatted-string .small-emoji.yt-formatted-string {
                            height: var(--yt-formatted-string-contenteditable-small-emoji-height);
                            margin: var(--yt-formatted-string-contenteditable-small-emoji-margin);
                            padding-right: var(--yt-formatted-string-contenteditable-small-emoji-padding-right);
                            vertical-align: var(--yt-formatted-string-contenteditable-small-emoji-vertical-align);
                            width: var(--yt-formatted-string-contenteditable-small-emoji-width)
                        }

                        #contenteditable-root.yt-formatted-string {
                            outline: var(--yt-formatted-string-contenteditable-root-style-outline);
                            max-height: var(--yt-formatted-string-contenteditable-root-style-max-height);
                            overflow: var(--yt-formatted-string-contenteditable-root-style-overflow);
                            display: var(--yt-formatted-string-contenteditable-root-style-display, block);
                            -ms-scroll-chaining: var(--yt-formatted-string-contenteditable-root-style-overscroll-behavior);
                            overscroll-behavior: var(--yt-formatted-string-contenteditable-root-style-overscroll-behavior)
                        }

                        #contenteditable-root.yt-formatted-string[aria-label]:empty:before {
                            color: var(--contenteditable-root-style-placeholder-with-aria-color);
                            content: var(--contenteditable-root-style-placeholder-with-aria-content);
                            cursor: var(--contenteditable-root-style-placeholder-with-aria-cursor)
                        }
                    </style><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string>
                </yt-formatted-string>
                <div id="footer" class="style-scope yt-live-chat-paid-message-renderer"></div>
                <div id="action-buttons" class="style-scope yt-live-chat-paid-message-renderer">
                    <div id="like-button" class="action-button style-scope yt-live-chat-paid-message-renderer">
                        <yt-live-chat-like-button-view-model
                            class="style-scope yt-live-chat-paid-message-renderer"><yt-toggle-button-view-model
                                class="style-scope yt-live-chat-like-button-view-model"><toggle-button-view-model><button-view-model
                                        class="yt-spec-button-view-model"><button
                                            class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-xs yt-spec-button-shape-next--icon-leading"
                                            style="color:#000;background-color:rgba(0,0,0,.05)" aria-pressed="false"
                                            title="">
                                            <div class="yt-spec-button-shape-next__icon" aria-hidden="true"><yt-icon
                                                    style="width:16px;height:16px"><yt-icon-shape
                                                        class="style-scope yt-icon"><icon-shape
                                                            class="yt-spec-icon-shape">
                                                            <div
                                                                style="width:100%;height:100%;display:block;fill:currentcolor">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="16"
                                                                    viewBox="0 0 16 16" width="16" focusable="false"
                                                                    style="pointer-events:none;display:inherit;width:100%;height:100%">
                                                                    <path
                                                                        d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z">
                                                                    </path>
                                                                </svg></div>
                                                        </icon-shape></yt-icon-shape></yt-icon></div>
                                            <div class="yt-spec-button-shape-next__button-text-content">5</div>
                                            <yt-touch-feedback-shape style="border-radius:inherit">
                                                <div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
                                                    aria-hidden="true">
                                                    <div class="yt-spec-touch-feedback-shape__stroke" style=""></div>
                                                    <div class="yt-spec-touch-feedback-shape__fill" style=""></div>
                                                </div>
                                            </yt-touch-feedback-shape>
                                        </button></button-view-model></toggle-button-view-model></yt-toggle-button-view-model></yt-live-chat-like-button-view-model>
                    </div>
                    <div id="reply-button" class="action-button style-scope yt-live-chat-paid-message-renderer"></div>
                    <div id="buy-button" class="action-button style-scope yt-live-chat-paid-message-renderer"></div>
                </div>
            </div>
        </div>
        <div id="lower-bumper" class="style-scope yt-live-chat-paid-message-renderer"></div>
        <div id="lower-buy-button" class="style-scope yt-live-chat-paid-message-renderer" hidden=""></div>
        <div id="inline-action-button-container" class="style-scope yt-live-chat-paid-message-renderer"
            aria-hidden="true">
            <div id="inline-action-buttons" class="style-scope yt-live-chat-paid-message-renderer"></div>
        </div>
    </yt-live-chat-paid-message-renderer>`;

 let sp3 =`    <yt-live-chat-paid-message-renderer
      class="style-scope yt-live-chat-paid-message-renderer"
      modern=""
      id="123"
      show-only-header=""
      is-v2-style=""
      style="
        --yt-live-chat-paid-message-primary-color: rgba(29, 233, 182, 1);
        --yt-live-chat-paid-message-secondary-color: rgba(0, 191, 165, 1);
        --yt-live-chat-paid-message-header-color: rgba(0, 0, 0, 1);
        --yt-live-chat-paid-message-timestamp-color: rgba(
          0,
          0,
          0,
          0.5019607843137255
        );
        --yt-live-chat-paid-message-color: rgba(0, 0, 0, 1);
        --yt-live-chat-disable-highlight-message-author-name-color: rgba(
          0,
          0,
          0,
          0.5411764705882353
        );
      "
      allow-animations=""
    >
      <div id="card" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
          <yt-img-shadow
            id="author-photo"
            class="style-scope yt-live-chat-paid-message-renderer no-transition"
            style="background-color: transparent"
            loaded=""
          >
            <img
              id="img"
              draggable="false"
              class="style-scope yt-img-shadow"
              alt=""
              src="${rImg}"
              width="32"
              height="32"
          /></yt-img-shadow>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <div
            id="header-content"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="header-content-primary-column"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="single-line"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <div
                  id="author-name-chip"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-live-chat-author-chip
                    disable-highlighting=""
                    single-line=""
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <span
                      id="prepend-chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                    ></span
                    ><span
                      id="author-name"
                      dir="auto"
                      class="member single-line style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip"
                      >${rname}<span
                        id="chip-badges"
                        class="style-scope yt-live-chat-author-chip"
                      ></span></span
                    ><span
                      id="chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                      ><yt-live-chat-author-badge-renderer
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
                          />
                        </div>
                        <tp-yt-paper-tooltip
                          class="style-scope yt-live-chat-author-badge-renderer"
                          role="tooltip"
                          tabindex="-1"
                          style="
                            --paper-tooltip-delay-in: 0ms;
                            inset: -42px auto auto 66.05px;
                          "
                        >
                          <div
                            id="tooltip"
                            class="style-scope tp-yt-paper-tooltip hidden"
                            style-target="tooltip"
                          >
                            Pelanggan (1 tahun)
                          </div></tp-yt-paper-tooltip
                        ></yt-live-chat-author-badge-renderer
                      ></span
                    ></yt-live-chat-author-chip
                  >
                </div>
                <div
                  id="purchase-amount-column"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-img-shadow
                    id="currency-img"
                    height="16"
                    width="16"
                    class="style-scope yt-live-chat-paid-message-renderer no-transition"
                    hidden=""
                  >
                    <img
                      id="img"
                      draggable="false"
                      class="style-scope yt-img-shadow"
                      alt=""
                      width="16"
                      height="16"
                  /></yt-img-shadow>
                  <div
                    id="purchase-amount"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-formatted-string
                      class="style-scope yt-live-chat-paid-message-renderer"
                    >
                      ${amount[2]}</yt-formatted-string
                    >
                  </div>
                </div>
              </div>
            </div>
            <span
              id="timestamp"
              class="style-scope yt-live-chat-paid-message-renderer"
              >12:NaN AM</span
            >
            <div
              id="gradient-container"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="gradient"
                class="style-scope yt-live-chat-paid-message-renderer"
              ></div>
            </div>
            <div
              id="menu"
              class="style-scope yt-live-chat-paid-message-renderer"
              hidden=""
            >
              <yt-icon-button
                id="menu-button"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <button id="button" class="style-scope yt-icon-button">
                  <yt-icon
                    icon="more_vert"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-icon-shape class="style-scope yt-icon"
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
                  ></yt-icon></button
                ><yt-interaction
                  id="interaction"
                  class="circular style-scope yt-icon-button"
                >
                  <div class="stroke style-scope yt-interaction"></div>
                  <div
                    class="fill style-scope yt-interaction"
                  ></div></yt-interaction
              ></yt-icon-button>
            </div>
            <div
              id="creator-heart-button"
              class="style-scope yt-live-chat-paid-message-renderer"
            ></div>
          </div>
        </div>
        <div
          id="content"
          class="style-scope yt-live-chat-paid-message-renderer"
        >
          <div
            id="message"
            dir="auto"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
          <div
            id="input-container"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <dom-if class="style-scope yt-live-chat-paid-message-renderer"
              ><template is="dom-if"></template
            ></dom-if>
          </div>
          <yt-formatted-string
            id="deleted-state"
            class="style-scope yt-live-chat-paid-message-renderer"
            is-empty=""
          >
            <yt-attributed-string
              class="style-scope yt-formatted-string"
            ></yt-attributed-string
          ></yt-formatted-string>
          <div
            id="footer"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
        </div>
      </div>
      <div
        id="lower-bumper"
        class="style-scope yt-live-chat-paid-message-renderer"
      ></div>
      <div
        id="buy-flow-button"
        class="style-scope yt-live-chat-paid-message-renderer"
        hidden=""
      ></div>
      <div
        id="inline-action-button-container"
        class="style-scope yt-live-chat-paid-message-renderer"
        aria-hidden="true"
      >
        <div
          id="inline-action-buttons"
          class="style-scope yt-live-chat-paid-message-renderer"
        ></div></div
    ></yt-live-chat-paid-message-renderer>`;

 let sp4 = `    <yt-live-chat-paid-message-renderer
      class="style-scope yt-live-chat-paid-message-renderer"
      modern=""
      id="123"
      is-v2-style=""
      style="
        --yt-live-chat-paid-message-primary-color: rgba(255, 202, 40, 1);
        --yt-live-chat-paid-message-secondary-color: rgba(255, 179, 0, 1);
        --yt-live-chat-paid-message-header-color: rgba(
          0,
          0,
          0,
          0.8745098039215686
        );
        --yt-live-chat-paid-message-timestamp-color: rgba(
          0,
          0,
          0,
          0.5019607843137255
        );
        --yt-live-chat-paid-message-color: rgba(0, 0, 0, 0.8745098039215686);
        --yt-live-chat-disable-highlight-message-author-name-color: rgba(
          0,
          0,
          0,
          0.5411764705882353
        );
      "
      allow-animations=""
      ><div id="card" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
          <yt-img-shadow
            id="author-photo"
            class="style-scope yt-live-chat-paid-message-renderer no-transition"
            style="background-color: transparent"
            loaded=""
            ><img
              id="img"
              draggable="false"
              class="style-scope yt-img-shadow"
              alt=""
              src="${rImg}"
              width="32"
              height="32"
          /></yt-img-shadow>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <div
            id="header-content"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="header-content-primary-column"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="single-line"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <div
                  id="author-name-chip"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-live-chat-author-chip
                    disable-highlighting=""
                    single-line=""
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <span
                      id="prepend-chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                    ></span
                    ><span
                      id="author-name"
                      dir="auto"
                      class="member single-line style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip"
                      >${rname}<span
                        id="chip-badges"
                        class="style-scope yt-live-chat-author-chip"
                      ></span></span
                    ><span
                      id="chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                      ><yt-live-chat-author-badge-renderer
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
                          />
                        </div>
                        <tp-yt-paper-tooltip
                          class="style-scope yt-live-chat-author-badge-renderer"
                          role="tooltip"
                          tabindex="-1"
                          style="
                            --paper-tooltip-delay-in: 0ms;
                            inset: -42px auto auto 66.05px;
                          "
                        >
                          <div
                            id="tooltip"
                            class="style-scope tp-yt-paper-tooltip hidden"
                            style-target="tooltip"
                          >
                            Pelanggan (1 tahun)
                          </div>
                        </tp-yt-paper-tooltip></yt-live-chat-author-badge-renderer
                      ></span
                    ></yt-live-chat-author-chip
                  >
                </div>
                <div
                  id="purchase-amount-column"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-img-shadow
                    id="currency-img"
                    height="16"
                    width="16"
                    class="style-scope yt-live-chat-paid-message-renderer no-transition"
                    hidden=""
                  >
                    <img
                      id="img"
                      draggable="false"
                      class="style-scope yt-img-shadow"
                      alt=""
                      width="16"
                      height="16"
                  /></yt-img-shadow>
                  <div
                    id="purchase-amount"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-formatted-string
                      class="style-scope yt-live-chat-paid-message-renderer"
                      >${amount[3]}</yt-formatted-string
                    >
                  </div>
                </div>
              </div>
            </div>
            <span
              id="timestamp"
              class="style-scope yt-live-chat-paid-message-renderer"
              >8:03 PM</span
            >
            <div
              id="gradient-container"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="gradient"
                class="style-scope yt-live-chat-paid-message-renderer"
              ></div>
            </div>
            <div
              id="menu"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <yt-icon-button
                id="menu-button"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <button
                  id="button"
                  class="style-scope yt-icon-button"
                  aria-label="Tindakan chat"
                >
                  <yt-icon
                    icon="more_vert"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-icon-shape class="style-scope yt-icon"
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
                  ></yt-icon></button
                ><yt-interaction
                  id="interaction"
                  class="circular style-scope yt-icon-button"
                >
                  <div class="stroke style-scope yt-interaction"></div>
                  <div
                    class="fill style-scope yt-interaction"
                  ></div></yt-interaction
              ></yt-icon-button>
            </div>
            <div
              id="creator-heart-button"
              class="style-scope yt-live-chat-paid-message-renderer"
            ></div>
          </div>
        </div>
        <div
          id="content"
          class="style-scope yt-live-chat-paid-message-renderer"
        >
          <div
            id="message"
            dir="auto"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            ${rmessage}
          </div>
          <div
            id="input-container"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <dom-if class="style-scope yt-live-chat-paid-message-renderer"
              ><template is="dom-if"></template
            ></dom-if>
          </div>
          <yt-formatted-string
            id="deleted-state"
            class="style-scope yt-live-chat-paid-message-renderer"
            is-empty=""
          >
            <yt-attributed-string
              class="style-scope yt-formatted-string"
            ></yt-attributed-string
          ></yt-formatted-string>
          <div
            id="footer"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
        </div>
      </div>
      <div
        id="lower-bumper"
        class="style-scope yt-live-chat-paid-message-renderer"
      ></div>
      <div
        id="buy-flow-button"
        class="style-scope yt-live-chat-paid-message-renderer"
        hidden=""
      ></div>
      <div
        id="inline-action-button-container"
        class="style-scope yt-live-chat-paid-message-renderer"
        aria-hidden="true"
      >
        <div
          id="inline-action-buttons"
          class="style-scope yt-live-chat-paid-message-renderer"
        ></div></div
    ></yt-live-chat-paid-message-renderer>`;
 let sp5 = `    <yt-live-chat-paid-message-renderer
      class="style-scope yt-live-chat-paid-message-renderer"
      modern=""
      id="123"
      is-v2-style=""
      style="
        --yt-live-chat-paid-message-primary-color: rgba(245, 124, 0, 1);
        --yt-live-chat-paid-message-secondary-color: rgba(230, 81, 0, 1);
        --yt-live-chat-paid-message-header-color: rgba(
          255,
          255,
          255,
          0.8745098039215686
        );
        --yt-live-chat-paid-message-timestamp-color: rgba(
          255,
          255,
          255,
          0.5019607843137255
        );
        --yt-live-chat-paid-message-color: rgba(
          255,
          255,
          255,
          0.8745098039215686
        );
        --yt-live-chat-disable-highlight-message-author-name-color: rgba(
          255,
          255,
          255,
          0.7019607843137254
        );
      "
      allow-animations=""
      ><div id="card" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
          <yt-img-shadow
            id="author-photo"
            class="style-scope yt-live-chat-paid-message-renderer no-transition"
            style="background-color: transparent"
            loaded=""
            ><img
              id="img"
              draggable="false"
              class="style-scope yt-img-shadow"
              alt=""
              src="${rImg}"
              width="32"
              height="32"
          /></yt-img-shadow>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <div
            id="header-content"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="header-content-primary-column"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="single-line"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <div
                  id="author-name-chip"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-live-chat-author-chip
                    disable-highlighting=""
                    single-line=""
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <span
                      id="prepend-chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                    ></span
                    ><span
                      id="author-name"
                      dir="auto"
                      class="member single-line style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip"
                      >${rname}<span
                        id="chip-badges"
                        class="style-scope yt-live-chat-author-chip"
                      ></span></span
                    ><span
                      id="chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                      ><yt-live-chat-author-badge-renderer
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
                          />
                        </div>
                        <tp-yt-paper-tooltip
                          class="style-scope yt-live-chat-author-badge-renderer"
                          role="tooltip"
                          tabindex="-1"
                          style="
                            --paper-tooltip-delay-in: 0ms;
                            inset: -42px auto auto 66.05px;
                          "
                        >
                          <div
                            id="tooltip"
                            class="style-scope tp-yt-paper-tooltip hidden"
                            style-target="tooltip"
                          >
                            Pelanggan (1 tahun)
                          </div>
                        </tp-yt-paper-tooltip></yt-live-chat-author-badge-renderer
                      ></span
                    ></yt-live-chat-author-chip
                  >
                </div>
                <div
                  id="purchase-amount-column"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-img-shadow
                    id="currency-img"
                    height="16"
                    width="16"
                    class="style-scope yt-live-chat-paid-message-renderer no-transition"
                    hidden=""
                  >
                    <img
                      id="img"
                      draggable="false"
                      class="style-scope yt-img-shadow"
                      alt=""
                      width="16"
                      height="16"
                  /></yt-img-shadow>
                  <div
                    id="purchase-amount"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-formatted-string
                      class="style-scope yt-live-chat-paid-message-renderer"
                      >${amount[4]}</yt-formatted-string
                    >
                  </div>
                </div>
              </div>
            </div>
            <span
              id="timestamp"
              class="style-scope yt-live-chat-paid-message-renderer"
              >8:03 PM</span
            >
            <div
              id="gradient-container"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="gradient"
                class="style-scope yt-live-chat-paid-message-renderer"
              ></div>
            </div>
            <div
              id="menu"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <yt-icon-button
                id="menu-button"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <button
                  id="button"
                  class="style-scope yt-icon-button"
                  aria-label="Tindakan chat"
                >
                  <yt-icon
                    icon="more_vert"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-icon-shape class="style-scope yt-icon"
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
                  ></yt-icon></button
                ><yt-interaction
                  id="interaction"
                  class="circular style-scope yt-icon-button"
                >
                  <div class="stroke style-scope yt-interaction"></div>
                  <div
                    class="fill style-scope yt-interaction"
                  ></div></yt-interaction
              ></yt-icon-button>
            </div>
            <div
              id="creator-heart-button"
              class="style-scope yt-live-chat-paid-message-renderer"
            ></div>
          </div>
        </div>
        <div
          id="content"
          class="style-scope yt-live-chat-paid-message-renderer"
        >
          <div
            id="message"
            dir="auto"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
             ${rmessage}
          </div>
          <div
            id="input-container"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <dom-if class="style-scope yt-live-chat-paid-message-renderer"
              ><template is="dom-if"></template
            ></dom-if>
          </div>
          <yt-formatted-string
            id="deleted-state"
            class="style-scope yt-live-chat-paid-message-renderer"
            is-empty=""
          >
            <yt-attributed-string
              class="style-scope yt-formatted-string"
            ></yt-attributed-string
          ></yt-formatted-string>
          <div
            id="footer"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
        </div>
      </div>
      <div
        id="lower-bumper"
        class="style-scope yt-live-chat-paid-message-renderer"
      ></div>
      <div
        id="buy-flow-button"
        class="style-scope yt-live-chat-paid-message-renderer"
        hidden=""
      ></div>
      <div
        id="inline-action-button-container"
        class="style-scope yt-live-chat-paid-message-renderer"
        aria-hidden="true"
      >
        <div
          id="inline-action-buttons"
          class="style-scope yt-live-chat-paid-message-renderer"
        ></div></div
    ></yt-live-chat-paid-message-renderer>`;
 let sp6 = `    <yt-live-chat-paid-message-renderer
      class="style-scope yt-live-chat-paid-message-renderer"
      modern=""
      id="123"
      is-v2-style=""
      style="
        --yt-live-chat-paid-message-primary-color: rgba(233, 30, 99, 1);
        --yt-live-chat-paid-message-secondary-color: rgba(194, 24, 91, 1);
        --yt-live-chat-paid-message-header-color: rgba(255, 255, 255, 1);
        --yt-live-chat-paid-message-timestamp-color: rgba(
          255,
          255,
          255,
          0.5019607843137255
        );
        --yt-live-chat-paid-message-color: rgba(255, 255, 255, 1);
        --yt-live-chat-disable-highlight-message-author-name-color: rgba(
          255,
          255,
          255,
          0.7019607843137254
        );
      "
      allow-animations=""
      ><div id="card" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
          <yt-img-shadow
            id="author-photo"
            class="style-scope yt-live-chat-paid-message-renderer no-transition"
            style="background-color: transparent"
            loaded=""
            ><img
              id="img"
              draggable="false"
              class="style-scope yt-img-shadow"
              alt=""
              src="${rImg}"
              width="32"
              height="32"
          /></yt-img-shadow>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <div
            id="header-content"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="header-content-primary-column"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="single-line"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <div
                  id="author-name-chip"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-live-chat-author-chip
                    disable-highlighting=""
                    single-line=""
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <span
                      id="prepend-chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                    ></span
                    ><span
                      id="author-name"
                      dir="auto"
                      class="member single-line style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip"
                      >${rname}<span
                        id="chip-badges"
                        class="style-scope yt-live-chat-author-chip"
                      ></span></span
                    ><span
                      id="chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                      ><yt-live-chat-author-badge-renderer
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
                          />
                        </div>
                        <tp-yt-paper-tooltip
                          class="style-scope yt-live-chat-author-badge-renderer"
                          role="tooltip"
                          tabindex="-1"
                          style="
                            --paper-tooltip-delay-in: 0ms;
                            inset: -42px auto auto 66.05px;
                          "
                        >
                          <div
                            id="tooltip"
                            class="style-scope tp-yt-paper-tooltip hidden"
                            style-target="tooltip"
                          >
                            Pelanggan (1 tahun)
                          </div>
                        </tp-yt-paper-tooltip></yt-live-chat-author-badge-renderer
                      ></span
                    ></yt-live-chat-author-chip
                  >
                </div>
                <div
                  id="purchase-amount-column"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-img-shadow
                    id="currency-img"
                    height="16"
                    width="16"
                    class="style-scope yt-live-chat-paid-message-renderer no-transition"
                    hidden=""
                  >
                    <img
                      id="img"
                      draggable="false"
                      class="style-scope yt-img-shadow"
                      alt=""
                      width="16"
                      height="16"
                  /></yt-img-shadow>
                  <div
                    id="purchase-amount"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-formatted-string
                      class="style-scope yt-live-chat-paid-message-renderer"
                      >${amount[5]}</yt-formatted-string
                    >
                  </div>
                </div>
              </div>
            </div>
            <span
              id="timestamp"
              class="style-scope yt-live-chat-paid-message-renderer"
              >8:03 PM</span
            >
            <div
              id="gradient-container"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="gradient"
                class="style-scope yt-live-chat-paid-message-renderer"
              ></div>
            </div>
            <div
              id="menu"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <yt-icon-button
                id="menu-button"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <button
                  id="button"
                  class="style-scope yt-icon-button"
                  aria-label="Tindakan chat"
                >
                  <yt-icon
                    icon="more_vert"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-icon-shape class="style-scope yt-icon"
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
                  ></yt-icon></button
                ><yt-interaction
                  id="interaction"
                  class="circular style-scope yt-icon-button"
                >
                  <div class="stroke style-scope yt-interaction"></div>
                  <div
                    class="fill style-scope yt-interaction"
                  ></div></yt-interaction
              ></yt-icon-button>
            </div>
            <div
              id="creator-heart-button"
              class="style-scope yt-live-chat-paid-message-renderer"
            ></div>
          </div>
        </div>
        <div
          id="content"
          class="style-scope yt-live-chat-paid-message-renderer"
        >
          <div
            id="message"
            dir="auto"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            ${rmessage}
          </div>
          <div
            id="input-container"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <dom-if class="style-scope yt-live-chat-paid-message-renderer"
              ><template is="dom-if"></template
            ></dom-if>
          </div>
          <yt-formatted-string
            id="deleted-state"
            class="style-scope yt-live-chat-paid-message-renderer"
            is-empty=""
          >
            <yt-attributed-string
              class="style-scope yt-formatted-string"
            ></yt-attributed-string
          ></yt-formatted-string>
          <div
            id="footer"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
        </div>
      </div>
      <div
        id="lower-bumper"
        class="style-scope yt-live-chat-paid-message-renderer"
      ></div>
      <div
        id="buy-flow-button"
        class="style-scope yt-live-chat-paid-message-renderer"
        hidden=""
      ></div>
      <div
        id="inline-action-button-container"
        class="style-scope yt-live-chat-paid-message-renderer"
        aria-hidden="true"
      >
        <div
          id="inline-action-buttons"
          class="style-scope yt-live-chat-paid-message-renderer"
        ></div></div
    ></yt-live-chat-paid-message-renderer>`;
 let sp7 = `    <yt-live-chat-paid-message-renderer
      class="style-scope yt-live-chat-paid-message-renderer"
      modern=""
      id="123"
      is-v2-style=""
      style="
        --yt-live-chat-paid-message-primary-color: rgba(230, 33, 23, 1);
        --yt-live-chat-paid-message-secondary-color: rgba(208, 0, 0, 1);
        --yt-live-chat-paid-message-header-color: rgba(255, 255, 255, 1);
        --yt-live-chat-paid-message-timestamp-color: rgba(
          255,
          255,
          255,
          0.5019607843137255
        );
        --yt-live-chat-paid-message-color: rgba(255, 255, 255, 1);
        --yt-live-chat-disable-highlight-message-author-name-color: rgba(
          255,
          255,
          255,
          0.7019607843137254
        );
      "
      allow-animations=""
      ><div id="card" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
          <yt-img-shadow
            id="author-photo"
            class="style-scope yt-live-chat-paid-message-renderer no-transition"
            style="background-color: transparent"
            loaded=""
            ><img
              id="img"
              draggable="false"
              class="style-scope yt-img-shadow"
              alt=""
              src="${rImg}"
              width="32"
              height="32"
          /></yt-img-shadow>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <dom-if
            restamp=""
            class="style-scope yt-live-chat-paid-message-renderer"
            ><template is="dom-if"></template
          ></dom-if>
          <div
            id="header-content"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="header-content-primary-column"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="single-line"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <div
                  id="author-name-chip"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-live-chat-author-chip
                    disable-highlighting=""
                    single-line=""
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <span
                      id="prepend-chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                    ></span
                    ><span
                      id="author-name"
                      dir="auto"
                      class="member single-line style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip"
                      >${rname}<span
                        id="chip-badges"
                        class="style-scope yt-live-chat-author-chip"
                      ></span></span
                    ><span
                      id="chat-badges"
                      class="style-scope yt-live-chat-author-chip"
                      ><yt-live-chat-author-badge-renderer
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
                          />
                        </div>
                        <tp-yt-paper-tooltip
                          class="style-scope yt-live-chat-author-badge-renderer"
                          role="tooltip"
                          tabindex="-1"
                          style="
                            --paper-tooltip-delay-in: 0ms;
                            inset: -42px auto auto 66.05px;
                          "
                        >
                          <div
                            id="tooltip"
                            class="style-scope tp-yt-paper-tooltip hidden"
                            style-target="tooltip"
                          >
                            Pelanggan (1 tahun)
                          </div>
                        </tp-yt-paper-tooltip></yt-live-chat-author-badge-renderer
                      ></span
                    ></yt-live-chat-author-chip
                  >
                </div>
                <div
                  id="purchase-amount-column"
                  class="style-scope yt-live-chat-paid-message-renderer"
                >
                  <yt-img-shadow
                    id="currency-img"
                    height="16"
                    width="16"
                    class="style-scope yt-live-chat-paid-message-renderer no-transition"
                    hidden=""
                  >
                    <img
                      id="img"
                      draggable="false"
                      class="style-scope yt-img-shadow"
                      alt=""
                      width="16"
                      height="16"
                  /></yt-img-shadow>
                  <div
                    id="purchase-amount"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-formatted-string
                      class="style-scope yt-live-chat-paid-message-renderer"
                      >${amount[6]}</yt-formatted-string
                    >
                  </div>
                </div>
              </div>
            </div>
            <span
              id="timestamp"
              class="style-scope yt-live-chat-paid-message-renderer"
              >8:03 PM</span
            >
            <div
              id="gradient-container"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <div
                id="gradient"
                class="style-scope yt-live-chat-paid-message-renderer"
              ></div>
            </div>
            <div
              id="menu"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              <yt-icon-button
                id="menu-button"
                class="style-scope yt-live-chat-paid-message-renderer"
              >
                <button
                  id="button"
                  class="style-scope yt-icon-button"
                  aria-label="Tindakan chat"
                >
                  <yt-icon
                    icon="more_vert"
                    class="style-scope yt-live-chat-paid-message-renderer"
                  >
                    <yt-icon-shape class="style-scope yt-icon"
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
                  ></yt-icon></button
                ><yt-interaction
                  id="interaction"
                  class="circular style-scope yt-icon-button"
                >
                  <div class="stroke style-scope yt-interaction"></div>
                  <div
                    class="fill style-scope yt-interaction"
                  ></div></yt-interaction
              ></yt-icon-button>
            </div>
            <div
              id="creator-heart-button"
              class="style-scope yt-live-chat-paid-message-renderer"
            ></div>
          </div>
        </div>
        <div
          id="content"
          class="style-scope yt-live-chat-paid-message-renderer"
        >
          <div
            id="message"
            dir="auto"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
             ${rmessage}
          </div>
          <div
            id="input-container"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <dom-if class="style-scope yt-live-chat-paid-message-renderer"
              ><template is="dom-if"></template
            ></dom-if>
          </div>
          <yt-formatted-string
            id="deleted-state"
            class="style-scope yt-live-chat-paid-message-renderer"
            is-empty=""
          >
            <yt-attributed-string
              class="style-scope yt-formatted-string"
            ></yt-attributed-string
          ></yt-formatted-string>
          <div
            id="footer"
            class="style-scope yt-live-chat-paid-message-renderer"
          ></div>
        </div>
      </div>
      <div
        id="lower-bumper"
        class="style-scope yt-live-chat-paid-message-renderer"
      ></div>
      <div
        id="buy-flow-button"
        class="style-scope yt-live-chat-paid-message-renderer"
        hidden=""
      ></div>
      <div
        id="inline-action-button-container"
        class="style-scope yt-live-chat-paid-message-renderer"
        aria-hidden="true"
      >
        <div
          id="inline-action-buttons"
          class="style-scope yt-live-chat-paid-message-renderer"
        ></div></div
    ></yt-live-chat-paid-message-renderer>`;
   
    return [sp1, sp2, sp3, sp4, sp5, sp6, sp7]
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
  rmessage = setMessageM[indexMesage];
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

export function setSuperchat() {
  let rname = rName();
  ranMessage() ;
  return setAtr(rname);
}