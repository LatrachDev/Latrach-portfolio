import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import DesignerPage from '../pages/Designer/DesignerPage';
import DeveloperPage from '../pages/Developer/DeveloperPage';
import IndexPage from '../pages/index/IndexPage';

export default function RoutesList() {
    return (
        <Routes>
            {/* Main Page */}
            <Route path='/' element={<IndexPage />} />

            {/* Designer page */}
            <Route path='/designer' element={<DesignerPage />} />

            {/* Developer page */}
            <Route path='/developer' element={<DeveloperPage />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}