import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="pb-3">
      <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25"/>
      <div className="text-center d-block text-black-50 pb-4">
        <a href="http://www.open-data.cl">Open-Data Chile</a> © 2020 Creative Labs - Powered by <a href="https://aws.amazon.com/">AWS</a>
      </div>
    </footer>
  )
}
