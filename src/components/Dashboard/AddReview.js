import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Loading from '../shared/Loading/Loading';

const AddReview = () => {
    const navigate = useNavigate()
    const [user, loading,] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const ratings = e.target.ratings.value;
        const message = e.target.message.value;
        const review = { name, ratings, message }
        fetch('https://blooming-woodland-85127.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
            },
            body: JSON.stringify(review),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review Done');
                    navigate('/')
                }
            })

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <section className="py-6 bg-gray-800 mt-20 text-gray-100">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 grid items-center md:py-0 md:px-6">
                        <h3 className="text-4xl  font-semibold">Add a  <span className="text-violet-400">Review</span></h3>

                    </div>
                    <form novalidate="" onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input name='name' type="text" value={user?.displayName} className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Ratings</span>
                            <input required name='ratings' type="number" placeholder="4.5" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea required name='message' placeholder="Enter your review" rows="3" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" spellcheck="false"></textarea>
                        </label>
                        <input type="submit" value='Review' className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400" />
                    </form>
                </div>
            </section>


        </div>
    );
};

export default AddReview;