import Button from "@/components/common/button";
import Card from "@/components/common/card";
import DoubleChevron from "@/components/icons/double-chevron-icon";
import { SMARTRE_TOKEN_KEY } from "@/constants/keys";
import SignUpForm from "@/features/sign-up/sign-up-form";
import fetcher from "@/utils/fetcher";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC, HTMLInputTypeAttribute, ReactNode } from "react";

export default async function Page() {
    return (
        <main className="grid lg:grid-cols-2 gap-4 h-screen">
            <div className="lg:ml-12 mx-6 flex flex-col gap-10 items-center justify-center">
                <div className="">
                    <Image
                        alt="Circles Title Logo"
                        src={"/images/circles-title-logo.svg"}
                        width={155.6}
                        height={48}
                    />
                </div>
                <Card className="w-full max-w-[500px] text-CoreBrand-SmartreNavy">
                    <SignUpForm />
                </Card>

                <div className="">
                    <Image
                        alt="Smartre Logo"
                        src={"/images/smartre-logo.svg"}
                        width={164}
                        height={32}
                    />
                </div>
            </div>
            <div className="bg-CoreBrand-SmartreNavy relative overflow-hidden hidden lg:block">
                <Image
                    alt="Background image"
                    src={"/images/auth-image.png"}
                    fill
                    className="object-cover"
                />
                <div
                    className="bg-CoreBrand-SmartreNavy absolute top-[75%] left-0 right-0 bottom-0 h-full"
                    style={{ transform: "skewY(-20deg)" }}
                />
                <div
                    className="bg-CoreBrand-BrightBlue absolute top-[85%] left-0 right-0 bottom-0 h-full"
                    style={{ transform: "skewY(20deg)" }}
                />
            </div>
        </main>
    );
}

function encrypt(arg0: { userId: any; expiresAt: Date }) {
    throw new Error("Function not implemented.");
}
// root page is the dashboard
