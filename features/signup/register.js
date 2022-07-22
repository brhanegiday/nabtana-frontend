import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import SelectField from "../../components/form/SelectField";
import TextField from "../../components/form/TextField";
import TextAreaField from "../../components/form/TextAreafield";

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
  const statusOptions = [
    "Idea/Concept",
    "Pre-money",
    "Post-money",
    "Acquired",
    "Inactive",
  ];

  const categoryOptions = [
    "Education",
    "Fintech",
    "SaaS",
    "B2B",
    "Marketing",
    "Construction",
    "Electronics",
    "Other",
  ];

  return (
    <div className="xl:container  mx-auto">
      <div className="lg:w-4/5 m-auto py-10">
        <h1 className="leading-6 text-shark-900 text-2xl text-center">
          Register your company
        </h1>
        <p className="py-3 text-sm text-shark-500 text-center">
          Create an account and start the adventure
        </p>
        <Formik
          initialValues={{
            companyName: "",
            email: "",
            password: "",
            status: "",
            website: "",
            yearFounded: "",
            fileUpload: "",
            category: "",
            bio: "",
            description: "",
            firstName: "",
            lastName: "",
            founder_email: "",
            position: "",
            founder_bio: "",
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={Yup.object().shape({
            companyName: Yup.string().required("company name is required"),
            email: Yup.string().email().required(),
            password: Yup.string()
              .min(8, "password must be at least 8 characters")
              .required(),
            bio: Yup.string()
              .required()
              .max(120, "bio should be less than 120 letters"),
            description: Yup.string().required(),
            fileUpload: Yup.mixed()
              .required("please upload your company logo")
              .test(
                "fileSize",
                "File too large",
                (value) => value && value.size <= FILE_SIZE
              )
              .test(
                "fileFormat",
                "Unsupported Format",
                (value) => value && SUPPORTED_FORMATS.includes(value.type)
              ),
            firstName: Yup.string().required("first name is required"),
            lastName: Yup.string().required("last name is required"),
            founder_email: Yup.string()
              .email()
              .required("please insert your email"),
            position: Yup.string().required(),
            founder_bio: Yup.string().required(
              "please describe about yourself"
            ),
          })}
          onSubmit={submit}
        >
          {(formik) => (
            <div className="bg-white border-[#A7A199] border rounded-md px-10 pt-7 py-5">
              <div className="md:flex">
                <div className="pl-3 w-2/6">
                  <h2 className="text-shark-900 text-2xl">Company Info</h2>
                  <p className="py-1 text-shark-400 text-nab">
                    Fill information related to your company
                  </p>
                </div>
                <div className="pl-3 w-4/6">
                  <Form className="mt-1">
                    {error && error.error && (
                      <div className="bg-red-400 py-3 px-5 text-white">
                        {error.message}
                      </div>
                    )}
                    <div className="md:flex md:gap-x-10">
                      <div className="w-3/5 relative">
                        <TextField
                          label="Company Name"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.companyName}
                          name="company"
                          placeholder="company name"
                          type="text"
                          error={formik.errors.companyName}
                          autoComplete={true}
                        />
                      </div>
                      <div className="w-3/5 relative">
                        <TextField
                          label="Email"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          name="email"
                          placeholder="company email"
                          type="email"
                          error={formik.errors.email}
                          autoComplete={true}
                        />
                      </div>
                    </div>
                    <div className="pt-3 md:flex md:gap-x-10">
                      <div className="mt-2 w-4/5 relative">
                        <TextField
                          label="Password"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          name="password"
                          placeholder="password"
                          type="password"
                          error={formik.errors.password}
                          autoComplete={true}
                        />
                      </div>
                      <div className="mt-2 w-4/5 relative">
                        <SelectField
                          label="What stage is your business in?"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.status}
                          name="status"
                          placeholder=""
                          error={formik.errors.status}
                          autoComplete={true}
                          options={statusOptions}
                        />
                      </div>
                    </div>
                    <div className="pt-3 md:flex md:gap-x-10">
                      <div className="w-3/5 relative">
                        <TextField
                          label="Location(Country)"
                          name="country"
                          onChange={formik.handleChange}
                          value={formik.values.country}
                          placeholder="HQ location"
                          type="text"
                          autoComplete={true}
                        />
                      </div>
                      <div className="w-3/5 relative">
                        <TextField
                          label="City"
                          name="city"
                          onChange={formik.handleChange}
                          value={formik.values.city}
                          placeholder="city"
                          type="text"
                          autoComplete={true}
                        />
                      </div>
                    </div>
                    <div className="pt-3 md:flex md:gap-x-10">
                      <div className="w-3/5 relative">
                        <TextField
                          type="url"
                          name="website"
                          label="Website URL(if applicable)"
                          onChange={formik.handleChange}
                          value={formik.values.website}
                          autoComplete="website"
                          placeholder="xyz.com"
                        />
                      </div>
                      <div className="w-3/5 relative">
                        <TextField
                          type="number"
                          label="Year founded"
                          name="yearFounded"
                          onChange={formik.handleChange}
                          value={formik.values.yearFounded}
                          autoComplete="yearFounded"
                          placeholder="Year founded"
                        />
                      </div>
                    </div>
                    <div className="pt-3 md:flex md:gap-x-10">
                      <div className="w-3/5 relative">
                        <p className="text-shark-900 text-sm">
                          Upload an image representative of your business or
                          product <span className="text-red-400">*</span>
                        </p>
                        <label
                          htmlFor="fileUpload"
                          className="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 10MB)
                            </p>
                          </div>
                          <input
                            id="fileUpload"
                            name="fileUpload"
                            type="file"
                            className="hidden"
                          />
                        </label>
                        {formik.errors.fileUpload && (
                          <div className="text-xs font-light text-red-500 mt-1 ml-4">
                            {formik.errors.fileUpload}
                          </div>
                        )}
                      </div>
                      <div className="w-3/5 relative">
                        <SelectField
                          name="category"
                          label=" Category/Tags"
                          options={categoryOptions}
                          value={formik.values.category}
                          onBlur={formik.handleBlur}
                          error={formik.errors.category}
                        />
                      </div>
                    </div>
                    <div className="py-3 w-4/6 relative">
                      <TextAreaField
                        type="text"
                        name="bio"
                        label="Describe your business idea(less than 120 characters)"
                        onChange={formik.handleChange}
                        value={formik.values.bio}
                        autoComplete="bio"
                        placeholder="your company moto"
                        error={formik.errors.bio}
                        rows={2}
                      />
                    </div>
                    <div className="w-4/6 relative">
                      <TextAreaField
                        type="text"
                        name="description"
                        label=" What does your business/product do?"
                        rows={4}
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        autoComplete="description"
                        placeholder="describe your business/product"
                        error={formik.errors.description}
                      />
                    </div>
                  </Form>
                </div>
              </div>

              <div className="border-[#b1b0b0] col-span-4 my-10 border-b w-full" />
              {/* Founders */}
              <div className="md:flex">
                <div className="pl-3 w-2/6">
                  <h2 className="text-shark-900 text-2xl">Founders</h2>
                  <p className="py-1 text-shark-400 text-nab">
                    Fill information related to the founder
                  </p>
                </div>

                <Form className="mt-1 pl-3 w-4/6">
                  <div className="md:flex md:gap-x-10">
                    <div className="w-3/5 relative">
                      <TextField
                        type="text"
                        required
                        name="firstName"
                        label="First Name"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        autoComplete="firstName"
                        placeholder="First name"
                        error={formik.errors.firstName}
                      />
                    </div>
                    <div className="w-3/5 relative">
                      <TextField
                        type="text"
                        name="lastName"
                        label="Last Name"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        autoComplete="lastName"
                        placeholder="Last name"
                        error={formik.errors.lastName}
                      />
                    </div>
                  </div>
                  <div className="pt-3 md:flex md:gap-x-10">
                    <div className="w-3/5 relative">
                      <TextField
                        type="email"
                        name="founder_email"
                        label="Email"
                        onChange={formik.handleChange}
                        value={formik.values.founder_email}
                        autoComplete="founder_email"
                        required
                        placeholder="yourEmail@ex.com"
                        error={formik.errors.founder_email}
                      />
                    </div>
                    <div className="w-3/5 relative">
                      <TextField
                        type="text"
                        name="position"
                        label="Position"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.position}
                        autoComplete="position"
                        placeholder="CEO"
                        error={formik.errors.position}
                      />
                    </div>
                  </div>

                  <div className="py-3 w-4/6 relative">
                    <TextAreaField
                      type="text"
                      name="founder_bio"
                      label="Bio"
                      required
                      rows={4}
                      onChange={formik.handleChange}
                      value={formik.values.founder_bio}
                      autoComplete="founder_bio"
                      error={formik.errors.founder_bio}
                      placeholder="Describe yourself"
                    />
                  </div>
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
                        <p className="text-tango-500 text-nab font-bold">
                          Login
                        </p>
                      </a>
                    </NextLink>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
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
