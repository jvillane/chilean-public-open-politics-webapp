import React from "react";

export const Body: React.FC = ({children}) => {
  return (
    <main className="hero-wrapper--content">
      <div className="bg-composed-wrapper--bg bg-white opacity-5"/>
      <div className="bg-composed-wrapper--content">
        <div className="py-5">
          {children}
        </div>
      </div>
    </main>
  )
}
