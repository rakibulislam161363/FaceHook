import Loginform from "../component/auth/loginform";
import { Link } from "react-router-dom";
import AuthIllaustration from "../assets/images/auth_illustration.png";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#17181C] py-8">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
            <div>
            <img
              className="mb-12 max-w-full"
              src={AuthIllaustration}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
              <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          {/* login form */}
          <div className="card">
            <Loginform />
          
            <div className="py-4 lg:py-6">
              <p className="text-center text-xs gap-2 text-amber-300 lg:text-sm">
                Don’t have account?
                <Link to={"/registation"}
                className="text-white transition-all hover:text-lwsGreen hover:underline ml-2" >
                   Create New
                </Link>
              </p>
            </div>
          </div>
          </div>
        </div>
    </main>
  );
}
