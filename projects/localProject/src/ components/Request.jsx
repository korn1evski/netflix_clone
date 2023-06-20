import { React, useState } from 'react';
import { useForm} from 'react-hook-form';
import { IoClose, IoAddCircleOutline} from 'react-icons/io5';
function Request({isOpen}) {
    const { register, handleSubmit, formState: { errors }, watch} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        window.location.reload();
    };

    return (
        <div className="relative">
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 w-[100%]">
                    <div className="bg-white p-8 rounded-lg max-w-md top-0 right-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="block mb-4">
                                Street:
                                <input type="text" {...register("street", { required: true })} className="border-gray-300 border-2 rounded-md p-2 w-full" />
                                {errors.street && <span className="text-red-500">This field is required</span>}
                            </label>
                            <label className="block mb-4">
                                Your Text:
                                <textarea {...register("text", { required: true })} className="border-gray-300 border-2 rounded-md p-2 w-full" />
                                {errors.text && <span className="text-red-500">This field is required</span>}
                            </label>
                            <label className="block mb-4">
                                <div className="border-gray-300 border-2 rounded-md p-2 w-full flex flex-col items-center justify-center">
                                    {watch("image") ? (
                                        <span className="text-gray-400 text-sm">Image Selected</span>
                                    ) : (
                                        <>
                                            <span className="text-gray-400 text-2xl mb-2"><IoAddCircleOutline /></span>
                                            <span className="text-gray-400 text-sm">Add Photo</span>
                                        </>
                                    )}
                                    <input type="file" {...register("image", { required: true })} className="hidden" />
                                </div>
                                {errors.image && <span className="text-red-500">This field is required</span>}
                            </label>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Request;