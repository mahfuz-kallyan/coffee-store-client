import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffees = { name, quantity, supplier, taste, category, details, photo }


        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffees)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='bg-gray-200 p-24'>
            <h2 className='text-3xl font-semibold'>Update Coffee</h2>
            <form onSubmit={handleSubmit}>
                <div className='md:flex gap-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' defaultValue={name} placeholder='coffee name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder='Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" defaultValue={supplier}  name='supplier' placeholder='supplier' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='taste' defaultValue={taste} placeholder='taste' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='category' defaultValue={category}  placeholder='category' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='details' defaultValue={details}  placeholder='details' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Photo Url</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name='photo' defaultValue={photo}  placeholder='url' className='input input-bordered w-full' />
                    </label>
                </div>

                <input type="submit" value="Update Coffee" className='btn btn-block mt-5 bg-gray-800 text-white' />
            </form>
        </div>
    );
};

export default UpdateCoffee;