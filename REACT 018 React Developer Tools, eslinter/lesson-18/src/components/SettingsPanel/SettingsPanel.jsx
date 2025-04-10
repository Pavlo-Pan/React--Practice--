import { useContext } from "react";
import { blogSettingsContext } from "../../context/BlogSettingsProvider";

// import styles from './SettingsPanel.module.css';

const SettingsPanel = () => {

    const { changeSettings } = useContext(blogSettingsContext);

    const handleChange = (event) => {
        const { value, name } = event.target;
        changeSettings({ [name]: value })
    }

    return (
        <div>
            <h3>Settings</h3>
            <label htmlFor="fontSize">Font Size</label>
            <select onChange={handleChange} name="fontSize" id="fontSize">
                <option value="18px">18px</option>
                <option value="20px">20px</option>
                <option value="24px">24px</option>
                <option value="32px">32px</option>
            </select>

            <label htmlFor="lineHeight">Line Height</label>
            <select onChange={handleChange} name="lineHeight" id="lineHeight">
                <option value="1.5">1.5</option>
                <option value="2.5">2.5</option>
                <option value="3.5">3.5</option>

            </select>
        </div>
    )
}

export default SettingsPanel;