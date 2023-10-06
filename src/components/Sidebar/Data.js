import useAuth from "../../Hooks/useAuth";

function generateRandomNumber() {
  return Math.random() * 99999;
}
const useSidebarData = (props) => {
  const { setAuth } = useAuth();
  return (
    [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="31.5"
            viewBox="0 0 31.5 31.5"
          >
            <g id="dashboard-reference" transform="translate(-2.25 -2.25)">
              <path
                id="Path_71"
                data-name="Path 71"
                d="M4.5,22.5v2.25H9.659L2.25,32.159,3.841,33.75l7.409-7.409V31.5H13.5v-9Z"
                fill="#000"
              />
              <path
                id="Path_72"
                data-name="Path 72"
                d="M27,23.625h2.25V29.25H27Z"
                fill="#000"
              />
              <path
                id="Path_73"
                data-name="Path 73"
                d="M22.5,18h2.25V29.25H22.5Z"
                fill="#000"
              />
              <path
                id="Path_74"
                data-name="Path 74"
                d="M18,20.25h2.25v9H18Z"
                fill="#000"
              />
              <path
                id="Path_75"
                data-name="Path 75"
                d="M31.5,2.25H4.5A2.252,2.252,0,0,0,2.25,4.5V18H4.5V14.625h27V31.5H18v2.25H31.5a2.253,2.253,0,0,0,2.25-2.25V4.5A2.252,2.252,0,0,0,31.5,2.25Zm-18,10.125h-9V4.5h9Zm2.25,0V4.5H31.5v7.875Z"
                fill="#000"
              />
            </g>
          </svg>
        ),
        linkName: "Dashboard",
        link: "/AdminPanel/Dashboard",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="31.5"
            viewBox="0 0 31.5 31.5"
          >
            <g id="dashboard-reference" transform="translate(-2.25 -2.25)">
              <path
                id="Path_71"
                data-name="Path 71"
                d="M4.5,22.5v2.25H9.659L2.25,32.159,3.841,33.75l7.409-7.409V31.5H13.5v-9Z"
                fill="#000"
              />
              <path
                id="Path_72"
                data-name="Path 72"
                d="M27,23.625h2.25V29.25H27Z"
                fill="#000"
              />
              <path
                id="Path_73"
                data-name="Path 73"
                d="M22.5,18h2.25V29.25H22.5Z"
                fill="#000"
              />
              <path
                id="Path_74"
                data-name="Path 74"
                d="M18,20.25h2.25v9H18Z"
                fill="#000"
              />
              <path
                id="Path_75"
                data-name="Path 75"
                d="M31.5,2.25H4.5A2.252,2.252,0,0,0,2.25,4.5V18H4.5V14.625h27V31.5H18v2.25H31.5a2.253,2.253,0,0,0,2.25-2.25V4.5A2.252,2.252,0,0,0,31.5,2.25Zm-18,10.125h-9V4.5h9Zm2.25,0V4.5H31.5v7.875Z"
                fill="#000"
              />
            </g>
          </svg>
        ),
        linkName: "Account",
        link: "/AdminPanel/Account",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="31.5"
            viewBox="0 0 31.5 31.5"
          >
            <g id="dashboard-reference" transform="translate(-2.25 -2.25)">
              <path
                id="Path_71"
                data-name="Path 71"
                d="M4.5,22.5v2.25H9.659L2.25,32.159,3.841,33.75l7.409-7.409V31.5H13.5v-9Z"
                fill="#000"
              />
              <path
                id="Path_72"
                data-name="Path 72"
                d="M27,23.625h2.25V29.25H27Z"
                fill="#000"
              />
              <path
                id="Path_73"
                data-name="Path 73"
                d="M22.5,18h2.25V29.25H22.5Z"
                fill="#000"
              />
              <path
                id="Path_74"
                data-name="Path 74"
                d="M18,20.25h2.25v9H18Z"
                fill="#000"
              />
              <path
                id="Path_75"
                data-name="Path 75"
                d="M31.5,2.25H4.5A2.252,2.252,0,0,0,2.25,4.5V18H4.5V14.625h27V31.5H18v2.25H31.5a2.253,2.253,0,0,0,2.25-2.25V4.5A2.252,2.252,0,0,0,31.5,2.25Zm-18,10.125h-9V4.5h9Zm2.25,0V4.5H31.5v7.875Z"
                fill="#000"
              />
            </g>
          </svg>
        ),
        linkName: "Saved posts",
        link: "/AdminPanel/Dashboard/SavedPosts",
      },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.25"
              height="30.375"
              viewBox="0 0 29.25 30.375"
            >
              <g id="list-numbered" transform="translate(-3.938 -2.813)">
                <path
                  id="Path_65"
                  data-name="Path 65"
                  d="M12.938,5.625h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_66"
                  data-name="Path 66"
                  d="M12.938,16.875h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_67"
                  data-name="Path 67"
                  d="M12.938,28.125h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M8.438,11.25V2.813h-4.5v2.25h2.25v6.188h2.25Z"
                />
                <path
                  id="Path_69"
                  data-name="Path 69"
                  d="M3.938,18.43v3.508H9.563v-2.25H6.453l3.11-1.555V13.5H3.938v2.25H7.313v.992L3.938,18.43Z"
                />
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M3.938,30.938v2.25H9.563v-9H3.938v2.25H7.313v1.125H5.625v2.25H7.313v1.125Z"
                />
              </g>
            </svg>
          ),
          linkName: "Settings",
          subMenu: [ 
               {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Mobile",
              link: "/AdminPanel/Dashboard/Settings/Mobile",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Email",
              link: "/AdminPanel/Dashboard/Settings/Email",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Notifications",
              link: "/AdminPanel/Dashboard/Settings/NotificationSettings",
                   id: generateRandomNumber(),
            },
             {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Password",
              link: "/AdminPanel/Dashboard/Settings/ResetPassword",
                   id: generateRandomNumber(),
            },
          ],
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.25"
              height="30.375"
              viewBox="0 0 29.25 30.375"
            >
              <g id="list-numbered" transform="translate(-3.938 -2.813)">
                <path
                  id="Path_65"
                  data-name="Path 65"
                  d="M12.938,5.625h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_66"
                  data-name="Path 66"
                  d="M12.938,16.875h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_67"
                  data-name="Path 67"
                  d="M12.938,28.125h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M8.438,11.25V2.813h-4.5v2.25h2.25v6.188h2.25Z"
                />
                <path
                  id="Path_69"
                  data-name="Path 69"
                  d="M3.938,18.43v3.508H9.563v-2.25H6.453l3.11-1.555V13.5H3.938v2.25H7.313v.992L3.938,18.43Z"
                />
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M3.938,30.938v2.25H9.563v-9H3.938v2.25H7.313v1.125H5.625v2.25H7.313v1.125Z"
                />
              </g>
            </svg>
          ),
          linkName: "Inbox",
          subMenu: [
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="32"
                  viewBox="0 0 24 32"
                >
                  <path
                    id="list-solid"
                    d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM13,26H11V24h2Zm0-4H11V20h2Zm0-4H11V16h2Zm0-4H11V12h2Zm0-4H11V8h2ZM25,26H15V24H25Zm0-4H15V20H25Zm0-4H15V16H25Zm0-4H15V12H25Zm0-4H15V8H25Z"
                    transform="translate(-6 -2)"
                  />
                </svg>
              ),
              linkName: "Messages",
              link: "/AdminPanel/Inbox/Messages",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Notifications",
              link: "/AdminPanel/Inbox/Notifications",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Reviews",
              link: "/AdminPanel/Inbox/Review",
                   id: generateRandomNumber(),
            },
          ],
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.25"
              height="30.375"
              viewBox="0 0 29.25 30.375"
            >
              <g id="list-numbered" transform="translate(-3.938 -2.813)">
                <path
                  id="Path_65"
                  data-name="Path 65"
                  d="M12.938,5.625h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_66"
                  data-name="Path 66"
                  d="M12.938,16.875h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_67"
                  data-name="Path 67"
                  d="M12.938,28.125h20.25v2.25H12.938Z"
                />
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M8.438,11.25V2.813h-4.5v2.25h2.25v6.188h2.25Z"
                />
                <path
                  id="Path_69"
                  data-name="Path 69"
                  d="M3.938,18.43v3.508H9.563v-2.25H6.453l3.11-1.555V13.5H3.938v2.25H7.313v.992L3.938,18.43Z"
                />
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M3.938,30.938v2.25H9.563v-9H3.938v2.25H7.313v1.125H5.625v2.25H7.313v1.125Z"
                />
              </g>
            </svg>
          ),
          linkName: "Help centre",
          subMenu: [
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="32"
                  viewBox="0 0 24 32"
                >
                  <path
                    id="list-solid"
                    d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM13,26H11V24h2Zm0-4H11V20h2Zm0-4H11V16h2Zm0-4H11V12h2Zm0-4H11V8h2ZM25,26H15V24H25Zm0-4H15V20H25Zm0-4H15V16H25Zm0-4H15V12H25Zm0-4H15V8H25Z"
                    transform="translate(-6 -2)"
                  />
                </svg>
              ),
              linkName: "About",
              link: "/AboutUs",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Contact",
              link: "/contactus",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Blog",
              link: "/Blogs",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "FAQs",
              link: "/Faq",
                   id: generateRandomNumber(),
            },
            // {
            //   icon: (
            //     <svg
            //       xmlns="http://www.w3.org/2000/svg"
            //       width="32.464"
            //       height="32.388"
            //       viewBox="0 0 32.464 32.388"
            //     >
            //       <path
            //         id="star-circle"
            //         d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
            //         transform="translate(0 -0.25)"
            //       />
            //     </svg>
            //   ),
            //   linkName: "What we offer",
            //   link: "/what-we-offer",
            //        id: generateRandomNumber(),
            // },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Terms & Conditions",
              link: "/TermsConditions",
                   id: generateRandomNumber(),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.464"
                  height="32.388"
                  viewBox="0 0 32.464 32.388"
                >
                  <path
                    id="star-circle"
                    d="M16.232.25A15.641,15.641,0,0,1,27.712,5a15.6,15.6,0,0,1,4.751,11.443,15.6,15.6,0,0,1-4.751,11.443,15.641,15.641,0,0,1-11.48,4.751,15.641,15.641,0,0,1-11.48-4.751A15.6,15.6,0,0,1,0,16.444,15.593,15.593,0,0,1,4.751,5,15.644,15.644,0,0,1,16.232.25Zm6.88,25.926-1.825-7.831L27.294,13.1l-7.983-.684-3.117-7.3-3.117,7.374L5.093,13.1l6.083,5.246L9.351,26.176l6.843-4.106Z"
                    transform="translate(0 -0.25)"
                  />
                </svg>
              ),
              linkName: "Privacy Policy",
              link: "/PrivacyPolicy",
                   id: generateRandomNumber(),
            },

          ],
        },
       
       {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
            >
              <path
                id="user-avatar-filled"
                d="M18.75,2.25a16.5,16.5,0,1,0,16.5,16.5A16.5,16.5,0,0,0,18.75,2.25Zm0,5.893A5.292,5.292,0,1,1,15,9.693a5.3,5.3,0,0,1,3.754-1.55Zm9.429,21.12a14.06,14.06,0,0,1-18.857,0V28.58a6.129,6.129,0,0,1,5.893-6.294h7.071a6.14,6.14,0,0,1,5.893,6.258Z"
                transform="translate(-2.25 -2.25)"
                fill="#000"
              />
            </svg>
          ),
          linkName: "Log out",
          link: "/",
          onClick: () => {
            localStorage.removeItem("LoginSession");
            if (props?.toggleDrawer) {
              props.toggleDrawer()
            }
            setAuth({
              user: null,
              roles: null,
              accessToken: "",
            });
          },
               id: generateRandomNumber(),
        },
    ]
  )
}

export default useSidebarData;
