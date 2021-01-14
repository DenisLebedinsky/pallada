import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Pencil = ({ width, height, className, fill = '#003E66' }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 18 18' className={className}>
    <g fill='none' fillRule='evenodd'>
      <path d='M-3-3h24v24H-3z' />
      <path
        d='M11.06 6.02l.92.92L2.92 16H2v-.92l9.06-9.06M14.66 0c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41L15.37.29c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L0 14.25V18h3.75L14.81 6.94l-3.75-3.75z'
        fill={fill}
        fillRule='nonzero'
      />
    </g>
  </Icon>
)

export default Pencil