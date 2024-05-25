import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const RegistrationFeeTable = () => {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: false
        });
    }, []);

    return (
        <div className="max-w-4xl mx-auto my-20 px-4">
            <h2 className="reveal text-3xl font-bold text-center text-purple-800 mb-8">Registration Fee</h2>
            <div className="overflow-x-auto">
                <table className="reveal min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border" colSpan="3">REGISTRATION FEE (inclusive of 18% GST)</th>
                        </tr>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">INDIAN AUTHORS</th>
                            <th className="px-4 py-2 border">Non-IEEE Members</th>
                            <th className="px-4 py-2 border">IEEE Members</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Graduate Students (UG & PG) / Research Scholars</td>
                            <td className="px-4 py-2 border">To be announced</td>
                            <td className="px-4 py-2 border">To be announced</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-4 py-2 border">Academicians</td>
                            <td className="px-4 py-2 border">To be announced</td>
                            <td className="px-4 py-2 border">To be announced</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Industry and Others</td>
                            <td className="px-4 py-2 border">To be announced</td>
                            <td className="px-4 py-2 border">To be announced</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-4 py-2 border">Participants</td>
                            <td className="px-4 py-2 border">To be announced</td>
                            <td className="px-4 py-2 border">To be announced</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Additional Conferences kit and Proceedings</td>
                            <td className="px-4 py-2 border">To be announced</td>
                            <td className="px-4 py-2 border">To be announced</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-4 py-2 border">Foreign Authors</td>
                            <td className="px-4 py-2 border">To be announced</td>
                            <td className="px-4 py-2 border">To be announced</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="reveal mt-4 text-sm text-gray-600">
                <strong>Note:</strong> Registration fee doesn't cover bank charges and includes only participation & presentation to conference.
            </p>
            <div className="reveal mt-8 text-center">
                <h3 className="text-xl font-bold text-purple-800">Payment Link</h3>
                <p className="mt-2">For Payment (After Acceptance of Article): <a href="#" className="text-blue-600 underline">Click Here</a></p>
            </div>
        </div>
    );
}

export default RegistrationFeeTable;
