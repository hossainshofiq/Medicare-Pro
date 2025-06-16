import React from 'react';

const Faq = () => {
    return (
        <div className="w-11/12 mx-auto space-y-4 p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            
            {/* Admin Related Questions */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How do I register as an admin?</div>
                <div className="collapse-content text-sm">
                    <p>Admin accounts are created through Postman API requests. Please contact the system administrator for assistance with admin registration.</p>
                </div>
            </div>

            {/* Doctor Related Questions */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How can doctors reset their passwords?</div>
                <div className="collapse-content text-sm">
                    <p>Doctors can reset passwords by clicking "Forgot Password" on the login page. A reset link will be sent to your registered email address.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do doctors manage their assistants?</div>
                <div className="collapse-content text-sm">
                    <p>After logging in, doctors can:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Add new assistants in the "Assistants" section</li>
                        <li>Edit existing assistant information</li>
                        <li>Remove assistants when needed</li>
                    </ul>
                </div>
            </div>

            {/* Subscription Related Questions */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What happens when my subscription expires?</div>
                <div className="collapse-content text-sm">
                    <p>You'll receive notifications before expiration. After expiration, there's a 7-day grace period to renew before account access is restricted.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I change my subscription plan?</div>
                <div className="collapse-content text-sm">
                    <p>Yes, you can upgrade or downgrade your plan at any time from the Subscriptions section in your dashboard.</p>
                </div>
            </div>

            {/* General Questions */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Where can I view all available subscription plans?</div>
                <div className="collapse-content text-sm">
                    <p>Both admins and doctors can see available plans in the "Subscription Plans" section after logging in.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Who should I contact for technical support?</div>
                <div className="collapse-content text-sm">
                    <p>For immediate assistance, please email <span className="text-blue-600">support@medicarepro.com</span> or call our help desk at (555) 123-4567 during business hours.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;