import { useEffect } from "react";

function AppendScript(scriptToAppend) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [scriptToAppend]);
}

export default AppendScript;
