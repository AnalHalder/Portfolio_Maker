import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { useNavigate } from 'react-router';

function BasicInfo() {
    const { formData, setFormData } = useContext(PortfolioContext)
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        if(!formData.name || !formData.email || !formData.bio) {
            return window.alert("name, email, bio required")
        }
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/links');
    };

    return (
        <div className="flex min-w-screen justify-center items-center">
            <div className="max-w-11/12 w-full p-4 border rounded shadow-sm">
                <h1 className="text-xl font-semibold mb-4">Basic Info</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full p-2 border rounded h-24"
                            placeholder="Short introduction of your"
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>

    );
}

export default BasicInfo;
