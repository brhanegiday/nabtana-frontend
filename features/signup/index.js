import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { LockClosedIcon, MailIcon, UserIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";

function Signup({ session }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();

  const submit = async (values) => {
    setLoading(true);
    if (values) {
      const id = Date.now().toString();
      const res = await signIn("credentials", {
        fullName: values.fullName,
        id,
        email: values.email,
        password: values.password,
        type: "register",
        redirect: false,
      });

      // if (res && res.error) {
      //   try {
      //     const resp = await axios.get(`/api/auth-errors?id=${id}`);
      //     if (resp.data === "") {
      //       const err = "Error";
      //       setError({ error: true, message: err });
      //     } else {
      //       setError({ error: true, message: resp.data });
      //     }
      //   } catch (e) {
      //     Honeybadger.notify(e);
      //   }
      // } else {
      //   if (commercialInfoCheck) {
      //     await new ClientService(props.country).subscribe(values.email);
      //   }
      //   const queryParams = new URLSearchParams(window.location.search);

      //   router.push(queryParams.get("redirectTo") || res.url).catch();
      // }
    }
    setLoading(false);
  };
  return (
    <>
      <div className="w-4/5 m-auto justify-center items-center py-10">
        <h1 className="leading-6 text-shark-900 text-2xl">
          Register your company
        </h1>
        <p className="py-3 text-sm text-shark-500">
          Create an account and start the adventure
        </p>
        <div className="bg-white border-[#A7A199] border rounded-md px-10 pt-7 py-5 grid grid-cols-1 md:grid-cols-4 gap-x0-4">
          <div className="pl-3 col-span-1">
            <h2 className="text-shark-900 text-3xl">Company Info</h2>
          </div>
          <div className="pl-3 col-span-3">
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
              }}
              validateOnBlur={false}
              validateOnChange={false}
              validationSchema={Yup.object().shape({
                companyName: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string()
                  .min(8, "password must be at least 8 characters")
                  .required(),
              })}
              onSubmit={submit}
            >
              {(formik) => (
                <Form className="mt-1">
                  {error && error.error && (
                    <div className="bg-red-400 py-3 px-5 text-white">
                      {error.message}
                    </div>
                  )}
                  <div className="md:flex md:gap-x-10">
                    <div className="w-3/5 relative">
                      <label
                        htmlFor="companyName"
                        id="companyName"
                        className="text-shark-900 text-sm"
                      >
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
                        autoComplete="companyName"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                        placeholder="Company name"
                      />
                      {formik.errors.companyName && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.companyName}
                        </div>
                      )}
                    </div>
                    <div className="w-3/5 relative">
                      <label
                        htmlFor="email"
                        id="email"
                        className="text-shark-900 text-sm"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        autoComplete="email"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                        placeholder="yourname@ex.com"
                      />
                      {formik.errors.email && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pt-3 md:flex md:gap-x-10">
                    <div className="mt-2 w-4/5 relative">
                      <label
                        htmlFor="password"
                        id="password"
                        className="text-shark-900 text-sm"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        autoComplete="current-password"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Password"
                      />
                      {formik.errors.password && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 w-4/5 relative">
                      <label
                        htmlFor="status"
                        className="text-shark-900 text-sm dark:text-gray-400"
                      >
                        What stage is your business in?{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="status"
                        className="bg-white border border-gray-300 text-shar-500 text-sm rounded-lg focus:ring-tango-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tango-500 dark:focus:border-tango-500"
                      >
                        <option value="Idea/concept">Idea/concept</option>
                        <option value="Pre-money">Pre-money</option>
                        <option value="Post-money">Post-money</option>
                        <option value="Acquired">Acquired</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-3 md:flex md:gap-x-10">
                    <div className="w-3/5 relative">
                      <label
                        htmlFor="country"
                        id="country"
                        className="text-shark-900 text-sm"
                      >
                        Location(Country)
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        autoComplete="country"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                        placeholder="HQ location"
                      />
                      {formik.errors.country && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.country}
                        </div>
                      )}
                    </div>
                    <div className="w-3/5 relative">
                      <label
                        htmlFor="city"
                        id="city"
                        className="text-shark-900 text-sm"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        autoComplete="city"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                        placeholder="city"
                      />
                      {formik.errors.city && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.city}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pt-3 md:flex md:gap-x-10">
                    <div className="w-3/5 relative">
                      <label
                        htmlFor="url"
                        id="url"
                        className="text-shark-900 text-sm"
                      >
                        Website URL(if applicable)
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        onChange={formik.handleChange}
                        value={formik.values.url}
                        autoComplete="url"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                        placeholder="URL"
                      />
                      {formik.errors.url && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.url}
                        </div>
                      )}
                    </div>
                    <div className="w-3/5 relative">
                      <label
                        htmlFor="yearFounded"
                        id="yearFounded"
                        className="text-shark-900 text-sm"
                      >
                        Year founded
                      </label>
                      <input
                        type="text"
                        name="yearFounded"
                        id="yearFounded"
                        onChange={formik.handleChange}
                        value={formik.values.yearFounded}
                        autoComplete="yearFounded"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                        placeholder="Year founded"
                      />
                      {formik.errors.yearFounded && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.yearFounded}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pt-3 md:flex md:gap-x-10">
                    <div className="w-3/5 relative">
                      <p className="text-shark-900 text-sm">
                        Upload an image representative of your business or
                        product
                      </p>
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg
                            className="mb-3 w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="w-3/5 relative">
                      <label
                        htmlFor="status"
                        className="text-shark-900 text-sm dark:text-gray-400"
                      >
                        Category/Tags<span className="text-red-400">*</span>
                      </label>
                      <select
                        id="status"
                        className="bg-white border border-gray-300 text-shar-500 text-sm rounded-lg focus:ring-tango-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tango-500 dark:focus:border-tango-500"
                      >
                        <option value="Education">Education</option>
                        <option value="Fintech">Fintech</option>
                        <option value="SaaS">SaaS</option>
                        <option value="B2B">B2B</option>
                        <option value="Construction">Construction</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="py-3 w-4/6 relative">
                    <label
                      htmlFor="bio"
                      id="bio"
                      className="text-shark-900 text-sm"
                    >
                      Describe your business idea(less than 120 characters){" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      type="text"
                      name="bio"
                      id="bio"
                      onChange={formik.handleChange}
                      value={formik.values.bio}
                      autoComplete="bio"
                      className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                      placeholder="your company moto"
                    />
                    {formik.errors.bio && (
                      <div className="text-xs font-light text-red-500 mt-1 ml-4">
                        {formik.errors.bio}
                      </div>
                    )}
                  </div>
                  <div className="w-4/6 relative">
                    <label
                      htmlFor="description"
                      id="description"
                      className="text-shark-900 text-sm"
                    >
                      What does your business/product do?{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      rows={4}
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      autoComplete="description"
                      className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                      placeholder="describe your business/product"
                    />
                    {formik.errors.description && (
                      <div className="text-xs font-light text-red-500 mt-1 ml-4">
                        {formik.errors.description}
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="border-[#b1b0b0] col-span-4 my-10 border-b w-full" />
          <>
            <div className="pl-3 col-span-1">
              <h2 className="text-shark-900 text-3xl">Founders</h2>
            </div>
            <div className="pl-3 col-span-3">
              <Formik
                initialValues={{
                  fullName: "",
                  lastName: "",
                  email: "",
                  position: "",
                }}
                validateOnBlur={false}
                validateOnChange={false}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string().required(),
                  lastName: Yup.string().required(),
                  email: Yup.string().email().required(),
                  position: Yup.string().required(),
                })}
                onSubmit={submit}
              >
                {(formik) => (
                  <Form className="mt-1">
                    {error && error.error && (
                      <div className="bg-red-400 py-3 px-5 text-white">
                        {error.message}
                      </div>
                    )}
                    <div className="md:flex md:gap-x-10">
                      <div className="w-3/5 relative">
                        <label
                          htmlFor="firstName"
                          id="firstName"
                          className="text-shark-900 text-sm"
                        >
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                          autoComplete="firstName"
                          className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                          placeholder="First name"
                        />
                        {formik.errors.firstName && (
                          <div className="text-xs font-light text-red-500 mt-1 ml-4">
                            {formik.errors.firstName}
                          </div>
                        )}
                      </div>
                      <div className="w-3/5 relative">
                        <label
                          htmlFor="lastName"
                          id="lastName"
                          className="text-shark-900 text-sm"
                        >
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                          autoComplete="lastName"
                          className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                          placeholder="Last name"
                        />
                        {formik.errors.lastName && (
                          <div className="text-xs font-light text-red-500 mt-1 ml-4">
                            {formik.errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="pt-3 md:flex md:gap-x-10">
                      <div className="w-3/5 relative">
                        <label
                          htmlFor="email"
                          id="email"
                          className="text-shark-900 text-sm"
                        >
                          Email<span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          autoComplete="email"
                          className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                          placeholder="yourname@ex.com"
                        />
                        {formik.errors.email && (
                          <div className="text-xs font-light text-red-500 mt-1 ml-4">
                            {formik.errors.email}
                          </div>
                        )}
                      </div>
                      <div className="w-3/5 relative">
                        <label
                          htmlFor="position"
                          id="position"
                          className="text-shark-900 text-sm"
                        >
                          Position <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="position"
                          id="position"
                          onChange={formik.handleChange}
                          value={formik.values.position}
                          autoComplete="position"
                          className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                          placeholder="CEO"
                        />
                        {formik.errors.position && (
                          <div className="text-xs font-light text-red-500 mt-1 ml-4">
                            {formik.errors.position}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="py-3 w-4/6 relative">
                      <label
                        htmlFor="bio"
                        id="bio"
                        className="text-shark-900 text-sm"
                      >
                        Bio
                        <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        type="text"
                        name="bio"
                        id="bio"
                        rows={4}
                        onChange={formik.handleChange}
                        value={formik.values.bio}
                        autoComplete="bio"
                        className="w-full focus:outline-none rounded-md border-2 py-2 pl-4 sm:text-sm placeholder-gray-400 focus:ring-0"
                        placeholder="Describe yourself"
                      />
                      {formik.errors.bio && (
                        <div className="text-xs font-light text-red-500 mt-1 ml-4">
                          {formik.errors.bio}
                        </div>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
              {/* Signup Button  */}
              <button
                type="submit"
                disabled={loading}
                className="mt-5 mb-3 py-2 px-7 rounded-md bg-tango-500 hover:bg-tango-600 transition-colors duration-150 ease-out"
              >
                <span className="text-sm font-bold text-white uppercase">
                  Sign Up
                </span>
                {loading && (
                  <div className="ml-2 flex items-center">
                    <ClipLoader color={"white"} size={13} />
                  </div>
                )}
              </button>
              <div className="flex space-x-1">
                <p className="text-nab text-shark-500">
                  Already have an account?
                </p>
                <NextLink href="/login">
                  <a>
                    <p className="text-tango-500 text-nab font-bold">Login</p>
                  </a>
                </NextLink>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default Signup;

export const getServerSideProps = async (contex) => {
  const session = getSession(contex);

  if (session && session.user) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
