import React from "react";

const Targeting = () => {

    const handleSubmitAdsDetails  = (e)=>{
        e.preventDefault()
    }

  return (
    <div className="bg-slate-300 container mx-auto p-0">
      <div className="mt-5 rounded-lg bg-white p-0 shadow-md">
        <p className="text-center">Step 2/3</p>
        <div className="py-12 px-14">
          <p className="text-2xl font-medium text-[#5E5873]">Targeting</p>
          <span className="text-sm font-medium">
            Tailor your ad to the right audience
          </span>
          <hr className="mt-8" />
          <div>
            <form onSubmit={handleSubmitAdsDetails}>
              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Ad Category
                </label>
                <select
                  name="category"
                  required
                  className="w-full rounded-md border px-4 py-[12px] focus:outline-none"
                  id=""
                >
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                </select>
              </div>

              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Website URL
                </label>
                <div className="rounded-md border p-4">
                  <div className="mb-2 flex items-center gap-5">
                    <div>
                      <input
                        type="radio"
                        id="new_audience"
                        name="select_audience"
                        required
                        defaultValue="New Audience"
                      />
                      <label
                        htmlFor="new_audience"
                        className="ml-2 cursor-pointer"
                      >
                        New Audience
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="saved_audience"
                        name="select_audience"
                        required
                        defaultValue="Custom URL"
                      />
                      <label
                        htmlFor="saved_audience"
                        className="ml-2 cursor-pointer"
                      >
                        Saved Audience
                      </label>
                    </div>
                  </div>
                  <div>
                    <select
                      name="audience"
                      className="w-full rounded-md border px-4 py-[12px] focus:outline-none"
                      required
                      id=""
                    >
                      <option value="Select Audience">Select Audience</option>
                      <option value="Select Audience">Select Audience</option>
                      <option value="Select Audience">Select Audience</option>
                      <option value="Select Audience">Select Audience</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <button className="rounded-md border border-gray-900 px-6 py-2.5 ">
                  Cancel
                </button>
                <button type="submit" className="rounded-md bg-[#63666A] px-6 py-2.5 text-white">
                  Finish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targeting;
