type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg {...props} height="23" viewBox="0 0 448 512" width="23" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12.1 27-27 27h-48.6c-14.9 0-27-12.1-27-27v-48.6c0-14.9 12.1-27 27-27h48.6c14.9 0 27 12.1 27 27v48.6zm76.1 27.2c-1.7-35.7-9.9-67.3-36.1-93.5s-57.8-34.4-93.5-36.1c-37.1-2.1-148.3-2.1-185.4 0-35.7 1.7-67.3 9.9-93.5 36.1s-34.4 57.8-36.1 93.5c-2.1 37.1-2.1 148.3 0 185.4 1.7 35.7 9.9 67.3 36.1 93.5s57.8 34.4 93.5 36.1c37.1 2.1 148.3 2.1 185.4 0 35.7-1.7 67.3-9.9 93.5-36.1s34.4-57.8 36.1-93.5c2.1-37.1 2.1-148.3 0-185.4zm-48.4 224.5c-7.8 19.7-23.1 35-42.8 42.8-29.6 11.8-99.9 9.1-133.2 9.1s-103.6 2.7-133.2-9.1c-19.7-7.8-35-23.1-42.8-42.8-11.8-29.6-9.1-99.9-9.1-133.2s-2.7-103.6 9.1-133.2c7.8-19.7 23.1-35 42.8-42.8 29.6-11.8 99.9-9.1 133.2-9.1s103.6-2.7 133.2 9.1c19.7 7.8 35 23.1 42.8 42.8 11.8 29.6 9.1 99.9 9.1 133.2s2.7 103.6-9.1 133.2z"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 448 512">
      <path
        fill="currentColor"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      />
    </svg>
  ),

  moon: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 448 512">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <g fill="currentColor" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate
            id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
          <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
          <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
          <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
          <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
      >
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
      </circle>
    </svg>
  ),
};
