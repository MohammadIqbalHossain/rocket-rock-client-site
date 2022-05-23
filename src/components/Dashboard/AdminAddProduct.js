import React from 'react';

const AdminAddProduct = () => {
   
    



    return (
        <div className="flex justify-center">
            <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="flex">
                        <div>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="price" name="price" class="input input-bordered mx-w-sm" />
                        </div>
                        <div className="ml-10">
                            <div>
                                <label class="label">
                                    <span class="label-text">Picture URL</span>
                                </label>
                                <input type="text" placeholder="URL" name="picture" class="input input-bordered mx-w-sm" />
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div className="">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" name='"name' placeholder="Product Name" class="input input-bordered" />
                        </div>
                        <div className="ml-10">
                            <label class="label">
                                <span class="label-text">Min Order quantity</span>
                            </label>
                            <input type="text" name="minOrderQuantity" placeholder="min order quantity" class="input input-bordered " />
                        </div>

                    </div>
                    <div className="flex">
                        <div>
                            <div>
                                <label class="label">
                                    <span class="label-text">quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="quantity" class="input input-bordered" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea name="des" class="textarea textarea-info"  cols="58" placeholder="des.."></textarea>
                    </div>
                    <div class="form-control mt-6">
                        <input class="btn btn-primary" type="submit" value="submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddProduct;