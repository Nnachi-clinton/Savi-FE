import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body-text-normal-16: Inter;
--font-bodoni-moda: 'Bodoni Moda';
--button-medium: Heebo;
--body-text-bold-16: Inter;


/* font sizes */
--body-text-normal-16-size: 16px;
--paragraph-p3-regular-size: 14px;
--font-size-13xl: 32px;
--headline-bold-40-size: 40px;
--font-size-xl: 20px;
--assistive-text-normal-12-size: 12px;
--body-text-bold-16-size: 16px;
--headline-semi-bold-32-size: 32px;
--font-size-lg: 18px;
--button-normal-14-size: 14px;


/* Colors */
--white: #fff;
--primary-color: #b5179e;
--color-darkmagenta-100: rgba(181, 23, 158, 0.58);
--main-text: #101828;
--neutral-gray-900: #0f172a;
--neutral-gray-50: #f8fafc;
--grey-500: #667085;
--color-black: #000;
--green-1: #219653;
--color-gainsboro: #d9d9d9;
--grey-400: #98a2b3;
--blue-600: #1570ef;
--grey-300: #d0d5dd;





/* Gaps */
--gap-5xl: 24px;
--gap-base: 16px;
--gap-11xl: 30px;
--gap-41xl: 60px;
--gap-xl: 20px;
--gap-9xs: 4px;
--gap-5xs: 8px;
--gap-xs: 12px;

/* Paddings */
--padding-61xl: 80px;
--padding-5xl: 24px;
--padding-5xs: 8px;
--padding-9xs: 4px;
--padding-3xs: 10px;
--padding-111xl: 130px;
--padding-xs: 12px;
--padding-base: 16px;
--padding-31xl: 50px;


/* Border radiuses */
--br-81xl: 100px;
--br-5xs: 8px;

}
`;
