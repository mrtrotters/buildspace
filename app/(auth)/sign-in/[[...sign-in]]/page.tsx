import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";


export default function Page() {
        return (
                
                <>
                <div className="text-white">
                        <Suspense fallback={<p>Loading search…</p>}>
                                <SignIn/>
                        </Suspense>
                </div>
                </>
                
                
        )
        

}