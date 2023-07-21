import { FC } from "react"

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface TextProps {
  children: React.ReactNode,
  color: Color,
  fontWeight: number,
  fontSize: number,
}

const Article: FC<TextProps> = (props) => {
  const {
    children,
    color,
    fontWeight,
    fontSize
  } = props

  return (
    <p
      style={{
        color: color,
        fontWeight: fontWeight,
        fontSize: `${fontSize}px`
      }}
    >
      {children}
    </p>
  )
}