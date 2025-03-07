import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Navbar from "../components/Navbar";

function Profile() {
    const [isEditing, setIsEditing] = useState({ name: false, email: false, phone: false });
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 123 456 7890",
        image: "https://i.pinimg.com/736x/16/a1/94/16a1943e64ed9009911f8bfe9a27d56a.jpg"
    });
    const [isChanged, setIsChanged] = useState(false);

    const handleEditClick = (field) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
        setIsChanged(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
        setIsChanged(true);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfile((prev) => ({ ...prev, image: imageUrl }));
            setIsChanged(true);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile updated:", profile);
        alert("Changes saved successfully!");
        setIsEditing({ name: false, email: false, phone: false });
        setIsChanged(false);
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Profile</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col items-center mb-6">
                        <label htmlFor="imageUpload" className="cursor-pointer">
                            <img 
                                src={profile.image} 
                                alt="Profile" 
                                className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 hover:opacity-75 object-cover" 
                            />
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                    {['name', 'email', 'phone'].map((field) => (
                        <div key={field} className="flex items-center justify-between">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                {isEditing[field] ? (
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        value={profile[field]}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <p className="text-gray-900 dark:text-white p-2.5">{profile[field]}</p>
                                )}
                            </div>
                            <button type="button" onClick={() => handleEditClick(field)} className="ml-4">
                                <FaEdit className="w-5 h-5 text-gray-500 hover:text-blue-500" />
                            </button>
                        </div>
                    ))}
                    <button 
                        type="submit" 
                        disabled={!isChanged}
                        className={`w-full font-medium py-2 px-4 rounded-lg ${isChanged ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
                    >
                        Save changes
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Profile;
