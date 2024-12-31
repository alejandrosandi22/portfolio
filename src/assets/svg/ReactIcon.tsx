function ReactIcon({ width = 32, height = 32 }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-11.5 -10.23174 23 20.46348'
      width={width}
      height={height}
    >
      <title>React</title>
      <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
      <g stroke='#61dafb' strokeWidth='1' fill='none'>
        <ellipse rx='11' ry='4.2' />
        <ellipse rx='11' ry='4.2' transform='rotate(60)' />
        <ellipse rx='11' ry='4.2' transform='rotate(120)' />
      </g>
    </svg>
  );
}

export default ReactIcon;
