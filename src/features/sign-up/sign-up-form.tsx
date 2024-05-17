import { login } from "@/actions/auth";
import Button from "@/components/common/button";
import DoubleChevron from "@/components/icons/double-chevron-icon";
import SmartreInput from "@/components/inputs/smartre-input";
import React, { FC, useActionState } from "react";

type Props = {};

const SignUpForm: FC<Props> = ({}) => {
    return (
        <div className="p-4 flex flex-col gap-4">
            <div className="">
                <p className="font-semibold text-2xl">Sign In</p>
                <p className="font-semibold text-xs">
                    Enter your details to sign into your account.
                </p>
            </div>
            <form action={login} className="flex flex-col gap-2">
                <SmartreInput
                    name="email"
                    label="Email Address"
                    placeholder="Your Email Address ..."
                />
                <SmartreInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password ..."
                />
                <Button>
                    <p>Sign in</p>
                    <DoubleChevron />
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
