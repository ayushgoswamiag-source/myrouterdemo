import React from 'react';
import { useForm } from 'react-hook-form';

function Registration() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Registration</h1>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    Enter UserName:
                    <input
                        placeholder="Enter Your Name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p>Name is required</p>}
                </div>

                <div>
                    Enter Email id:
                    <input
                        placeholder="Enter Your Email"
                        {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />
                    {errors.email && <p>Email is required</p>}
                    {errors.email && errors.email.type === "pattern" && <p>Invalid email format</p>}
                </div>

                <div>
                    Enter Password:
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        {...register("password", { required: true, minLength: 6 })}
                
                    />
                    {errors.password && <p>Password is required</p>}
                    {errors.password && errors.password.type === "minLength" && <p>Password must be at least 6 characters long</p>}
                </div>

                <div>
                    Enter Phone:
                    <input
                        placeholder="Enter Your Phone"
                        {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
                    />
                    {errors.phone && <p>Phone is required</p>}
                    {errors.phone && errors.phone.type === "pattern" && <p>Invalid phone format</p>}
                </div>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Registration;