import { useNavigate, useLocation } from "react-router-dom";

import styles from './SchowLocation.module.css';

const SchowLocation = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const breadcrumbs = () => {
        const pathnames = location.pathname.split('/').filter(x => x); // ['articles', '1']

        return (
            <nav className={styles.breadcrumb}>
                <span onClick={() => navigate('/')}>Home</span>
                {pathnames.map((name, idx) => {
                    const routeTo = `/${pathnames.slice(0, idx + 1).join('/')}`;
                    // const label = name === 'articles' ? 'Статьи' : `Статья ${name}`;
                    const label = name;
                    return (
                        <span key={idx}>
                            {' '}-{' '}
                            <span onClick={() => navigate(routeTo)}>{label}</span>
                        </span>
                    );
                })}
            </nav>
        );
    };

    return (
        <div>
            {breadcrumbs()}
            <h4>Current URL:  {location.pathname}</h4>
        </div>
    )
};

export default SchowLocation;