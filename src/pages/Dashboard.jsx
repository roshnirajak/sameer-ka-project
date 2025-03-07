import Navbar from '../components/Navbar';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <h1 className="text-3xl">Welcome to the Dashboard!</h1>
            </div>
        </div>
    );
}

export default Dashboard;
