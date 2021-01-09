import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUp } from "src/reducks/users/operations";
import { SignUpData } from "src/reducks/users/types";

export const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, watch } = useForm();

  const onSubmit = (data: SignUpData) => {
    dispatch(signUp(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm">
        <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">
          Name
        </label>
        <input
          id="username"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          type="text"
          name="username"
          ref={register({
            required: "Please enter an name",
          })}
        />
        {errors.password && <div className="mt-2 text-xs text-red-600">{errors.password.message}</div>}
      </div>
      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
          Email address
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="email"
            name="email"
            ref={register({
              required: "Please enter an email",
              pattern: {
                value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                message: "Not a valid email",
              },
            })}
          />
          {errors.email && <div className="mt-2 text-xs text-red-600">{errors.email.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
          Password
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="password"
            name="password"
            ref={register({
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Should have at least 6 characters",
              },
            })}
          />
          {errors.password && <div className="mt-2 text-xs text-red-600">{errors.password.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-5 text-gray-700">
          Confirm Password
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="confirmPassword"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="password"
            name="confirmPassword"
            ref={register({
              required: "Please enter a confirmPassword",
              validate: (value) => value === watch("password") || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && <div className="mt-2 text-xs text-red-600">{errors.confirmPassword.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <span className="block w-full rounded-md shadow-sm">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Sign up
          </button>
        </span>
      </div>
    </form>
  );
};
