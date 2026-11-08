import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";


export default function Page() {
        return (<>
                <div className="text-white">
                        <Suspense fallback={<p>Loading search…</p>}>
                                <SignUp />
                        </Suspense>
                </div>
        </>
        )
}