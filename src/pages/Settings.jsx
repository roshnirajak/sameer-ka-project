import Navbar from "../components/Navbar";

function Settings({ toggleTheme }) {
    function toggleTheme() {
        const currentTheme = localStorage.getItem('color-theme');
        if (currentTheme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-3xl">Settings</h1>
                <button
                    className="bg-red-500 text-white p-2 mt-4 ml-4"
                >
                    Logout
                </button>
            </div>
        </>
    );
}

export default Settings;
