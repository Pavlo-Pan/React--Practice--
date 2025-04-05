import { createContext } from "react";
import { useState } from "react";

export const blogSettingsContext = createContext();

const BlogSettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState({
        fontSize: '18px', lineHeight: '1.5',
    });

    const changeSettings = (newSettings)=> {
        setSettings(prevSettings => ({ ...prevSettings, ...newSettings}));
    }

    return (
        <blogSettingsContext.Provider value={{settings, changeSettings}}>
            {children}
        </blogSettingsContext.Provider>
    )
};

export default BlogSettingsProvider;