const EmailIcon = ({ height = 32, width = 32 }: IconProps) => (
  <svg
    height={height}
    width={width}
    viewBox='0 0 700 600'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M350 320L695 90C680 37.5 632.5 0 575 0H125C67.5 0 20 37.5 5 90L350 320Z'
      fill='white'
    />
    <path
      d='M365 370C360 372.5 355 375 350 375C345 375 340 372.5 335 370L0 147.5V475C0 545 55 600 125 600H575C645 600 700 545 700 475V147.5L365 370Z'
      fill='white'
    />
  </svg>
);

export default EmailIcon;
