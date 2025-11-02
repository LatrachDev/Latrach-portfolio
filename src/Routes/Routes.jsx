import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index/IndexPage';
import NotFound from '../pages/NotFound';
import DesignerPage from '../pages/Designer/DesignerPage';
import DeveloperPage from '../pages/Developer/DeveloperPage';

export default function RoutesList() {
    return (
        <Routes>
            {/* Main Page */}
            <Route path='/' element={<Index />} />

            {/* Designer page */}
            <Route path='/designer' element={<DesignerPage />} />

            {/* Developer page */}
            <Route path='/developer' element={<DeveloperPage />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}