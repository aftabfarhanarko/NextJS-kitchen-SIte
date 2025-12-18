import FeedbackAddForm from '@/components/Form/FeedbackAddForm';
import React from 'react';

const AddFeedbackForm = () => {
    return (
        <div>
            <h1 className=' text-2xl font-semibold my-10'>AddFeedbackForm</h1>

            <div>
                <FeedbackAddForm></FeedbackAddForm>
            </div>
        </div>
    );
};

export default AddFeedbackForm;