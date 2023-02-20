import React from "react";

const Login = () => {
    return (
        <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://assets.materialup.com/uploads/5e6cd574-dd41-4e23-9e55-a593db7f01e8/preview.jpg"
                                className="w-full"
                                alt="Phone"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form>
                                <h1 className="w-full mb-3 text-start font-bold  text-3xl">
                                    Login
                                </h1>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div class="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck3"
                                            checked
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            for="exampleCheck2"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a
                                        href="/"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <inpiut Submit button />
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    LogIn
                                </button>
                                <span className="container text-sm p-3 font-normal">
                                    Don't have Account?
                                    <a href="">
                                        <strong className="cursor-pointer text-blue-600 ms-1">
                                            Create a new Account
                                        </strong>
                                    </a>
                                </span>
                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                </div>
                                <div className="container flex justify-center items-center">
                                    <a
                                        //   className="py-3 text-white leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 flex justify-center items-center my-3"
                                        href="/"
                                        role="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            className="py-2 rounded-full m-2 h-14 bg-white  border-0 "
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                                            alt=""
                                        />
                                    </a>

                                    <a
                                        //   className="py-3 text-white leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 flex justify-center items-center my-3"
                                        href="/"
                                        role="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            className="py-2 rounded-full m-2 h-14 bg-white  border-0 "
                                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        //   className="py-3 text-white leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 flex justify-center items-center my-3"
                                        href="/"
                                        role="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            className="py-2 rounded-full m-2 h-14 bg-white border-0 "
                                            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Login;