const Icon = ({ color = '#fff' }: { color?: string }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 315 365'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <line
      x1='9.38094'
      y1='349.409'
      x2='113.381'
      y2='3.40928'
      stroke={color}
      strokeWidth='18'
    />
    <line
      x1='92.3312'
      y1='356.581'
      x2='188.331'
      y2='12.5808'
      stroke={color}
      strokeWidth='18'
    />
    <line
      x1='223.454'
      y1='361.822'
      x2='188.454'
      y2='255.822'
      stroke={color}
      strokeWidth='18'
    />
    <line x1='141' y1='261' x2='197' y2='261' stroke={color} strokeWidth='18' />
    <line x1='1' y1='355' x2='101' y2='355' stroke={color} strokeWidth='18' />
    <line x1='215' y1='355' x2='314' y2='355' stroke={color} strokeWidth='18' />
    <line
      x1='188.486'
      y1='18.002'
      x2='306.486'
      y2='352.002'
      stroke={color}
      strokeWidth='18'
    />
  </svg>
);

export default Icon;
