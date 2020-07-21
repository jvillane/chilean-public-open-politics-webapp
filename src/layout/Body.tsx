import React from "react";

export const Body: React.FC = ({children}) => {
  return (
    <main className="hero-wrapper--content">
      <div className="bg-composed-wrapper--bg"/>
      <div className="bg-composed-wrapper--content">
        <div className="py-3">
          {children}
        </div>
      </div>
    </main>
  )
}
