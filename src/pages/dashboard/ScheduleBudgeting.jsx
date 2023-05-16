import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ScheduleBudgeting = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  // submission ads details
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    // navigate Schedule and Budgeting to Targeting
    navigate("/dashboard/Targeting");
  };

  return (
    <div className="bg-slate-300 container mx-auto p-0">
      <div className="mt-5 rounded-lg bg-white p-0 shadow-md">
        <p className="text-center">Step 2/3</p>
        <div className="py-12 px-14">
          <p className="text-2xl font-medium text-[#5E5873]">
            a Schedule and Budgeting
          </p>
          <span className="text-sm font-medium">
            Set your ad schedule and total amount to spent on the ad
          </span>
          <hr className="mt-8" />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Facebook Ad Account
                </label>
                <select
                  {...register("facebook_ad_account", { required: true })}
                  aria-invalid={errors.facebook_ad_account ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] focus:outline-none"
                  id=""
                >
                  <option value="">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                </select>
                {errors.facebook_ad_account && (
                  <span className="text-danger">This filed is required</span>
                )}
              </div>

              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Select Facebook Page
                </label>
                <select
                  {...register("select_page", { required: true })}
                  aria-invalid={errors.select_page ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] focus:outline-none"
                  id=""
                >
                  <option value="">Select page</option>
                  <option value="SelectPage">Select page</option>
                  <option value="SelectPage">Select page</option>
                  <option value="SelectPage">Select page</option>
                </select>
                {errors.select_page && (
                  <span className="text-danger">This filed is required</span>
                )}
              </div>

              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">Budget</label>
                <div className="flex items-center">
                  <select
                    {...register("currency", { required: true })}
                    aria-invalid={errors.currency ? "true" : "false"}
                    className="w-32 rounded-md border px-4 py-[12px] focus:outline-none"
                    id=""
                  >
                    <option value="">Select...</option>
                    <option value="">USD</option>
                    <option value="SelectPage">BDT</option>
                    <option value="SelectPage">Rupee</option>
                    <option value="SelectPage">Rupee</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    required
                    className="w-full rounded-md border px-4 py-2.5 placeholder:font-semibold focus:outline-none"
                  />
                </div>
                {errors.currency && (
                  <span className="text-danger">This filed is required</span>
                )}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-20">
                <div>
                  <label className="mb-2.5 text-base font-semibold">
                    Campaign Start
                  </label>
                  <div className="flex w-full items-center gap-2 rounded-md border px-4 py-[12px] focus:outline-none">
                    <CalendarMonthIcon />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholderText={"Select Date"}
                      filterDate={(date) =>
                        date.getDay() !== 6 && date.getDay() !== 0
                      } // weekends cancel
                      showYearDropdown // year show and scrolldown alos
                      scrollableYearDropdown
                    />
                  </div>
                  {!startDate && (
                    <span className="text-danger">This filed is required</span>
                  )}
                </div>

                <div>
                  <label className="mb-2.5 text-base font-semibold">
                    Campaign End
                  </label>
                  <div className="flex w-full items-center gap-2 rounded-md border px-4 py-[12px] focus:outline-none">
                    <CalendarMonthIcon />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      placeholderText={"Select Date"}
                      filterDate={(date) =>
                        date.getDay() !== 6 && date.getDay() !== 0
                      } // weekends cancel
                      showYearDropdown // year show and scrolldown alos
                      scrollableYearDropdown
                    />
                  </div>
                  {!endDate && (
                    <span className="text-danger">This filed is required</span>
                  )}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <button className="rounded-md border border-gray-900 px-6 py-2.5 ">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#63666A] px-6 py-2.5 text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBudgeting;
