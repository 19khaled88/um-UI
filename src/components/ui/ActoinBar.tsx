import React from "react";
type ActionBarProps = {
  title?: string;
  children: React.ReactElement | React.ReactNode;
};
function ActoinBar({ title, children }: ActionBarProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div style={{display:'flex'}}>{children}</div>
    </div>
  );
}

export default ActoinBar;
