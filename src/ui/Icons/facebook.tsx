import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Facebook = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 24 24' className={className}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-168.000000, -398.000000)' fill='#003E66'>
        <g transform='translate(168.000000, 398.000000)'>
          <path d='M22.676,0 L1.324,0 C0.593,0 0,0.593 0,1.324 L0,22.676 C0,23.408 0.593,24 1.324,24 L12.818,24 L12.818,14.706 L9.689,14.706 L9.689,11.085 L12.818,11.085 L12.818,8.41 C12.818,5.311 14.712,3.625 17.477,3.625 C18.802,3.625 19.941,3.722 20.273,3.766 L20.273,7.006 L18.352,7.006 C16.852,7.006 16.56,7.727 16.56,8.777 L16.56,11.088 L20.144,11.088 L19.679,14.718 L16.56,14.718 L16.56,24 L22.675,24 C23.408,24 24,23.408 24,22.676 L24,1.324 C24,0.593 23.408,0 22.676,0'></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default Facebook