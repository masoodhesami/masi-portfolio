import Navbar from "./Navbar";

export default function Footer() {
    return (
        <main>
            <div className="flex justify-between">
                <div className="text-slate-400 mt-7 ml-4 text-sm">Made by Hesami © 2022 </div>
                <div><Navbar /></div>
            </div>
        </main>
    )
}