import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { regex } from "../constants/movie";
import { useRouter } from "next/router";
//Styles
const loginStyle = `relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent`;
const formStyle = `relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14`;
const inputLabel = `inline-block w-full`;
const errorMessage = `p-1 text-[15px] font-light text-orange-500`;

const Login = () => {
	const [login, setLogin] = useState(false);
	const { user } = useAuth();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//destructure custome hook
	const { signIn, signUp } = useAuth();

	//Handle submit
	const onSubmit = async ({ email, password }) => {
		if (login) {
			await signIn(email, password);
		} else {
			await signUp(email, password);
		}
	};
	if (user) {
		router.push("/");
	}

	return (
		<div className={loginStyle}>
			<Head>
				<title>Hule-Login</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Image
				src="https://rb.gy/p2hphi"
				layout="fill"
				className="-z-10 !hidden opacity-60 sm:!inline"
				objectFit="cover"
				alt=""
			/>
			<div className="object-fit absolute left-4 top-4">
				<Image
					className="object-contain"
					src="https://links.papareact.com/ua6"
					height="100"
					width="200"
					alt=""
				/>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
				<h1 className="text-4xl font-semibold">Sign In</h1>
				<div className="space-y-4">
					<label className={inputLabel}>
						<input
							type="email"
							{...register("email", {
								required: { value: true, message: "Email field is required." },
								pattern: {
									value: regex,
									message: "Invalid email address",
								},
							})}
							placeholder="Email"
							className="input"
							autoComplete="off"
						/>
						<p className={errorMessage}>{errors.email?.message}</p>
					</label>
					<label className={inputLabel}>
						<input
							type="password"
							{...register("password", {
								required: { value: true, message: "Password is required" },
							})}
							placeholder="Password"
							className="input"
						/>
						<p className={errorMessage}>{errors.password?.message}</p>
					</label>
				</div>
				<button
					className="w-full rounded bg-[#651fdd] py-3 font-semibold hover:scale-105 hover:bg-[#7c3aed]"
					type="submit"
					onClick={() => setLogin(true)}
				>
					Sign In
				</button>
				<div className="text-[gray]">
					New to Hule-Cinema?{" "}
					<button
						className="text-[white] hover:underline"
						onClick={() => setLogin(false)}
					>
						Sign up{" "}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
