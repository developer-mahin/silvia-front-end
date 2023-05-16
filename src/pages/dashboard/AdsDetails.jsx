import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import attached_img from "../../Assets/attatched_image.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdsDetails = () => {
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
      console.log("reader.onload", reader.onload);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // submission ads details
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    // navigate to Schedule and Budgeting
    navigate("/dashboard/ScheduleBudgeting");
  };

  return (
    <div className="bg-slate-300 container mx-auto p-0">
      <div className="mt-5 rounded-lg bg-white p-0 shadow-md">
        <p className="text-center">Step 1/3</p>
        <div className="py-12 px-14">
          <p className="text-2xl font-medium text-[#63666A]">Ads Details</p>
          <p className="text-sm font-[400]">
            Complete your ads details, to engage with your audience
          </p>
          <hr className="mt-[30px]" />

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Ad Name
                </label>
                <input
                  {...register("add_name", { required: true })}
                  aria-invalid={errors.add_name ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-2.5 placeholder:font-semibold focus:outline-none"
                  placeholder="Ex. Best Restraunt in Town"
                />
                {errors.add_name?.type === "required" && (
                  <span
                    role="alert"
                    className="text-sm font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Headline
                </label>

                <input
                  {...register("headline", { required: true })}
                  aria-invalid={errors.headline ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-2.5 placeholder:font-semibold focus:outline-none"
                  placeholder="Ex. Best Restraunt in Town"
                />
                {errors.headline?.type === "required" && (
                  <span
                    role="alert"
                    className="text-sm font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              {/* Drag and drop image/video */}
              <div>
                <div className="mt-7">
                  <label className="mb-2.5 text-base font-semibold">
                    Ad Image or Video
                  </label>
                  <div className="border-spacing-1 border-2 border-dashed border-gray-700 p-10">
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <div>
                          <div className="flex gap-5">
                            <img
                              className="h-[85px] w-[85px]"
                              src={attached_img}
                              alt=""
                            />
                            <div>
                              <h2 className="text-xl font-[600] text-[#63666A]">
                                Drag and drop file or browse from your PC.
                              </h2>
                              <span className="mt-2.5 block font-[500] text-[#63666A]">
                                you can add more than one
                              </span>
                              <span className="mt-3.5 block text-xs font-medium text-[#63666A]">
                                Support jpg, png, gif, mp4 or max 100Mb
                              </span>
                              <button className="mt-5 rounded-md border px-8 py-2.5">
                                Add Image/Video
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex gap-5">
                            <img
                              className="h-[85px] w-[85px]"
                              src={attached_img}
                              alt=""
                            />
                            <div>
                              <h2 className="text-xl font-[600] text-[#63666A]">
                                Drag and drop file or browse from your PC.
                              </h2>
                              <span className="mt-2.5 block font-[500] text-[#63666A]">
                                you can add more than one
                              </span>
                              <span className="mt-3.5 block text-xs font-medium text-[#63666A]">
                                Support jpg, png, gif, mp4 or max 100Mb
                              </span>
                              <button className="mt-5 rounded-md border px-8 py-2.5">
                                Add Image/Video
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  CTA Button
                </label>

                <select
                  {...register("cta_button", { required: true })}
                  aria-invalid={errors.cta_button ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] focus:outline-none"
                >
                  <option value="">Select...</option>
                  <option value="Ex. Best Restraunt in Town">
                    Ex. Best Restraunt in Town
                  </option>
                  <option value="Ex. Best Restraunt in Town">
                    Ex. Best Restraunt in Town
                  </option>
                  <option value="Ex. Best Restraunt in Town">
                    Ex. Best Restraunt in Town
                  </option>
                  <option value="Ex. Best Restraunt in Town">
                    Ex. Best Restraunt in Town
                  </option>
                </select>
                {errors.cta_button && (
                  <span className="text-danger">This filed is required</span>
                )}
              </div>

              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Website URL
                </label>
                <div className="flex items-center gap-5 rounded-md border px-4 py-[12px]">
                  <div>
                    <input
                      {...register("web_url", { required: true })}
                      aria-invalid={errors.web_url ? "true" : "false"}
                      type="radio"
                      id="other_page"
                      name="web_url"
                      defaultValue="Other Pages"
                    />
                    <label htmlFor="other_page" className="ml-2">
                      Other Pages
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="custom_url"
                      name="web_url"
                      {...register("web_url", { required: true })}
                      aria-invalid={errors.web_url ? "true" : "false"}
                      defaultValue="Custom URL"
                    />
                    <label htmlFor="custom_url" className="ml-2">
                      Custom URL
                    </label>
                  </div>
                </div>
                {errors.web_url?.type === "required" && (
                  <span
                    role="alert"
                    className="text-sm font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
                <div>
                  <input
                    type="text"
                    {...register("enter_url", { required: true })}
                    aria-invalid={errors.enter_url ? "true" : "false"}
                    placeholder="Enter URL"
                    name="enter_url"
                    className="w-full rounded-md border px-4 py-2.5 placeholder:font-semibold focus:outline-none"
                  />
                </div>
                {errors.enter_url?.type === "required" && (
                  <span
                    role="alert"
                    className="text-sm font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              <div className="mt-7">
                <label className="mb-2.5 text-base font-semibold">
                  Copywriting
                </label>
                <textarea
                  {...register("copywriting", { required: true })}
                  aria-invalid={errors.copywriting ? "true" : "false"}
                  name="copywriting"
                  placeholder="Add your copywriting"
                  className="w-full rounded-md border px-4 py-2.5 focus:outline-none"
                  id=""
                  rows="7"
                ></textarea>
                {errors.copywriting?.type === "required" && (
                  <span
                    role="alert"
                    className="text-sm font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              <p className="text-sm font-semibold text-[#63666A]">
                Your audience will be redirect to this site when they engage and
                click the CTA
              </p>

              <div className="mt-8 flex items-center gap-2">
                <button className="rounded-md border border-gray-900 px-6 py-2.5 ">
                  Cancel
                </button>
                <button
                  type="submit"
                  // onClick={handleNavigate}
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

export default AdsDetails;
