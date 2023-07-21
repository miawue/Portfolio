import React from "react"
import ContentLoader from "react-content-loader"

export const MainPageLoader = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: "black",
      overflow: 'hidden'
    }}
  >
    <ContentLoader 
    speed={2}
    width={1920}
    height={1080}
    viewBox="0 0 1920 1080"
    backgroundColor="#000000"
    foregroundColor="#ffffff"
  >
    <rect x="30" y="390" rx="0" ry="0" width="1250" height="220" />
    <rect x="30" y="690" rx="0" ry="0" width="630" height="220" />
    <rect x="1590" y="900" rx="0" ry="0" width="250" height="22" />
  </ContentLoader>
  </div>
)