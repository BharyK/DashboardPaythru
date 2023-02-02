import { Routes, Route } from 'react-router-dom';
import * as React from 'react'

const LandingPage = React.lazy(() => import('./containers/LandingPage/LandingPage'));
const Dashboard = React.lazy(() => import('./containers/DashBoard/DashBoard'))
const BulkCollectRequest = React.lazy(() => import('./containers/BulkCollectRequest/BulkCollectRequest'))
const TransactionSummary = React.lazy(() => import('./containers/TransactionSummary/TransactionSummary'))
const Loading = () => <p>Laoding....</p>;

const Routers = () => {
    return (
        <React.Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/BulkCollectRequest' element={<BulkCollectRequest />} />
                <Route path='/TransactionSummary' element={<TransactionSummary />} />
            </Routes>
        </React.Suspense>
    )
}

export { Routers }