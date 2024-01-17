import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body-text-normal-16: Inter;
--font-bodoni-moda: 'Bodoni Moda';
--default-bold-footnote: 'SF Pro Text';
--default-regular-title2: 'SF Pro Display';
--button-medium: Heebo;
--body-text-bold-16: Inter;


/* font sizes */
--text-md-medium-size: 1rem;
--input-small-medium-size: 0.88rem;
--font-size-5xs-8: 0.49rem;
--font-size-3xs-1: 0.57rem;
--headline-medium-24-size: 1.5rem;
--xs-regular-size: 0.75rem;
--badge-for-small-size-size: 0.63rem;
--input-default-medium-size: 0.94rem;
--body-text-normal-16-size: 16px;
--paragraph-p3-regular-size: 14px;
--font-size-13xl: 32px;
--headline-bold-40-size: 40px;
--font-size-xl: 20px;
--assistive-text-normal-12-size: 12px;
<<<<<<< HEAD
--body-text-bold-16-size: 16px;
--headline-semi-bold-32-size: 32px;
--font-size-lg: 18px;
--button-normal-14-size: 14px;

=======
--default-bold-footnote-size: 0.81rem;
--default-regular-title2-size: 1.38rem;
--default-bold-title3-size: 1.25rem;
>>>>>>> a080f744ce1e15b829d5aeb4fc3e15e13f641b3b

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
<<<<<<< HEAD
--color-gainsboro: #d9d9d9;
--grey-400: #98a2b3;
--blue-600: #1570ef;
--grey-300: #d0d5dd;




=======
--grey-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-2001: #eee;
--grey-200: #eaecf0;
--gray-300: #d1d5db;
--grey-300: #d0d5dd;
--gray-400: #9ca3af;
--grey-400: #98a2b3;
--gray-800: #1f2937;
--fill-color-light-tertiary: rgba(118, 118, 128, 0.12);
--white-white-15: rgba(255, 255, 255, 0.15);
--gray-200: #e5e7eb;
--color-gainsboro-100: #d9d9d9;
--blue-500: #3b82f6;
--blue-1: #2f80ed;
--slate-500: #64748b;
--gray-500: #6b7280;
--grey-500: #667085;
--main-primary-color: #34a853;
--red: #eb5757;
--label-color-light-primary: #000;
--teal-500: #14b8a6;
--label-color-light-tertiary: rgba(60, 60, 67, 0.3);
--separator-color-light-with-transparency: rgba(60, 60, 67, 0.36);
--savi-500: #ca4ab7;
--blue-600: #2563eb;
--blue-300: #93c5fd;
--blue-100: #dbeafe;
--blue-200: #bfdbfe;
--red-500: #ef4444;
--yellow-500: #eab308;
--slate-400: #94a3b8;
--default-systemred-light: #ff3b30;
>>>>>>> a080f744ce1e15b829d5aeb4fc3e15e13f641b3b

/* Gaps */
--gap-5xl: 24px;
--gap-base: 16px;
--gap-11xl: 30px;
--gap-41xl: 60px;
--gap-xl: 20px;
--gap-9xs: 4px;
--gap-5xs: 8px;
--gap-xs: 12px;
--gap-5xk: 0.5rem;
--gap-5xm: 1.5rem;
--gap-base1: 1rem;
--gap-11xk: 0.13rem;
--gap-xw: 1.25rem;
--gap-9xc: 0.25rem;
--gap-xd: 0.75rem;
--gap-3xs: 0.63rem;
--gap-13xl: 2rem;
--gap-22xl: 2.56rem;
--gap-12xs: 0.06rem;
--gap-111xl: 8.13rem;
--gap-31xl: 3.13rem;
--gap-3xl: 1.38rem;
--gap-15xl: 2.13rem;
--gap-6xs-5: 0.41rem;
--gap-10xs-6: 0.16rem;
--gap-194xl: 13.31rem;
--gap-8xs: 0.31rem;
--gap-81xl: 6.25rem;
--gap-6xs: 0.44rem;



/* Paddings */
--padding-61xl: 80px;
--padding-5xl: 24px;
--padding-5xs: 8px;
--padding-9xs: 4px;
--padding-3xs: 10px;
--padding-111xl: 130px;
--padding-xs: 12px;
--padding-base: 16px;
<<<<<<< HEAD
--padding-31xl: 50px;

=======
--padding-5xm: 1.5rem;
--padding-5xc: 0.5rem;
--padding-9xf: 0.25rem;
--padding-3xk: 0.63rem;
--padding-xk: 0.75rem;
--padding-base1: 1rem;
--padding-7xs-2: 0.33rem;
--padding-6xs-5: 0.41rem;
--padding-10xs-6: 0.16rem;
--padding-11xs: 0.13rem;
--padding-13xl: 2rem;
--padding-21xl: 2.5rem;
--padding-7xs: 0.38rem;
--padding-12xs: 0.06rem;
--padding-10xs: 0.19rem;
--padding-10xs-5: 0.16rem;
--padding-8xs-5: 0.28rem;
--padding-xl: 1.25rem;
>>>>>>> a080f744ce1e15b829d5aeb4fc3e15e13f641b3b

/* Border radiuses */
--br-81xl: 100px;
--br-5xs: 8px;
--br-181xl: 200px;
--br-4xs: 9px;
--br-9xs-9: 3.9px;
--br-12xs-7: 0.7px;
--br-11xs-3: 1.3px;
--br-base: 16px;
--br-980xl: 999px;
--br-7xs: 6px;
--br-11xs: 2px;
--br-10xs: 3px;
--br-12xs-5: 0.5px;
--br-12xs: 1px;

/* Effects */
--bottom-card-shadow-light: 0px 4px 8px rgba(0, 0, 0, 0.04);
--drop-shadow-md: 0px 4px 3px rgba(0, 0, 0, 0.07), 0px 2px 2px rgba(0, 0, 0, 0.06);
--drop-shadow-2xl: 0px 25px 25px rgba(0, 0, 0, 0.15);
--drop-shadow-lg: 0px 10px 8px rgba(0, 0, 0, 0.04), 0px 4px 3px rgba(0, 0, 0, 0.1);
--card-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

}
`;
