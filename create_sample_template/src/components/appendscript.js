import { useEffect } from "react";

function AppendScript(src) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.type = "text/javascript";
    script.setAttribute("crossorigin", "anonymous");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

export default AppendScript;
