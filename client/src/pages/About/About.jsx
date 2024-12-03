import { useState } from 'react';
import Navbar from '../../components/header/Navbar';

export default function About({ userId, emailId, password }) {
    const [showPassword, setShowPassword] = useState(false);

    return (<>
        <Navbar />
        <div className="w-screen h-screen overflow-hidden p-24 bg-gradient-to-r from-gray-600 to-gray-600 via-gray-500">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">USER INFO</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">User_Id</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userId}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email_Id</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{emailId}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Password</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                readOnly
                                className="bg-transparent"
                            />
                            <button onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <i class="ri-lock-unlock-fill text-xl"></i> : <i class="ri-lock-2-fill text-xl"></i>}
                            </button>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ex. Fugit ut maxime ea esse repellendus omnis,
                            cupiditate facere aut, officia similique ipsa commodi consectetur fuga minima illum consequuntur fugiat.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        </>
    );
}
