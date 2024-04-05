import React, { useEffect, useState } from "react";
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from "react-router";

export default function Layout() {
  const [load, setLoad] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 6100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>

      {
        load ? (
          <div className="loyaut-loader">
            <svg width="200" height="50" viewBox="0 0 144 30" fill="none" xmlns="http://www.w3.org2000svg">
              <path d="M1 9.62397V8.93654C1 7.26645 1.9895 5.75506 3.5202 5.08712L4.78085 4.53702L7.87427 3.43712L14.7485 1.4436L18.8731 0.687411L20.248 0.549942L21.6228 0.41244L21.9214 0.367653C22.8634 0.226355 23.5261 1.26968 22.9977 2.06227L22.3102 3.43712C22.1373 3.6965 21.8515 3.85833 21.5401 3.87316L20.5917 3.91832L18.8731 4.12455L16.1234 4.81198L13.3737 5.4994L10.624 6.18683L7.87427 7.01174L4.43714 8.3866L3.06228 9.07402L1.58946 9.95772C1.33004 10.1134 1 9.9265 1 9.62397Z" stroke="black" stroke-width="0.5" class="svg-elem-1"></path>
              <path d="M10.84 9.07402L11.2563 7.73849C11.2927 7.62165 11.3506 7.51262 11.4269 7.41696C11.6347 7.15658 11.9336 6.98481 12.2632 6.9364L12.6863 6.87427C12.7826 6.9589 12.8244 7.08968 12.7952 7.2145L12.7138 7.5617L11.9988 11.6863L11.7926 15.1234L11.9988 18.5605L12.3611 21.4586C12.5642 23.0838 13.5662 24.4999 15.0311 25.2324C15.2949 25.3643 15.5923 25.4138 15.8846 25.3744L16.5359 25.2866C17.0005 25.2866 17.2785 25.8035 17.0224 26.1912L16.5359 26.9276L15.9471 27.4499C15.7719 27.6052 15.5792 27.7396 15.3728 27.8501L14.7485 28.1845L13.7436 28.5865C13.0648 28.858 12.3077 28.858 11.629 28.5865C10.9816 28.3276 10.4517 27.84 10.1399 27.2164L9.8063 26.5492C8.99324 24.923 8.65772 23.0998 8.83862 21.2908L9.38661 15.8108L10.0053 12.4424L10.84 9.07402Z" stroke="black" stroke-width="0.5" class="svg-elem-2"></path>
              <path d="M22.9977 19.248L23.5527 18.9704C24.0919 18.7009 24.6863 18.5605 25.2891 18.5605C25.5905 18.5605 25.8877 18.6307 26.1573 18.7655L26.9215 19.1476C27.0545 19.2141 27.1758 19.3016 27.281 19.4067C27.5967 19.7224 27.675 20.2048 27.4753 20.6042L27.3396 20.8755C27.1985 21.1577 26.9697 21.3865 26.6875 21.5276L26.5591 21.5918C26.0744 21.8342 25.4889 21.7392 25.1056 21.3559L25.06 21.3102C24.6803 20.5509 23.757 20.2432 22.9977 20.6228L22.4329 20.9758C22.0852 21.1931 21.8157 21.5154 21.6634 21.8961C21.6366 21.9632 21.6228 22.0348 21.6228 22.107V23.0813C21.6228 23.6724 21.9827 24.2039 22.5315 24.4234C22.8334 24.5442 23.1673 24.5597 23.4791 24.4673L23.8981 24.3431C24.5149 24.1604 25.0463 23.7636 25.3969 23.2243L25.7474 22.6851L25.9424 22.4065C26.2166 22.0147 26.829 22.1619 26.8953 22.6355C26.8999 22.6681 26.8967 22.7013 26.8861 22.7325L26.7478 23.1395C26.5562 23.7031 26.7014 24.3265 27.1222 24.7474L27.4758 25.101C27.6896 25.3147 27.9795 25.4348 28.2818 25.4348C28.4234 25.4348 28.563 25.4019 28.6896 25.3385L29.6868 24.8399C29.8094 24.7786 29.9214 24.698 30.0183 24.601L30.2097 24.4096C30.4028 24.2165 30.7159 24.2165 30.909 24.4096C31.0974 24.598 31.1027 24.9018 30.9209 25.0966L29.322 26.8097L28.3577 27.6837L28.185 27.8306C27.5202 28.396 26.6186 28.5955 25.7773 28.3635C25.3699 28.2511 25.0412 27.9501 24.8934 27.5541L24.7821 27.2558C24.7011 27.0387 24.6596 26.8089 24.6596 26.5772V25.8527C24.6596 25.5473 24.284 25.4016 24.078 25.6271L22.9977 26.8097L22.5187 27.2887C21.9451 27.8623 21.1671 28.1845 20.3559 28.1845C20.2845 28.1845 20.2136 28.172 20.1465 28.1476L19.2685 27.8277C19.01 27.7336 18.783 27.5692 18.613 27.353C18.3375 27.0026 18.1979 26.5645 18.2202 26.1193L18.2544 25.4348L18.4409 24.6889C18.5453 24.2713 18.7031 23.869 18.9105 23.4919L19.3543 22.6851L19.7649 22.0535C20.0844 21.5618 20.488 21.1302 20.9571 20.7784L22.9977 19.248Z" stroke="black" stroke-width="0.5" class="svg-elem-3"></path>
              <path d="M29.872 20.6228L30.6689 19.8259C31.0389 19.4558 31.5408 19.248 32.0641 19.248C32.6873 19.248 33.2038 19.7312 33.2453 20.353L33.3091 21.3102C33.3091 21.5639 33.6158 21.691 33.7952 21.5116L35.2571 20.0497C35.3322 19.9745 35.4239 19.9179 35.5247 19.8843L36.4357 19.5806C37.0083 19.3897 37.6342 19.649 37.9041 20.1889C38.0239 20.4285 38.3154 20.5257 38.555 20.4058L38.693 20.3369C38.962 20.2024 39.2509 20.4798 39.1276 20.754L38.9518 21.1446C38.9022 21.2549 38.8442 21.3612 38.7783 21.4625L38.2207 22.3203C38.0643 22.561 37.8604 22.7672 37.6216 22.9264L37.1714 23.2266C36.8922 23.4127 36.5716 23.5275 36.2378 23.5609L36.1343 23.5712C35.6572 23.6189 35.1875 23.4268 34.8805 23.0585L34.6164 22.7416C34.3241 22.3907 33.7677 22.4553 33.5635 22.8638C33.4017 23.1874 33.386 23.5647 33.5203 23.9006L34.2731 25.7824C34.5376 26.4439 34.7707 27.2794 34.3433 27.8492C34.2585 27.9623 34.1464 28.0754 33.9965 28.1845C33.7256 28.3819 33.3476 28.514 33.0271 28.528C32.7596 28.5396 32.4789 28.4976 32.2202 28.5666C31.3818 28.7901 30.5594 28.1582 30.5594 27.2906V26.9445C30.5594 26.8552 30.5744 26.7667 30.6039 26.6824L31.5033 24.1128C31.5155 24.0778 31.5336 24.0452 31.5567 24.0163C31.9859 23.4798 31.6039 22.6851 30.9169 22.6851H29.416C29.2703 22.6851 29.1331 22.6165 29.0456 22.4999C28.883 22.2831 28.8808 21.9856 29.0402 21.7664L29.872 20.6228Z" stroke="black" stroke-width="0.5" class="svg-elem-4"></path>
              <path d="M81.5665 10.3114H81.429M81.5665 10.3114L81.8071 7.97414L81.8409 7.7034C81.8825 7.37057 81.4161 7.25026 81.2915 7.56169V7.56169L80.7416 8.93654L75.2422 24.0599L74.5547 26.1222L73.6475 27.483C73.4056 27.8459 72.8921 27.8968 72.5837 27.5884V27.5884C72.5249 27.5295 72.4892 27.4514 72.4834 27.3683L71.6675 15.8108L71.1176 13.0611L70.986 12.4033C70.8527 11.7365 69.9076 11.7141 69.7427 12.3737V12.3737L65.6182 25.4348L64.9307 27.2084L64.3022 28.101C64.2631 28.1564 64.217 28.2066 64.1651 28.2503V28.2503C63.6521 28.6821 62.8685 28.3174 62.8685 27.6468V4.28699C62.8685 3.65999 63.3768 3.1517 64.0038 3.1517H64.0675C64.2381 3.1517 64.3948 3.24583 64.475 3.39646V3.39646C64.4892 3.42316 64.4966 3.45294 64.4966 3.48318V23.3472C64.4966 23.5239 64.7136 23.6085 64.8333 23.4785V23.4785C64.8975 23.4087 64.9455 23.3256 64.9741 23.2352L70.3793 6.09671C70.5015 5.70904 70.7465 5.37164 71.0773 5.13537V5.13537C71.7413 4.6611 72.6735 5.02973 72.8335 5.82986L72.9049 6.18683L74.5547 21.9977L81.24 3.94745C81.3614 3.61956 81.603 3.35012 81.9158 3.19374L82.2517 3.02579C82.5814 2.86091 82.9797 2.92554 83.2404 3.18624V3.18624C83.401 3.34688 83.4913 3.56475 83.4913 3.79192V4.81198L83.7663 7.56169L83.9037 10.9988L84.5912 15.4671L85.518 19.7704C85.5417 19.8802 85.5745 19.9878 85.6162 20.0921L85.9227 20.8582C86.5752 22.4894 87.744 23.8619 89.2505 24.7657V24.7657C89.5326 24.935 89.8464 25.0448 90.1725 25.0883L90.7093 25.1598H91.7404L92.3091 24.8801C92.6808 24.6973 93.1153 24.9678 93.1153 25.382V25.382C93.1153 25.4167 93.1072 25.451 93.0917 25.482L92.7472 26.1709C92.541 26.5833 92.1953 26.9093 91.7714 27.091L90.0881 27.8124C88.5201 28.4844 86.7359 28.432 85.2101 27.6691V27.6691C84.1096 27.1188 83.2727 26.1539 82.8836 24.9866L82.3015 23.2404C82.1786 22.8715 82.099 22.4894 82.0646 22.102L81.5665 16.4982V10.3114ZM39.4959 14.7455V14.7455C39.4959 14.1345 39.8411 13.5759 40.3876 13.3027L40.7344 13.1293C40.8241 13.0844 40.923 13.0611 41.0232 13.0611V13.0611C41.3658 13.0611 41.6943 13.1972 41.9365 13.4394L42.2456 13.7485L42.6183 14.289C42.8233 14.5863 42.9331 14.9389 42.9331 15.3V15.3C42.9331 15.6338 42.8393 15.9609 42.6623 16.244L42.4925 16.5157C42.3321 16.7723 42.0942 16.9713 41.8131 17.0837V17.0837C41.6447 17.1511 41.465 17.1857 41.2837 17.1857H41.2763C41.0109 17.1857 40.7506 17.1136 40.5231 16.977L40.4782 16.9501C40.2837 16.8334 40.1153 16.678 39.9835 16.4934L39.9128 16.3944C39.6417 16.0149 39.4959 15.5601 39.4959 15.0936V14.7455ZM47.7451 24.0599V24.0599C47.7451 23.5526 47.1316 23.2985 46.7729 23.6573L46.4779 23.9522C46.4069 24.0233 46.3221 24.0792 46.2287 24.1165L45.3475 24.469C45.1139 24.5625 44.8683 24.6226 44.618 24.6476L44.3828 24.6711C43.8848 24.7209 43.3829 24.6286 42.9353 24.4048V24.4048C42.4849 24.1796 42.108 23.8306 41.849 23.3988L41.7707 23.2683C41.5382 22.8808 41.3512 22.4677 41.2134 22.0373V22.0373C41.1684 21.8965 41.134 21.7525 41.1107 21.6065L41.018 21.0272C41.0115 20.9868 41.0092 20.946 41.011 20.9052L41.0447 20.1466C41.0667 19.6523 40.3926 19.487 40.1834 19.9354V19.9354L39.4959 21.3102L39.0835 22.6851L38.946 24.0599V25.4348L39.2597 26.2191C39.4151 26.6076 39.6577 26.9552 39.9687 27.2352V27.2352C40.5522 27.7603 41.2988 28.0684 42.0829 28.1076L42.2342 28.1152C43.13 28.16 44.0134 27.8899 44.7309 27.3517L46.3702 26.1222L47.2639 25.0911L47.7451 24.0599ZM48.8449 18.5605L48.363 18.9796C47.6994 19.5567 47.4545 20.4801 47.7451 21.3102V21.3102L48.02 22.3414L48.4325 23.3725L48.7314 23.8557C48.9674 24.2371 48.9552 24.722 48.7004 25.0911V25.0911L46.7925 27.061C46.5582 27.303 46.5613 27.6882 46.7994 27.9263V27.9263C46.9426 28.0695 47.1742 28.071 47.3193 27.9298L49.4261 25.8792C49.7824 25.5324 50.3808 25.707 50.4948 26.191V26.191L50.8803 26.5379C51.0806 26.7183 51.3044 26.8708 51.5455 26.9913L51.7125 27.0748C52.2679 27.3525 52.8803 27.4971 53.5013 27.4971H53.9319L54.963 27.2084L55.0089 27.1906C55.6586 26.9394 56.2486 26.5552 56.7412 26.0627L57.3419 25.462C57.36 25.4439 57.3796 25.4275 57.4006 25.4129V25.4129C57.7612 25.1635 57.5544 24.5977 57.1179 24.6396L56.352 24.713C56.1182 24.7355 55.8828 24.6917 55.6727 24.5866L54.8334 24.167C54.6911 24.0958 54.5567 24.0098 54.4324 23.9104L53.9319 23.51L53.1427 22.8391C52.8651 22.6032 52.9187 22.1606 53.2445 21.9977V21.9977L55.4459 20.3466C55.6863 20.1663 55.6368 19.7924 55.3579 19.6808V19.6808C55.3251 19.6677 55.2885 19.6677 55.2557 19.6808L54.661 19.9187C54.6333 19.9298 54.6073 19.9444 54.5834 19.9623L52.4196 21.5852C52.193 21.7551 51.8696 21.5935 51.8696 21.3102V21.3102L51.1822 19.9354L50.6526 18.6113C50.3321 17.8102 49.2098 17.7787 48.8449 18.5605V18.5605ZM97.9273 26.8097L97.4638 27.2731C96.8803 27.8567 96.0888 28.1845 95.2635 28.1845H95.1106C94.7133 28.1845 94.3323 28.0267 94.0514 27.7458V27.7458C93.4659 27.1603 93.2088 26.3227 93.3649 25.5096L93.4452 25.0911L93.6843 23.9418C93.7625 23.5658 93.9122 23.2083 94.1253 22.8887L94.7735 21.9163C95.0407 21.5156 95.378 21.1663 95.7693 20.8855L96.8824 20.0866L98.0234 19.3531C98.4157 19.1009 98.8413 18.905 99.288 18.771L99.6811 18.6531C99.8856 18.5917 100.098 18.5605 100.312 18.5605H100.524C101.055 18.5605 101.558 18.8016 101.89 19.2158V19.2158C102.251 19.6662 102.368 20.2657 102.201 20.8184L102.169 20.9218C102.094 21.1698 101.921 21.3759 101.689 21.4917L101.547 21.5629C101.027 21.8225 100.4 21.7208 99.9895 21.3102V21.3102L99.7978 21.1185C99.4746 20.7953 99.0629 20.575 98.6147 20.4853V20.4853H98.3565C98.0756 20.4853 97.8 20.5617 97.5592 20.7061V20.7061C97.3493 20.8321 97.1722 21.006 97.0424 21.2136L96.9167 21.4147C96.6787 21.7957 96.5524 22.2359 96.5524 22.6851V22.6851V22.8274C96.5524 23.1764 96.6911 23.5112 96.9378 23.7579L97.2153 24.0354C97.2315 24.0516 97.2503 24.0652 97.2709 24.0755V24.0755C98.0774 24.4788 99.0502 24.3337 99.7039 23.7126L99.9895 23.4413L100.886 22.4998C101.148 22.2245 101.586 22.2192 101.855 22.488V22.488C101.972 22.6057 102.002 22.7855 101.927 22.9344L101.562 23.664C101.438 23.9132 101.438 24.2066 101.562 24.4559V24.4559C101.862 25.0558 102.476 25.4348 103.146 25.4348H103.192C103.701 25.4348 104.172 24.9787 104.573 24.665C104.813 24.4772 105.157 24.3349 105.626 24.3349C106.349 24.3349 106.161 24.7729 105.882 25.0976C105.659 25.3568 105.374 25.5726 105.155 25.835L104.484 26.6404C104.239 26.935 103.952 27.1928 103.633 27.4058L102.848 27.9307C102.596 28.0988 102.319 28.225 102.026 28.3044L101.643 28.4087C101.46 28.4585 101.268 28.4633 101.082 28.4229V28.4229C100.405 28.2751 99.8552 27.7814 99.6359 27.1236L99.3021 26.1222V26.1222C99.3021 25.8685 98.9954 25.7415 98.816 25.9209L97.9273 26.8097ZM106.407 24.4836V24.4836C105.695 24.2957 105.455 23.4066 105.975 22.886L106.176 22.6851L106.864 21.9977L107.827 21.3102V21.3102C108.37 20.9709 109.085 21.2596 109.24 21.8803L109.508 22.951C109.577 23.2246 109.732 23.4684 109.951 23.6456V23.6456C110.52 24.1047 111.354 24.0047 111.798 23.4244L112.363 22.6851L113.489 21.3102L113.572 21.2011C113.976 20.6737 114.788 20.7312 115.113 21.3102V21.3102L115.8 22.6851L115.915 22.9145C116.291 23.666 116.85 24.3107 117.541 24.789L117.863 25.012L118.887 25.3271C119.11 25.3956 119.351 25.3649 119.55 25.2429V25.2429C119.776 25.1035 119.894 24.8399 119.848 24.5781L119.538 22.8264C119.521 22.7324 119.512 22.6371 119.512 22.5416V20.6228L119.925 17.1857L120.696 13.3312C120.732 13.1515 120.784 12.9755 120.852 12.8054L121.575 10.9988L122.48 9.30067C122.609 9.05925 122.773 8.83821 122.966 8.64473L123.77 7.84153C123.949 7.66235 124.192 7.56169 124.445 7.56169V7.56169C125.015 7.56169 125.505 7.96352 125.616 8.52177L125.699 8.93654V10.3114L125.424 13.0611L124.737 15.8108L122.95 19.9354L122.622 20.4032C122.219 20.9787 122.089 21.7019 122.266 22.3818V22.3818C122.354 22.722 122.516 23.0386 122.74 23.3092L123.362 24.0599V24.0599C123.802 24.5001 124.399 24.7474 125.022 24.7474H125.395C125.414 24.7474 125.434 24.7494 125.453 24.7535V24.7535C125.757 24.8173 125.931 24.4197 125.678 24.24L125.492 24.1082C125.448 24.0765 125.412 24.0343 125.387 23.9854L125.195 23.6018C124.907 23.0247 124.907 22.3455 125.195 21.7684L125.424 21.3102L126.112 19.9354L126.799 19.248L126.991 19.0559C127.612 18.435 128.641 18.5161 129.157 19.2266V19.2266C129.317 19.4468 129.363 19.7299 129.281 19.9894L128.975 20.9512C128.902 21.1814 128.922 21.4311 129.03 21.6471V21.6471C129.317 22.2204 130.014 22.4527 130.587 22.1661L130.732 22.0936C130.859 22.0301 130.975 21.9464 131.076 21.8459L131.611 21.3102L131.954 20.9671C132.182 20.739 132.446 20.5493 132.734 20.4051L133.673 19.9354L135.048 19.248L135.61 18.9669C136.145 18.6997 136.734 18.5605 137.332 18.5605H137.574C137.72 18.5605 137.863 18.6037 137.984 18.6847L138.516 19.0394C139.212 19.5029 139.309 20.4867 138.718 21.0775V21.0775C138.569 21.2265 138.367 21.3102 138.156 21.3102H137.78C137.34 21.3102 136.906 21.2077 136.512 21.0107L136.1 20.805C135.861 20.6852 135.596 20.6228 135.328 20.6228V20.6228C135.143 20.6228 134.959 20.6527 134.783 20.7114L134.539 20.7927C133.662 21.0848 133.158 22.002 133.382 22.8983V22.8983V22.8983C133.647 23.8034 134.545 24.3686 135.476 24.2156L135.804 24.1618C136.196 24.0972 136.54 23.862 136.743 23.5195L137.111 22.8983L137.408 22.5087C137.614 22.2382 138.012 22.2116 138.253 22.4522V22.4522C138.389 22.5891 138.416 22.8015 138.316 22.9675L138.193 23.1725C138.117 23.2989 138.103 23.453 138.154 23.5912L138.351 24.1214C138.44 24.3599 138.579 24.5763 138.76 24.7552V24.7552C139.188 25.178 139.803 25.3507 140.389 25.2122L140.995 25.0687C141.153 25.0313 141.302 24.9608 141.431 24.8617L141.923 24.4836V24.4836C142.227 24.2374 142.65 24.5867 142.466 24.9322L142.198 25.4348L141.235 26.8097L140.483 27.5623C140.076 27.9686 139.562 28.2496 139.001 28.3721L138.485 28.4845H138.127C137.49 28.4845 136.894 28.1729 136.53 27.6501V27.6501C136.459 27.5487 136.405 27.4368 136.37 27.3184L136.011 26.1222V26.1222C135.881 25.7968 135.46 25.7105 135.212 25.9583L135.048 26.1222L134.086 27.1534L133.725 27.4922C133.25 27.937 132.624 28.1845 131.974 28.1845V28.1845C131.735 28.1845 131.5 28.129 131.287 28.0224L130.861 27.8092C130.455 27.6066 130.127 27.2781 129.924 26.8729V26.8729C129.683 26.3911 129.637 25.835 129.796 25.3202L130.054 24.4836V24.4836C130.126 24.3158 129.97 24.14 129.795 24.1925L128.947 24.4467C128.89 24.4637 128.831 24.4726 128.772 24.4731L128.658 24.4741C127.988 24.4795 127.428 24.9819 127.349 25.6466V25.6466L126.112 26.8097L124.72 27.7377C124.283 28.0291 123.769 28.1845 123.244 28.1845V28.1845C122.434 28.1845 121.652 27.8889 121.045 27.3531L120.74 27.0846V27.0846C120.696 26.7503 120.261 26.6494 120.074 26.93L119.655 27.5578C119.386 27.961 118.977 28.2496 118.507 28.3672L117.257 28.6797C116.754 28.8053 116.227 28.785 115.736 28.6213V28.6213C114.912 28.3468 114.269 27.6957 114.005 26.8688L113.242 24.4836V24.4836C113.366 24.0329 112.799 23.7211 112.485 24.0674L111.607 25.0361L109.614 27.4971V27.4971C108.937 28.1735 107.797 27.9884 107.369 27.1329L106.953 26.3004C106.894 26.1819 106.846 26.058 106.81 25.9304L106.407 24.4836ZM123.087 17.1857L123.704 14.7184C123.751 14.5304 123.784 14.3391 123.804 14.1463L124.05 11.6863V10.8903C124.05 10.5706 123.79 10.3114 123.471 10.3114V10.3114C123.15 10.3114 122.855 10.4881 122.704 10.7711L122.4 11.3425L122.09 12.1179C122.021 12.2881 121.969 12.4641 121.933 12.6438L121.575 14.436L121.3 17.1857V18.2682L121.444 19.1444C121.489 19.4148 121.846 19.4829 121.987 19.248V19.248L123.087 17.1857Z" stroke="black" stroke-width="0.5" class="svg-elem-5"></path>
            </svg>

          </div>
        )
          :

          (
            <div>
              <Header />
              <div className="container-layout">
                <Outlet />
              </div>
              <Footer />
            </div>)
      }
    </>
  );
}
