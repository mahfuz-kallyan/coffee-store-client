import Swal from 'sweetalert2'

const AddCoffee = () => {
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
        const newCoffees = { name, quantity, supplier, taste, category, details, photo }

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffees)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='bg-gray-200 p-24'>
            <h2 className='text-3xl font-semibold'>Add a Coffee</h2>
            <form onSubmit={handleSubmit}>
                <div className='md:flex gap-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' placeholder='coffee name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='quantity' placeholder='Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='supplier' placeholder='supplier' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='taste' placeholder='taste' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='category' placeholder='category' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='details' placeholder='details' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Photo Url</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name='photo' placeholder='url' className='input input-bordered w-full' />
                    </label>
                </div>

                <input type="submit" value="Add Coffee" className='btn btn-block mt-5 bg-gray-800 text-white' />
            </form>
        </div>
    );
};

export default AddCoffee;