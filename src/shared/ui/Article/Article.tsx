import { FC } from "react"
import styles from './styles.module.scss'
import { Color, FontWeight } from "app/types/styles"

interface TextProps {
  children?: React.ReactNode,
  color?: Color,
  fontWeight?: FontWeight,
  fontSize?: number,
  noWrap?: boolean,
  noSelect?: boolean
}

const Article: FC<TextProps> = (props) => {
  const {
    children,
    color = '#FFFFFF',
    fontWeight,
    fontSize,
    noWrap,
    noSelect,
  } = props

  return (
    <p
      className={styles.article}
      style={{
        color: color,
        fontWeight: fontWeight,
        fontSize: `${fontSize}px`,
        whiteSpace: noWrap ? 'nowrap' : 'normal',
        userSelect: noSelect ? 'none' : 'auto'
      }}
    >
      {children}
    </p>
  )
}

export default Article;